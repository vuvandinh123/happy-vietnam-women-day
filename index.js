// Wishes database
const wishes = [
    {
        title: "Chúc Mừng {name}",
        content: [
            "Chào {name} thân mến,",
            "Nhân ngày Phụ Nữ Việt Nam 20/10, xin gửi lời chúc tốt đẹp và trân trọng nhất đến người đồng nghiệp tài năng, xinh đẹp như {name}!",
            "Chúc {name} luôn giữ vững ngọn lửa nhiệt huyết, 'cháy hết mình' với công việc và đạt được những đỉnh cao mới trong sự nghiệp lẫn cuộc sống cá nhân. Đặc biệt, mong {name} sẽ có một ngày lễ thật vui tươi, ngập tràn tiếng cười và nhận được vô vàn bất ngờ xứng đáng.",
            "Chúc {name} một ngày 20/10 thật rực rỡ, hạnh phúc và mãi là đóa hoa trong gia đình và tại công ty! 💖💐"
        ]
    },
    {
        title: "Gửi Lời Chúc Đến {name}",
        content: [
            "Gửi {name} - bông hoa rạng rỡ,",
            "Nhân ngày Phụ nữ Việt Nam 20/10, xin chúc {name} luôn xinh đẹp, trẻ trung, tự tin như nụ cười rạng ngời của mình. Chúc {name} không chỉ thành công trong công việc mà còn luôn viên mãn, hạnh phúc trong cuộc sống. Hãy cứ mơ lớn và làm những điều mình thích nhé!",
            "Chúc {name} có một ngày lễ thật trọn vẹn, đầy ắp những khoảnh khắc đáng nhớ bên người thân, bạn bè và đồng nghiệp. 🌟🌸"
        ]
    },
    {
        title: "Mừng Ngày 20/10 - {name}",
        content: [
            "Hi {name},",
            "Chúc mừng Ngày Phụ Nữ Việt Nam! Mong {name} có một ngày 20/10 cực kỳ vui vẻ, không phải lo nghĩ bất cứ điều gì, chỉ có tiếng cười, hoa và những món quà bất ngờ.",
            "Hãy tận hưởng ngày đặc biệt này nhé! Chúc {name} luôn giữ được tinh thần lạc quan, gặp nhiều may mắn và nhanh chóng đạt được mọi mục tiêu trong công việc lẫn cuộc sống. Rất tự hào có {name} đồng hành!",
            "Chúc {name} một ngày 20/10 rực rỡ và đáng nhớ! 🌺"
        ]
    },
    {
        title: "20/10 Vui Vẻ {name}",
        content: [
            "Xin gửi lời chúc nồng nhiệt nhất đến {name} - đồng nghiệp tuyệt vời!",
            "Nhân dịp 20/10, chúc {name} luôn mạnh khỏe, tươi trẻ và hạnh phúc. Mong rằng mỗi ngày làm việc đều là một trải nghiệm mới, mang lại niềm vui và cảm hứng sáng tạo cho {name}.",
            "Chúc {name} luôn tự tin, thành công vượt bậc, và cuộc sống cá nhân luôn êm đềm, ngập tràn điều tốt đẹp. Chúc 20/10 thật nhiều hoa và nụ cười nở rộ! 💝"
        ]
    },
    {
        title: "Chúc {name} 20/10 Tươi Đẹp",
        content: [
            "Chào {name},",
            "Ngày 20/10 đã đến rồi! Chúc {name} một ngày vui vẻ và ngập tràn yêu thương, nhận được mọi sự quan tâm và chiều chuộng.",
            "Hy vọng {name} sẽ luôn giữ được sự lạc quan, niềm đam mê và tinh thần đồng đội tuyệt vời trong công việc tại Moon Group.", // GIỮ LẠI (2/3)
            "Chúc {name} ngày càng xinh đẹp hơn, hạnh phúc hơn và nắm bắt được mọi cơ hội lớn lao trong tương lai. Happy Women’s Day! Hãy tỏa sáng theo cách riêng của mình nhé! 🌟"
        ]
    },
    {
        title: "Lời Chúc 20/10 Gửi Đến {name}",
        content: [
            "Gửi {name},",
            "Nhân ngày Phụ nữ Việt Nam, xin gửi lời cảm ơn sâu sắc vì những cống hiến của {name}. Xin chúc {name} luôn rạng rỡ, vui vẻ, thành công vượt trội trong mọi lĩnh vực mà {name} theo đuổi.",
            "Mong rằng {name} sẽ luôn có những khoảnh khắc ý nghĩa, đáng nhớ cùng tập thể đồng nghiệp và cảm nhận được sự ấm áp của tập thể này.",
            "Chúc ngày 20/10 thật trọn vẹn và đáng yêu, như chính con người {name}! 💖"
        ]
    },
    {
        title: "Chúc Ngày 20/10 Rực Rỡ {name}",
        content: [
            "Thân gửi {name},",
            "Nhân dịp đặc biệt này, xin chúc {name} luôn xinh đẹp, mạnh khỏe và là nguồn cảm hứng bất tận cho đồng nghiệp. Mong {name} luôn cảm thấy vui vẻ, hứng khởi và tràn đầy năng lượng khi làm việc cùng mọi người.",
            "Chúc {name} đạt được nhiều thành công, mọi kế hoạch đều suôn sẻ, và luôn gặp may mắn, bình an trong cuộc sống.",
            "Chúc ngày 20/10 thật ý nghĩa và rực rỡ, như ánh trăng và những vì sao! 🌙✨"
        ]
    },
    {
        title: "Dành Tặng {name} Nhân Dịp 20/10",
        content: [
            "Chào {name},",
            "Nhân dịp 20/10, xin gửi đến {name} những lời chúc chân thành và ngọt ngào nhất. Chúc {name} luôn khỏe mạnh, tươi trẻ và hạnh phúc ngập tràn bên gia đình, bạn bè, cùng những người đồng nghiệp thân thiết.",
            "Hy vọng {name} sẽ có thật nhiều niềm vui, trải nghiệm đáng nhớ và luôn cảm thấy tự hào về bản thân và những gì mình đạt được.",
            "Chúc 20/10 ngập tràn nụ cười, hoa đẹp và sự bất ngờ thú vị! 🌷"
        ]
    },
    {
        title: "Tôn Vinh Phụ Nữ Việt - {name}",
        content: [
            "Chào {name} - một nửa tuyệt vời của thế giới,",
            "Chúc mừng ngày 20/10! Chúc {name} luôn là người phụ nữ tuyệt vời, thành công trong mọi lĩnh vực và khéo léo giữ vững được sự cân bằng hoàn hảo giữa sự nghiệp và gia đình. Hãy dành trọn ngày hôm nay để nghỉ ngơi và tận hưởng!",
            "Cảm ơn {name} đã mang đến nguồn năng lượng tích cực và sự tận tâm trong công việc. Trân trọng gửi đến {name} những điều tốt đẹp, may mắn và hạnh phúc nhất! 🌹"
        ]
    },
    {
        title: "Vui Cùng Ngày Phụ Nữ - {name}",
        content: [
            "Gửi {name} yêu quý,",
            "Ngày 20/10 này, chúc {name} luôn thật khỏe khoắn, tươi tắn, năng động và đón nhận thật nhiều niềm vui bất ngờ. Hãy tạm gác lại công việc hôm nay để chiều chuộng bản thân nhé!",
            "Chúc {name} và toàn thể chị em đồng nghiệp có một ngày lễ thật ý nghĩa, vui vẻ và tạo ra thêm nhiều kỷ niệm đẹp.",
            "Chúc {name} luôn hạnh phúc, nở nụ cười thật tươi mỗi ngày! 💖"
        ]
    },
    {
        title: "Chúc Mừng Thành Công {name}",
        content: [
            "Hi {name},",
            "Nhân ngày đặc biệt 20/10, chúc {name} luôn tràn đầy nhiệt huyết, không ngừng sáng tạo, và gặt hái thêm nhiều thành tựu vượt trội, đưa sự nghiệp lên một tầm cao mới.",
            "Rất may mắn và biết ơn khi có một người đồng hành tài giỏi, tâm huyết như {name}.",
            "Chúc {name} có một ngày 20/10 thật đáng nhớ, vui tươi, và là dấu mốc cho những thành công rực rỡ tiếp theo! 💐"
        ]
    },
    {
        title: "Ngày Tươi Đẹp Của {name}",
        content: [
            "Chào {name},",
            "Xin gửi lời chúc chân thành và vui vẻ nhất đến {name} nhân dịp 20/10. Chúc {name} luôn xinh đẹp, tài năng, và tự tin tỏa sáng ở bất cứ nơi nào {name} đặt chân đến. Hãy luôn tin vào bản thân và theo đuổi đam mê nhé!",
            "Cùng nhau kiến tạo thêm nhiều giá trị tuyệt vời và kỷ niệm đáng nhớ trong công việc! Chúc {name} mọi điều may mắn, tốt lành và một ngày lễ thật ý nghĩa! 🌷"
        ]
    },
    {
        title: "Ngập Tràn Niềm Vui {name}",
        content: [
            "Gửi lời chúc tốt lành đến {name},",
            "Chúc {name} có một ngày 20/10 thật ấm áp, rộn ràng, ngập tràn tiếng cười và nhận được sự yêu thương, trân trọng từ gia đình, bạn bè và đồng nghiệp.",
            "Cảm ơn những đóng góp quý báu, sự tận tâm và chuyên nghiệp của {name} dành cho tập thể.",
            "Chúc {name} một ngày lễ thật đặc biệt, vui vẻ và luôn giữ được tinh thần lạc quan! 🌟"
        ]
    },
    {
        title: "Phụ Nữ Việt Nam Hạnh Phúc - {name}",
        content: [
            "Chào {name},",
            "Nhân ngày tôn vinh phái đẹp, chúc {name} luôn giữ mãi nụ cười rạng rỡ trên môi, mọi ước mơ và dự định cá nhân lẫn sự nghiệp đều trở thành hiện thực một cách nhanh chóng.",
            "Mong rằng {name} sẽ luôn cảm thấy tự hào, được trân trọng và phát triển tối đa tiềm năng của mình trong sự nghiệp.",
            "Chúc {name} ngày 20/10 thật tuyệt vời, xinh đẹp và hạnh phúc viên mãn! 🌸"
        ]
    },
    {
        title: "Tỏa Sáng Ngày 20/10 - {name}",
        content: [
            "Gửi {name},",
            "Nhân ngày Phụ nữ Việt Nam, chúc {name} luôn là ngôi sao sáng, không chỉ thông minh, giỏi giang trong công việc mà còn là người phụ nữ duyên dáng, đáng yêu trong cuộc sống cá nhân.",
            "Sự chuyên nghiệp và nỗ lực của {name} là tài sản vô giá đối với Moon Group, vì vậy hãy luôn tự tin tỏa sáng nhé!",
            "Chúc {name} một ngày lễ thật sự thoải mái, hạnh phúc và nhận được những món quà yêu thích nhất! Happy Women’s Day! 💖"
        ]
    },
    {
        title: "Lời Chúc Mãi Mãi Tuổi Xuân {name}",
        content: [
            "Thân gửi {name},",
            "Chúc {name} luôn tràn đầy sức sống, trẻ trung, và mãi mãi giữ được ngọn lửa nhiệt huyết và tinh thần sáng tạo trong tim.",
            "Mong {name} tiếp tục mang lại nhiều niềm vui, nguồn cảm hứng và những ý tưởng đột phá cho đồng nghiệp tại nơi làm việc.",
            "Chúc {name} một 20/10 ý nghĩa, đáng nhớ, và mãi mãi là người phụ nữ xinh đẹp, thành công! 💐"
        ]
    },
    {
        title: "Chúc {name} Luôn Hạnh Phúc",
        content: [
            "Chào {name},",
            "Chúc {name} ngày 20/10 nhận được thật nhiều hoa, quà và lời chúc ý nghĩa nhất. Hy vọng hạnh phúc và thành công sẽ luôn song hành, dẫn lối cho {name} trên mọi chặng đường.",
            "Cảm ơn {name} vì những nỗ lực không ngừng, sự tận tâm và tinh thần cống hiến trong công việc.",
            "Chúc {name} luôn rạng ngời, vui vẻ và may mắn! 🌹"
        ]
    },
    {
        title: "Tự Tin Tỏa Sáng {name}",
        content: [
            "Gửi {name} - người đồng nghiệp bản lĩnh,",
            "Chúc {name} luôn tự tin, xinh đẹp, và mạnh mẽ để vượt qua mọi thử thách, biến mọi khó khăn thành cơ hội. Hãy luôn tỏa sáng theo cách riêng của mình nhé!",
            "Mong {name} có thêm nhiều trải nghiệm thú vị, những dấu mốc thành công đáng nhớ trong môi trường làm việc chung.",
            "Chúc {name} ngày Phụ nữ Việt Nam thật vui vẻ, hạnh phúc và nhận được sự yêu thương vô bờ bến! 🌙"
        ]
    },
    {
        title: "Lời Tri Ân Gửi {name}",
        content: [
            "Chào {name},",
            "Nhân dịp 20/10, xin gửi lời tri ân sâu sắc đến {name} vì những đóng góp không mệt mỏi, luôn hoàn thành xuất sắc công việc. Chúc {name} luôn an lành, viên mãn và hạnh phúc trong mọi khía cạnh của cuộc sống.",
            "Hy vọng {name} sẽ tiếp tục đồng hành và cùng tập thể đạt được những thành công to lớn trong tương lai.",
            "Chúc {name} một ngày lễ thật bình an, ấm áp và hạnh phúc! 🌷"
        ]
    },
    {
        title: "Chúc Mừng {name} Của Tập Thể",
        content: [
            "Gửi {name} - thành viên thân yêu của tập thể,",
            "Chúc {name} có một ngày 20/10 thật đáng nhớ, luôn nhận được sự yêu thương, trân trọng và sự ủng hộ tuyệt đối từ mọi người.",
            "Cảm ơn {name} đã cùng nhau tạo nên một tập thể vững mạnh, đoàn kết.",
            "Chúc {name} luôn thành công, vui vẻ, hạnh phúc và rạng rỡ mỗi ngày! 💖"
        ]
    }
];
// Three.js Scene
let scene, camera, renderer, stars = [], moon, nebulaClouds = [], particles = [];
let scrollY = 0;

