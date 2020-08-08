var user_state;
user_state = 'Bihar'
fetchabc(user_state);
var m = 0

function statename(){
    var a = document.getElementById("ddstate")
    var b = a.options[a.selectedIndex].text;
    fetchabc(b);
    for(i=0;i<m;i++){
        xyz = document.getElementById(i)
        xyz.remove()
    }
    m = 0
}




function fetchabc(user_state){
    const state_name_element = document.querySelector(".state .name");
    state_name_element.innerHTML = "Loading...";
	
	fetch('https://api.covid19india.org/v4/data.json')
	.then( response => {
		return response.json();
	})
	.then( data => {
        statecode =
        {
        "Andaman and Nicobar Islands":"AN",
        "Andhra Pradesh":"AP",
        "Arunachal Pradesh":"AR",	
        "Assam":"AS",
        "Bihar":"BR",
        "Chandigarh":"CH",
        "Chhattisgarh":"CT",
        "Dadra and Nagar Haveli and Daman and Diu":"DN",
        "Delhi":"DL",
        "Goa":"GA",
        "Gujarat":"GJ",
        "Haryana":"HR",
        "Himachal Pradesh":"HP",
        "Jammu and Kashmir":"JK",
        "Jharkhand":"JH",
        "Karnataka":"KA",
        "Kerala":"KL",
        "Ladak":"LA",
        "Madhya Pradesh":"MP",
        "Maharashtra":"MH",
        "Manipur":"MN",
        "Meghalaya":"ML",
        "Mizoram":"MZ",	
        "Nagaland":"NL",
        "Odisha":"OR",
        "Puducherry":"PY",
        "Punjab":"PB",
        "Rajasthan":"RJ",
        "Sikkim":"SK",
        "Tamil Nadu":"TN",
        "Telangana":"TG",
        "Tripura":"TR",
        "Uttar Pradesh":"UP",
        "Uttarakhand":"UT",
        "West Bengal":"WB"
        };
        


        for (const [key, value] of Object.entries(data)){
            if (key == statecode[user_state]){
                state_name_element.innerHTML = user_state;
                var x = value
                var total_case =  x.total.confirmed;
                var total_cured = x.total.recovered;
                var total_death = x.total.deceased;
                var total_d = document.getElementById("total_death")
                var total_c = document.getElementById("total_cases")
                var total_r = document.getElementById("total_cured")
                total_d.innerHTML = total_death;
                total_c.innerHTML = total_case;
                total_r.innerHTML = total_cured;
            }
        }

        	
        for (const [key, value] of Object.entries(data)) {
            if(key == statecode[user_state]){
            obj = value.districts
            
            for (const [key, value] of Object.entries(obj)){
                var state_data = document.getElementById("state_data");
                const tr = document.createElement('tr');
                tr.setAttribute('id',m);
                const th_district = document.createElement('th');
                th_district.setAttribute('scope','row');
                th_district.innerHTML = key;
                const td_case = document.createElement('td');
                td_case.innerHTML = value.total.confirmed;
                const td_cured = document.createElement('td');
                td_cured.innerHTML = value.total.recovered;
                const td_death = document.createElement('td');
                td_death.innerHTML = value.total.deceased;
                const td_active = document.createElement('td');
                td_active.innerHTML = value.total.confirmed - value.total.recovered - value.total.deceased;

                state_data.appendChild(tr);
                tr.appendChild(th_district);
                tr.appendChild(td_case);
                tr.appendChild(td_active);
                tr.appendChild(td_cured);
                tr.appendChild(td_death);
                m = m + 1
            }

            }

        }
	})
	.catch( error => {
		alert(error);
	})
}


