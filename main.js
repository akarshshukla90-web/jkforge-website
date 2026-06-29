/* ==========================================================================
   ASME/ANSI Dimension Databases (Transcribed from PDF Catalog)
   ========================================================================== */
const dimensionDatabase = {
    elbow: {
        label: "Buttweld Fittings (ASME B16.9)",
        sizes: ["1/2\"", "1\"", "2\"", "4\"", "8\"", "12\""],
        classes: ["SCH 40 (Standard)", "SCH 80 (Extra Strong)", "SCH 160", "SCH XXS"],
        specs: {
            "1/2\"_SCH 40 (Standard)": { "Outside Diameter (D)": "21.3 mm", "Center to Face (A)": "38.0 mm", "Wall Thickness (T)": "2.77 mm", "Standards": "ASME B16.9 / ASTM A234" },
            "1/2\"_SCH 80 (Extra Strong)": { "Outside Diameter (D)": "21.3 mm", "Center to Face (A)": "38.0 mm", "Wall Thickness (T)": "3.73 mm", "Standards": "ASME B16.9 / ASTM A234" },
            "1/2\"_SCH 160": { "Outside Diameter (D)": "21.3 mm", "Center to Face (A)": "38.0 mm", "Wall Thickness (T)": "4.78 mm", "Standards": "ASME B16.9 / ASTM A234" },
            "1/2\"_SCH XXS": { "Outside Diameter (D)": "21.3 mm", "Center to Face (A)": "38.0 mm", "Wall Thickness (T)": "7.47 mm", "Standards": "ASME B16.9 / ASTM A234" },
            
            "1\"_SCH 40 (Standard)": { "Outside Diameter (D)": "33.4 mm", "Center to Face (A)": "38.0 mm", "Wall Thickness (T)": "3.38 mm", "Standards": "ASME B16.9 / ASTM A234" },
            "1\"_SCH 80 (Extra Strong)": { "Outside Diameter (D)": "33.4 mm", "Center to Face (A)": "38.0 mm", "Wall Thickness (T)": "4.55 mm", "Standards": "ASME B16.9 / ASTM A234" },
            "1\"_SCH 160": { "Outside Diameter (D)": "33.4 mm", "Center to Face (A)": "38.0 mm", "Wall Thickness (T)": "6.35 mm", "Standards": "ASME B16.9 / ASTM A234" },
            
            "2\"_SCH 40 (Standard)": { "Outside Diameter (D)": "60.3 mm", "Center to Face (A)": "76.0 mm", "Wall Thickness (T)": "3.91 mm", "Standards": "ASME B16.9 / ASTM A234" },
            "2\"_SCH 80 (Extra Strong)": { "Outside Diameter (D)": "60.3 mm", "Center to Face (A)": "76.0 mm", "Wall Thickness (T)": "5.54 mm", "Standards": "ASME B16.9 / ASTM A234" },
            "2\"_SCH 160": { "Outside Diameter (D)": "60.3 mm", "Center to Face (A)": "76.0 mm", "Wall Thickness (T)": "8.74 mm", "Standards": "ASME B16.9 / ASTM A234" },
            
            "4\"_SCH 40 (Standard)": { "Outside Diameter (D)": "114.3 mm", "Center to Face (A)": "152.0 mm", "Wall Thickness (T)": "6.02 mm", "Standards": "ASME B16.9 / ASTM A234" },
            "4\"_SCH 80 (Extra Strong)": { "Outside Diameter (D)": "114.3 mm", "Center to Face (A)": "152.0 mm", "Wall Thickness (T)": "8.56 mm", "Standards": "ASME B16.9 / ASTM A234" },
            
            "8\"_SCH 40 (Standard)": { "Outside Diameter (D)": "219.1 mm", "Center to Face (A)": "305.0 mm", "Wall Thickness (T)": "8.18 mm", "Standards": "ASME B16.9 / ASTM A234" },
            "8\"_SCH 80 (Extra Strong)": { "Outside Diameter (D)": "219.1 mm", "Center to Face (A)": "305.0 mm", "Wall Thickness (T)": "12.70 mm", "Standards": "ASME B16.9 / ASTM A234" },
            
            "12\"_SCH 40 (Standard)": { "Outside Diameter (D)": "323.9 mm", "Center to Face (A)": "457.0 mm", "Wall Thickness (T)": "9.53 mm", "Standards": "ASME B16.9 / ASTM A234" },
            "12\"_SCH 80 (Extra Strong)": { "Outside Diameter (D)": "323.9 mm", "Center to Face (A)": "457.0 mm", "Wall Thickness (T)": "17.48 mm", "Standards": "ASME B16.9 / ASTM A234" }
        }
    },
    forged: {
        label: "Forged Socketweld Fittings (ASME B16.11)",
        sizes: ["1/2\"", "1\"", "2\"", "4\""],
        classes: ["3000 LBS Rating", "6000 LBS Rating"],
        specs: {
            "1/2\"_3000 LBS Rating": { "Body Outside Diameter (D)": "33.0 mm", "Center to End (A)": "22.0 mm", "Socket Depth (B)": "10.0 mm", "Wall Thickness (Min)": "3.18 mm", "Material Spec": "ASTM A105 / A350 LF2" },
            "1/2\"_6000 LBS Rating": { "Body Outside Diameter (D)": "38.0 mm", "Center to End (A)": "25.0 mm", "Socket Depth (B)": "10.0 mm", "Wall Thickness (Min)": "6.35 mm", "Material Spec": "ASTM A105 / A350 LF2" },
            
            "1\"_3000 LBS Rating": { "Body Outside Diameter (D)": "46.0 mm", "Center to End (A)": "29.0 mm", "Socket Depth (B)": "13.0 mm", "Wall Thickness (Min)": "4.87 mm", "Material Spec": "ASTM A105 / A350 LF2" },
            "1\"_6000 LBS Rating": { "Body Outside Diameter (D)": "57.0 mm", "Center to End (A)": "35.0 mm", "Socket Depth (B)": "13.0 mm", "Wall Thickness (Min)": "9.09 mm", "Material Spec": "ASTM A105 / A350 LF2" },
            
            "2\"_3000 LBS Rating": { "Body Outside Diameter (D)": "75.0 mm", "Center to End (A)": "48.0 mm", "Socket Depth (B)": "16.0 mm", "Wall Thickness (Min)": "6.93 mm", "Material Spec": "ASTM A105 / A350 LF2" },
            "2\"_6000 LBS Rating": { "Body Outside Diameter (D)": "84.0 mm", "Center to End (A)": "52.0 mm", "Socket Depth (B)": "16.0 mm", "Wall Thickness (Min)": "11.51 mm", "Material Spec": "ASTM A105 / A350 LF2" },
            
            "4\"_3000 LBS Rating": { "Body Outside Diameter (D)": "137.0 mm", "Center to End (A)": "88.0 mm", "Socket Depth (B)": "19.0 mm", "Wall Thickness (Min)": "11.18 mm", "Material Spec": "ASTM A105 / A350 LF2" },
            "4\"_6000 LBS Rating": { "Body Outside Diameter (D)": "152.0 mm", "Center to End (A)": "95.0 mm", "Socket Depth (B)": "19.0 mm", "Wall Thickness (Min)": "18.52 mm", "Material Spec": "ASTM A105 / A350 LF2" }
        }
    },
    flange: {
        label: "ASME B16.5 Weldneck Flanges",
        sizes: ["1/2\"", "1\"", "2\"", "4\"", "8\""],
        classes: ["Class 150", "Class 300", "Class 600"],
        specs: {
            "1/2\"_Class 150": { "Flange Diameter (O)": "88.9 mm", "Flange Thickness (C)": "11.1 mm", "Bolt Circle Dia (A)": "60.3 mm", "Bolt Holes (No.)": "4", "Dia of Bolt Holes": "15.9 mm", "Standards": "ASME B16.5" },
            "1/2\"_Class 300": { "Flange Diameter (O)": "95.2 mm", "Flange Thickness (C)": "14.3 mm", "Bolt Circle Dia (A)": "66.7 mm", "Bolt Holes (No.)": "4", "Dia of Bolt Holes": "15.9 mm", "Standards": "ASME B16.5" },
            "1/2\"_Class 600": { "Flange Diameter (O)": "95.2 mm", "Flange Thickness (C)": "14.3 mm", "Bolt Circle Dia (A)": "66.7 mm", "Bolt Holes (No.)": "4", "Dia of Bolt Holes": "15.9 mm", "Standards": "ASME B16.5" },
            
            "1\"_Class 150": { "Flange Diameter (O)": "107.9 mm", "Flange Thickness (C)": "14.3 mm", "Bolt Circle Dia (A)": "79.4 mm", "Bolt Holes (No.)": "4", "Dia of Bolt Holes": "15.9 mm", "Standards": "ASME B16.5" },
            "1\"_Class 300": { "Flange Diameter (O)": "123.8 mm", "Flange Thickness (C)": "17.5 mm", "Bolt Circle Dia (A)": "88.9 mm", "Bolt Holes (No.)": "4", "Dia of Bolt Holes": "19.0 mm", "Standards": "ASME B16.5" },
            
            "2\"_Class 150": { "Flange Diameter (O)": "152.4 mm", "Flange Thickness (C)": "19.0 mm", "Bolt Circle Dia (A)": "120.6 mm", "Bolt Holes (No.)": "4", "Dia of Bolt Holes": "19.0 mm", "Standards": "ASME B16.5" },
            "2\"_Class 300": { "Flange Diameter (O)": "165.1 mm", "Flange Thickness (C)": "22.2 mm", "Bolt Circle Dia (A)": "127.0 mm", "Bolt Holes (No.)": "8", "Dia of Bolt Holes": "19.0 mm", "Standards": "ASME B16.5" },
            "2\"_Class 600": { "Flange Diameter (O)": "165.1 mm", "Flange Thickness (C)": "25.4 mm", "Bolt Circle Dia (A)": "127.0 mm", "Bolt Holes (No.)": "8", "Dia of Bolt Holes": "19.0 mm", "Standards": "ASME B16.5" },
            
            "4\"_Class 150": { "Flange Diameter (O)": "228.6 mm", "Flange Thickness (C)": "23.8 mm", "Bolt Circle Dia (A)": "190.5 mm", "Bolt Holes (No.)": "8", "Dia of Bolt Holes": "19.0 mm", "Standards": "ASME B16.5" },
            "4\"_Class 300": { "Flange Diameter (O)": "254.0 mm", "Flange Thickness (C)": "31.8 mm", "Bolt Circle Dia (A)": "200.0 mm", "Bolt Holes (No.)": "8", "Dia of Bolt Holes": "22.2 mm", "Standards": "ASME B16.5" },
            
            "8\"_Class 150": { "Flange Diameter (O)": "342.9 mm", "Flange Thickness (C)": "28.6 mm", "Bolt Circle Dia (A)": "298.4 mm", "Bolt Holes (No.)": "8", "Dia of Bolt Holes": "22.2 mm", "Standards": "ASME B16.5" },
            "8\"_Class 300": { "Flange Diameter (O)": "381.0 mm", "Flange Thickness (C)": "41.3 mm", "Bolt Circle Dia (A)": "330.2 mm", "Bolt Holes (No.)": "12", "Dia of Bolt Holes": "25.4 mm", "Standards": "ASME B16.5" }
        }
    }
};

