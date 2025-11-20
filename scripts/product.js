/*
 * Configuración de pago con MercadoPago para la página de producto.
 * Reemplaza los marcadores con tus credenciales y endpoint reales antes de publicar.
 */

const MERCADO_PAGO_PUBLIC_KEY = "REEMPLAZA_CON_TU_PUBLIC_KEY_DE_MERCADOPAGO"; // <- Inserta aquí tu Public Key real
const CREATE_PREFERENCE_ENDPOINT = "/api/mercadopago/preference"; // <- Actualiza con el endpoint de tu servidor

let mercadoPagoInstance = null;

/**
 * Inicializa el SDK de MercadoPago con la clave pública configurada.
 */
function initMercadoPago() {
  if (!window.MercadoPago) {
    console.error("MercadoPago SDK no disponible");
    return;
  }

  if (!MERCADO_PAGO_PUBLIC_KEY || MERCADO_PAGO_PUBLIC_KEY.includes("REEMPLAZA")) {
    showPaymentAlert(
      "Por favor, configura tu Public Key real de MercadoPago en el archivo scripts/product.js para activar el checkout.",
      "warning"
    );
    return;
  }

  mercadoPagoInstance = new MercadoPago(MERCADO_PAGO_PUBLIC_KEY, {
    locale: "es-PE",
  });
}

/**
 * Llama a tu backend para crear una preferencia de pago en MercadoPago.
 * Devuelve el ID de preferencia necesario para abrir el checkout.
 */
async function createPreference() {
  try {
    const response = await fetch(CREATE_PREFERENCE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Incluye los datos del producto que tu backend necesita para generar la preferencia
        title: "PDF Premium: Anatomía para Ingresantes",
        quantity: 1,
        currency_id: "PEN",
        unit_price: 59.9,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error al crear preferencia: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.id) {
      throw new Error("La respuesta no contiene un ID de preferencia válido");
    }

    return data.id;
  } catch (error) {
    console.error(error);
    showPaymentAlert(
      "No pudimos iniciar el pago con MercadoPago. Vuelve a intentarlo o contáctanos.",
      "error"
    );
    return null;
  }
}

/**
 * Inicia el flujo de checkout de MercadoPago una vez que existe una preferencia válida.
 */
async function startCheckout() {
  if (!mercadoPagoInstance) {
    showPaymentAlert("Configura tu clave pública de MercadoPago para habilitar esta opción.", "warning");
    return;
  }

  const preferenceId = await createPreference();
  if (!preferenceId) return;

  mercadoPagoInstance.checkout({
    preference: {
      id: preferenceId,
    },
    autoOpen: true,
  });

  showPaymentAlert("Se abrió una ventana de MercadoPago para finalizar tu pago.");
}

/**
 * Muestra mensajes de estado sobre el proceso de pago.
 * @param {string} message
 * @param {"success" | "error" | "warning"} type
 */
function showPaymentAlert(message, type = "success") {
  const alert = document.getElementById("payment-alert");
  if (!alert) return;

  alert.textContent = message;
  alert.className = `payment-alert payment-alert--${type}`;
}

function setupEventListeners() {
  const buyButton = document.querySelector('[data-action="mp-buy"]');
  if (!buyButton) return;

  buyButton.addEventListener("click", () => {
    showPaymentAlert("Conectando con MercadoPago...", "success");
    startCheckout();
  });
}

function initProductPage() {
  initMercadoPago();
  setupEventListeners();
  updateYear();
}

function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", initProductPage);
