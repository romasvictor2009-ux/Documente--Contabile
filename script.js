function showInfo(type) {

    let title = "";
    let text = "";

    if (type === "factura") {
        title = "🧾 Factura";
        text = "Factura este documentul care atestă vânzarea de bunuri sau servicii.";
    }

    else if (type === "chitanta") {
        title = "💰 Chitanța";
        text = "Chitanța dovedește încasarea unei sume de bani în numerar.";
    }

    else if (type === "bon") {
        title = "🛒 Bon Fiscal";
        text = "Bonul fiscal este emis de casa de marcat pentru tranzacții comerciale.";
    }

    else if (type === "ordin") {
        title = "🏦 Ordin de Plată";
        text = "Ordinul de plată este folosit pentru transfer bancar între conturi.";
    }

    document.getElementById("infoBox").innerHTML =
        `<h2>${title}</h2><p>${text}</p>`;
}
