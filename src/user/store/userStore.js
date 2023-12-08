import { ref } from "vue";
import { defineStore } from "pinia";
// import { useToast } from "primevue/usetoast";
// const toast = useToast();

export const products = defineStore("product", () => {
  const product_list = ref([]);
  const srt = ref([]);
  const favorites = ref([]);
  // ////////////////////// Telgram bot ///////////////////////
  // //bot token
  // let telegram_bot_id = "6329751538:AAFfW0B-vuOCDejyCL1cKaB8HBtq5zAJH_o"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
  // //chat id
  // let chat_id = 993812375; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
  // let Maxsulot, Necha, Umumiynarxi;
  // let ready = function() {
  //   for (let item of ff.value) {
  //     let price3 = (total += item.price * item.count);
  // console.log(item.title);
  // Maxsulot = item.title,
  // Necha = item.count,
  // Umumiynarxi = price3

  //   }
  // //   let message = "Maxsulotlar: " + Maxsulot + "\nNecha: " + Necha + "\nUmumiynarxi: " + Umumiynarxi;

  // };
  // let message = "Maxsulotlar: " + Maxsulot + "\nNecha: " + Necha + "\nUmumiynarxi: " + Umumiynarxi;

  // let sendtelegram = function() {

  //   toast.add({ severity: 'success', summary: 'Xaridingiz uchun raxmat', detail: `Maxsulotlar yig'lmoqda`, life: 4000 });
  //     ready();
  //     let settings = {
  //         "async": true,
  //         "crossDomain": true,
  //         "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
  //         "method": "POST",
  //         "headers": {
  //             "Content-Type": "application/json",
  //             "cache-control": "no-cache"
  //         },
  //         "data": JSON.stringify({
  //             "chat_id": chat_id,
  //             "text": message

  //         })
  //     };
  //     localStorage.clear()
  //     $.ajax(settings).done(function(response) {
  //         console.log(response);
  //     });
  //     return false;

  // };

  return { product_list, srt, favorites };
});
