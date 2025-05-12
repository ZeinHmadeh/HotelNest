function searchRedirect() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const pages = {
      "byblos": "byblos.html",
      "jbeil": "byblos.html",
      "beirut": "beirut.html",
      "batroun": "batroun.html",
      "sour": "tyre.html",
      "tyre": "tyre.html",
      "signup": "signup.html",
      "login": "login.html",
      "contact": "contact.html",
      "be batroun": "hotels/bebatroun.html",
      "batroun village club": "hotels/batrounvclub.html",
      "rest house": "hotels/resthouse.html",
      "raouche arjaan": "hotels/raouchearjaan.html",
      "platinum": "hotels/platinum.html",
      "lancaster": "hotels/lancaster.html",
      "byblos sur mer": "hotels/byblossurmer.html",
      "aleph boutique": "hotels/alephboutique.html"
    };
    if (pages[query]) {
      window.location.href = pages[query];
    } else {
      alert("No matching page found.");
    }
  }
  function msgsent() {
    alert("Message Sent Successfully.");
  }