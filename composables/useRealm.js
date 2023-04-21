import * as Realm from "realm-web";


export const useMyRealmApp = () => {

	
const app = new Realm.App({ id: "application-3-iaqju" });




	return {
		app,
		Realm,
		
	};
	

};
