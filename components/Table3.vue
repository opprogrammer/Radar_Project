<template>
  <div>
    <div
      class="flex p-4 items-start justify-between gap-2 text-black dark:text-white flex-col md:flex-row"
    >
      <h1 class="text-2xl font-bold leading-5">
        New / Planned Stage:
        <span class="data-table-sub-heading text-slate-500">
          Work that you haven't been doing but planning to start doing
        </span>
      </h1>
    </div>

    <div class="mt-10">
      <div class="overflow-x-auto">
        <form @submit.prevent="handleEditFormSubmit">
          <table
          id="tb3"
            v-if="contacts.length > 0"
            class="w-11/12 mx-auto text-sm text-left text-gray-500 bg-gray-50 rounded-lg"
          >
            <thead class="text-sm text-gray-700  bg-gray-200">
              <tr>
                <th scope="col" class="px-4 py-3">
                  Work to be done
                  <button data-popover-target="popover-default_1" type="button">
                    <svg
                      class="w-4 h-4 ml-2 text-gray-500 hover:text-gray-500"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Show information</span>
                  </button>
                  <div
                    data-popover
                    id="popover-default_1"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <div
                      class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
                    >
                      <h3 class="font-semibold text-gray-900 dark:text-white">
                        Work to be done
                      </h3>
                    </div>
                    <div class="px-3 py-2">
                      <p>
                        Work to be Done is a block of work that is completed for
                        the benefit of someone or a group of people. Think of it
                        as the thing that if you had to teach a temp or a robot
                        to do it, you could break it down and describe the steps
                        in the work. It should generally start with a verb and
                        be short-ish (8-10 words is a good target). It's not
                        about things like an attitude or approach ("be the
                        customer champion", "encourage positivity") but rather
                        the doing part of those ideas which might be "meet with
                        customers and share their feedback with product
                        management team" or "hold employee roundtables; listen;
                        offer suggestions and resources to resolve problems".
                      </p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </th>
                <th scope="col" class="px-4 py-3">
                  Capability
                  <button data-popover-target="popover-default_8" type="button">
                    <svg
                      class="w-4 h-4 ml-2 text-gray-500 hover:text-gray-500"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Show information</span>
                  </button>
                  <div
                    data-popover
                    id="popover-default_8"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <div
                      class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
                    >
                      <h3 class="font-semibold text-gray-900 dark:text-white">
                        Capability
                      </h3>
                    </div>
                    <div class="px-3 py-2">
                      <p>What is your current capability with this work ?</p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </th>
                <th scope="col" class="px-4 py-3">
                  Interest
                  <button data-popover-target="popover-default_9" type="button">
                    <svg
                      class="w-4 h-4 ml-2 text-gray-500 hover:text-gray-500"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Show information</span>
                  </button>
                  <div
                    data-popover
                    id="popover-default_9"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <div
                      class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
                    >
                      <h3 class="font-semibold text-gray-900 dark:text-white">
                        Interest
                      </h3>
                    </div>
                    <div class="px-3 py-2">
                      <p>
                        What is your current level of interest in this work,
                        irrespective of your capability ?
                      </p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </th>
                <th scope="col" class="px-4 py-3">
                  Comments
                  <button
                    data-popover-target="popover-default_11"
                    type="button"
                  >
                    <svg
                      class="w-4 h-4 ml-2 text-gray-500 hover:text-gray-500"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Show information</span>
                  </button>
                  <div
                    data-popover
                    id="popover-default_11"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <div
                      class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
                    >
                      <h3 class="font-semibold text-gray-900 dark:text-white">
                        Comments
                      </h3>
                    </div>
                    <div class="px-3 py-2">
                      <p>Please add any clarifying comments here</p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </th>
                <th scope="col" class="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="contact in contacts" :key="contact._id">
                <template v-if="editContactId === contact._id">
                  <EditableRow3
                    :editFormData="editFormData"
                    :handleEditFormChange="handleEditFormChange"
                    :handleCancelClick="handleCancelClick"
                  />
                </template>
                <template v-else>
                  <ReadOnlyRow3
                    :contact="contact"
                    :handleEditClick="handleEditClick"
                    :handleDeleteClick="handleDeleteClick"
                    :buttonValue="props.buttonValue"
                  />
                </template>
              </template>
            </tbody>
          </table>
        </form>
        <form
          @submit.prevent="handleAddFormSubmit"
          class="flex justify-center mt-5"
        >
          <button
          :hidden="buttonValue"
            type="submit"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <span v-if="contacts.length > 0">Add Row</span>
            <span v-else>Create New Table</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

import { onMounted } from "vue";
import { initDropdowns, initFlowbite, initModals } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initDropdowns();
  initFlowbite();
  initModals();
});

