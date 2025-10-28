import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import type { GenerateReport } from "@/types/types";
import Roboto from '@/shared/fonts/Roboto-Regular'


export const generate = ({ rep, name, doctorCount, allLength }: GenerateReport) => {
  const pdfDoc = new jsPDF();

  // Добавляем шрифт
  pdfDoc.addFileToVFS("Roboto-Regular.ttf", Roboto);
  pdfDoc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
  pdfDoc.setFont("Roboto", "normal");

  pdfDoc.setFontSize(14);
  pdfDoc.text(`Принимающий врач: ${name === "" ? "все врачи" : name}`, 10, 10);
  pdfDoc.text(
    `${name !== "" ? `Итого принято врачом: ${doctorCount}` : ""}`,
    10,
    20
  );
  pdfDoc.text(`Итого принято по поликлинике: ${allLength}`, 10, 30);

  const columns = [
    "Patient name",
    "Diagnos",
    "Cost",
    "Discount patient",
    "Payed",
  ];

  const rows = rep.map((report) => [
    report.patientFIO,
    report.diagnose,
    `${report.cost} руб.`,
   `${report.discount}%`,
    report.cost == 0 ? "Бесплатно" : 0,
  ]);

  autoTable(pdfDoc, {
    theme: "grid",
    headStyles: { fontSize: 10 },
    bodyStyles: { fontSize: 8, fontStyle: "normal" },
    head: [columns],
    body: rows,
    startY: 40,
    styles: {
      font: "Roboto",
    },
  });

  pdfDoc.save("PoliclinicReport.pdf");
};
