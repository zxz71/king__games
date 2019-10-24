const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
  client.user.setGame('By i3xR ⊀ .','https://www.twitch.tv/ii3xr');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});


            var prefix = "*";
client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
          var msg;
          msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
          title: "``تــم مسح الشات ``",
          color: 0x06DF00,
          footer: {
            
          }
        }}).then(msg => {msg.delete(3000)});
                            }
  
       
  });

client.on('message', message => {
  if (message.content === 'زنقيري') {
    message.reply('اذانا ذا الزنقيري حقكم');
	    message.delete();
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }
});

 client.on('message', message => {
    if (message.content.startsWith("رابط السيرفر")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 50,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط **")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 50**`)


    }
});

client.on('message', message => {
    if (message.guild) return undefined;
    var roomid = "530225570047459338";
    var room = client.channels.get(roomid);
    if (!room) return undefined;
    var emb = new Discord.RichEmbed()
    .setColor("#36393e")
    .setAuthor(message.author.username,message.author.displayAvatarURL)
    .setDescription(`**Message from ${message.author} in the bot dm**\n\`\`\`apache\nMessage: ${message.content}\`\`\``)
    .setThumbnail(message.author.displayAvatarURL)
    .setTimestamp();
    room.send(emb);
});

 const bannedwords1 = [

	"اي بي",
	"ip",
    "IP",
	"Ip",
	"هح"

  ];

client.on('message', message => {
  if(bannedwords1.some(word => message.content.includes(word))) {
message.channel.send("connect 54.37.244.86:30120").then(msg => {msg.delete(30000)});;
    message.delete()
    }
}); 

  client.on('message', message => {
    if (message.content.split(' ')[0] == '*b')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
   client.on("message", message => {
       var prefix = "*";
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "a")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});

client.on('message',async message => { 
    var room;
    var chat; 
    var duration;
    var gMembers;
    var filter = m => m.author.id === message.author.id;
    if(message.content.startsWith("*ac")) { 
        //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**'); 
        if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
        message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به ارسال الرساله**`).then(msgg => { 
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
            }).then(collected => { 
                let room = message.guild.channels.find('name', collected.first().content);
                if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**'); 
                room = collected.first().content;
                collected.first().delete();
                        msgg.edit(':eight_pointed_black_star:| ** اكتب الرساله الي تبيها **').then(msg => { 
                            message.channel.awaitMessages(filter, { 
                                max: 1,
                                time: 20000,
                                errors: ['time'] 
                            }).then(collected => {
                                chat = collected.first().content;
                                collected.first().delete();
                                try {
                                    let Embed = new Discord.RichEmbed()
                                        .setAuthor(message.guild.name, message.guild.iconURL)
                                        .setTitle(``+''+``+'')
                                        .setDescription(chat)
                                    message.guild.channels.find('name', room).send(Embed).then(m => {
                                        let re = m.react('🎉');
                                        setTimeout(() => { 
                                            let users = m.reactions.get("🎉").users;
                                            let list = users.array().filter(u => u.id !== m.author.id);
                                            let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                                            if(users.size === 1) gFilter = '**لم يتم التحديد**';
                                            let Embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username, message.author.avatarURL)
                                                .setTitle(chat)
                                                .addField(`ping`+`[${Date.now() - message.createdTimestamp}]`)
                                                .setFooter(message.guild.name, message.guild.iconURL);
                                            m.edit(Embed);
                                        },duration); 
                                    });
                                    msgg.edit(`:heavy_check_mark:| تم ارسال الرساله في الروم`); 
                                } catch(e) {
                                    msgg.edit(`:heavy_multiplication_x:| **لم اقدر على ارسال الرسالة**`); 
                                    console.log(e);
                                }
                            });
                        });
                    });
                });
  }
});

client.on('message', message => {
if (message.content === '*مبرمج') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.channel.avatarURL)    
      .addField("** مبرمج البوت :wrench: **","**@!      i3xR  **")
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
if (message.content === '*esx') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians:  شرح لنظام ESX**","** **")
      .addField("**/register**","**لتغيير الاسم فالهويه وشكل الشخصيه**")
      .addField("**/shuff**","**للتبديل بين السائق **")
	  .addField("**F10**","**لفتح قائمة اسماء اللاعبين **")
      .addField("**F7**","**لتسديد  المخالفات/فواتير **")
      .addField("**F6**","**لفتح قائمة الوظيفه**")
      .addField("**F5**","**قائمة الحركات**")
      .addField("**Y **","**مثبت السرعه**")
      .addField("**B **","** لربط حزام الامان**")
      .addField("**M **","**اعدادات السيارة**")
      .addField("**Shift + H **","**تغيير مسافه الصوت والسمع**")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
  
    }
});

client.on('message', message => {
if (message.content === "*esx") {
message.reply("**Done | تــم**").then(msg => {msg.delete(10000)});;
message.react("📩")

}
});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
- اهلا بك يا عزيزي في سيرفرنا المتواضع  ... [ ${member}  ],
** WELCOME TO __Second Life RP  |  الحياة الثانية__ :video_game: .. ** 


 -للسواليف توجه الى الشات العام : <#616471329608171536>  .

-لقراءة قوانين الدسكورد البسيطه:  <#540311540549550110> .

-لقراءة قوانين سيرفر الحياه الواقعيه :  <#628626927707750411>📋 .


**`) 
}).catch(console.error)
})

                 client.on('message', message => {
            if (message.content === 'تخليني؟') {
              message.channel.sendFile("./1.gif");
            }
});

		 
	 
				
client.login(process.emv.BOT_TOKEN);