function initThree() {
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0003);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Create star field with multiple layers
    createStarField();

    // Create nebula clouds
    createNebulaClouds();

    // Create particle system
    createParticles();

    // Create moon with texture-like appearance
    createMoon();

    camera.position.z = 100;

    animate();
}

function createStarField() {
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 3000;
    const positions = [];
    const colors = [];
    const sizes = [];

    for (let i = 0; i < starCount; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() - 0.5) * 2000;

        positions.push(x, y, z);

        // Different star colors
        const colorChoice = Math.random();
        if (colorChoice > 0.8) {
            colors.push(1, 0.8, 0.6); // Orange-ish
        } else if (colorChoice > 0.6) {
            colors.push(0.6, 0.8, 1); // Blue-ish
        } else {
            colors.push(1, 1, 1); // White
        }

        sizes.push(Math.random() * 3 + 1);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    starGeometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

    const starMaterial = new THREE.PointsMaterial({
        size: 2,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);
    stars.push(starField);
}

function createNebulaClouds() {
    const cloudGeometry = new THREE.SphereGeometry(50, 32, 32);

    const colors = [
        { r: 0.4, g: 0.2, b: 0.6 }, // Purple
        { r: 0.2, g: 0.4, b: 0.8 }, // Blue
        { r: 0.8, g: 0.3, b: 0.5 }  // Pink
    ];

    for (let i = 0; i < 5; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const cloudMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(color.r, color.g, color.b),
            transparent: true,
            opacity: 0.05,
            side: THREE.DoubleSide
        });

        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
        cloud.position.set(
            (Math.random() - 0.5) * 400,
            (Math.random() - 0.5) * 400,
            (Math.random() - 0.5) * 400
        );
        cloud.scale.set(
            Math.random() * 3 + 1,
            Math.random() * 3 + 1,
            Math.random() * 3 + 1
        );

        scene.add(cloud);
        nebulaClouds.push(cloud);
    }
}

