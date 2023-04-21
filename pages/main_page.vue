<template>
  <nav
    class="fixed shadow dark:shadow-slate-700 top-0 z-50 w-full bg-white border-b border-gray-200 dark:border-gray-700"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <h1
          class="ml-2 cursor-pointer text-lg font-extrabold md:text-xl lg:text-2xl tracking-wider truncate"
        >
          Role Alignment &amp; Development Ambition Record (RADAR) 2023
        </h1>
        <div class="flex items-center">
          <div class="flex items-center justify-center ml-3 gap-2 sm:gap-4">
            <button
              type="button"
              class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 w-8"
              aria-expanded="false"
              data-dropdown-toggle="dropdown-user"
            >
              <span class="sr-only">Open user menu</span>
              <img
                referrerpolicy="no-referrer"
                class="rounded-full"
                :src="us_photo"
                alt="user photo"
              />
            </button>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user"
              style="position: absolute; inset: 0px auto auto 0px;
       margin: 0px;
                transform: translate3d(1483.2px, 54.4px, 0px);
              "
              data-popper-placement="bottom"
            >
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  {{ us_name }}
                </p>
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                  role="none"
                >
                  {{ us_email }}
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <button
                    @click="logout()"
                    class="w-full block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <p class="text-left">Sign out</p>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <div>
    <div class="mt-14 md:p-4 p-2 flex flex-col">
      <div
        class="flex justify-between p-4 items-start gap-2 flex-col md:flex-row"
      >
        <h1 class="font-bold text-black dark:text-gray-300">
          Last Changed at:
          <span
            class="dark:text-white text-gray-500 capitalize font-semibold"
            >{{ date1 }}</span
          >
        </h1>
        <div
          class="flex xl:gap-2 font-bold md:items-end dark:text-gray-300 flex-col xl:flex-row"
        >
          <p class="capitalize">
            Total hours last 3 Months:
            <span class="dark:text-white text-gray-500 ml-auto"
            >{{totallast}} Hours</span>
          </p>
          <p class="capitalize">
            Total hours next 3 Months:
            <span class="dark:text-white text-gray-500">{{ totalnextOne + totalnextTwo }} Hours</span>
          </p>
        </div>
      </div>

      <Table1 :buttonValue="buttonValue" :table1_fill="table1_fill" :getDataFromPast="getDataFromPast" :getDate1="getDate1"></Table1>
      <Table2 :buttonValue="buttonValue" :table2_fill="table2_fill" :getDataFromPresent="getDataFromPresent" :getDate1="getDate1" ></Table2>
      <Table3 :buttonValue="buttonValue" :table3_fill="table3_fill" :getDate1="getDate1"></Table3>

      <!-- <div>
  <div class="flex p-4 items-start justify-between gap-2 text-black dark:text-white flex-col md:flex-row">
    <h1 class="text-2xl font-bold leading-5"> Past / Continuing Stage: <span class="data-table-sub-heading"> Work that you have been doing and may or may not keep doing </span>
    </h1>
  </div>

  <div class="mt-10">
    <div class="overflow-x-auto">
      <form @submit.prevent="handleEditFormSubmit">
        <table v-if="contacts.length > 0" class="w-11/12 mx-auto text-sm text-left text-gray-500 bg-gray-50 rounded-lg ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-200  ">
            <tr>
              <th scope="col" class="px-4 py-3">Work to be done</th>
              <th scope="col" class="px-4 py-3">Hours last 3 months</th>
              <th scope="col" class="px-4 py-3">Hours next 3 months</th>
              <th scope="col" class="px-4 py-3">Primary stakeholder</th>
              <th scope="col" class="px-4 py-3">Outcome</th>
              <th scope="col" class="px-4 py-3">Skills required</th>
              <th scope="col" class="px-4 py-3">Work quality</th>
              <th scope="col" class="px-4 py-3">Capability</th>
              <th scope="col" class="px-4 py-3">Interest</th>
              <th scope="col" class="px-4 py-3">Work redesign</th>
              <th scope="col" class="px-4 py-3">Comments</th>
              <th scope="col" class="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="contact in contacts" :key="contact._id">
              <template v-if="editContactId === contact._id">
                <EditableRow :editFormData="editFormData" :handleEditFormChange="handleEditFormChange"
                  :handleCancelClick="handleCancelClick" />
              </template>
              <template v-else>
                <ReadOnlyRow :contact="contact" :handleEditClick="handleEditClick"
                  :handleDeleteClick="handleDeleteClick" />
              </template>
            </template>
          </tbody>
        </table>
      </form>
      <form @submit.prevent="handleAddFormSubmit" class="flex justify-center mt-5">
        <button type="submit"
          class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <span v-if="contacts.length > 0">Add Row</span>
          <span v-else>Create New Table</span>
        </button>
      </form>
    </div>
  </div>
  </div> -->
      <div class="flex justify-center mt-20 item-center">
        <button
          type="button"
          :disabled="buttonValue2"
          @click="onsubmit()"
          :class="{'text-white bg-blue-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ' :!buttonValue2, 'text-white bg-gray-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2' :buttonValue2}"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import {
  initDropdowns,
  initFlowbite,
  initModals,
  initPopovers,
} from "flowbite";