// Visualizer description helper
const visualizerSpecs = {
    elbow: {
        title: "90° Long Radius Elbow",
        desc: "Buttweld elbows are used to alter the flow direction in pipeline systems. They are precision forged to provide smooth, low-friction transitions.",
        standards: "ANSI B16.9 / B16.28 / MSS SP-43",
        sizes: "1/4\" to 24\" Seamless, 8\" to 42\" Welded"
    },
    forged: {
        title: "Equal Tee Fitting (Forged)",
        desc: "High-pressure forged socketweld tee used to split pipeline channels. Forged to ASTM A105 standard to handle high structural pressures.",
        standards: "ASME B16.11 / MSS SP-97",
        sizes: "1\" NB to 4\" NB (Socketweld & Threaded)"
    },
    flange: {
        title: "Weldneck Flange",
        desc: "Weld neck flanges are joined by butt welding to pipe lines. Preferred for severe service conditions (high pressure, temperature, or vacuum setups).",
        standards: "ASME B16.5 / ANSI B16.5",
        sizes: "1/2\" to 24\" NB (Forged Class 150# to 2500#)"
    }
};

/* ==========================================================================
   State & App Variables
/* ==========================================================================
   Security — HTML Sanitiser (prevent XSS via innerHTML injection)
   Always escape user-supplied strings before inserting into the DOM.
   ========================================================================== */
