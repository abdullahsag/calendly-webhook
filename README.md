
This code has two modules.
One is to subscribe to Calendly webhooks to receive information whenever some event is created or cancelled along with user data.
The other module is the callback that will be called by those webhooks.

First: How to subscribe to Calendly Webhooks:

1) 
GO here to get your personal token: https://calendly.com/integrations/api_webhooks

2)
Open setup_webhook_subscriptions.js and give variables proper values.
const PERSONAL_ACCESS_TOKEN = "YOUR TOKEN COMES HERE";
const BASEE_URL = "https://api.calendly.com/";
const WEBHOOK_URL_RECEIVING_END = "YOUR WEBHOOK CALLBACK URL COMES HERE";

3)
Run below line to make webhook subscriptions:
> node setup_webhook_subscriptions.js

Second: Setting up API to receive callbacks

1) To run and test locally: 
npm run dev


2) The sample curl request:

curl --location 'http://localhost:5000/calendly/webhook_callback' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzEyMjQ4NzIwLCJqdGkiOiIyYzk1YzkwZS1jZWNiLTQ2MDYtYmVkMi1jYTIyMWQ2MDU3YzEiLCJ1c2VyX3V1aWQiOiI1YjU3ZTQwMi0yYzA5LTQ2MjUtYjViNi0zYjBhNDI1OTk4ZDQifQ._E3566FCRLzKusaUTrI3heAcofAPv8kIIcdFCawrb5jp2cJxkV0C_Qa75f6KhcfcU6F-26CP3vK7fT2ge8Efsg' \
--header 'Content-Type: application/json' \
--data-raw '{
    "created_at": "2024-04-04T21:10:40.000000Z",
    "created_by": "https://api.calendly.com/users/5b57e402-2c09-4625-b5b6-3b0a425998d4",
    "event": "invitee.created",
    "payload": {
        "cancel_url": "https://calendly.com/cancellations/b40b3c4c-ae96-4fd9-a8cb-64d7acfdf45c",
        "created_at": "2024-04-04T21:10:40.494211Z",
        "email": "abdullahsag@hotmail.com",
        "event": "https://api.calendly.com/scheduled_events/e02bc017-a8c4-4078-b70f-7aad241749ab",
        "first_name": null,
        "invitee_scheduled_by": null,
        "last_name": null,
        "name": "Malik Muhammad Abdullah",
        "new_invitee": null,
        "no_show": null,
        "old_invitee": null,
        "payment": null,
        "questions_and_answers": [],
        "reconfirmation": null,
        "reschedule_url": "https://calendly.com/reschedulings/b40b3c4c-ae96-4fd9-a8cb-64d7acfdf45c",
        "rescheduled": false,
        "routing_form_submission": null,
        "scheduled_event": {
            "created_at": "2024-04-04T21:10:40.474215Z",
            "end_time": "2024-04-17T15:30:00.000000Z",
            "event_guests": [],
            "event_memberships": [
                {
                    "user": "https://api.calendly.com/users/5b57e402-2c09-4625-b5b6-3b0a425998d4",
                    "user_email": "malikmuhammadabdullah@gmail.com",
                    "user_name": "Malik Abdullah"
                },
                {
                    "user": "https://api.calendly.com/users/5b57e402-2c09-4625-b5b6-3b0a425998d4",
                    "user_email": "Amalikmuhammadabdullah@gmail.com",
                    "user_name": "ZMalik Abdullah"
                }
            ],
            "event_type": "https://api.calendly.com/event_types/497e9266-aad6-421a-a425-ca880e4108b2",
            "invitees_counter": {
                "total": 1,
                "active": 1,
                "limit": 2
            },
            "location": {
                "location": "+1 647-982-4700",
                "type": "inbound_call"
            },
            "meeting_notes_html": null,
            "meeting_notes_plain": null,
            "name": "Class Summary",
            "start_time": "2024-04-17T15:00:00.000000Z",
            "status": "active",
            "updated_at": "2024-04-04T21:10:40.474215Z",
            "uri": "https://api.calendly.com/scheduled_events/e02bc017-a8c4-4078-b70f-7aad241749ab"
        },
        "scheduling_method": null,
        "status": "active",
        "text_reminder_number": null,
        "timezone": "America/New_York",
        "tracking": {
            "utm_campaign": null,
            "utm_source": null,
            "utm_medium": null,
            "utm_content": null,
            "utm_term": null,
            "salesforce_uuid": null
        },
        "updated_at": "2024-04-04T21:10:40.494211Z",
        "uri": "https://api.calendly.com/scheduled_events/e02bc017-a8c4-4078-b70f-7aad241749ab/invitees/b40b3c4c-ae96-4fd9-a8cb-64d7acfdf45c"
    }
}'