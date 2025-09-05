'use client';

import { useState } from 'react';
import ShellLayout from '@/components/layout/ShellLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Report, ReportFormData } from '@/types';
import { mockReports, formatDate } from '@/lib/data';
import { FileText, Download, Clock, CheckCircle, XCircle, Plus } from 'lucide-react';

export default function ReportesPage() {
  const [reports] = useState<Report[]>(mockReports);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ReportFormData>({
    title: '',
    type: 'exportaciones',
    period: '',
    filters: {}
  });

// SEO manejado en layout

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-yellow-400" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-400" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'processing':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'failed':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Aquí se enviaría el formulario a la API
    console.log('Creating report:', formData);
    setShowForm(false);
    setFormData({
      title: '',
      type: 'exportaciones',
      period: '',
      filters: {}
    });
    setIsSubmitting(false);
  };

  return (
    <ShellLayout>
      <div className="space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Reportes</h1>
            <p className="text-muted-foreground">
              Genera y gestiona reportes de comercio exterior
            </p>
          </div>
          <Button 
            onClick={() => setShowForm(true)} 
            className="flex items-center space-x-2"
            aria-label="Crear nuevo reporte"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            <span>Nuevo Reporte</span>
          </Button>
        </header>

        {/* Form Modal */}
        {showForm && (
          <Card role="dialog" aria-labelledby="form-title" aria-modal="true">
            <CardHeader>
              <CardTitle id="form-title">Crear Nuevo Reporte</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="title">Título del Reporte</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Ej: Reporte Mensual Exportaciones"
                      required
                      aria-describedby="title-help"
                    />
                    <p id="title-help" className="text-sm text-muted-foreground mt-1">
                      Ingresa un título descriptivo para tu reporte
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="type">Tipo de Reporte</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) => setFormData({ ...formData, type: value as ReportFormData['type'] })}
                    >
                      <SelectTrigger aria-describedby="type-help">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="exportaciones">Exportaciones</SelectItem>
                        <SelectItem value="importaciones">Importaciones</SelectItem>
                        <SelectItem value="saldo">Saldo Comercial</SelectItem>
                        <SelectItem value="productos">Productos</SelectItem>
                        <SelectItem value="paises">Países</SelectItem>
                      </SelectContent>
                    </Select>
                    <p id="type-help" className="text-sm text-muted-foreground mt-1">
                      Elige el tipo de datos que quieres analizar
                    </p>
                  </div>
                </div>
                <div>
                  <Label htmlFor="period">Período</Label>
                  <Input
                    id="period"
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    placeholder="Ej: Diciembre 2024"
                    required
                    aria-describedby="period-help"
                  />
                  <p id="period-help" className="text-sm text-muted-foreground mt-1">
                    Especifica el período de tiempo para el reporte
                  </p>
                </div>
                <div>
                  <Label htmlFor="description">Descripción (Opcional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Descripción adicional del reporte..."
                    rows={3}
                  />
                </div>
                <div className="flex justify-end space-x-2" role="group" aria-label="Acciones del formulario">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    disabled={isSubmitting}
                    aria-label="Cancelar creación de reporte"
                  >
                    Cancelar
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? "Creando reporte, por favor espera" : "Crear nuevo reporte"}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" aria-hidden="true" />
                        <span>Creando...</span>
                      </>
                    ) : (
                      'Crear Reporte'
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Reports List */}
        <section aria-label="Lista de reportes generados">
          <div className="grid grid-cols-1 gap-4" role="list">
            {reports.map((report) => (
              <Card key={report.id} className="group/report hover:shadow-lg hover:shadow-primary/5 transition-all duration-200" role="listitem">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover/report:bg-primary/20 group-hover/report:scale-110 transition-all duration-200" aria-hidden="true">
                        <FileText className="h-5 w-5 text-primary group-hover/report:text-primary/80" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground group-hover/report:text-primary transition-colors duration-200">{report.title}</h3>
                        <p className="text-sm text-muted-foreground group-hover/report:text-foreground transition-colors duration-200">
                          {report.period} • {formatDate(report.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={`${getStatusColor(report.status)} group-hover/report:scale-105 transition-all duration-200`} aria-label={`Estado: ${report.status}`}>
                        {getStatusIcon(report.status)}
                        <span className="ml-1 capitalize">{report.status}</span>
                      </Badge>
                      {report.status === 'completed' && report.downloadUrl && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="group-hover/report:bg-primary group-hover/report:text-primary-foreground transition-all duration-200"
                          aria-label={`Descargar reporte: ${report.title}`}
                        >
                          <Download className="h-4 w-4 mr-2 group-hover/report:animate-bounce" aria-hidden="true" />
                          <span>Descargar</span>
                        </Button>
                      )}
                    </div>
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        </section>
      </div>
    </ShellLayout>
  );
}