function sanitiseHTML(str) {
    if (str === null || str === undefined) return '';
    const div = document.createElement('div');
    div.textContent = String(str);
    return div.innerHTML; // Returns HTML-escaped version
}

/* ==========================================================================
   Phone Number Validator — accepts Indian / international formats only
   ========================================================================== */
function isValidPhone(phone) {
    // Allows +91 format, 10-digit Indian, or international E.164
    return /^[+]?[\d\s\-().]{7,20}$/.test(phone.trim());
}

let rfqItemsList = [];
let visualizerSceneData = null;

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initThreeJSVisualizer();
    initB2BCalculator();
    initMultiStepRFQ();
});

/* ==========================================================================
   Responsive Navigation
   ========================================================================== */
function initNavigation() {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        const isOpen = navMenu.classList.contains("open");
        // Use class swap instead of innerHTML to avoid XSS
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            const icon = navToggle.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-bars';
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

/* ==========================================================================
   B2B Dimension Calculator Setup
   ========================================================================== */
function initB2BCalculator() {
    const categorySelect = document.getElementById("calc-category");
    const sizeSelect = document.getElementById("calc-size");
    const classSelect = document.getElementById("calc-class");
    const resultsTable = document.getElementById("calculator-results-table");
    const addToRfqBtn = document.getElementById("add-to-rfq-btn");
    const calcWeightBtn = document.getElementById("calcWeightBtn");
    const weightQty = document.getElementById("weightQty");
    const weightResult = document.getElementById("weightResult");

    categorySelect.addEventListener("change", populateSelectors);
    sizeSelect.addEventListener("change", renderCalculatedDimensions);
    classSelect.addEventListener("change", renderCalculatedDimensions);

    if (calcWeightBtn) {
        calcWeightBtn.addEventListener("click", () => {
            const qty = parseInt(weightQty.value) || 1;
            const size = parseFloat(sizeSelect.value) || 1;
            const weight = (size * size * 0.5 * qty).toFixed(2); // Simple rough formula mockup
            weightResult.textContent = `Total Est. Weight: ${weight} kg`;
            weightResult.style.animation = "none";
            setTimeout(() => weightResult.style.animation = "pulse 0.5s ease", 10);
        });
    }

    // Initial load
    populateSelectors();

    function populateSelectors() {
        const category = categorySelect.value;
        const db = dimensionDatabase[category];
        
        // Populate sizes dropdown
        sizeSelect.innerHTML = db.sizes.map(size => `<option value="${size.replace(/"/g, '&quot;')}">${size}</option>`).join('');
        
        // Populate class/schedules dropdown
        classSelect.innerHTML = db.classes.map(c => `<option value="${c}">${c}</option>`).join('');

        updateVisualizerSpecsPanel(category);
        renderCalculatedDimensions();
    }

    function updateVisualizerSpecsPanel(category) {
        const specs = visualizerSpecs[category];
        document.getElementById("detail-title").textContent = specs.title;
        document.getElementById("detail-desc").textContent = specs.desc;
        
        const list = document.querySelector(".detail-specs");
        list.innerHTML = `
            <li><strong>Standards:</strong> ${specs.standards}</li>
            <li><strong>Common Sizes:</strong> ${specs.sizes}</li>
        `;
    }

    function renderCalculatedDimensions() {
        const category = categorySelect.value;
        const size = sizeSelect.value;
        const rating = classSelect.value;
        const dbKey = `${size}_${rating}`;
        
        const specsMap = dimensionDatabase[category].specs[dbKey];
        
        if (!specsMap) {
            resultsTable.innerHTML = '';
            const msg = document.createElement('div');
            msg.style.cssText = 'padding:20px;color:var(--text-muted);text-align:center;font-size:0.9rem;';
            msg.textContent = 'Rating combination not available for this size. Please select another.';
            resultsTable.appendChild(msg);
            addToRfqBtn.disabled = true;
            return;
        }

        addToRfqBtn.disabled = false;

        // Trigger 3D visualizer update with new specifications
        if (window.loadProductMeshFunc) {
            window.loadProductMeshFunc(category, specsMap);
        }

        // Render dimensions list — use textContent (not innerHTML) for each cell value
        const grid = document.createElement('div');
        grid.className = 'dim-grid-table';
        for (const [key, val] of Object.entries(specsMap)) {
            const labelCell = document.createElement('div');
            labelCell.className = 'dim-label';
            labelCell.textContent = key;    // textContent: no XSS risk

            const valueCell = document.createElement('div');
            valueCell.className = 'dim-value';
            valueCell.textContent = val;    // textContent: no XSS risk

            grid.appendChild(labelCell);
            grid.appendChild(valueCell);
        }
        resultsTable.innerHTML = '';
        resultsTable.appendChild(grid);
    }

    // Add selected item directly to procurement RFQ table
    addToRfqBtn.addEventListener("click", () => {
        const categoryName = categorySelect.options[categorySelect.selectedIndex].text.split('(')[0].trim();
        const size = sizeSelect.value;
        const rating = classSelect.value;
        
        const itemDesc = `${size} ${rating} ${categoryName}`;
        addRfqItem(itemDesc, "ASTM A105 Carbon Steel", 1);
        
        // Smooth scroll to RFQ section
        document.getElementById("rfq").scrollIntoView({ behavior: 'smooth' });
    });
}

/* ==========================================================================
   Multi-Step RFQ Panel Logic
   ========================================================================== */
function initMultiStepRFQ() {
    const tableBody = document.getElementById("rfq-items-body");
    const manualAddBtn = document.getElementById("manual-add-btn");
    const nextStep1Btn = document.getElementById("btn-next-step-1");
    const prevStep2Btn = document.getElementById("btn-prev-step-2");
    
    // Steps panels
    const step1Panel = document.getElementById("rfq-step-1");
    const step2Panel = document.getElementById("rfq-step-2");
    const step3Panel = document.getElementById("rfq-step-3");
    
    // Step indicators
    const ind1 = document.getElementById("step-ind-1");
    const ind2 = document.getElementById("step-ind-2");
    const ind3 = document.getElementById("step-ind-3");

    // Contact Form Submission
    const contactForm = document.getElementById("rfq-contact-form");
    const downloadPdfBtn = document.getElementById("btn-download-pdf");
    const resetRfqBtn = document.getElementById("btn-reset-rfq");

    // Manual items inputs
    const manualDesc = document.getElementById("manual-desc");
    const manualMaterial = document.getElementById("manual-material");
    const manualQty = document.getElementById("manual-qty");

    manualAddBtn.addEventListener("click", () => {
        const desc = manualDesc.value.trim();
        const mat  = manualMaterial.value;
        const qty  = Math.min(9999, Math.max(1, parseInt(manualQty.value) || 1));

        if (!desc) {
            alert("Please enter a product description.");
            return;
        }
        if (desc.length > 300) {
            alert("Description is too long (max 300 characters).");
            return;
        }

        addRfqItem(desc, mat, qty);
        manualDesc.value = "";
        manualQty.value  = "1";
    });

    nextStep1Btn.addEventListener("click", () => {
        step1Panel.classList.remove("active");
        step2Panel.classList.add("active");
        ind1.classList.remove("active");
        ind2.classList.add("active");
    });

    prevStep2Btn.addEventListener("click", () => {
        step2Panel.classList.remove("active");
        step1Panel.classList.add("active");
        ind2.classList.remove("active");
        ind1.classList.add("active");
    });

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Validate phone number before proceeding
        const phone = document.getElementById("rfq-phone").value;
        if (!isValidPhone(phone)) {
            alert("Please enter a valid phone number (digits, spaces, +, - only).");
            return;
        }

        // Generate RFQ reference number
        const refNum = `RFQ-2026-${Math.floor(10000 + Math.random() * 90000)}`;
        // Use textContent to avoid XSS when rendering back to DOM
        document.getElementById("rfq-ref-num").textContent = refNum;

        // Transition to step 3 (success)
        step2Panel.classList.remove("active");
        step3Panel.classList.add("active");
        ind2.classList.remove("active");
        ind3.classList.add("active");
    });

    downloadPdfBtn.addEventListener("click", simulatePDFDownload);
    
    resetRfqBtn.addEventListener("click", () => {
        rfqItemsList = [];
        updateRfqTable();
        
        step3Panel.classList.remove("active");
        step1Panel.classList.add("active");
        ind3.classList.remove("active");
        ind1.classList.add("active");
        
        contactForm.reset();
    });
}

