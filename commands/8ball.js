var Commands = require('../utilities/commands.js').Commands;

Commands.add("8ball", {
    name: "8ball",
    description: "Makes executive decisions super easy!",
    extendedhelp: "I'll function as an magic 8 ball for a bit and anwser all of your questions! (So long as you enter the questions as suffixes.)",
    process: function(message, suffix) {
        var choices = [
            "It is certain", 
            "It is decidedly so", 
            "Without a doubt", 
            "Yes, definitely", 
            "You may rely on it", 
            "As I see it, yes", 
            "Most likely", 
            "Outlook good", 
            "Yes", 
            "Signs point to yes", 
            "Reply hazy try again", 
            "Ask again later", 
            "Better not tell you now", 
            "Cannot predict now", 
            "Concentrate and ask again", 
            "Don't count on it", 
            "My reply is no", 
            "My sources say no", 
            "Outlook not so good", 
            "Very doubtful"
        ];
        message.channel.sendMessage(message.author + ": " + choices[Math.floor(Math.random()*choices.length)]);
    }
});
