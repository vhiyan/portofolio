import { jsPDF } from 'jspdf';

export const useResume = () => {
  const generateResume = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPos = 20;

    // Header - Name and Title
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Kristiawan Devianto', margin, yPos);

    yPos += 10;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('Embedded Systems Developer', margin, yPos);

    // Contact Information
    yPos += 8;
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text('Email: kristiawan.devianto@gmail.com', margin, yPos);
    yPos += 5;
    doc.text('GitHub: github.com/vhiyan', margin, yPos);
    yPos += 5;
    doc.text('LinkedIn: linkedin.com/in/kristiawan-devianto', margin, yPos);

    // Line separator
    yPos += 8;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPos, pageWidth - margin, yPos);

    // Professional Summary
    yPos += 10;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Professional Summary', margin, yPos);

    yPos += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    const summary = "Embedded Systems Developer with expertise in hardware design, microcontroller firmware development, PLC, and FPGA. Experienced in creating Linux/Windows platform services, working with Arduino, Raspberry Pi, and various communication protocols. Skilled in C/C++, Python, and JavaScript with a focus on reliable embedded systems.";
    const summaryLines = doc.splitTextToSize(summary, pageWidth - 2 * margin);
    doc.text(summaryLines, margin, yPos);
    yPos += summaryLines.length * 5 + 5;

    // Skills Section
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Technical Skills', margin, yPos);

    yPos += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);

    const skills = [
      'Languages: C/C++, Python, JavaScript',
      'Embedded Systems: Arduino, Raspberry Pi, Microcontrollers',
      'Hardware: PLC Programming, FPGA Development, Hardware Design',
      'Communication: Serial Communication, GPS & Sensor Integration',
      'Software: Node.js, OpenCV, Linux Platform Services',
      'Tools: Git, Version Control Systems'
    ];

    skills.forEach(skill => {
      doc.text('• ' + skill, margin + 5, yPos);
      yPos += 6;
    });

    // Projects Section
    yPos += 5;
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Featured Projects', margin, yPos);

    yPos += 8;
    doc.setFontSize(11);

    const projects = [
      {
        title: 'EWS Arduino',
        description: 'Early Warning System with GPS tracking, keypad input, and serial communication for device registration and data fetching.',
        tech: 'C++, Arduino, GPS, Serial Communication'
      },
      {
        title: 'Buildroot Raspi3',
        description: 'Custom Linux distribution build for Raspberry Pi 3 using Buildroot framework.',
        tech: 'Linux, Buildroot, Embedded Systems'
      },
      {
        title: 'OpenCV Test',
        description: 'Computer vision experiments and testing using OpenCV library for image processing applications.',
        tech: 'JavaScript, OpenCV, Computer Vision'
      },
      {
        title: 'Arduino Sirene',
        description: 'Arduino-based siren control system for alert and notification applications.',
        tech: 'C++, Arduino, Embedded Systems'
      }
    ];

    projects.forEach((project, index) => {
      if (yPos > 250) {
        doc.addPage();
        yPos = 20;
      }

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0, 0, 0);
      doc.text(project.title, margin, yPos);

      yPos += 6;
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      doc.setFontSize(10);
      const descLines = doc.splitTextToSize(project.description, pageWidth - 2 * margin - 5);
      doc.text(descLines, margin + 5, yPos);
      yPos += descLines.length * 5;

      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.setFont('helvetica', 'italic');
      doc.text('Technologies: ' + project.tech, margin + 5, yPos);

      yPos += 10;
      doc.setFontSize(11);
    });

    // Footer
    const footerY = doc.internal.pageSize.getHeight() - 15;
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.setFont('helvetica', 'normal');
    doc.text('Generated from portfolio website', pageWidth / 2, footerY, { align: 'center' });

    // Save the PDF
    doc.save('Kristiawan_Devianto_Resume.pdf');
  };

  return {
    generateResume
  };
};
