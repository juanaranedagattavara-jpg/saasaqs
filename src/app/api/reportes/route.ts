import { NextRequest, NextResponse } from 'next/server';
import { mockReports } from '@/lib/data';
import { ApiResponse, Report, ReportFormData } from '@/types';

export async function GET(): Promise<NextResponse<ApiResponse<Report[]>>> {
  try {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return NextResponse.json({
      success: true,
      data: mockReports,
      message: 'Reports retrieved successfully'
    });
  } catch {
    return NextResponse.json({
      success: false,
      data: [],
      error: 'Failed to fetch reports'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse<Report>>> {
  try {
    const body: ReportFormData = await request.json();
    
    // Validar datos del formulario
    if (!body.title || !body.type || !body.period) {
      return NextResponse.json({
        success: false,
        data: {} as Report,
        error: 'Missing required fields'
      }, { status: 400 });
    }
    
    // Simular procesamiento
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Crear nuevo reporte
    const newReport: Report = {
      id: Date.now().toString(),
      title: body.title,
      type: body.type,
      period: body.period,
      createdAt: new Date().toISOString(),
      status: 'processing'
    };
    
    return NextResponse.json({
      success: true,
      data: newReport,
      message: 'Report created successfully'
    });
  } catch {
    return NextResponse.json({
      success: false,
      data: {} as Report,
      error: 'Failed to create report'
    }, { status: 500 });
  }
}
