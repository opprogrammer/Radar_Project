<template>
  <div>
    <div
      class="flex p-4 items-start justify-between gap-2 text-black dark:text-white flex-col md:flex-row"
    >
      <h1 class="text-2xl font-bold leading-5">
        Past / Continuing Stage:
        <span class="data-table-sub-heading text-slate-700">
          Work that you have been doing and may or may not keep doing
        </span>
      </h1>
    </div>

    <div class="mt-10">
      <div class="overflow-x-auto">
        <form @submit.prevent="handleEditFormSubmit">
          <table
          id="tb1"
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
                  Hours last 3 months
                  <button data-popover-target="popover-default_2" type="button">
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
                    id="popover-default_2"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <div
                      class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
                    >
                      <h3 class="font-semibold text-gray-900 dark:text-white">
                        Hours last 3 months
                      </h3>
                    </div>
                    <div class="px-3 py-2">
                      <p>
                        Capture the rough number of hours in the last 90 days
                        you spent on the work. Aim to break up the work in
                        chunks not less than 16 hours and not more than 100
                        hours. Only enter numbers in this column, no text
                      </p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </th>
                <th scope="col" class="px-4 py-3">
                  Hours next 3 months
                  <button data-popover-target="popover-default_3" type="button">
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
                    id="popover-default_3"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <div
                      class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
                    >
                      <h3 class="font-semibold text-gray-900 dark:text-white">
                        Hours next 3 months
                      </h3>
                    </div>
                    <div class="px-3 py-2">
                      <p>
                        Capture the rough number of hours in the next 90 days
                        you expect spending on the work. Note: this can be zero
                        if you no longer plan to do this work in the next 3
                        months. Only enter numbers in this column, no text
                      </p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </th>
                <th scope="col" class="px-4 py-3">
                  Primary stakeholder
                  <button data-popover-target="popover-default_4" type="button">
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
                    id="popover-default_4"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <div
                      class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
                    >
                      <h3 class="font-semibold text-gray-900 dark:text-white">
                        Primary stakeholder
                      </h3>
                    </div>
                    <div class="px-3 py-2">
                      <p>
                        The person or group that directly benefits from the work
                        (not necessarily the final customer)
                      </p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </th>
                <th scope="col" class="px-4 py-3">
                  Outcome
                  <button data-popover-target="popover-default_5" type="button">
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
                    id="popover-default_5"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <div
                      class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
                    >
                      <h3 class="font-semibold text-gray-900 dark:text-white">
                        Outcome
                      </h3>
                    </div>
                    <div class="px-3 py-2">
                      <p>
                        What is the PRIMARY outcome of this work if done well ?
                      </p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </th>
                <th scope="col" class="px-4 py-3">
                  Skills required
                  <button data-popover-target="popover-default_6" type="button">
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
                    id="popover-default_6"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <div
                      class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
                    >
                      <h3 class="font-semibold text-gray-900 dark:text-white">
                        Skills required
                      </h3>
                    </div>
                    <div class="px-3 py-2">
                      <p>
                        In order to adequately deliver the work, what is the
                        level of skill or talent required ?
                      </p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </th>
                <th scope="col" class="px-4 py-3">
                  Work quality
                  <button data-popover-target="popover-default_7" type="button">
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
                    id="popover-default_7"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <div
                      class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
                    >
                      <h3 class="font-semibold text-gray-900 dark:text-white">
                        Work quality
                      </h3>
                    </div>
                    <div class="px-3 py-2">
                      <p>What is the current quality of this work ?</p>
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
                  Work redesign
                  <button
                    data-popover-target="popover-default_10"
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
                    id="popover-default_10"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <div
                      class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
                    >
                      <h3 class="font-semibold text-gray-900 dark:text-white">
                        Work redesign
                      </h3>
                    </div>
                    <div class="px-3 py-2">
                      <p>
                        What other ideas do you have about how to complete this
                        work differently ?
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
                  <EditableRow
                    :editFormData="editFormData"
                    :handleEditFormChange="handleEditFormChange"
                    :handleCancelClick="handleCancelClick"
                  />
                </template>
                <template v-else>
                  <ReadOnlyRow
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
const collection = mongo?.db("radar").collection("table1");

const props = defineProps({
  getDataFromPast:Function,
  getDate1:Function,
  table1_fill:Function,
  buttonValue:Boolean,
})
// functions
const contacts = ref([]);

onMounted(()=>{
  props.table1_fill(contacts.value);
});

watchEffect(()=>{
  props.table1_fill(contacts.value);
})

collection
    .find()
    .then((data) => {
      contacts.value = data;
      props.getDataFromPast(data);
    })
    .catch((err) => {
      console.log(err);
    });

const editFormData = ref({
  work: "",
  h_last: "",
  h_next: "",
  primary_stakeholder: "",
  outcome: "",
  skill: "",
  work_qual: "",
  capable: "",
  interest: "",
  work_design: "",
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
    hour_last: "",
    hour_next: "",
    primary_stakeholder: "",
    outcome: "",
    skill_required: "",
    work_quality: "",
    capability: "",
    interest: "",
    work_design: "",
    comments: "",
    user_id: app.currentUser.id,
  };
  collection
    .insertOne(newContact)
    .then((data) => {
      console.log(data);
      consoleData();
      props.table1_fill(contacts.value);
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
    hour_last: editFormData.value.h_last,
    hour_next: editFormData.value.h_next,
    primary_stakeholder: editFormData.value.primary_stakeholder,
    outcome: editFormData.value.outcome,
    skill_required: editFormData.value.skill,
    work_quality: editFormData.value.work_qual,
    capability: editFormData.value.capable,
    interest: editFormData.value.interest,
    work_design: editFormData.value.work_design,
    comments: editFormData.value.comments,
  };
  console.log("omg", editContactId.value);

  collection
    .updateOne({ _id: editContactId.value }, { $set: editedContact })
    .then((data) => {
      console.log(data);
      consoleData();
      props.table1_fill(contacts.value);
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
  editContactId.value = null;
  props.getDate1();
};
const handleEditClick = (contact) => {
  console.log("contact", contact);
  editContactId.value = contact._id;
  const formValues = {
    id: contact._id,
    work: contact.work,
    h_last: contact.hour_last,
    h_next: contact.hour_next,
    primary_stakeholder: contact.primary_stakeholder,
    outcome: contact.outcome,
    skill: contact.skill_required,
    work_qual: contact.work_quality,
    capable: contact.capability,
    interest: contact.interest,
    work_design: contact.work_design,
    comments: contact.comments,
  };
  editFormData.value = formValues;
  props.getDate1();
};
const handleCancelClick = () => {
  // setEditContactId(null);
  editContactId.value = null;
};
const handleDeleteClick = (id) => {
  // const index = contacts.findIndex(contact => contact._id === contactId)
  // const index = contacts.value.findIndex((contact) => contact._id === contactId);
  // contacts.value.splice(index, 1);

  console.log("id",id.toString());
  collection
    .deleteOne({
      _id: id,
    })
    .then((data) => {
      console.log(data);
      consoleData();
     props.table1_fill(contacts.value);
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
      props.getDataFromPast(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

consoleData();

// const tb1l=document.getElementById("tb1");

// props.emptyTable1(tb1l);


</script>

<style></style>