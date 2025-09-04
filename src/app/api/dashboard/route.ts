import { NextResponse } from 'next/server';
import { mockDashboardData } from '@/lib/data';
import { ApiResponse, DashboardData } from '@/types';

export async function GET(): Promise<NextResponse<ApiResponse<DashboardData>>> {
  try {
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json({
      success: true,
      data: mockDashboardData,
      message: 'Dashboard data retrieved successfully'
    });
  } catch {
    return NextResponse.json({
      success: false,
      data: {} as DashboardData,
      error: 'Failed to fetch dashboard data'
    }, { status: 500 });
  }
}