// initialize components based on data attribute selectors
onMounted(() => {
  initDropdowns();
  initFlowbite();
  initModals();
  initPopovers();
});

const { app } = useMyRealmApp();

var us_email = app.currentUser._profile.data.email;
var us_name = app.currentUser._profile.data.name;
var us_photo = app.currentUser._profile.data.pictureUrl;
var us_id=app.currentUser.id;

 const mongo = app.currentUser?.mongoClient("mongodb-atlas");
 const collection = mongo?.db("radar").collection("users");
// const last_3 = ref([]);

// collection
//   .aggregate([{ $project: { hour_last: 1 } }])
//   .then((data) => {
//     console.log(data);
//     last_3.value= data;
//     console.log("last_3",last_3);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// functions

const totallast=ref();
const totalnextOne=ref();
const totalnextTwo=ref();
const pastTable=ref();
const getDataFromPast=(data)=>{
  pastTable.value=data;
  const allLast=pastTable.value.map(pc=>pc.hour_last);
  const sum=allLast.map(Number).reduce((accumulator,currentValue)=> accumulator + currentValue);
  totallast.value=sum;
  //console.log("pastTable.value",sum);


  const allNext=pastTable.value.map(pc=>pc.hour_next);
  const next3One=allNext.map(Number).reduce((accumulator,currentValue)=> accumulator + currentValue);
  totalnextOne.value=next3One;
  //console.log("totalnextOne.value",next3One);
}


const getDataFromPresent=(data)=>{
  pastTable.value=data;
  const allNext=pastTable.value.map(pc=>pc.hour_next);
  const  next3Two=allNext.map(Number).reduce((accumulator,currentValue)=> accumulator + currentValue);
  totalnextTwo.value=next3Two;
  //console.log("totalnextTwo.value",next3Two);
}


let buttonValue=ref(false);
let buttonValue2=ref(true);


const table1_fill=(cons)=>{
  if(cons.length > 0){
    cons.map(con =>{
      if(con.work !=="" && con.hour_last !=="" && con.hour_next !=="" && con.primary_stakeholder !=="" && con.outcome !==""  && con.skill_required !=="" && con.work_quality !=="" && con.capability !=="" && con.interest !=="" && con.work_design !==""){
        buttonValue2.value=false;
        //console.log("if",buttonValue2.value)
      }
      else{
        buttonValue2.value=true;
        //console.log("else",buttonValue2.value)
      }

    })
  }
  else{
        buttonValue2.value=true;
        //console.log("ifelse",buttonValue2.value)
      }
      //console.log(cons);

}


const table2_fill=(cons)=>{
  if(cons.length > 0){
    cons.map(con =>{
      if(con.work !==""  && con.hour_next !=="" && con.primary_stakeholder !=="" && con.outcome !==""  && con.skill_required !=="" && con.work_quality !=="" && con.capability !=="" && con.interest !=="" && con.work_design !==""){
        buttonValue2.value=false;
        //console.log("if",buttonValue2.value)
      }
      else{
        buttonValue2.value=true;
        //console.log("else",buttonValue2.value)
      }

    })
  }
  else{
        buttonValue2.value=true;
        //console.log("ifelse",buttonValue2.value)
      }
      //console.log(cons);

}


const table3_fill=(cons)=>{
  if(cons.length > 0){
    cons.map(con =>{
      if(con.work !==""  &&  con.capability !=="" && con.interest !=="" ){
        buttonValue2.value=false;
        //console.log("if",buttonValue2.value)
      }
      else{
        buttonValue2.value=true;
        //console.log("else",buttonValue2.value)
      }

    })
  }
  else{
        buttonValue2.value=true;
        //console.log("ifelse",buttonValue2.value)
      }
     // console.log(cons);

}




let date1;

const getDate1=()=>{

  let date_change = new Date();
  date1=date_change;
  //console.log("date",date1);
}

