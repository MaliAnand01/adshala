// newsletter / route

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { google } from 'googleapis';

// ─── Google Sheets ────────────────────────────────────────────────────────────
async function appendToSheet(data) {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const row = [
        new Date().toISOString().split("T")[0], // Date
        data.email,                             // Email
    ];

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Newsletter!A:B', // Make sure you have a tab named "Newsletter" in your sheet
        valueInputOption: 'USER_ENTERED',
        requestBody: { values: [row] },
    });
}

// ─── MongoDB ──────────────────────────────────────────────────────────────────
import mongoose from "mongoose";

async function saveToMongo(data) {
    await clientPromise();

    await mongoose.connection.collection("newsletter").insertOne({
        email: data.email,
        createdAt: new Date(),
    });
}

// ─── Handler ──────────────────────────────────────────────────────────────────
export async function POST(req) {
    try {
        const data = await req.json();
        const { email } = data;
        if (!email) {
            return NextResponse.json({ error: 'Missing required field: email' }, { status: 400 });
        }

        const [mongoResult, sheetResult] = await Promise.allSettled([
            saveToMongo(data),
            appendToSheet(data),
        ]);

        // Log failures without blocking response
        if (mongoResult.status === 'rejected')
            console.error('[Newsletter] MongoDB failed:', mongoResult.reason);
        if (sheetResult.status === 'rejected')
            console.error('[Newsletter] Google Sheets failed:', sheetResult.reason);

        // Only hard-fail if MongoDB failed (primary store)
        if (mongoResult.status === 'rejected') {
            return NextResponse.json({ error: 'Failed to save newsletter subscription' }, { status: 500 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error('[Newsletter] Unexpected error:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}