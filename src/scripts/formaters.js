export function dateFormatter(fechaOriginal) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date= new Date(fechaOriginal);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${month} ${day < 10 ? '0' + day : day} ${year}`;
}

// Uso del código
const fechaOriginal = "Fri Jul 15 2022 02:00:00 GMT+0200 (hora de verano de Europa central)";
const fechaFormateada = dateFormatter(fechaOriginal);



