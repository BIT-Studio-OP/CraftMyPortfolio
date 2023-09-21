import jsPDF from "jspdf";
import { saveAs } from "file-saver";
// eslint-disable-next-line no-unused-vars
const handleGeneratePDF = ({
  name,
  firstName,
  lastName,
  email,
  phone,
  age,
  hometown,
  about,
  skills,
  linkedin,
  github,
  jobs,
}) => {
  const pdf = new jsPDF();

  // Set font and style for CV content
  pdf.setFont("Helvetica");
  pdf.setFontSize(12);

  // Create CV structure
  pdf.setFontSize(24);
  pdf.text(`${firstName} ${lastName}`, 100, 30, {
    align: "center",
  });
  pdf.setFontSize(14);
  pdf.text(`Curriculum vitae`, 100, 35, {
    align: "center",
  });

  // Contact Information section
  pdf.setFontSize(18);
  pdf.text("Contact Information", 20, 40);

  pdf.setFontSize(14);
  pdf.text(`About: ${about}`, 20, 50, {
    maxWidth: 170,
    align: "left",
    wordWrap: "linebreak",
  });
  pdf.text(`Name: ${name}`, 20, 60);
  pdf.text(`Email: ${email}`, 20, 70);
  pdf.text(`Phone: ${phone}`, 20, 80);
  pdf.text(`Age: ${age}`, 20, 90);
  pdf.text(`Skills: ${skills}`, 20, 100);
  pdf.text(`Hometown: ${hometown}`, 20, 110);
  pdf.text(`LinkedIn: ${linkedin}`, 20, 120);
  pdf.text(`Github: ${github}`, 20, 130);

  // Work History section map over jobs array
  pdf.setFontSize(18);
  pdf.text("Work History", 20, 150, { align: "center" });
  jobs.forEach((job, index) => {
    pdf.setFontSize(14);
    pdf.text(`${job.job} at ${job.company}`, 20, 160 + index * 40);
    pdf.setFontSize(12);
    pdf.text(`${job.startDate} - ${job.endDate}`, 20, 165 + index * 40);
    pdf.text(`${job.jobDescription}`, 20, 170 + index * 40);
  });

  // Customize the rest of the CV content based on your requirements
  // Add more content as needed

  // Save the PDF as a Blob
  const pdfBlob = pdf.output("blob");

  // Trigger the file download
  saveAs(pdfBlob, `${name}-cv.pdf`);
};

export default handleGeneratePDF;
