const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5Pa2hiOWpha2pzZjhKTXVDZWk1WG5pRHJTNFhFMDNyQU1PWjVDcHRFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0xhVXVYWWFiRW8zajFxd1RYWWlvc0pacUNhWXhtK0Q4Rk9iRDk0TXNTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUFZZU2NvMUlCcnlSenp6OWp6N0gxNlQ4Tmg2UEVpL2gwcXNTU3U2UzJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlVVYwTlorYVh0bjNsYk9VOUJYWFBTR1VoNVFKbk9iV0FHSE1HeEY5R0ZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdPMFRsTlcxK21ZVE5HVlhDaVVRYk5qTThtcml2MjlPVVZhRlJsdVBlM2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxaaDNRR1c3SUhZNi9JRTZlNUxUODR5ZFlOeHdOV05GVTFwaFJJQysreDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xPTE9iQkFsS2ZaeDJ2WEFPcGVuOTNuWElvN3c2ZWN3OFhid0RKTTkyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRExJM01pMUU5KzFYS0RYUEpMR3U2dkVVYWRoSUx4ZHAxeHNwendkOWRDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNaK3Jvd3dSdmg4c2t6MmNZK2k3ZmlKbnBYVTdlSEEyTWFPMjlqY05ZdXMrSmNDdGlMbjl3eUh6WDNMTnhac2o5S3paVUpCZkZnaU1tdzB3b0M1c0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6ImwxMHNJc0VoN0ZkN2pOdjlVNlRJcGFIVlFLc1Y3RmJvR01QK1MvOW5TTVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik56cUp6TjZNUl9pUk1hMXNRWWFNWXciLCJwaG9uZUlkIjoiZTU2OWVmN2EtNGJjMy00NjZhLWEwNDQtYTQxZjA5MTE5NWMzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx0MVlhdWU5UU1ma1V3Nk9IeDR3VlVvK2xWST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMd1cvaGV4bjJKVTAyeWN0TDcvWFhzV3lybFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRVRESEZWWUoiLCJtZSI6eyJpZCI6Ijk0Nzg4NjI5NDM1OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTmF5YW5hIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZXh4ODBHRU55VnE3SUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1OFZPSzZQR3BiWDJoTENic2MyN1BHSWlobGliazhEMWROb3Y4UStHYTBzPSIsImFjY291bnRTaWduYXR1cmUiOiJVT2lvWXRBbVlPeTY5L1JDRVcxa3Y5VGNWQzN4ZFNWams2alRCNUI0RDcwYkNzVHE2by9RemVoZ3I5R0lUTDR2L2RQWUIvYmN6MHZpcEFtMXFSdFhCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT09iVHhGMzVueHM2OGo1b1lObzlObDE2Ni9aZ0pBQjNBaThmdGRGcVM3L04wSnlVczl4RWtZRDhDUHFSTFJWc3RGLzdqMEN2dHdJNTMvb0ZsK0hZREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4ODYyOTQzNTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVmRlRpdWp4cVcxOW9Td203SE51enhpSW9aWW01UEE5WFRhTC9FUGhtdEwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTYxNzc2NDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzBTIn0=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝚂𝚎𝚗𝚎𝚜𝚑⃝㋡",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "0784666782",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || '𝚂𝚎𝚗𝚎𝚜𝚑⃝',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://static.animecorner.me/2023/08/op2.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
