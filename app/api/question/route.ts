import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const questions = await prisma.question.findMany({
      include: {
        Option: true, // options 테이블과의 관계를 포함하여 데이터를 가져옵니다
      },
    });
    return NextResponse.json(questions);
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // 데이터베이스 연결을 닫습니다.
  }
}