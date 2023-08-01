function talk() {
    var know = {
        "who are you": "Hello, Chatbot is here for you ",
        "hii" : "Heyyy, What's Up ???",
        "Hii" : "Heyyy, What's Up ???",
        "kaise ho": "Haan main badhiyaa, Tum Bataoo",
        "hello": "Heyyy, What's Up ???",
        "how are you": "Good :)",
        "what can you do for me": "Everything :) Just say to me >>Thank Me Later",
        "Your followers":
            "I have my family of 200000 members, i don't have follower ,have supportive Famiy ",
        ok: "Thank You So Much ",
        bye: "Okay! Will meet soon..",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}

