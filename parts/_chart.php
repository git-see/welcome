<!-- LORE AND HARDY -->
<section id="sectionChart">
    <div></div>
    <h2>The Lore and Lardy graph</h2>

    <p>
        <label for="partLore">If Lore eats </label>
        <input type="number" id="partLore" />% cheese,

        <label for="partLardy">and Lardy eats </label>
        <input type="number" id="partLardy" />%,
    </p>

    <p>you can enjoy the . . . <button onclick="calculer()"> click to know !</button></p><br>
    <p id="result"></p>

    <div id="loreLardyChart">
        <div>
            <canvas id="myChart"></canvas>
        </div>
        <div>
            <img src="/parts/images/loreleardi.png" alt="Lore and Lardy happy to share a cheese">
        </div>
    </div>
</section>