const { app } = useMyRealmApp();

const mongo = app.currentUser?.mongoClient("mongodb-atlas");
const collection = mongo?.db("radar").collection("table3");
// functions

const props = defineProps({
  table3_fill:Function,
  buttonValue:Boolean,
  getDate1:Function,
})
const contacts = ref([]);

onMounted(()=>{
  props.table3_fill(contacts.value);
  
});

watchEffect(()=>{
  props.table3_fill(contacts.value);
  
})

const editFormData = ref({
  work: "",
  capable: "",
  interest: "",
  comments: "",
});
const editContactId = ref(null);
const handleEditFormChange = (event) => {
  event.preventDefault();
  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;
  const newFormData = { ...editFormData._rawValue };
  newFormData[fieldName] = fieldValue;
  editFormData.value = newFormData;
};
const handleAddFormSubmit = (event) => {
  event.preventDefault();
  const newContact = {
    work: "",
    capability: "",
    interest: "",
    comments: "",
    user_id: app.currentUser.id,
  };
  collection
    .insertOne(newContact)
    .then((data) => {
      console.log(data);
      consoleData();
      props.table3_fill(contacts.value);
    })
    .catch((err) => {
      console.log(err);
    });
    props.getDate1();
  // contacts.value = [ ...contacts.value ];
  // const lastElement = contacts.value[contacts.value.length - 1]
  // handleEditClick(newContact)
};
const handleEditFormSubmit = () => {
  // event.preventDefault();
  const editedContact = {
    work: editFormData.value.work,
    capability: editFormData.value.capable,
    interest: editFormData.value.interest,
    comments: editFormData.value.comments,
  };
  console.log("omg", editContactId.value);

  collection
    .updateOne({ _id: editContactId.value }, { $set: editedContact })
    .then((data) => {
      console.log(data);
      consoleData();
      props.table3_fill(contacts.value);
    })
    .catch((err) => {
      console.log(err);
    });

  // console.log(editedContact)
  // const newContacts = [...contacts.value];
  // const index = contacts.value.findIndex((contact) => contact._id === editContactId.value);
  // console.log('index', index)
  // newContacts[index] = editedContact;
  // console.log('newContacts', newContacts)
  // contacts.value = newContacts
  props.getDate1();
  editContactId.value = null;
};
const handleEditClick = (contact) => {
  console.log("contact", contact);
  editContactId.value = contact._id;
  const formValues = {
    id: contact._id,
    work: contact.work,
    capable: contact.capability,
    interest: contact.interest,
    comments: contact.comments,
  };
  props.getDate1();
  editFormData.value = formValues;
};
const handleCancelClick = () => {
  // setEditContactId(null);
  editContactId.value = null;
};
const handleDeleteClick = (id) => {
  // const index = contacts.findIndex(contact => contact._id === contactId)
  // const index = contacts.value.findIndex((contact) => contact._id === contactId);
  // contacts.value.splice(index, 1);

  console.log(id);
  collection
    .deleteOne({
      _id: id,
    })
    .then((data) => {
      console.log(data);
      consoleData();
      props.table3_fill(contacts.value);
    })
    .catch((err) => {
      console.log(err);
    });
    props.getDate1();
};
const consoleData = () => {
  collection
    .find()
    .then((data) => {
      console.log(data);
      contacts.value = data;
      
    })
    .catch((err) => {
      console.log(err);
    });

  
};

consoleData();

// var tb3l=document.getElementById("tb3");
// if(tb3l.row.length===0){
//   console.log("table3 empty");
// }
</script>
  
  <style>
</style>