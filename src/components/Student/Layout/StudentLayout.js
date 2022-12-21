import React from 'react';
import  { useState} from 'react';
import axios from 'axios';



export default function Student() {

  const [file, setFile] = useState('')
  const [message, setMessage] = useState('');
  const[check,setCheck]=useState()
  console.log(check,"checkvalue")


  console.log(file,"filedata")

  function handleChange(event) {
    setFile(event.target.files[0])
  }




  function handleChangefolder(event) {
    setMessage(event.target.value)
  }
  
  
  
  
  const a = file.name
  console.log(a,typeof(a),"valueofa")

//  const formData1= {
//     "__metadata": {
//       "type": "SP.Folder"
//     },
//     "ServerRelativeUrl": "https://indusschool.sharepoint.com/sites/testing1/Shared%20Documents/infomeric"
//   }

function base64ToArrayBuffer(binaryString) {
  // const binaryString = window.atob(base64); // Comment this if not using base64
  const bytes = new Uint8Array(binaryString.length);
  return bytes.map((byte, i) => binaryString.charCodeAt(i));
}
    


  let formData = new FormData();
formData.append('file', file);



// -------------------------------------------------------fileupload--------------------------------------------------------------------
  const fileupload = async() => {

    try {
      let userData = await axios({
        method: "post",
        url: "https://indusschool.sharepoint.com/sites/testing1/_api/web/GetFolderByServerRelativeUrl('/sites/testing1/Shared Documents/Document')/Files/add(url='" + file.name + "',overwrite=true)",
        data: formData,
        headers: {
          'Content-Type': 'application/json;odata=verbose',
          'Content-Type': 'multipart/form-data',

          'Accept': 'application/json;odata=verbose',
          'X-RequestDigest': '0xAC7635D8AACC01B85B0BB943B709878B0569E0FFA72B4404ED169FC406919403AD36885D3854714A4087F98B505FC8EE174466A9F5ADE6588AA3651749C5850B',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaW5kdXNzY2hvb2wuc2hhcmVwb2ludC5jb21ANDQ2ZGQxNGUtMzdjMi00ZGRlLTkyMzQtYjUxYjYzMGEzM2VmIiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDQ0NmRkMTRlLTM3YzItNGRkZS05MjM0LWI1MWI2MzBhMzNlZiIsImlhdCI6MTY3MTUyMzYxNiwibmJmIjoxNjcxNTIzNjE2LCJleHAiOjE2NzE2MTAzMTYsImlkZW50aXR5cHJvdmlkZXIiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBANDQ2ZGQxNGUtMzdjMi00ZGRlLTkyMzQtYjUxYjYzMGEzM2VmIiwibmFtZWlkIjoiN2JiYjAwOGYtOTJmNC00ZDU2LTg5OGQtZDdkMGFkMzU3ZDE5QDQ0NmRkMTRlLTM3YzItNGRkZS05MjM0LWI1MWI2MzBhMzNlZiIsIm9pZCI6IjMyYTZlOTQzLTMxN2UtNDVkZS1hMjc3LWNiNjA2OGU2OGEwNSIsInN1YiI6IjMyYTZlOTQzLTMxN2UtNDVkZS1hMjc3LWNiNjA2OGU2OGEwNSIsInRydXN0ZWRmb3JkZWxlZ2F0aW9uIjoiZmFsc2UifQ.gxNY8QM4-2mP5QFhFN3VbU4xVS1WekkINwNWBOTtdGGJbFdWivb11Ksn03RX2ae6TUhppLvhfZCdHJO0IezdfWc27sDjEzg-YC0LEVtZj4QjpzVQjzGmBm2Sf46fbUlo18UD2B0QYcK4abjIa53KiRzm4qbv0bc-cWjZ1SssA7mmL3RFJgtuQ7ru6oqgK9T6UIQW8yG0_VFLyiUQpvUDXXJz6VlJt3UpYSkdXt5xv22lpUGLbQJAWK8xordjs5i-1Xqss072om54G63sYfmtRtBcyiTZNlyzSSzatNZN0lteF6yo8_Y4417grnVs2CUWO97eaKZdKQsIxenW2G_MoQ'
        }
      })
  
  
    } catch (error) {
      console.log(error);
      toast.error('Wrong Credentials OR Roles are not Defined',
      {position: toast.POSITION.BOTTOM_RIGHT})  
      
    }
   
  }



  // --------------------------------------------------downloadfile----------------------------------------------------------------
  const downloadfile =  async() =>{


    try {
      let userData = await axios({
        method: "get",
        url: "https://indusschool.sharepoint.com/sites/testing1/_api/web/GetFileByServerRelativeUrl('/sites/testing1/Shared Documents/Document/infomerics.txt')/$value",
        // url: "https://indusschool.sharepoint.com/sites/testing1/_api/web/GetFolderByServerRelativeUrl(decodeurl='/sites/testing1/Shared Documents/Document/septbill.pdf')/$value",
        // https://abc.sharepoint.com/sites/s01/_api/Web/GetFileByServerRelativePath(decodedurl='/sites/s01/Shared%20Documents/file-example_PDF_500_kB.pdf')/$value


        headers: {
          binaryStringResponseBody: true,
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaW5kdXNzY2hvb2wuc2hhcmVwb2ludC5jb21ANDQ2ZGQxNGUtMzdjMi00ZGRlLTkyMzQtYjUxYjYzMGEzM2VmIiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDQ0NmRkMTRlLTM3YzItNGRkZS05MjM0LWI1MWI2MzBhMzNlZiIsImlhdCI6MTY3MTUyMzYxNiwibmJmIjoxNjcxNTIzNjE2LCJleHAiOjE2NzE2MTAzMTYsImlkZW50aXR5cHJvdmlkZXIiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBANDQ2ZGQxNGUtMzdjMi00ZGRlLTkyMzQtYjUxYjYzMGEzM2VmIiwibmFtZWlkIjoiN2JiYjAwOGYtOTJmNC00ZDU2LTg5OGQtZDdkMGFkMzU3ZDE5QDQ0NmRkMTRlLTM3YzItNGRkZS05MjM0LWI1MWI2MzBhMzNlZiIsIm9pZCI6IjMyYTZlOTQzLTMxN2UtNDVkZS1hMjc3LWNiNjA2OGU2OGEwNSIsInN1YiI6IjMyYTZlOTQzLTMxN2UtNDVkZS1hMjc3LWNiNjA2OGU2OGEwNSIsInRydXN0ZWRmb3JkZWxlZ2F0aW9uIjoiZmFsc2UifQ.gxNY8QM4-2mP5QFhFN3VbU4xVS1WekkINwNWBOTtdGGJbFdWivb11Ksn03RX2ae6TUhppLvhfZCdHJO0IezdfWc27sDjEzg-YC0LEVtZj4QjpzVQjzGmBm2Sf46fbUlo18UD2B0QYcK4abjIa53KiRzm4qbv0bc-cWjZ1SssA7mmL3RFJgtuQ7ru6oqgK9T6UIQW8yG0_VFLyiUQpvUDXXJz6VlJt3UpYSkdXt5xv22lpUGLbQJAWK8xordjs5i-1Xqss072om54G63sYfmtRtBcyiTZNlyzSSzatNZN0lteF6yo8_Y4417grnVs2CUWO97eaKZdKQsIxenW2G_MoQ',

        },
        encoding: null

      })
      console.log(userData,"userkadata")

      // const arrayBuffer = base64ToArrayBuffer(userData.data);



      // var blob1 = new Blob([arrayBuffer], { type: 'pdf' });
      // console.log(blob1,"blobdata")
      // var url = URL.createObjectURL(blob1);
      // window.open(url);

      // if(userData.data !==undefined){

      // const fileURL = window.URL.createObjectURL(userData.data);
      // // Setting various property values
      // let alink = document.createElement('a');
      // alink.href = fileURL;
      // alink.download = 'SamplePDF.pdf';
      // alink.click();

      // }


//       var blob = new Blob([userData.data], { type: 'application/pdf' });
//       console.log(blob,"blobdata")

// //   var bytes = new Uint8Array(userData); // pass your byte response to this constructor

// //   console.log(userData,"bytesdatadee")

var blob=new Blob([userData.data], {type: "docx"});// change resultByte to bytes
console.log(blob,"blobdata")




var link=document.createElement('a');
console.log(link,"linkdatadata")

link.href=window.URL.createObjectURL(blob);


link.download="test.docx";
link.click();
  
    } catch (error) {
      console.log(error);
      
    }

  }


  // ---------------------------------------------------create folder------------------------------------------------------

  const createfolderapi = async() => {

    

    try {
      let userData = await axios({
        method: "post",
        url: "https://indusschool.sharepoint.com/sites/testing1/_api/web/folders",
        data: {
          "__metadata": {
            "type": "SP.Folder"
          },
          "ServerRelativeUrl": "https://indusschool.sharepoint.com/sites/testing1/Shared%20Documents/"+ message
        },
        headers: {
          'Content-Type': 'application/json;odata=verbose',
          // 'Content-Type': 'multipart/form-data',

          'Accept': 'application/json;odata=verbose',
          'X-RequestDigest': '0xAC7635D8AACC01B85B0BB943B709878B0569E0FFA72B4404ED169FC406919403AD36885D3854714A4087F98B505FC8EE174466A9F5ADE6588AA3651749C5850B',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaW5kdXNzY2hvb2wuc2hhcmVwb2ludC5jb21ANDQ2ZGQxNGUtMzdjMi00ZGRlLTkyMzQtYjUxYjYzMGEzM2VmIiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDQ0NmRkMTRlLTM3YzItNGRkZS05MjM0LWI1MWI2MzBhMzNlZiIsImlhdCI6MTY3MTUyMzYxNiwibmJmIjoxNjcxNTIzNjE2LCJleHAiOjE2NzE2MTAzMTYsImlkZW50aXR5cHJvdmlkZXIiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBANDQ2ZGQxNGUtMzdjMi00ZGRlLTkyMzQtYjUxYjYzMGEzM2VmIiwibmFtZWlkIjoiN2JiYjAwOGYtOTJmNC00ZDU2LTg5OGQtZDdkMGFkMzU3ZDE5QDQ0NmRkMTRlLTM3YzItNGRkZS05MjM0LWI1MWI2MzBhMzNlZiIsIm9pZCI6IjMyYTZlOTQzLTMxN2UtNDVkZS1hMjc3LWNiNjA2OGU2OGEwNSIsInN1YiI6IjMyYTZlOTQzLTMxN2UtNDVkZS1hMjc3LWNiNjA2OGU2OGEwNSIsInRydXN0ZWRmb3JkZWxlZ2F0aW9uIjoiZmFsc2UifQ.gxNY8QM4-2mP5QFhFN3VbU4xVS1WekkINwNWBOTtdGGJbFdWivb11Ksn03RX2ae6TUhppLvhfZCdHJO0IezdfWc27sDjEzg-YC0LEVtZj4QjpzVQjzGmBm2Sf46fbUlo18UD2B0QYcK4abjIa53KiRzm4qbv0bc-cWjZ1SssA7mmL3RFJgtuQ7ru6oqgK9T6UIQW8yG0_VFLyiUQpvUDXXJz6VlJt3UpYSkdXt5xv22lpUGLbQJAWK8xordjs5i-1Xqss072om54G63sYfmtRtBcyiTZNlyzSSzatNZN0lteF6yo8_Y4417grnVs2CUWO97eaKZdKQsIxenW2G_MoQ'
        }
      })


      console.log(userData,"userkadata")
  
  
    } catch (error) {
      console.log(error);
      toast.error('Wrong Credentials OR Roles are not Defined',
      {position: toast.POSITION.BOTTOM_RIGHT})  
      
    }
   
  }



  // ----------------------------------------------------------------check api if folder exist or not----------------------------------


  const checkfolderexist = async() => {

    try {
      let checkf = await axios({
        method: "get",
        url: "https://indusschool.sharepoint.com/sites/testing1/_api/web/GetFolderByServerRelativeUrl('Shared Documents/" + message+ "')/Exists",
        
        headers: {
          // 'Content-Type': 'application/json;odata=verbose',
          'Accept': 'application/json;odata=verbose',
          'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvaW5kdXNzY2hvb2wuc2hhcmVwb2ludC5jb21ANDQ2ZGQxNGUtMzdjMi00ZGRlLTkyMzQtYjUxYjYzMGEzM2VmIiwiaXNzIjoiMDAwMDAwMDEtMDAwMC0wMDAwLWMwMDAtMDAwMDAwMDAwMDAwQDQ0NmRkMTRlLTM3YzItNGRkZS05MjM0LWI1MWI2MzBhMzNlZiIsImlhdCI6MTY3MTE3MjY3NiwibmJmIjoxNjcxMTcyNjc2LCJleHAiOjE2NzEyNTkzNzYsImlkZW50aXR5cHJvdmlkZXIiOiIwMDAwMDAwMS0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDBANDQ2ZGQxNGUtMzdjMi00ZGRlLTkyMzQtYjUxYjYzMGEzM2VmIiwibmFtZWlkIjoiN2JiYjAwOGYtOTJmNC00ZDU2LTg5OGQtZDdkMGFkMzU3ZDE5QDQ0NmRkMTRlLTM3YzItNGRkZS05MjM0LWI1MWI2MzBhMzNlZiIsIm9pZCI6IjMyYTZlOTQzLTMxN2UtNDVkZS1hMjc3LWNiNjA2OGU2OGEwNSIsInN1YiI6IjMyYTZlOTQzLTMxN2UtNDVkZS1hMjc3LWNiNjA2OGU2OGEwNSIsInRydXN0ZWRmb3JkZWxlZ2F0aW9uIjoiZmFsc2UifQ.RMlPovbMY3u2W22Y5_T1xcoMC-jzLhd4fsjf5gNjg2Ntd-5eM24EdNwqeu7WZHVLHBLjqPrmCWJv96Zhbq3OjDX2pIofjJwDh2UTMGRcOwM_YXLYdW_uK4MViDpEwIXQT3Fz6-0KpvzLzKTy3ZHun8l4gl-7PUQwnUVNCpEEX-Flh6PtSAFQ7zTdrSKpe0ZOyvANmitx7hOhlIWE86XICNmjRgcqMdQfAZpBFcmIwGOFUOZf4ItgFV_l06WdbkTql8g-UiZ5VO395h44BZ81sQ5Agfgg94b7bjVnfDD5D0PeuxYAHdxYWydaxVGnwPyzvgfhwXLmeWua5e24AU7pEg'
          // 'X-RequestDigest': '0xAC7635D8AACC01B85B0BB943B709878B0569E0FFA72B4404ED169FC406919403AD36885D3854714A4087F98B505FC8EE174466A9F5ADE6588AA3651749C5850B',
        }
      })

      setCheck(checkf.data.d.Exists)
      // if(check==false){
      // createfolderapi()
      // }
  
    } catch (error) {
      console.log(error);
      toast.error('Folder Already Exists',
      {position: toast.POSITION.BOTTOM_RIGHT})  
      
    }
   
  }


































  return (
    <>
    <div>
      

      <p>Dashboard</p>
      
          <h1>React File Upload</h1>
          <input type="file"
           onChange={handleChange}
            />
          <button onClick={fileupload} type="submit">Upload</button>
          <br/>
          <br/>
          <br/>

          <input
        type="text"
        id="message"
        name="message"
        onChange={handleChangefolder}
 />
           <button onClick={createfolderapi} type="submit">Create Folder</button>




         
        
    </div>

          <br/>
          <br/>
          <br/>
<button onClick={downloadfile} type="submit">Download</button>
</>

    );
}

