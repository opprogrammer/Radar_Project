<template>
  <tr>
    <td>
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
        type="text"
        name="work"
        :value="editFormData.work"
        @input="handleEditFormChange"
      />
    </td>
    <td>
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
        type="number"
        name="h_next"
        :value="editFormData.h_next"
        @input="handleEditFormChange"
      />
    </td>

    <!--Primary stakeholder-->
    <td>
      <select
        name="primary_stakeholder"
        :value="editFormData.primary_stakeholder"
        @input="handleEditFormChange"
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a stakeholder</option>
        <option value="External Client">
          External Client
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Internal Client">
          Internal Client
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="My Team">
          My Team
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="3rd Party">
          3rd Party
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Others">
          others
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
      </select>
    </td>

    <!--outcome-->
    <td>
      <select
        name="outcome"
        :value="editFormData.outcome"
        @input="handleEditFormChange"
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a Outcome</option>
        <option value="Current Revenue">
          Current Revenue
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Future Revenue">
          Future Revenue
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Profitabily">
          Profitabily
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Scalability">
          Scalability
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Customer Satisfaction">
          Customer Satisfaction
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Employee Satisfaction">
          Employee Satisfaction
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Risk Management">
          Risk Management
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="others">
          Others
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
      </select>
    </td>

    <!--skill required-->
    <td>
      <select
        name="skill"
        :value="editFormData.skill"
        @input="handleEditFormChange"
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a skill</option>
        <option value="Core">
          Core
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Skilled">
          skilled
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Expert">
          Expert
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
      </select>
    </td>

    <!--Work Quality-->
    <td>
      <select
        name="work_qual"
        :value="editFormData.work_qual"
        @input="handleEditFormChange"
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a work Quality</option>
        <option value="Work is going well">
          Work is going well
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Work needs Improvement">
          Work needs Improvement
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Environment/team dynamics impacting work">
          Environment/team dynamics impacting work
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Improvement in Progress">
          Improvement in Progress
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="I want to lead improving this work">
          I want to lead improving this work
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
      </select>
    </td>

    <!--Capability-->
    <td>
      <select
        name="capable"
        :value="editFormData.capable"
        @input="handleEditFormChange"
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a capability</option>
        <option value="I am capable and confident">
          I am capable and confident
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="This work offers me an opportunity to grow">
          This work offers me an opportunity to grow
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="This is a stretch for me">
          This is a stretch for me
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="My talent is not aligned with this work">
          My talent is not aligned with this work
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
      </select>
    </td>

    <!--Interest-->
    <td>
      <select
        name="interest"
        :value="editFormData.interest"
        @input="handleEditFormChange"
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a Interest</option>
        <option value="Enjoy this work; would like to keep doing it">
          Enjoy this work; would like to keep doing it
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Enjoy this work; would like to do more of it">
          Enjoy this work; would like to do more of it
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Dislike this work; would prefer not to do it">
          Dislike this work; would prefer not to do it
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Been there done that; I am not learning or growing">
          Been there done that; I am not learning or growing
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="On-time Project/Work">
          On-time Project/Work
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
      </select>
    </td>

    <!--Work Design-->
    <td>
      <select
        name="work_design"
        :value="editFormData.work_design"
        @input="handleEditFormChange"
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a work design</option>
        <option value="Enjoy this work; would like to keep doing it">
          Enjoy this work; would like to keep doing it
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Enjoy this work; would like to do more of it">
          Enjoy this work; would like to do more of it
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Dislike this work; would prefer not to do it">
          Dislike this work; would prefer not to do it
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="Been there done that; I am not learning or growing">
          Been there done that; I am not learning or growing
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
        <option value="On-time Project/Work">
          On-time Project/Work
          <p class="text-xs font-normal text-gray-500 dark:text-gray-300">
            Some helpful instruction goes over here.
          </p>
        </option>
      </select>
    </td>

    <td>
      <input
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5"
        type="text"
        name="comments"
        :value="editFormData.comments"
        @input="handleEditFormChange"
      />
    </td>

    <td class="text-center">
      <div class="flex ml-3 items-center">
        <button type="submit">
          <svg
            height="24"
            version="1.1"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          >
            <g transform="translate(0 -1028.4)">
              <path
                d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
                fill="#27ae60"
                transform="translate(0 1029.4)"
              />
              <path
                d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
                fill="#2ecc71"
                transform="translate(0 1028.4)"
              />
              <path
                d="m16 1037.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z"
                fill="#27ae60"
              />
              <path
                d="m16 1036.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z"
                fill="#ecf0f1"
              />
            </g>
          </svg>
        </button>
        <button type="button" @click="handleCancelClick">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-[26px] h-[26px] text-red-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </td>
  </tr>
</template>
  <!-- @click.prevent="submitEditForm" -->
  <script setup>
import { onMounted } from "vue";
import { initDropdowns, initFlowbite } from "flowbite";

onMounted(() => {
  initDropdowns();
  initFlowbite();
});

// initialize components based on data attribute selectors

const props = defineProps({
  editFormData: {
    type: Object,
    required: true,
  },
  handleEditFormChange: {
    type: Function,
    required: true,
  },
  handleCancelClick: {
    type: Function,
    required: true,
  },
});

// props: {
//   editFormData: {
//     type: Object,
//     required: true,
//   },
//   handleEditFormChange: {
//     type: Function,
//     required: true,
//   },
//   handleCancelClick: {
//     type: Function,
//     required: true,
//   },
// },
</script>