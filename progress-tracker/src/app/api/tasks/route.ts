import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
    const tasks = await prisma.tasks.findMany({
        orderBy: { task_timestamp: 'desc' }
    })

    return NextResponse.json(tasks)
}