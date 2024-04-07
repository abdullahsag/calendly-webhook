// const fetch = import('node-fetch');

// Ref: https://calendly.com/integrations/api_webhooks
const PERSONAL_ACCESS_TOKEN = "YOUR TOKEN COMES HERE";
const BASEE_URL = "https://api.calendly.com/";
const WEBHOOK_URL_RECEIVING_END = "YOUR WEBHOOK CALLBACK URL COMES HERE"; //https://domain.com/calendly/webhook_callback

function subscribeToWebhooks( orgUri, userUri) {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PERSONAL_ACCESS_TOKEN}`
    };

    let params = {
        url: WEBHOOK_URL_RECEIVING_END,
        events: [
            'invitee.created', 
            'invitee.canceled', 
            'invitee_no_show.created'
        ],
        organization: orgUri,
        user: userUri,
        scope: 'organization' //usr
    };


    console.log("params: ", params);

    return fetch(`${BASEE_URL}/webhook_subscriptions`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create webhook subscription');
        }
        return response.json();
    })
    .then(data => {
        console.log('Webhook subscription created successfully:', data);
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
}

function getOrgnizationAndUserUrl() {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${PERSONAL_ACCESS_TOKEN}`
    };

    return fetch(`${BASEE_URL}/users/me`, {
        method: 'GET',
        headers: headers
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to get data');
        }
        return response.json();
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
       
}

async function setup(){
    try{
        let response = await getOrgnizationAndUserUrl();
        console.log("response: ", response, );

        const userUri = response.resource.uri;
        const orgUri = response.resource.current_organization;

        let subResp = await subscribeToWebhooks(orgUri, userUri);
        console.log("subResp: ", subResp);

        return subResp;
    }
    catch(e){
        console.log(e);
        throw e;
    }
}
// subscribeToWebhooks();

setup()
.then((res) => {
    console.log("res: ", res);
})
.catch((err) => {
    console.error(err);
})