import jsPDF from "jspdf";
import { saveAs } from "file-saver";

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

  // Add custom CSS and borders
  pdf.setLineWidth(0.5);
  pdf.line(20, 45, 190, 45);
  pdf.line(20, 145, 190, 145);
  pdf.line(20, 195, 190, 195);

  pdf.setFontSize(18);
  pdf.text("Contact Information", 20, 60);

  pdf.setFontSize(14);
  pdf.text(`About: ${about}`, 20, 70, {
    maxWidth: 170,
    align: "left",
    wordWrap: "linebreak",
  });
  //pdf.text(`Name: ${name}`, 20, 80);
  pdf.text(`Email: ${email}`, 20, 90);
  pdf.text(`Phone: ${phone}`, 20, 100);
  pdf.text(`Age: ${age}`, 20, 110);

  pdf.text(`Hometown: ${hometown}`, 20, 120);
  pdf.text(`LinkedIn: ${linkedin}`, 20, 130);
  pdf.text(`Github: ${github}`, 20, 140);
    // Skills section
    pdf.setFontSize(18);
    pdf.text("Skills", 20, 160);

  pdf.setFontSize(14);
  pdf.text(`${skills} `, 20, 170, {
    maxWidth: 170,
    align: "left",
    wordWrap: "linebreak",
  });





  // Work History section map over jobs array
  pdf.setFontSize(18);
  pdf.text("Work History", 20, 215);

  jobs.forEach((job, index) => {
    pdf.setFontSize(14);
    pdf.text(`${job.job} at ${job.company}`, 20, 225 + index * 80);
    pdf.setFontSize(12);
    pdf.text(`${job.startDate} - ${job.endDate}`, 20, 230 + index * 80);
    pdf.text(`${job.jobDescription}`, 20, 235 + index * 80, {
      maxWidth: 170,
      align: "left",
      wordWrap: "linebreak",
    });
  });

  // Customize the rest of the CV content based on your requirements
  // Add more content as needed

  // Save the PDF as a Blob
  const pdfBlob = pdf.output("blob");

  // Trigger the file download
  saveAs(pdfBlob, `${name}-cv.pdf`);
};

export default handleGeneratePDF;