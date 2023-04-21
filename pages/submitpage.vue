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

      <div>
  <div class="flex p-4 items-start justify-between gap-2 text-black dark:text-white flex-col md:flex-row">
    <h1 class="text-2xl font-bold leading-5"> Past / Continuing Stage: <span class="data-table-sub-heading"> Work that you have been doing and may or may not keep doing </span>
    </h1>
  </div>

  <div class="mt-10">
    <div class="overflow-x-auto">
        <table class="w-11/12 mx-auto text-sm text-left text-gray-500 bg-gray-50 rounded-lg ">
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
            </tr>
          </thead>
          <tbody>
            <tr v-for=" item in Table1" :key="item._id" class="bg-white border-b  hover:bg-gray-50 ">
               <td class="px-6 py-4">
                  {{ item.work }}
                </td>
                <td class="px-6 py-4">
                  {{ item.hour_last }}
                </td>
                <td class="px-6 py-4">
                  {{ item.hour_next }}
                </td>
                <td class="px-6 py-4">
                  {{ item.primary_stakeholder }}
                </td>
                <td class="px-6 py-4">
                  {{ item.outcome }}
                </td>
                <td class="px-6 py-4">
                  {{ item.skill_required }}
                </td>
                <td class="px-6 py-4">
                  {{ item.work_quality }}
                </td>
                <td class="px-6 py-4">
                  {{ item.capability }}
                </td>
                <td class="px-6 py-4">
                  {{ item.interest }}
                </td>
                <td class="px-6 py-4">
                  {{ item.work_design }}
                </td>
                <td class="px-6 py-4">
                  {{ item.comments }}
                </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
  </div>

  <div>
  <div class="flex p-4 items-start justify-between gap-2 text-black dark:text-white flex-col md:flex-row">
    <h1 class="text-2xl font-bold leading-5"> New / Planned Stage: <span class="data-table-sub-heading"> Work that you haven't been doing but planning to start doing </span>
    </h1>
  </div>

  <div class="mt-10">
    <div class="overflow-x-auto">
        <table class="w-11/12 mx-auto text-sm text-left text-gray-500 bg-gray-50 rounded-lg ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-200  ">
            <tr>
              <th scope="col" class="px-4 py-3">Work to be done</th>
              <th scope="col" class="px-4 py-3">Hours next 3 months</th>
              <th scope="col" class="px-4 py-3">Primary stakeholder</th>
              <th scope="col" class="px-4 py-3">Outcome</th>
              <th scope="col" class="px-4 py-3">Skills required</th>
              <th scope="col" class="px-4 py-3">Work quality</th>
              <th scope="col" class="px-4 py-3">Capability</th>
              <th scope="col" class="px-4 py-3">Interest</th>
              <th scope="col" class="px-4 py-3">Work redesign</th>
              <th scope="col" class="px-4 py-3">Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for=" item in Table2" :key="item._id" class="bg-white border-b  hover:bg-gray-50 ">
               <td class="px-6 py-4">
                  {{ item.work }}
                </td>
                <td class="px-6 py-4">
                  {{ item.hour_next }}
                </td>
                <td class="px-6 py-4">
                  {{ item.primary_stakeholder }}
                </td>
                <td class="px-6 py-4">
                  {{ item.outcome }}
                </td>
                <td class="px-6 py-4">
                  {{ item.skill_required }}
                </td>
                <td class="px-6 py-4">
                  {{ item.work_quality }}
                </td>
                <td class="px-6 py-4">
                  {{ item.capability }}
                </td>
                <td class="px-6 py-4">
                  {{ item.interest }}
                </td>
                <td class="px-6 py-4">
                  {{ item.work_design }}
                </td>
                <td class="px-6 py-4">
                  {{ item.comments }}
                </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
  </div>


  <div>
  <div class="flex p-4 items-start justify-between gap-2 text-black dark:text-white flex-col md:flex-row">
    <h1 class="text-2xl font-bold leading-5"> New / Planned Stage: <span class="data-table-sub-heading"> Work that you haven't been doing but planning to start doing </span>
    </h1>
  </div>

  <div class="mt-10">
    <div class="overflow-x-auto">
        <table class="w-11/12 mx-auto text-sm text-left text-gray-500 bg-gray-50 rounded-lg ">
          <thead class="text-xs text-gray-700 uppercase bg-gray-200  ">
            <tr>
              <th scope="col" class="px-4 py-3">Work to be done</th>
              <th scope="col" class="px-4 py-3">Capability</th>
              <th scope="col" class="px-4 py-3">Interest</th>
              <th scope="col" class="px-4 py-3">Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for=" item in Table3" :key="item._id" class="bg-white border-b  hover:bg-gray-50 ">
               <td class="px-6 py-4">
                  {{ item.work }}
                </td>
                <td class="px-6 py-4">
                  {{ item.capability }}
                </td>
                <td class="px-6 py-4">
                  {{ item.interest }}
                </td>
                <td class="px-6 py-4">
                  {{ item.comments }}
                </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
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

const Table1=ref([]);
const Table2=ref([]);
const Table3=ref([])

		const mongo1 = app.currentUser.mongoClient("mongodb-atlas");
		const collection1 = mongo1.db("radar").collection("table1");

		collection1
			.find()
			.then((data) => {
				console.log(data);
				Table1.value=data;
			})
			.catch((err) => {
				console.log(err);
			});

        const mongo2 = app.currentUser.mongoClient("mongodb-atlas");
		const collection2 = mongo2.db("radar").collection("table2");

		collection2
			.find()
			.then((data) => {
				console.log(data);
				Table2.value=data;
			})
			.catch((err) => {
				console.log(err);
			});

        const mongo3 = app.currentUser.mongoClient("mongodb-atlas");
		const collection3 = mongo3.db("radar").collection("table3");

		collection3
			.find()
			.then((data) => {
				console.log(data);
				Table3.value=data;
			})
			.catch((err) => {
				console.log(err);
			});
	


  const props = defineProps({
    totallast: {
    type: Object,
    required: true,
  },
  totalnextOne: {
    type: Object,
    required: true,
  },
  totalnextTwo: {
    type: Object,
    required: true,
  },
});
const logout = () => {
  app.currentUser.logOut();
  navigateTo("/");
};
</script>

<style>

</style>