function addRfqItem(desc, material, qty) {
    // Check if duplicate description/material exists, if so merge quantity
    const existing = rfqItemsList.find(i => i.desc === desc && i.material === material);
    if (existing) {
        existing.qty += qty;
    } else {
        rfqItemsList.push({ desc, material, qty });
    }
    updateRfqTable();
}

function removeRfqItem(index) {
    rfqItemsList.splice(index, 1);
    updateRfqTable();
}

function updateRfqTable() {
    const tableBody   = document.getElementById("rfq-items-body");
    const nextStep1Btn = document.getElementById("btn-next-step-1");

    tableBody.innerHTML = ''; // Clear first

    if (rfqItemsList.length === 0) {
        const emptyRow  = tableBody.insertRow();
        const emptyCell = emptyRow.insertCell();
        emptyCell.colSpan   = 4;
        emptyCell.className = 'empty-row';
        emptyCell.textContent = 'No items added yet. Use the B2B calculator above to add specifications or fill them manually.';
        nextStep1Btn.disabled = true;
        return;
    }

    nextStep1Btn.disabled = false;

    rfqItemsList.forEach((item, index) => {
        const row = tableBody.insertRow();

        // Description cell — textContent prevents XSS
        const descCell = row.insertCell();
        descCell.style.cssText = 'font-weight:600; color:var(--text-white);';
        descCell.textContent = item.desc;

        // Material cell — textContent prevents XSS
        const matCell = row.insertCell();
        matCell.textContent = item.material;

        // Qty cell — numeric input only
        const qtyCell  = row.insertCell();
        const qtyInput = document.createElement('input');
        qtyInput.type  = 'number';
        qtyInput.value = item.qty;
        qtyInput.min   = '1';
        qtyInput.max   = '9999';
        qtyInput.style.cssText = 'width:50px; background:rgba(6,10,18,0.5); border:1px solid var(--glass-border); color:white; padding:3px 5px; border-radius:4px;';
        qtyInput.addEventListener('change', () => {
            const v = Math.min(9999, Math.max(1, parseInt(qtyInput.value) || 1));
            rfqItemsList[index].qty = v;
            qtyInput.value = v;
        });
        qtyCell.appendChild(qtyInput);

        // Remove button — event listener, not inline onclick (no XSS risk)
        const rmCell = row.insertCell();
        rmCell.style.textAlign = 'center';
        const rmBtn = document.createElement('button');
        rmBtn.className = 'btn-remove-item';
        rmBtn.setAttribute('aria-label', 'Remove item');
        rmBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        rmBtn.addEventListener('click', () => removeRfqItem(index));
        rmCell.appendChild(rmBtn);
    });
}

// updateItemQty no longer needed — qty updates are handled via event listeners in updateRfqTable()
window.removeRfqItem = function(index) {
    removeRfqItem(index);
};

/* ==========================================================================
   Simulating PDF Download (Outputs specs summary to text download file)
   ========================================================================== */
