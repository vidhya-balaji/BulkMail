const fileInput=document.getElementById("fileinput")
fileInput.addEventListener("change",function(event)
{
    const file=event.target.files[0];
    const reader=new FileReader()
    reader.onload=(event)=>
    {
        const arrayBuffer=event.target.result;
        const workbook=XLSX.read(arrayBuffer,{type:"array"});
        const sheetname=workbook.SheetNames[0];
        const worksheet=workbook.Sheets[sheetname];
        const emaillist=XLSX.utils.sheet_to_json(worksheet,{header:'A'});
        console.log(emaillist);
        

    }
    reader.readAsArrayBuffer(file);
    
})