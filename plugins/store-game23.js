let handler = async (m, { conn }) => {
          //-----PRICE
let ff1 = 'BCA'
let ff2 = 'DANA'
let ff3 = 'OVO'
let ff4 = 'SHOPEEPAY'
let ff5 = 'QRIS'
let info = 
         ✨PAYMENT✨
*BCA  : 5475457975*    ${ff1}
*DANA : 087878823108*  ${ff2}
*OVO  : 087878823108*  ${ff3}
*SHOPEEPAY : 087878823108*  ${ff4}
*QRIS : (TANYA ADMIN)* ${ff5}

    *👑 IZDIHAAR STORE 👑* `
const sections = [
       {
   	title: `${htjava} list payment ✦-------`,
     rows: [  
     {title: "payment BCA", rowId: '.order *Top Up:* payment bca • BCA', description: 'PRICE: ' + ff1 + ', payment bca' },
     {title: "payment dana", rowId: '.order *Top Up:* payment dana • DANA', description: 'PRICE: ' + ff2 + ', payment dana' }
     {title: "payment OVO", rowId: '.order *Top Up:* payment ovo • OVO', description: 'PRICE: ' + ff3 + ', payment ovo' }
     {title: "payment shopeepay", rowId: '.order *Top Up:* payment shopeepay • SHOPEERPAY', description: 'PRICE: ' + ff4 + ', payment shopeepay' },
     {title: "payment qris", rowId: '.order *Top Up:* payment qris •  QRIS', description: 'PRICE: ' + ff5 + ', payment qris' },
       ]
   },
]        
const listMessage = {
  text: info,
  footer: botdate,
  mentions: await conn.parseMention(info),
 title: wm,
 buttonText: "Click Here!",
 sections   
}
await conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(info), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['game23']
handler.command = /^(game23)$/i
export default handler
