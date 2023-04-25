/*
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://github.com/OpenAPITools/openapi-generator
 *
 * OpenAPI generator version: 6.0.1-SNAPSHOT
 */


import http from "k6/http";
import { group, check, sleep } from "k6";

const BASE_URL = "http://145.108.225.17:18888";
// Sleep duration between successive requests.
// You might want to edit the value of this variable or remove calls to the sleep function on the script.
const SLEEP_DURATION = 0.1;
// Global variables should be initialized.
const TS_AUTH_SERVICE_URL = "http://145.108.225.17:12340";
const USERNAME = 'fdse_microservice';
const PASSWORD = '111111';

export function setup() {
    // authenticate via a Bearer token
    let params = {headers: {"Content-Type": "application/json", "Accept": "*/*"}};
    let body = {"username": USERNAME, "password": PASSWORD};
    const loginRes = http.post(`${TS_AUTH_SERVICE_URL}/api/v1/users/login`, JSON.stringify(body), params);

    const authToken = loginRes.json('data')["token"];
    check(authToken, { 'Logged in successfully': () => authToken !== '' });

    return authToken;
}

export default function(authToken) {
    let params = {headers: {"Authorization": `Bearer ${authToken}`, "Content-Type": "application/json", "Accept": "*/*"}};
    
    group("/api/v1/assuranceservice/assurance/orderid/{orderId}", () => {
        let orderId = '153632a9-14eb-44f1-7b89-7431fea1cba3';

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/assuranceservice/assurance/orderid/${orderId}`;
            let request = http.get(url, params);

            check(request, {
                "GET OK": (r) => r.status === 200
            });
        }
    });

    group("/api/v1/assuranceservice/assurances/assuranceid/{assuranceId}", () => {
        let assuranceId = '153632a9-14eb-44f1-7b89-7431fea1cbbc';

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/assuranceservice/assurances/assuranceid/${assuranceId}`;
            let request = http.get(url, params);

            check(request, {
                "GET OK": (r) => r.status === 200
            });

            sleep(SLEEP_DURATION);
        }

        // Request No. 2
        {
            let url = BASE_URL + `/api/v1/assuranceservice/assurances/assuranceid/${assuranceId}`;
            let request = http.del(url, {}, params);

            check(request, {
                "DELETE OK": (r) => r.status === 200
            });

        }
    });


    group("/api/v1/assuranceservice/welcome", () => {

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/assuranceservice/welcome`;
            let request = http.get(url, params);

            check(request, {
                "GET OK": (r) => r.status === 200
            });
        }
    });

    group("/api/v1/assuranceservice/assurances/{typeIndex}/{orderId}", () => {
        let typeIndex = 1;
        let orderId = '153632a9-14eb-44f1-7b89-7431fea1cba3';

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/assuranceservice/assurances/${typeIndex}/${orderId}`;
            let request = http.get(url, params);

            check(request, {
                "GET OK": (r) => r.status === 200
            });
        }
    });

    group("/api/v1/assuranceservice/assurances", () => {

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/assuranceservice/assurances`;
            let request = http.get(url, params);

            check(request, {
                "GET OK": (r) => r.status === 200
            });
        }
    });



    group("/api/v1/assuranceservice/assurances/types", () => {

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/assuranceservice/assurances/types`;
            let request = http.get(url, params);

            check(request, {
                "GET OK": (r) => r.status === 200
            });
        }
    });

    group("/api/v1/assuranceservice/assurances/{assuranceId}/{orderId}/{typeIndex}", () => {
        let typeIndex = 1;
        let orderId = '153632a9-14eb-44f1-7b89-7431fea1cba3';
        let assuranceId = '153632a9-14eb-44f1-7b89-7431fea1cbbc';

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/assuranceservice/assurances/${assuranceId}/${orderId}/${typeIndex}`;
            let request = http.patch(url, {}, params);

            check(request, {
                "OK": (r) => r.status === 200
            });

        }
    });
    group("/api/v1/assuranceservice/assurances/orderid/{orderId}", () => {
        let orderId = '153632a9-14eb-44f1-7b89-7431fea1cba3';

        // Request No. 1
        {
            let url = BASE_URL + `/api/v1/assuranceservice/assurances/orderid/${orderId}`;
            let request = http.del(url, {}, params);

            check(request, {
                "DELETE OK": (r) => r.status === 200
            });

        }
    });

}
