import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//-----PRICE
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs} WIB`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let wibb = `${wktuwib}`
let info = `
🔞 *MP4 BOKEP*
Silahkan pilih list menu bokep dibawah ini
 Jangan comly ya:v❗`
  /*    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	{title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },*/
const sections = [{
title: `⟥⟝⟢⟨🔞 MENU BOKEP ⟩⟣⟞⟤`,
rows: [
        {title: "🔞 • BOKEP COLMEK1", rowId: ".bokep1"},
      	{title: "🔞 • BOKEP COLMEK2", rowId: ".bokep2"},
        {title: "🔞 • BOKEP COLMEK3", rowId: ".bokep3"},
        {title: "🔞 • BOKEP COLMEK4", rowId: ".bokep4"},
        {title: "🔞 • BOKEP COLMEK5", rowId: ".bokep5"},
        {title: "🔞 • BOKEP COLMEK6", rowId: ".bokep6"},
        {title: "🔞 • BOKEP COLEMK7", rowId: ".bokep7"},
        {title: "🔞 • BOKEP COLMEK8", rowId: ".bokep8"},
        {title: "🔞 • BOKEP COLMEK9", rowId: ".bokep9"},
        {title: "🔞 • BOKEP COLEMK10", rowId: ".bokep10"},
        {title: "🔞 • BOKEP COLMEK11", rowId: ".bokep11"},
        {title: "🔞 • BOKEP COLMEK12", rowId: ".bokep12"},
        {title: "🔞 • BOKEP COLMEK13", rowId: ".bokep13"},
        {title: "🔞 • BOKEP COLMEK14", rowId: ".bokep14"},
        {title: "🔞 • BOKEP COLMEK15", rowId: ".bokep15"},       
        {title: "🔞 • BOKEP COLMEK16", rowId: ".bokep16"},
        {title: "🔞 • BOKEP COLMEK17", rowId: ".bokep17"},    
        {title: "🔞 • BOKEP COLMEK18", rowId: ".bokep18"},
      	{title: "🔞 • BOKEP COLMEK19", rowId: ".bokep19"},
        {title: "🔞 • BOKEP COLMEK20", rowId: ".bokep20"},
        {title: "🔞 • BOKEP COLMEK21", rowId: ".game20"},       
]},
]

const listMessage = {
  text: info,
  footer:  `Hai kak ${name}\n⌚ : ${wibb}\n📆 : ${week} ${date}`,
  title: '⬒ ───⟢⟨ *LISTBOKEP* ⟩⟣─── ⬒',
  buttonText: "Click Here!",
  sections
}

let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
  case 'sewabottt': 
  let teks = `*${htki} ${command.toUpperCase()} ${htka}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
   /* m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')*/
  break
  
  default:
  if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
  throw false
  }
   m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')
}

handler.help = ['premium', 'bokepmenu']
handler.tags = ['premium' ]
handler.command = /^(bokepmenu|menubokep)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
