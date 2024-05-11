// Define your Vue.js application
const $ = sel => document.querySelector(sel);
const GET = (url) => axios.get('/odata/v4/community' + url);

const DELETE = (url) => axios.get('/odata/v4/community' + url);
const ques = Vue.createApp({
    data() {
        return {
            list: []
        }
    },

    methods: {
        async fetch() {
            const { data } = await GET('/ques');
            this.list = data.value;
            console.log(data);  
        },
        removeUser(btn,userID) {
            console.log("Removing user with ID:", btn);
            //remove(btn)
            
            const response = fetch(`/odata/v4/community/ques(${userID})`, {
            method: 'DELETE'
            
        }).then(response => {
               
            }).catch(error => {
                console.error('Error:', error);
            });
        },
         
        
    }, 
   
    

    // Fetch data when the Vue.js application is mounted
    mounted() {
        this.fetch();
    }
}).mount('#app');
//<td class="fd-table__cell"><i class="fa fa-trash" @click="removeUser(this,user.ID)"></i></td>
  const remove = function (btn) {
   
    const row = btn.parentNode.parentNode;
    
    row.parentNode.removeChild(row);

}

var modal = document.getElementById("myModal");
    
   
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    function openModal() {
      modal.style.display = "block";
    }
    
    function closeModal() {
      modal.style.display = "none";
    }
    

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    function fetchAndLogPartnerData() {
      var xhr = new XMLHttpRequest();
      var serviceUrl = "http://localhost:8080/sap/opu/odata/sap/ZPARTNERDATA_SB/partnerdata"; // Update the URL
      xhr.open("GET", serviceUrl);
      xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                  var data = xhr.responseText;
                  console.log("Partner Data:");
                  console.log(data);
                  const parser = new DOMParser();
                  const xmlDoc = parser.parseFromString(data, 'text/xml');
                  const entries = xmlDoc.getElementsByTagName('entry');
                  console.log("doc", entries);
                  for (let i = 0; i < entries.length; i++) {
                      const entry = entries[i];
                      const content = entry.querySelector('content').textContent;
                      console.log(`Entry ${i + 1}: ${content}`);
                  }
              } else {
                  console.error("Error fetching partner data:", xhr.statusText);
              }
          }
      };
      xhr.send();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
      fetchAndLogPartnerData();
  });
  
   
    function addData() {
        var newData = document.getElementById("updateInput").value;
        console.log("New data:", newData);
        const response = fetch(`/odata/v4/community/ques`, {
            method: 'POST',
            body:JSON.stringify({
               
                "title": newData,
                
              }),
              headers: {
                "Content-type": "application/json"
              }
        });
       
        closeModal();
    }