function createParticles() {
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    const positions = [];

    for (let i = 0; i < particleCount; i++) {
        positions.push(
            (Math.random() - 0.5) * 1000,
            (Math.random() - 0.5) * 1000,
            (Math.random() - 0.5) * 1000
        );
    }

    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
        color: 0xffdfba,
        size: 1,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    particles.push(particleSystem);
}

function createMoon() {
    const moonGeometry = new THREE.SphereGeometry(35, 64, 64);

    // Create moon with gradient
    const moonMaterial = new THREE.MeshBasicMaterial({
        color: 0xffdfba,
        transparent: true,
        opacity: 0.95
    });

    moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.set(150, 80, -250);
    scene.add(moon);

    // Add multiple glow layers
    for (let i = 1; i <= 4; i++) {
        const glowGeometry = new THREE.SphereGeometry(35 + i * 5, 32, 32);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0xffdfba,
            transparent: true,
            opacity: 0.1 / i,
            side: THREE.BackSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        moon.add(glow);
    }

    // Add moon light effect
    const light = new THREE.PointLight(0xffdfba, 1, 500);
    light.position.copy(moon.position);
    scene.add(light);
}

function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.0001;

    // Rotate star fields
    stars.forEach((starField, index) => {
        starField.rotation.y = time * (0.05 + index * 0.01);
        starField.rotation.x = time * 0.02;
    });

    // Animate nebula clouds
    nebulaClouds.forEach((cloud, index) => {
        cloud.rotation.x += 0.001 * (index + 1);
        cloud.rotation.y += 0.002 * (index + 1);
        cloud.position.x += Math.sin(time + index) * 0.05;
        cloud.position.y += Math.cos(time + index) * 0.05;
    });

    // Animate particles
    particles.forEach(particleSystem => {
        particleSystem.rotation.y += 0.001;
        particleSystem.rotation.x += 0.0005;
    });

    // Rotate moon
    if (moon) {
        moon.rotation.y += 0.003;
        moon.position.y = 80 + Math.sin(time) * 10;
    }

    // Apply scroll effect
    camera.position.y = scrollY * 0.1;
    camera.rotation.x = scrollY * 0.0001;

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Handle scroll for parallax effect
window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
});

