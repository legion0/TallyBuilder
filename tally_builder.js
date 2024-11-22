function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    const form = document.getElementById('operationReportForm');

    const formData = {
        operationName: form.operation_name.value,
        startTime: form.start_time.value,
        endTime: form.end_time.value,
        mission1Summary: form.mission1_summary.value,
        mission2Summary: form.mission2_summary.value,
        mission3Summary: form.mission3_summary.value,
        finalNotes: form.final_notes.value,
        success: form.success.value
    };

    const markdownReport = formatToMarkdown(formData);

    // Get the textarea element
    const markdownOutput = document.getElementById('markdownOutput');

    // Set the textarea's value to the generated Markdown
    markdownOutput.value = markdownReport;

    return false; // Prevent form submission
}

function formatToMarkdown(formData) {
    // Extract form data
    const {
        operationName,
        startTime,
        endTime,
        mission1Summary,
        mission2Summary,
        mission3Summary,
        finalNotes,
        success,
    } = formData;

    // Format the Markdown
    const markdown = `
  ## Operation: ${operationName}
  
  **Start Time:** ${startTime}
  **End Time:** ${endTime}
  
  ### Mission 1
  ${mission1Summary}
  
  ### Mission 2
  ${mission2Summary}
  
  ### Mission 3
  ${mission3Summary}
  
  ### Final Notes
  ${finalNotes}
  
  **Operation Result:** ${success ? 'Success' : 'Failure'}
  `;

    return markdown;
}
