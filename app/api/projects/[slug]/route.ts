import { NextResponse, NextRequest } from 'next/server';
import { projects } from '@/lib/data';

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
): Promise<NextResponse> {
  const { slug } = await context.params as { slug: string };
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    console.log('Project not found for slug:', slug);
    return new NextResponse('Project not found', { status: 404 });
  }

  return NextResponse.json(project);
}