getDate1();
const logout = () => {
  app.currentUser.logOut();
  navigateTo("/");
};

// const editFormData = ref({
//   work: "",
//   h_last: "",
//   h_next: "",
//   pri_stalk: "",
//   outcome: "",
//   skill: "",
//   work_qual: "",
//   capable: "",
//   interest: "",
//   work_design: "",
//   comments: "",
// })
// const editContactId = ref(null)
// const handleEditFormChange = (event) => {
//   event.preventDefault();
//   const fieldName = event.target.getAttribute("name");
//   const fieldValue = event.target.value;
//   const newFormData = { ...editFormData._rawValue };
//   newFormData[fieldName] = fieldValue;
//   editFormData.value = newFormData
// };
// const handleAddFormSubmit = (event) => {
//   event.preventDefault();
//   const newContact = {
//     work: "",
//     hour_last: "",
//     hour_next: "",
//     primary_stakeholder: "",
//     outcome: "",
//     skill_required: "",
//     work_quality: "",
//     capability: "",
//     interest: "",
//     work_design: "",
//     comments: "",
//     user_id: app.currentUser.id,
//   };
//   collection
//     .insertOne(newContact)
//     .then((data) => {
//       console.log(data);
//       consoleData();

//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   // contacts.value = [ ...contacts.value ];
//   // const lastElement = contacts.value[contacts.value.length - 1]
//   // handleEditClick(newContact)
// };
// const handleEditFormSubmit = () => {
//   // event.preventDefault();
//   const editedContact = {
//     work: editFormData.value.work,
//     hour_last: editFormData.value.h_last,
//     hour_next: editFormData.value.h_next,
//     primary_stakeholder: editFormData.value.pri_stalk,
//     outcome: editFormData.value.outcome,
//     skill_required: editFormData.value.skill,
//     work_quality: editFormData.value.work_qual,
//     capability: editFormData.value.capable,
//     interest: editFormData.value.interest,
//     work_design: editFormData.value.work_design,
//     comments: editFormData.value.comments,
//   };
//   console.log('omg', editContactId.value);

//   collection
//     .updateOne({ _id: editContactId.value }, { $set: editedContact })
//     .then((data) => {
//       console.log(data);
//       consoleData();
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   // console.log(editedContact)
//   // const newContacts = [...contacts.value];
//   // const index = contacts.value.findIndex((contact) => contact._id === editContactId.value);
//   // console.log('index', index)
//   // newContacts[index] = editedContact;
//   // console.log('newContacts', newContacts)
//   // contacts.value = newContacts
//   editContactId.value = null;
// };
// const handleEditClick = (contact) => {
//   console.log('contact', contact)
//   editContactId.value = contact._id;
//   const formValues = {
//     id: contact._id,
//     work: contact.work,
//     h_last: contact.hour_last,
//     h_next: contact.hour_next,
//     primary_stalk: contact.primary_stakeholder,
//     outcome: contact.outcome,
//     skill: contact.skill_required,
//     work_qual: contact.work_quality,
//     capable: contact.capability,
//     interest: contact.interest,
//     work_design: contact.work_design,
//     comments: contact.comments,
//   };
//   editFormData.value = formValues;
// };
// const handleCancelClick = () => {
//   // setEditContactId(null);
//   editContactId.value = null
// };
// const handleDeleteClick = (id) => {
//   // const index = contacts.findIndex(contact => contact._id === contactId)
//   // const index = contacts.value.findIndex((contact) => contact._id === contactId);
//   // contacts.value.splice(index, 1);

//   console.log(id)
//   collection
//     .deleteOne({
//       _id: id,
//     })
//     .then((data) => {
//       console.log(data);
//       consoleData();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// const consoleData = () => {
//   collection
//     .find()
//     .then((data) => {
//       console.log(data);
//       contacts.value = data;

//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// consoleData();

// let submit = () => {
//   collection
// 			.updateOne(
// 				{ "user_id":us_id},
// 				{ $set: { form_status: "submitted",  } }
	
			
// 			)
// 			.then((data) => {
// 				console.log(data);
//         navigateTo("/submitpage");
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// };


// const emptyTable1=(id)=>{
// if(id.row.length===0){
//   console.log("table1 empty");
// }
// }

// const props = defineProps({
//   emptyTable1:Function,
// })

const onsubmit=()=>{

  collection.updateOne({user_id:us_id},{
    $set:{isSubmitted:true}
  })
  .then((data)=>{
    console.log("data",data);
    buttonValue.value=true;
  })
  .catch((err) => {
				console.log(err);
			});

}
</script>

<style></style>