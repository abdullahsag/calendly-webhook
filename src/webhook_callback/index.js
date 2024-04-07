module.exports.CalendlyWebhookCallback = async(req, res) => {
    let reqJson = req.body;
    console.log(reqJson);
    const eventType = reqJson["event"];
    let eventName = "calendly_event";

    if (eventType === "invitee.created") {
    eventName = "meeting_scheduled";
    }
    else if (eventType === "invitee.canceled") {
    eventName = "meeting_cancelled";
    }

    const user = reqJson["payload"]["email"];
    const name = reqJson["payload"]["name"];

    let mailAndName = [];
    if(reqJson["payload"]["scheduled_event"] && reqJson["payload"]["scheduled_event"]["event_memberships"]){
        mailAndName = reqJson["payload"]["scheduled_event"]["event_memberships"].map((event) => {
            return {name:event.user_name, email:event.user_email}
        });

        console.log("mailAndName: ", mailAndName);
    }

    let obj = {
        user: user,
        eventName: eventName,
        properties: {
            email: user,
            event_type: eventType,
            name: name,
        },
        others: mailAndName
    };

    res.status(200).json({ handled: true });
}