// Parallax effect for cards with throttling
let ticking = false;
let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener('mousemove', (e) => {
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax(lastMouseX, lastMouseY);
            ticking = false;
        });
        ticking = true;
    }
});

function updateParallax(mouseX, mouseY) {
    const cards = document.querySelectorAll('.parallax-card');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const deltaX = (mouseX - cardCenterX) / 30;
        const deltaY = (mouseY - cardCenterY) / 30;

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.transform = `perspective(1000px) rotateY(${deltaX * 0.3}deg) rotateX(${-deltaY * 0.3}deg) translateZ(10px)`;
        }
    });
}

// Reset transform when mouse leaves
document.addEventListener('mouseleave', () => {
    const cards = document.querySelectorAll('.parallax-card');
    cards.forEach(card => {
        card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
    });
});

// Create shooting stars
function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 50 + '%';
    star.style.animationDelay = Math.random() * 2 + 's';
    star.style.animationDuration = (Math.random() * 2 + 2) + 's';
    document.getElementById('shooting-stars').appendChild(star);

    setTimeout(() => star.remove(), 4000);
}

setInterval(createShootingStar, 1500);

// Show wish function
function showWish() {
    let name = document.getElementById('nameInput').value.trim();

    if (!name) {
        alert('Vui lòng nhập tên của bạn! 💫');
        return;
    }

    // Viết hoa chữ cái đầu mỗi từ
    name = name
        .toLowerCase()
        .split(' ')
        .filter(word => word !== '')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    const wishDisplay = document.getElementById('wishDisplay');
    const wishTitle = document.getElementById('wishTitle');
    const wishContent = document.getElementById('wishContent');

    // Hiển thị tiêu đề có gradient cho tên
    const titleHTML = randomWish.title.replace(
        /\{name\}/g,
        `<span class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-semibold">${name}</span>`
    );
    wishTitle.innerHTML = titleHTML;

    // Xóa nội dung cũ và thêm mới
    wishContent.innerHTML = '';
    randomWish.content.forEach((paragraph, index) => {
        const p = document.createElement('p');
        p.className = 'animate__animated animate__fadeInUp';
        p.style.animationDelay = (index * 0.3) + 's';

        // Thay {name} bằng tên có gradient trong nội dung
        const textHTML = paragraph.replace(
            /\{name\}/g,
            `<span class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-semibold">${name}</span>`
        );

        p.innerHTML = textHTML;
        wishContent.appendChild(p);
    });

    document.querySelector('.max-w-md').style.display = 'none';
    wishDisplay.classList.remove('hidden');

    // Cuộn mượt đến phần lời chúc
    setTimeout(() => {
        wishDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}


function reset() {
    document.getElementById('nameInput').value = '';
    document.getElementById('wishDisplay').classList.add('hidden');
    document.querySelector('.max-w-md').style.display = 'block';

    // Scroll back to input
    setTimeout(() => {
        document.querySelector('.max-w-md').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

// Initialize
initThree();

// Enter key support
document.getElementById('nameInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        showWish();
    }
});