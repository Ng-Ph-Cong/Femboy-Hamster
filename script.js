const button_xem_ngay_tap_1 = document.getElementById("ButtonTap1")
const button_xem_ngay_tap_2 = document.getElementById("ButtonTap2")
const ButtonCheck = document.getElementById("ButtonCheck")
const InputSo = document.getElementById("NumberInput")

const Ketqua_ktra = document.getElementById("KetQuaCheck")

const button_xemsex = document.getElementById("TestButton")
const lon = document.getElementById("Lon")

button_xem_ngay_tap_1.addEventListener("click", function() {
    window.location.href = "tap1.html"
});

button_xem_ngay_tap_2.addEventListener("click", function() {
    window.location.href = "tap2.html"
})

ButtonCheck.addEventListener("click", function()
{
    Ketqua_ktra.textContent = KtraSonguyento() ? "Là số nguyên tố" : "Không là số nguyên tố"
})

var KtraSonguyento = function()
{
    let SoByInput = Number(InputSo.value);
    for (var i = 2; i < SoByInput; i++)
    {
        if (SoByInput % i == 0)
        {
            return false

        }
    }
    if (SoByInput < 2)
    {
        return false
    }
    else
    {
        return true
    }
}

