/*let handler = async m => {
let krtu = `Kartu Intro`
m.reply(`
    *「 SELAMAT DATANG 」*
*👑KABUL STORE || READY👑* 
 Jangan Lupa Baca Deskripsi Group
 Sebelum Bertindak 

Untuk Melihat Semua Pricelist/pembayaran
Ketik /list Semoga Betah Store Kami🙏
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i
export default handler */
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let krtu = `
   *「 SELAMAT DATANG 」*
*👑KABUL STORE || READY👑* 
 Jangan Lupa Baca Deskripsi Group
 Sebelum Bertindak 

Untuk Melihat Semua Pricelist/pembayaran
Ketik /list Semoga Betah Store Kami🙏
`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/kabull_store",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'SELAMAT DATANG ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i
export default handler
