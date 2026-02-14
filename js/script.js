/* Global interactions for LBCE Wizardry site */

// Modal functions
function openWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    if (modal) modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('welcomeModal');
    if (modal) modal.classList.remove('show');
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('welcomeModal');
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

function enterAcademy() {
    closeModal();
}

function openDept(dept) {
    const loader = document.getElementById('pageLoader');
    if (loader) loader.classList.add('show');
    setTimeout(() => {
        localStorage.setItem("selectedDept", dept);
        window.location.href = "department.html";
    }, 4000);
}

function loadDepartment() {
    const dept = localStorage.getItem("selectedDept") || 'CSE';
    const title = document.getElementById("deptTitle");
    const heroTitle = document.getElementById("deptHeroTitle");
    const heroSubtitle = document.getElementById("deptHeroSubtitle");
    const desc = document.getElementById("deptDescription");
    const subjects = document.getElementById("subjects");
    const featuresGrid = document.getElementById("featuresGrid");
    const deptHero = document.getElementById("deptHero");
    const animContainer = document.getElementById("heroAnimationContainer");

    const data = {
        CSE: {
            title: "Order of Arcane Computation",
            heroTitle: "Order of Arcane Computation",
            heroSubtitle: "Masters of enchanted algorithms and mystical machine logic",
            desc: "The Order of Arcane Computation comprises the most brilliant minds in the magical realm. They master the ancient art of algorithmic sorcery, weaving spells through enchanted code strings and mystical machine logic. From the secrets of Artificial Intelligence Spellcraft to the mysteries of Operating Realm Systems, they unlock the computational magic that powers our world.",
            subs: ["Ancient Data Scrolls", "Artificial Intelligence Spellcraft", "Operating Realm Systems"],
            features: ["Advanced Algorithm Spells", "Machine Learning Enchantments", "Data Structure Wizardry", "Software Engineering Magic"],
            animation: "scrolls"
        },
        ECE: {
            title: "Order of Enchanted Signals",
            heroTitle: "Order of Enchanted Signals",
            heroSubtitle: "Keepers of magical frequencies and communication spells",
            desc: "The Order of Enchanted Signals commands the mystical forces of frequency and communication across realms. These skilled practitioners harness the invisible waves of magic to transmit knowledge across impossible distances. They master Mystic Frequency Control, Crystal Circuit Engraving, and Signal Sorcery to build bridges of pure enchantment between worlds.",
            subs: ["Mystic Frequency Control", "Crystal Circuit Engraving", "Signal Sorcery"],
            features: ["Wireless Signal Casting", "Frequency Modulation Spells", "Electromagnetic Hexes", "Communication Enchantments"],
            animation: "waves"
        },
        EEE: {
            title: "Guild of Lightning Masters",
            heroTitle: "Guild of Lightning Masters",
            heroSubtitle: "Controllers of thunder and high voltage magic",
            desc: "The Guild of Lightning Masters harnesses the raw power of thunder itself. These fearless sorcerers channel high-voltage magic, bending electricity to their will. Through High Voltage Sorcery, Arcane Energy Conversion, and Power Spell Systems, they command the very forces of lightning and illuminate the darkness with electrical enchantments.",
            subs: ["High Voltage Sorcery", "Arcane Energy Conversion", "Power Spell Systems"],
            features: ["Lightning Conjuration", "Power Generation Magic", "Distribution Spellcraft", "Energy Transformation Hexes"],
            animation: "lightning"
        },
        MECH: {
            title: "Order of Mechanical Alchemists",
            heroTitle: "Order of Mechanical Alchemists",
            heroSubtitle: "Forgers of enchanted machines and controllers of elemental forces",
            desc: "The Order of Mechanical Alchemists are the ancient masters of forging enchanted machines and controlling the elements themselves. Through Flame Control Theory, Force Manipulation Arts, and Metal Forging Magic, they create mechanical marvels that blend metal, fire, and pure magical essence to reshape the world.",
            subs: ["Flame Control Theory", "Force Manipulation Arts", "Metal Forging Magic"],
            features: ["Mechanical Conjuration", "Metal Enchantment Smithing", "Thermal Control Spells", "Force Field Creation"],
            animation: "gears"
        }
    };

    if (data[dept]) {
        if (title) title.innerText = data[dept].title;
        if (heroTitle) heroTitle.innerText = data[dept].heroTitle;
        if (heroSubtitle) heroSubtitle.innerText = data[dept].heroSubtitle;
        if (desc) desc.innerText = data[dept].desc;
        
        // Add department-specific class to hero
        if (deptHero) {
            deptHero.className = `dept-hero ${dept.toLowerCase()}`;
        }

        // Create branch-specific animation
        if (animContainer && data[dept].animation) {
            createBranchAnimation(animContainer, data[dept].animation);
        }

        // Load subjects
        if (subjects) {
            subjects.innerHTML = "";
            data[dept].subs.forEach(sub => {
                const li = document.createElement('li');
                li.textContent = sub;
                subjects.appendChild(li);
            });
        }

        // Load features
        if (featuresGrid) {
            featuresGrid.innerHTML = "";
            data[dept].features.forEach(feature => {
                const card = document.createElement('div');
                card.className = 'feature-card';
                card.innerHTML = `<strong>${feature}</strong>`;
                featuresGrid.appendChild(card);
            });
        }
    }
}