function simulatePDFDownload() {
    const company = document.getElementById("rfq-company").value;
    const name = document.getElementById("rfq-name").value;
    const email = document.getElementById("rfq-email").value;
    const refNum = document.getElementById("rfq-ref-num").textContent;

    let content = `====================================================
               JK FORGE & FITTINGS
      TECHNICAL REQUEST FOR QUOTATION SHEET
====================================================
RFQ Reference: ${refNum}
Client Company: ${company}
Contact Representative: ${name}
Email Address: ${email}
Submission Date: ${new Date().toLocaleDateString()}

----------------------------------------------------
PROPOSAL LINE ITEMS REQUIRED:
----------------------------------------------------
`;
    
    rfqItemsList.forEach((item, idx) => {
        content += `${idx + 1}. Item Description: ${item.desc}
   Material Specification: ${item.material}
   Quantity Required: ${item.qty} units
----------------------------------------------------\n`;
    });

    content += `
Notes/Special parameters:
${document.getElementById("rfq-notes").value || "None specified."}

====================================================
A formal PDF quotation containing pricing, lead times, 
material test reports (MTR), and shipping quotes 
will be transmitted within 24 business hours.
Sales Office: Sales@jkforge.in | Vadodara, Gujarat
====================================================`;

    // Download file utility
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${refNum}_Specification_Sheet.txt`;
    link.click();
}

/* ==========================================================================
   Three.js 3D Viewport with Brushed Steel Shaders (Procedural)
   ========================================================================== */
function initThreeJSVisualizer() {
    const container = document.getElementById("threejs-canvas-container");
    const loader = document.getElementById("canvas-loader");
    
    if (typeof THREE === 'undefined') {
        container.innerHTML = `<div style="padding: 20px; text-align: center;">ThreeJS CDNs unavailable</div>`;
        loader.style.display = "none";
        return;
    }

    let scene, camera, renderer, controls;
    let currentMeshGroup = null;
    let currentCategory = "elbow";
    const calloutPoints = {
        pos1: new THREE.Vector3(),
        pos2: new THREE.Vector3(),
        pos3: new THREE.Vector3()
    };

    // Procedural Brushed Metal Normal Map Generator
    function createBrushedMetalNormalMap() {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = 'rgb(128, 128, 255)'; // Neutral Normal
        ctx.fillRect(0, 0, 256, 256);
        
        // Draw scratch normal variations
        for (let i = 0; i < 400; i++) {
            const x = Math.random() * 256;
            const y = Math.random() * 256;
            const length = Math.random() * 40 + 10;
            const xOffset = (Math.random() - 0.5) * 8;
            
            ctx.fillStyle = `rgb(${128 + xOffset}, 128, 255)`;
            ctx.fillRect(x, y, 1, length);
        }
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(2, 2);
        return texture;
    }

    // Procedural Cube Reflection Map Generator
    function createProceduralReflectionMap() {
        const sides = ['px', 'nx', 'py', 'ny', 'pz', 'nz'];
        const sideColors = {
            px: ['#0b1426', '#12203f'],
            nx: ['#0b1426', '#12203f'],
            py: ['#ffffff', '#bacad6'], // Light steel blue reflection
            ny: ['#0b1426', '#0b1426'],
            pz: ['#1b2e59', '#0b1426'],
            nz: ['#1b2e59', '#0b1426']
        };
        const images = [];

        sides.forEach(side => {
            const canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 128;
            const ctx = canvas.getContext('2d');

            const grad = ctx.createLinearGradient(0, 0, 0, 128);
            grad.addColorStop(0, sideColors[side][0]);
            grad.addColorStop(1, sideColors[side][1]);
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 128, 128);

            if (side === 'py') {
                ctx.beginPath();
                ctx.arc(64, 64, 30, 0, Math.PI * 2);
                ctx.fillStyle = '#ffffff';
                ctx.shadowBlur = 15;
                ctx.shadowColor = '#ffffff';
                ctx.fill();
            }
            images.push(canvas);
        });

        const cubeTexture = new THREE.CubeTexture(images.map(c => {
            const tex = new THREE.CanvasTexture(c);
            return tex.image;
        }));
        cubeTexture.needsUpdate = true;
        return cubeTexture;
    }

    try {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff); // Force Solid White Background

        camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
        camera.position.set(0, 3, 6);

        // WebGL Renderer - Solid Opaque Background (alpha: false)
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxDistance = 10;
        controls.minDistance = 2.0;

        // Lights — tuned for bright white background
        const ambient = new THREE.AmbientLight(0xd0dce8, 0.55);  // cool sky ambience
        scene.add(ambient);

        // Key light (top-right-front)
        const keyLight = new THREE.DirectionalLight(0xfff8f0, 1.4);
        keyLight.position.set(5, 9, 6);
        keyLight.castShadow = true;
        scene.add(keyLight);

        // Fill light (left-below) — negative fill to darken shadow side
        const fillLight = new THREE.DirectionalLight(0xc8d8e8, 0.35);
        fillLight.position.set(-6, -4, -3);
        scene.add(fillLight);

        // Rim / back light — brand blue-steel tint
        const rimLight = new THREE.DirectionalLight(0xbacad6, 0.55);
        rimLight.position.set(-3, 6, -8);
        scene.add(rimLight);

        // Interactive mouse-tracking point light
        const pointLight = new THREE.PointLight(0xe8f0f8, 1.1, 12);
        pointLight.position.set(0, 2, 3);
        scene.add(pointLight);

        // Brand-aligned floor grid
        const gridHelper = new THREE.GridHelper(8, 16, 0xbacad6, 0xe2e8f0);
        gridHelper.position.y = -2.0;
        gridHelper.material.opacity = 0.12;
        gridHelper.material.transparent = true;
        scene.add(gridHelper);

        // Remove loading overlay
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);

        // Bind global function so dimension dropdowns can change meshes
        window.loadProductMeshFunc = loadProductMesh;

        function updateCalloutPositions() {
            if (!currentMeshGroup || !camera || !renderer) return;

            const p1 = calloutPoints.pos1.clone();
            const p2 = calloutPoints.pos2.clone();
            const p3 = calloutPoints.pos3.clone();

            p1.applyMatrix4(currentMeshGroup.matrixWorld);
            p2.applyMatrix4(currentMeshGroup.matrixWorld);
            p3.applyMatrix4(currentMeshGroup.matrixWorld);

            p1.project(camera);
            p2.project(camera);
            p3.project(camera);

            const width = container.clientWidth;
            const height = container.clientHeight;

            const calls = [
                { vec: p1, el: document.getElementById("callout-1") },
                { vec: p2, el: document.getElementById("callout-2") },
                { vec: p3, el: document.getElementById("callout-3") }
            ];

            calls.forEach(item => {
                if (!item.el) return;
                const x = (item.vec.x * 0.5 + 0.5) * width;
                const y = (-(item.vec.y * 0.5) + 0.5) * height;

                item.el.style.left = `${x}px`;
                item.el.style.top = `${y}px`;

                // If element is behind the camera (z > 1), hide it
                if (item.vec.z > 1.0) {
                    item.el.style.opacity = "0";
                    item.el.style.pointerEvents = "none";
                } else {
                    item.el.style.opacity = "1";
                    item.el.style.pointerEvents = "auto";
                }
            });
        }

        function animate() {
            requestAnimationFrame(animate);
            if (currentMeshGroup && controls.state === -1) {
                currentMeshGroup.rotation.y += 0.003;
            }
            controls.update();
            renderer.render(scene, camera);
            updateCalloutPositions();
        }
        animate();

        // Mouse interactive point light tracking
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
            const y = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;
            pointLight.position.set(x * 4, y * 4 + 1.5, 2);
        });

        window.addEventListener("resize", () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });

    } catch (err) {
        console.error("Three.js visualizer failed:", err);
        loader.style.display = "none";
        container.innerHTML = `<div style="padding: 20px; text-align:center; color: var(--text-muted);">Failed to load 3D visualizer.</div>`;
    }

    function loadProductMesh(productType, specs) {
        if (currentMeshGroup) {
            scene.remove(currentMeshGroup);
            disposeHierarchy(currentMeshGroup);
        }

        currentMeshGroup = new THREE.Group();
        currentCategory = productType;

        // If specs not loaded, fetch default specs from DB
        if (!specs) {
            const db = dimensionDatabase[productType];
            const defaultSize = db.sizes[0];
            const defaultRating = db.classes[0];
            const dbKey = `${defaultSize}_${defaultRating}`;
            specs = db.specs[dbKey];
        }

        // Helper to parse values
        function getNum(valStr, defaultVal = 1) {
            if (!valStr) return defaultVal;
            const parsed = parseFloat(valStr);
            return isNaN(parsed) ? defaultVal : parsed;
        }

        // Update callout label titles and values
        const lblTitle1 = document.getElementById("lbl-title-1");
        const lblVal1 = document.getElementById("lbl-val-1");
        const lblTitle2 = document.getElementById("lbl-title-2");
        const lblVal2 = document.getElementById("lbl-val-2");
        const lblTitle3 = document.getElementById("lbl-title-3");
        const lblVal3 = document.getElementById("lbl-val-3");

        if (productType === "elbow") {
            if (lblTitle1) lblTitle1.textContent = "Outside Diameter (D)";
            if (lblVal1) lblVal1.textContent = specs["Outside Diameter (D)"] || "--";
            if (lblTitle2) lblTitle2.textContent = "Wall Thickness (T)";
            if (lblVal2) lblVal2.textContent = specs["Wall Thickness (T)"] || "--";
            if (lblTitle3) lblTitle3.textContent = "Center to Face (A)";
            if (lblVal3) lblVal3.textContent = specs["Center to Face (A)"] || "--";
        } else if (productType === "forged") {
            if (lblTitle1) lblTitle1.textContent = "Body Outside Dia (D)";
            if (lblVal1) lblVal1.textContent = specs["Body Outside Diameter (D)"] || "--";
            if (lblTitle2) lblTitle2.textContent = "Socket Depth (B)";
            if (lblVal2) lblVal2.textContent = specs["Socket Depth (B)"] || "--";
            if (lblTitle3) lblTitle3.textContent = "Center to End (A)";
            if (lblVal3) lblVal3.textContent = specs["Center to End (A)"] || "--";
        } else if (productType === "flange") {
            if (lblTitle1) lblTitle1.textContent = "Flange Diameter (O)";
            if (lblVal1) lblVal1.textContent = specs["Flange Diameter (O)"] || "--";
            if (lblTitle2) lblTitle2.textContent = "Flange Thickness (C)";
            if (lblVal2) lblVal2.textContent = specs["Flange Thickness (C)"] || "--";
            if (lblTitle3) lblTitle3.textContent = "Bolt Circle Dia (A)";
            if (lblVal3) lblVal3.textContent = specs["Bolt Circle Dia (A)"] || "--";
        }

        // Generate shaders
        const normalMap = createBrushedMetalNormalMap();
        const envMap = createProceduralReflectionMap();

        // Premium Brushed Steel Material
        const steelMaterial = new THREE.MeshStandardMaterial({
            color: 0x8aa0b8,       // cool slate-steel blue
            roughness: 0.22,
            metalness: 0.78,
            normalMap: normalMap,
            normalScale: new THREE.Vector2(0.06, 0.06),
            envMap: envMap,
            envMapIntensity: 1.2,
            side: THREE.DoubleSide
        });

        const darkMetalMaterial = new THREE.MeshStandardMaterial({
            color: 0x121820,       // near-black for bore / bolt holes
            roughness: 0.80,
            metalness: 0.15,
            side: THREE.DoubleSide
        });

        if (productType === "elbow") {
            const d_outer = getNum(specs["Outside Diameter (D)"], 114.3);
            const t_wall = getNum(specs["Wall Thickness (T)"], 6.02);
            const a_len = getNum(specs["Center to Face (A)"], 152.0);

            // Logarithmic scaling base
            const baseScale = 0.5 + 0.25 * Math.log2(d_outer / 21.3);

            const r_out = 0.45;
            const t_ratio = t_wall / d_outer;
            const r_in = r_out * (1 - 2 * t_ratio);
            const a_ratio = a_len / d_outer;
            const r_bend = r_out * 2 * a_ratio;

            // Curved pipe path (90° bend)
            const points = [];
            const segments = 32;
            for (let i = 0; i <= segments; i++) {
                const theta = (i / segments) * (Math.PI / 2);
                points.push(new THREE.Vector3(r_bend * Math.cos(theta), r_bend * Math.sin(theta), 0));
            }
            const curve = new THREE.CatmullRomCurve3(points);

            // Circular ring cross-section (double walled)
            const shape = new THREE.Shape();
            shape.absarc(0, 0, r_out, 0, Math.PI * 2, false);
            const hole = new THREE.Path();
            hole.absarc(0, 0, r_in, 0, Math.PI * 2, true);
            shape.holes.push(hole);

            const extrudeSettings = {
                steps: 64,
                bevelEnabled: true,
                bevelThickness: 0.015,
                bevelSize: 0.008,
                bevelSegments: 3,
                extrudePath: curve
            };
            const elbowGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
            const elbowMesh = new THREE.Mesh(elbowGeo, steelMaterial);
            elbowMesh.position.set(-r_bend / 2, -r_bend / 2, 0);
            currentMeshGroup.add(elbowMesh);

            // Setup callout target points in local coordinates
            calloutPoints.pos1.set(-r_bend / 2, r_bend / 2, r_out); // Top lip outer edge
            calloutPoints.pos2.set(-r_bend / 2, r_bend / 2, r_in + (r_out - r_in) / 2); // Top lip wall thickness
            calloutPoints.pos3.set(-r_bend / 2, -r_bend / 2, 0); // Intersection corner

            currentMeshGroup.scale.set(baseScale, baseScale, baseScale);

        } else if (productType === "forged") {
            const d_outer = getNum(specs["Body Outside Diameter (D)"], 46.0);
            const t_wall = getNum(specs["Wall Thickness (Min)"], 4.87);
            const a_len = getNum(specs["Center to End (A)"], 29.0);
            const b_depth = getNum(specs["Socket Depth (B)"], 13.0);

            const baseScale = 0.5 + 0.25 * Math.log2(d_outer / 33.0);

            const r_out = 0.45;
            const t_ratio = t_wall / d_outer;
            const r_in = r_out * (1 - 2 * t_ratio);
            const a_ratio = a_len / d_outer;
            const L_half = r_out * 2 * a_ratio;

            const b_ratio = b_depth / d_outer;
            const L_collar = r_out * 2 * b_ratio;
            const r_collar = r_out * 1.25;

            // Hollow main run (along X)
            const shape = new THREE.Shape();
            shape.absarc(0, 0, r_out, 0, Math.PI * 2, false);
            const hole = new THREE.Path();
            hole.absarc(0, 0, r_in, 0, Math.PI * 2, true);
            shape.holes.push(hole);

            const mainRunGeo = new THREE.ExtrudeGeometry(shape, {
                depth: L_half * 2,
                bevelEnabled: true,
                bevelThickness: 0.015,
                bevelSize: 0.008,
                bevelSegments: 3
            });
            const mainRun = new THREE.Mesh(mainRunGeo, steelMaterial);
            mainRun.rotation.y = Math.PI / 2;
            mainRun.position.x = -L_half;
            currentMeshGroup.add(mainRun);

            // Hollow branch (along Y)
            const branchGeo = new THREE.ExtrudeGeometry(shape, {
                depth: L_half,
                bevelEnabled: true,
                bevelThickness: 0.015,
                bevelSize: 0.008,
                bevelSegments: 3
            });
            const branch = new THREE.Mesh(branchGeo, steelMaterial);
            branch.rotation.x = -Math.PI / 2;
            branch.position.y = 0;
            currentMeshGroup.add(branch);

            // Reinforcing collars for forged socket look
            const collarShape = new THREE.Shape();
            collarShape.absarc(0, 0, r_collar, 0, Math.PI * 2, false);
            const collarHole = new THREE.Path();
            collarHole.absarc(0, 0, r_out, 0, Math.PI * 2, true);
            collarShape.holes.push(collarHole);

            const collarGeo = new THREE.ExtrudeGeometry(collarShape, {
                depth: L_collar,
                bevelEnabled: true,
                bevelThickness: 0.015,
                bevelSize: 0.008,
                bevelSegments: 3
            });

            // Left end collar
            const collarLeft = new THREE.Mesh(collarGeo, steelMaterial);
            collarLeft.rotation.y = Math.PI / 2;
            collarLeft.position.x = -L_half;
            currentMeshGroup.add(collarLeft);

            // Right end collar
            const collarRight = new THREE.Mesh(collarGeo, steelMaterial);
            collarRight.rotation.y = -Math.PI / 2;
            collarRight.position.x = L_half;
            currentMeshGroup.add(collarRight);

            // Top end collar (branch)
            const collarTop = new THREE.Mesh(collarGeo, steelMaterial);
            collarTop.rotation.x = -Math.PI / 2;
            collarTop.position.y = L_half - L_collar;
            currentMeshGroup.add(collarTop);

            // Setup callout targets
            calloutPoints.pos1.set(r_collar, 0, 0); // Outside collar body diameter
            calloutPoints.pos2.set(0, L_half - L_collar, r_out); // Socket depth shoulder
            calloutPoints.pos3.set(L_half, 0, 0); // Center to end length

            currentMeshGroup.position.set(0, -L_half * 0.3, 0);
            currentMeshGroup.scale.set(baseScale, baseScale, baseScale);

        } else if (productType === "flange") {
            const d_outer  = getNum(specs["Flange Diameter (O)"],  107.9);
            const t_flange = getNum(specs["Flange Thickness (C)"],  14.3);
            const a_bc     = getNum(specs["Bolt Circle Dia (A)"],   79.4);
            const n_holes  = Math.round(getNum(specs["Bolt Holes (No.)"], 4));
            const d_hole   = getNum(specs["Dia of Bolt Holes"],     15.9);

            // Normalised 3D proportions
            const baseScale = 0.5 + 0.25 * Math.log2(d_outer / 88.9);
            const SEG   = 64;
            const R_fl  = 1.5;
            const R_rf  = R_fl  * 0.76;
            const R_hub = R_fl  * 0.44;
            const R_neck= R_fl  * 0.36;
            const R_bore= R_fl  * 0.28;
            const T_fl  = R_fl  * (t_flange / d_outer) * 2.8;
            const T_rf  = T_fl  * 0.09;
            const H_hub = R_fl  * 1.10;
            const R_bc  = R_fl  * (a_bc / d_outer);

            // PART 1: SOLID FLANGE BODY (LatheGeometry full cross-section)
            const bodyProfile = [
                new THREE.Vector2(R_bore,  0),
                new THREE.Vector2(R_fl,    0),
                new THREE.Vector2(R_fl,    T_fl),
                new THREE.Vector2(R_hub,   T_fl),
                new THREE.Vector2(R_bore,  T_fl),
            ];
            const bodyGeo  = new THREE.LatheGeometry(bodyProfile, SEG);
            const bodyMesh = new THREE.Mesh(bodyGeo, steelMaterial);
            currentMeshGroup.add(bodyMesh);

            // Top annular face cap (bore->hub at y=T_fl)
            const faceTopGeo  = new THREE.RingGeometry(R_bore, R_hub, SEG);
            const faceTopMesh = new THREE.Mesh(faceTopGeo, steelMaterial);
            faceTopMesh.rotation.x = -Math.PI / 2;
            faceTopMesh.position.y = T_fl;
            currentMeshGroup.add(faceTopMesh);

            // Bottom face cap (bore->OD at y=0)
            const faceBotGeo  = new THREE.RingGeometry(R_bore, R_fl, SEG);
            const faceBotMesh = new THREE.Mesh(faceBotGeo, steelMaterial);
            faceBotMesh.rotation.x = Math.PI / 2;
            faceBotMesh.position.y = 0;
            currentMeshGroup.add(faceBotMesh);

            // PART 2: RAISED FACE (proud sealing disk)
            const rfProfile = [
                new THREE.Vector2(R_bore, T_fl),
                new THREE.Vector2(R_rf,   T_fl),
                new THREE.Vector2(R_rf,   T_fl + T_rf),
                new THREE.Vector2(R_bore, T_fl + T_rf),
            ];
            const rfGeo  = new THREE.LatheGeometry(rfProfile, SEG);
            const rfMesh = new THREE.Mesh(rfGeo, steelMaterial);
            currentMeshGroup.add(rfMesh);

            const rfTopGeo  = new THREE.RingGeometry(R_bore, R_rf, SEG);
            const rfTopMesh = new THREE.Mesh(rfTopGeo, steelMaterial);
            rfTopMesh.rotation.x = -Math.PI / 2;
            rfTopMesh.position.y  = T_fl + T_rf;
            currentMeshGroup.add(rfTopMesh);

            // PART 3: TAPERED WELD-NECK HUB
            const hubGeo  = new THREE.CylinderGeometry(R_neck, R_hub, H_hub, SEG, 4, true);
            const hubMesh = new THREE.Mesh(hubGeo, steelMaterial);
            hubMesh.position.y = T_fl + H_hub / 2;
            currentMeshGroup.add(hubMesh);

            const hubTopGeo  = new THREE.RingGeometry(R_bore, R_neck, SEG);
            const hubTopMesh = new THREE.Mesh(hubTopGeo, steelMaterial);
            hubTopMesh.rotation.x = -Math.PI / 2;
            hubTopMesh.position.y  = T_fl + H_hub;
            currentMeshGroup.add(hubTopMesh);

            // PART 4: DARK BORE CYLINDER
            const totalH   = T_fl + T_rf + H_hub;
            const boreGeo  = new THREE.CylinderGeometry(R_bore, R_bore, totalH + 0.06, SEG, 1, true);
            const boreMesh = new THREE.Mesh(boreGeo, darkMetalMaterial);
            boreMesh.position.y = (totalH + 0.06) / 2 - 0.03;
            currentMeshGroup.add(boreMesh);

            const boreCapGeo = new THREE.CircleGeometry(R_bore, SEG);
            const boreCapT   = new THREE.Mesh(boreCapGeo, darkMetalMaterial);
            boreCapT.rotation.x = -Math.PI / 2;
            boreCapT.position.y  = totalH + 0.04;
            currentMeshGroup.add(boreCapT);
            const boreCapB   = new THREE.Mesh(boreCapGeo, darkMetalMaterial);
            boreCapB.rotation.x = Math.PI / 2;
            boreCapB.position.y  = -0.04;
            currentMeshGroup.add(boreCapB);

            // PART 5: BOLT HOLES
            const R_bh  = R_fl * ((d_hole / 2) / d_outer);
            const boltH = T_fl + T_rf + 0.06;
            for (let i = 0; i < n_holes; i++) {
                const ang = (i / n_holes) * Math.PI * 2 + Math.PI / n_holes;
                const bx  = Math.cos(ang) * R_bc;
                const bz  = Math.sin(ang) * R_bc;
                const bhGeo  = new THREE.CylinderGeometry(R_bh, R_bh, boltH, 16, 1, true);
                const bhMesh = new THREE.Mesh(bhGeo, darkMetalMaterial);
                bhMesh.position.set(bx, (T_fl + T_rf) / 2, bz);
                currentMeshGroup.add(bhMesh);
                const bhCapGeo = new THREE.CircleGeometry(R_bh, 16);
                const bhCapT   = new THREE.Mesh(bhCapGeo, darkMetalMaterial);
                bhCapT.rotation.x = -Math.PI / 2;
                bhCapT.position.set(bx, T_fl + T_rf + 0.002, bz);
                currentMeshGroup.add(bhCapT);
                const bhCapB   = new THREE.Mesh(bhCapGeo, darkMetalMaterial);
                bhCapB.rotation.x = Math.PI / 2;
                bhCapB.position.set(bx, -0.002, bz);
                currentMeshGroup.add(bhCapB);
            }

            // PART 6: WELD BEVEL CHAMFER RING
            const chamferGeo  = new THREE.TorusGeometry(R_neck * 0.97, R_neck * 0.06, 10, SEG);
            const chamferMesh = new THREE.Mesh(chamferGeo, darkMetalMaterial);
            chamferMesh.position.y = T_fl + H_hub;
            currentMeshGroup.add(chamferMesh);

            // Callout anchor points
            calloutPoints.pos1.set(R_fl, T_fl * 0.5, 0);
            calloutPoints.pos2.set(R_fl * 0.15, T_fl + T_rf, 0);
            calloutPoints.pos3.set(R_bc, T_fl * 0.5, 0);

            currentMeshGroup.rotation.x = -0.50;
            currentMeshGroup.position.set(0, -(T_fl + H_hub) * 0.38, 0);
            currentMeshGroup.scale.set(baseScale, baseScale, baseScale);
        }

        scene.add(currentMeshGroup);
    }

    function disposeHierarchy(obj) {
        obj.traverse(child => {
            if (child.isMesh) {
                if (child.geometry) child.geometry.dispose();
                if (Array.isArray(child.material)) {
                    child.material.forEach(m => m.dispose());
                } else if (child.material) {
                    child.material.dispose();
                }
            }
        });
    }
}