// Create branch system animations
function createBranchAnimation(container, type) {
    container.innerHTML = '';
    
    if (type === 'scrolls') {
        // CSE: Floating scrolls
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 200 200');
        svg.setAttribute('width', '200');
        svg.setAttribute('height', '200');
        svg.className = 'svg-scrolls';
        
        for (let i = 0; i < 3; i++) {
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.className = 'scroll';
            g.setAttribute('transform', `translate(${50 + i * 30}, ${80})`);
            
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('width', '30');
            rect.setAttribute('height', '40');
            rect.setAttribute('fill', 'none');
            rect.setAttribute('stroke', '#d4af37');
            rect.setAttribute('stroke-width', '2');
            rect.setAttribute('rx', '4');
            
            g.appendChild(rect);
            svg.appendChild(g);
        }
        container.appendChild(svg);
        
    } else if (type === 'waves') {
        // ECE: Signal waves
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 200 200');
        svg.setAttribute('width', '200');
        svg.setAttribute('height', '200');
        svg.className = 'signal-waves';
        
        for (let i = 1; i <= 3; i++) {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', '100');
            circle.setAttribute('cy', '100');
            circle.setAttribute('r', `${30 * i}`);
            circle.setAttribute('fill', 'none');
            circle.setAttribute('stroke', '#d4af37');
            circle.setAttribute('stroke-width', '2');
            circle.className = 'wave';
            svg.appendChild(circle);
        }
        container.appendChild(svg);
        
    } else if (type === 'lightning') {
        // EEE: Lightning bolts
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 200 200');
        svg.setAttribute('width', '200');
        svg.setAttribute('height', '200');
        svg.className = 'lightning-container';
        
        for (let i = 0; i < 3; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', `${100 + (i - 1) * 30}`);
            line.setAttribute('y1', '20');
            line.setAttribute('x2', `${100 + (i - 1) * 30}`);
            line.setAttribute('y2', `${100 + i * 10}`);
            line.setAttribute('stroke', 'url(#lightning-gradient)');
            line.setAttribute('stroke-width', '3');
            line.classList.add('lightning-bolt');
            svg.appendChild(line);
        }
        
        // Add gradient
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'lightning-gradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '0%');
        gradient.setAttribute('y2', '100%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#00ffff');
        gradient.appendChild(stop1);
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#d4af37');
        gradient.appendChild(stop2);
        
        defs.appendChild(gradient);
        svg.appendChild(defs);
        
        for (let i = 0; i < 3; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', `${100 + (i - 1) * 30}`);
            line.setAttribute('y1', '20');
            line.setAttribute('x2', `${100 + (i - 1) * 30}`);
            line.setAttribute('y2', `${100 + i * 10}`);
            line.setAttribute('stroke', 'url(#lightning-gradient)');
            line.setAttribute('stroke-width', '3');
            line.classList.add('lightning-bolt');
            svg.appendChild(line);
        }
        
        container.appendChild(svg);
        
    } else if (type === 'gears') {
        // MECH: Rotating gears
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 200 200');
        svg.setAttribute('width', '200');
        svg.setAttribute('height', '200');
        svg.className = 'gears-container';
        
        const gearPositions = [{x: 100, y: 50, size: 40}, {x: 60, y: 100, size: 30}, {x: 140, y: 100, size: 35}];
        
        gearPositions.forEach((pos) => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', pos.x);
            circle.setAttribute('cy', pos.y);
            circle.setAttribute('r', pos.size);
            circle.setAttribute('fill', 'none');
            circle.setAttribute('stroke', '#d4af37');
            circle.setAttribute('stroke-width', '3');
            circle.className = 'gear';
            svg.appendChild(circle);
        });
        
        container.appendChild(svg);
    }
}

function generateResult() {
    const cseSubjects = [
        "Ancient Data Scrolls",
        "Artificial Intelligence Spellcraft",
        "Operating Realm Systems",
        "Advanced Algorithm Spells",
        "Machine Learning Enchantments",
        "Data Structure Wizardry",
        "Software Engineering Magic",
        "Cryptography Hexes",
        "Database Sorcery",
        "Cloud Kingdom Magic"
    ];
    
    const cseAchievements = [
        "✓ Mastered the Python Incantation",
        "✓ Decoded the Binary Runes",
        "✓ Summoned Data from the Cloud Realm",
        "✓ Cast the Swift Algorithm Spell",
        "✓ Unlocked the Database Vault",
        "✓ Harnessed Machine Learning Powers",
        "✓ Mastered Object-Oriented Enchantments",
        "✓ Forged Unbreakable Code Hexes",
        "✓ Conjured Debugging Spells",
        "✓ Wielded the GUI Framework"
    ];
    
    const grades = [
        "Outstanding Sorcery",
        "Exceeds Magical Expectations",
        "Exemplary Computation Magic",
        "Brilliant Algorithm Mastery",
        "Acceptable Spellcasting",
        "Needs More Practice"
    ];
    
    const verdicts = [
        "✨ A true Master of Arcane Code ✨",
        "⚡ Exceptional Computational Wizard ⚡",
        "📚 Guardian of the Data Realm 📚",
        "🔮 Keeper of Ancient Algorithms 🔮",
        "💎 Pinnacle of Engineering Magic 💎",
        "🌟 Champion of the Encrypted Spells 🌟"
    ];
    
    const randomGrade = grades[Math.floor(Math.random() * grades.length)];
    const randomVerdict = verdicts[Math.floor(Math.random() * verdicts.length)];
    const score = Math.floor(Math.random() * 31) + 70; // 70-100
    
    // Randomly select 4-5 CSE subjects
    const numSubjects = Math.floor(Math.random() * 2) + 4; // 4 or 5 subjects
    const selectedSubjects = [];
    const subjectsCopy = [...cseSubjects];
    for (let i = 0; i < numSubjects; i++) {
        const idx = Math.floor(Math.random() * subjectsCopy.length);
        selectedSubjects.push(subjectsCopy[idx]);
        subjectsCopy.splice(idx, 1);
    }
    
    // Randomly select 2-3 achievements
    const numAchievements = Math.floor(Math.random() * 2) + 2; // 2 or 3 achievements
    const selectedAchievements = [];
    const achievementsCopy = [...cseAchievements];
    for (let i = 0; i < numAchievements; i++) {
        const idx = Math.floor(Math.random() * achievementsCopy.length);
        selectedAchievements.push(achievementsCopy[idx]);
        achievementsCopy.splice(idx, 1);
    }

    const out = document.getElementById('resultOutput');
    if (out) {
        let html = `
            <div class="result-header">✨ EXAMINATION SCROLL OF ARCANE COMPUTATION ✨</div>
            <div class="result-content">
                <p class="wizard-name"><strong>Apprentice Wizard:</strong> Dr.Bullayya Sir</p>
                <p><strong>Order of Mastery:</strong> Order of Arcane Computation (CSE)</p>
                <p><strong>Examination Date:</strong> ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                
                <div class="result-subjects-header">📖 Subjects Examined:</div>
                <div class="result-subjects-list">
        `;
        
        selectedSubjects.forEach(subject => {
            const subScore = Math.floor(Math.random() * 26) + 75; // 75-100
            html += `<div class="subject-result"><span>${subject}</span><span class="score">${subScore}/100</span></div>`;
        });
        
        html += `
                </div>
                
                <div class="result-achievements-header">🌟 Magical Achievements:</div>
                <div class="result-achievements-list">
        `;
        
        selectedAchievements.forEach(achievement => {
            html += `<div class="achievement-item">${achievement}</div>`;
        });
        
        html += `
                </div>
                
                <div class="result-score-section">
                    <div><strong>Overall Computational Score:</strong></div>
                    <div class="overall-score">${score}/100</div>
                </div>
                
                <div class="result-grade"><strong>Grade:</strong> ${randomGrade}</div>
                <div class="result-verdict">${randomVerdict}</div>
                <div class="result-footer">~ Sealed by the Headmaster's Computational Quill ~</div>
            </div>
        `;
        out.innerHTML = html;
    }
}

// Show loader on page load for 4 seconds
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        loader.classList.add('show');
        setTimeout(() => {
            loader.classList.remove('show');
        }, 4000);
    }
});

// Keyboard shortcut R to reveal result on results page
document.addEventListener('keydown', function(e){
    if ((e.key === 'r' || e.key === 'R') && document.querySelector('.result-box')) {
        generateResult();
    }
});
