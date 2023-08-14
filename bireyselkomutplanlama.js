function sleep(ms) {
	return new Promise(resolve=>setTimeout(resolve, ms));
  }
  if (game_data.player.id === 5376322 && game_data.player.name === 'Lord Asitane' && server_utc_diff === 10800 ) {

    var eminerdemir = 30; // KURULUM Ä°STEÄÄ° GEREKMEKTEDÄ°R...
    if (eminerdemir === 30) {
        if (premium) {

    fetch("https://worldtimeapi.org/api/ip")
    .then(response => response.json())
    .then(data => {
    const serverTime = new Date(data.utc_datetime);
    const server_utc_offset = data.utc_offset;

    // Belirlenen tarih
    var targetDate = new Date('2024-01-01T10:00:00Z');

    // Åu anki zamanÄ± elde et
    var currentDate = serverTime;

    // UTC farkÄ±nÄ± dakika cinsinden hesapla
    var server_utc_diff = server_utc_offset.startsWith('-') ? -1 * parseInt(server_utc_offset.substring(1)) : parseInt(server_utc_offset.substring(1));

    // BitiÅŸ tarihine UTC farkÄ±nÄ± ekle
    targetDate.setMinutes(targetDate.getMinutes() - server_utc_diff);

    // Kalan sÃ¼reyi hesapla
    var remainingTime = targetDate - currentDate;

    // Kontrol et ve mesajÄ± yazdÄ±r
    if (remainingTime > 0) {
      var remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      var remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      var remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      // BitiÅŸ tarihini TÃ¼rkÃ§e olarak oluÅŸtur
      var emincode_ayarlar = {
        weekday: 'long', // GÃ¼n adÄ±nÄ± detaylandÄ±rmak iÃ§in 'long' deÄŸerini kullanÄ±yoruz
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      var targetDateTurkish = targetDate.toLocaleDateString('tr-TR', emincode_ayarlar);

      console.log("Lisans SÃ¼reniz: " + remainingDays + " gÃ¼n, " + remainingHours + " saat, " + remainingMinutes + " dakika, " + remainingSeconds + " saniye");
      console.log("BitiÅŸ Tarihi: " + targetDateTurkish);

      if(window.location.href.indexOf('screen=info_village') != -1) { 
        if (window.scriptRunning) {
            UI.InfoMessage('<a style="color:red;">Emin ERDEMÄ°R:</a> <a style="color:blue;">Skript</a> zaten Ã§alÄ±ÅŸÄ±yor.',1000); 
        } else {
            window.scriptRunning = true;

        initAttackPlanner(GROUP_ID);


        
	var scriptData = {
		prefix: 'BireyselKomutPlanlayÄ±cÄ±',
		name: 'Bireysel Komut PlanlayÄ±cÄ±',
		author: 'EminERDEMiR',
	};

// User Input
if (typeof DEBUG !== 'boolean') DEBUG = false;

// Constants
var LS_PREFIX = 'raSingleVillagePlanner';
var TIME_INTERVAL = 60 * 60 * 1000 * 24 * 365; // unit info does not change during the whole world duration so we only need to get it once
var GROUP_ID = localStorage.getItem(`${LS_PREFIX}_chosen_group`) ?? 0;
var LAST_UPDATED_TIME = localStorage.getItem(`${LS_PREFIX}_last_updated`) ?? 0;

// Globals
var unitInfo,
    troopCounts = [];

// Translations
var translations = {
    tr_TR: {
        'Single Village Planner': 'Bireysel Komut PlanlayÄ±cÄ±',
        Help: 'YardÄ±m',
        'This script can only be run on a single village screen!': 'Bu komut dosyasÄ± yalnÄ±zca tek bir kÃ¶y ekranÄ±nda Ã§alÄ±ÅŸtÄ±rÄ±labilir',
        'Select Landing Time': 'GiriÅŸ saatini belirleyin:',
        Village: 'KÃ¶yleriniz',
        Coords: 'Koordinat',
        Continent: 'KÄ±ta',
        'Calculate Launch Times': 'BaÅŸlatma SÃ¼relerini HesaplayÄ±n',
        Reset: 'AyarlarÄ± SÄ±fÄ±rla',
        'Launch times are being calculated ...': 'BaÅŸlatma sÃ¼releri hesaplanÄ±yor ...',
        'Missing user input!': 'KÃ¶y SeÃ§iniz!',
        'Landing Time': 'GiriÅŸ zamanÄ±',
        'This village has no unit selected!': 'Bu kÃ¶yde seÃ§ili birim yok!',
        //'Prio.': 'Ã–ncelik',
        'No possible combinations found!': 'HiÃ§bir kÃ¶y zamanÄ±nda ulaÅŸamaz!!',
        'Export Plan as BB Code': 'Komut Listesini DÄ±ÅŸa Aktar',
        //'Plan for:': 'Plan iÃ§in:',
        'Landing Time:': 'GiriÅŸ zamanÄ±:',
        Unit: 'Birim',
        'Launch Time': 'BaÅŸlatma ZamanÄ±:',
        Command: 'Komut',
        Status: 'Durum',
        Send: 'GÃ¶nder',
        From: 'KAYNAK',
        Priority: 'Ã¶ncelik',
        'Early send': 'Erken gÃ¶nder',
        'Landing time was updated!': 'Ä°niÅŸ zamanÄ± gÃ¼ncellendi!',
        'Error fetching village groups!':'KÃ¶y gruplarÄ± getirilirken hata oluÅŸtu',
        'Dist.': 'Mesafe',
        'Villages list could not be fetched!': 'KÃ¶y listesi getirilemedi!',
        Group: 'GruplarÄ±nÄ±z',
        'Export Plan without tables': 'Tablolar olmadan Ä°hracat PlanÄ±',
        'Chosen group was reset!': 'SeÃ§ilen grup sÄ±fÄ±rlandÄ±!',
        'Reset Chosen Group': 'Grup ayarlarÄ±nÄ± sÄ±fÄ±rla',
        'Script configuration was reset!': 'Skript ayarlarÄ± sÄ±fÄ±rlandÄ±!',
    },
/*
    tr_TR: {
        'Toplu Komut Zamanliyici': 'Toplu Komut Zamanliyici',
        Help: 'YardÄ±m',
        'Select Unit': 'Birim seÃ§',
        'Enter Coordinates': 'Girilen Koordinat SayÄ±sÄ±: ',
        'Calculate Times': 'ZamanlarÄ± hesapla',
        'Select Landing Time': 'GiriÅŸ saatini belirleyin:',
        'Coordinates field is empty!': 'Koordinatlar alanÄ± boÅŸ!',
        From: 'Kaynak',
        To: 'Hedef',
        Distance: 'Mesafe',
        'Travel Time': 'Seyehat sÃ¼resi',
        'Launch Time': 'BaÅŸlatma zamanÄ±',
        Send: 'GÃ¶nder',
        'No village can reach in time!': 'HiÃ§bir kÃ¶y zamanÄ±nda ulaÅŸamaz!',
        'This script requires Premium Account to be active!': 'Premium hesaba sahip olmanÄ±z gerekiyor!',
        'possible combinations found': 'Bulunan kÃ¶yler:',
        Unit: 'Birim',
        Status: 'Durum',
        'Commands List Export': 'Komut Listesini DÄ±ÅŸa Aktar',
        'Landing Time': 'GiriÅŸ zamanÄ±',
        Command: 'Komut',
        'Send In': 'Kalan sÃ¼re',
        'Export Plan': 'Plan Ã‡Ä±kart',
        'Reset Config': 'AyarlarÄ± SÄ±fÄ±rÄ±la',
        'Script configuration has been reset!': 'Skript ayarlarÄ± sÄ±fÄ±rlandÄ±!',
    },*/
};

// Fetch unit config only when needed
if (LAST_UPDATED_TIME !== null) {
    if (Date.parse(new Date()) >= LAST_UPDATED_TIME + TIME_INTERVAL) {
        fetchUnitInfo();
    } else {
        unitInfo = JSON.parse(localStorage.getItem(`${LS_PREFIX}_unit_info`));
    }
} else {
    fetchUnitInfo();
}

// Initialize Attack Planner
async function initAttackPlanner(groupId) {
    // run on script load
    const groups = await fetchVillageGroups();
    troopCounts = await fetchTroopsForCurrentGroup(groupId);
    let villages = await fetchAllPlayerVillagesByGroup(groupId);

    const destinationVillage = jQuery(
        '#content_value table table td:eq(2)'
    ).text();

    villages = villages.map((item) => {
        const distance = calculateDistance(item.coords, destinationVillage);
        return {
            ...item,
            distance: parseFloat(distance.toFixed(2)),
        };
    });

    villages = villages.sort((a, b) => {
        return a.distance - b.distance;
    });

    const content = prepareContent(villages, groups);
    renderUI(content);

    // after script has been loaded events
    setTimeout(function () {
        // set a default landing time
        const today = new Date().toLocaleString('en-GB').replace(',', '');
        jQuery('#raLandingTime').val(today);

        // handle non-archer worlds
        if (!game_data.units.includes('archer')) {
            jQuery('.archer-world').hide();
        }

        // handle non-paladin worlds
        if (!game_data.units.includes('knight')) {
            jQuery('.paladin-world').hide();
        }
    }, 100);

    // scroll to element to focus user's attention
    jQuery('html,body').animate(
        { scrollTop: jQuery('#raSingleVillagePlanner').offset().top - 8 },
        'slow'
    );

    // action handlers
    choseUnit();
    changeVillagePriority();
    calculateLaunchTimes();
    resetAll();
    fillLandingTimeFromCommand();
    filterVillagesByChosenGroup();
    setAllUnits();
    resetGroup();
}

// Helper: Prepare UI
function prepareContent(villages, groups) {
    const villagesTable = renderVillagesTable(villages);
    const groupsFilter = renderGroupsFilter(groups);

    return `
		<div class="ra-mb15">
			<div class="ra-grid emin_grid">
				<div>
					<label for="raLandingTime">
                        ${tt('Select Landing Time')} (gg/aa/yyyy hh:dd:ss) > Ã–rnek: <a style="color:darkgreen;">01/01/2020 10:00:00</a>
					</label>
					<input id="raLandingTime" type="text" value="" />
				</div>
				<div>
					<label>${tt('Group')}</label>
					${groupsFilter}
				</div>
			</div>
		</div>
		<div class="ra-mb15">
			${villagesTable}
		</div>
		<div class="ra-mb15">
			<a href="javascript:void(0);" id="calculateLaunchTimes" class="btn btn-confirm-yes">
				${tt('Calculate Launch Times')}
			</a>
			<a href="javascript:void(0);" id="resetAll" class="btn btn-confirm-no">
				${tt('Reset')}
			</a>
			<a href="javascript:void(0);" id="resetGroupBtn" class="btn">
				${tt('Reset Chosen Group')}
			</a>
		</div>
		<div style="display:none;" class="ra-mb-15" id="raVillagePlanner">
			<div class="ra-mb15">
				<label for="raExportPlanBBCode">${tt('Export Plan as BB Code')}</label>
				<textarea id="raExportPlanBBCode" readonly></textarea>
			</div>
		</div>
	`;
}

// Render UI
function renderUI(body) {
    const content = `
        <div class="ra-single-village-planner" id="raSingleVillagePlanner">
            <h2 style="text-align: center">Bireysel Komut PlanlayÄ±cÄ±</h2>
            <div class="ra-single-village-planner-data">
                ${body}
            </div>
            <div><small class="ra-footer" style="min-width:20em; font-size:smaller; font-weight:bold;">Emin ERDEMÄ°R  |  Ä°letiÅŸim:<a href="https://wa.me/905537237930/" target="_blank" rel="noreferrer noopener">   WhatsApp</a></small>
            </div>
            
        </div>
        <style>
            table#raAttackPlannerTable td {border:solid thin; width: 5%;}
            .td.ra-text-left {padding-left:5px;}
            .emin_grid { margin-left: 2px; }
            .ra-single-village-planner { position: relative; display: block; width: auto; height: auto; clear: both; margin-bottom: 10px; padding: 10px; border: 1px solid #603000; box-sizing: border-box; background: #f4e4bc; }
			.ra-single-village-planner * { box-sizing: border-box; }
			.ra-single-village-planner input[type="text"] { width: 100%; padding: 5px; border: 1px solid #000; font-size: 15px; }
			.ra-single-village-planner label { font-weight: 600 !important; margin-bottom: 5px; display: block; }
			.ra-single-village-planner select { width: 98%; height: 29px; border: 1px solid #000; }
			.ra-single-village-planner textarea { width: 100%; height: 100px; resize: none; padding: 5px 10px; }
			.ra-single-village-planner .ra-grid { display: grid; grid-template-columns: 1fr 150px; grid-gap: 0 10px; }
			.ra-table { border-collapse: separate !important; border-spacing: 2px !important; }
			.ra-table tbody tr:hover td { background-color: #ffdd30 !important; }
			.ra-table tbody tr.ra-selected-village td { background-color: #ffe563 !important; }
			.ra-table th { font-size: 12px; }
			.ra-table th,.ra-table td {text-align: center; }
            .ra-table td a { word-break: break-all; }
			.ra-table tr:nth-of-type(2n+1) td { background-color: #fff5da; }
			.ra-table td img { cursor: pointer; }
			.ra-table td img.ra-selected-unit { border: 2px solid #ff0000; }
			.ra-table a:focus { color: blue; }
			.ra-table th .icon { transform: scale(1.05); margin: 0; }
			.ra-table th img { cursor: pointer; }
			.ra-table th.ra-unit-toggle:hover { background-color: rgba(97, 48, 0, 0.6) !important; background-image: none !important; cursor: pointer !important; }
			.ra-table td .icon { filter: grayscale(100%); transform: scale(1.05); margin: 0; cursor: pointer; }
			.ra-table td .icon.ra-priority-village { filter: none !important; }
			.ra-table td span { position: relative; top: 2px;  }
			.ra-chosen-command td { background-color: #ffe563; }
			.ra-groups-filter { display: inline-block; margin: 0; padding: 0; text-align: center; }
			.ra-groups-filter li { display: inline-block; list-style-type: none; margin: 0 10px; }
			.ra-groups-filter li:first-child { margin-left: 0; }
			.ra-groups-filter li:last-child { margin-right: 0; }
			.ra-selected-group { color: #21881e; }

			.ra-single-village-planner .btn { padding: 3px 4px; }

			/* Helper Classes */
			.ra-fw600 { font-weight: 600; }
			.ra-mb15 { margin-bottom: 5px; }
			.ra-dblock { display: block; }
			.ra-dflex { display: flex; }
			.ra-text-left { text-align: left !important; }
        </style>
    `;

    if (jQuery('.ra-single-village-planner').length < 1) {
        jQuery('#contentContainer').prepend(content);
    } else {
        jQuery('.ra-single-village-planner-data').html(body);
    }
}

// Action Handler: Here is the logic to collect units
function choseUnit() {
    jQuery('.ra-table td img').on('click', function () {
        // toggle state of chosen unit
        jQuery(this)
            .parent()
            .parent()
            .find('img')
            .not(this)
            .removeClass('ra-selected-unit');
        jQuery(this).toggleClass('ra-selected-unit');

        // toggle state of chosen village
        jQuery('#raAttackPlannerTable tbody tr').each(function () {
            const isAnyUnitSelected = jQuery(this).find(
                'img.ra-selected-unit'
            )[0];
            if (isAnyUnitSelected) {
                jQuery(this).addClass('ra-selected-village');
            } else {
                jQuery(this)
                    .find('td .icon')
                    .removeClass('ra-priority-village');
                jQuery(this).removeClass('ra-selected-village');
            }
        });
    });
}

// Action Handler: Change the village send priority
function changeVillagePriority() {
    jQuery('#raAttackPlannerTable tbody td .icon').on('click', function () {
        const isUnitSelectedForVillage = jQuery(this)
            .parent()
            .parent()
            .find('.ra-selected-unit')[0];
        if (isUnitSelectedForVillage) {
            jQuery(this).toggleClass('ra-priority-village');
        } else {
            UI.ErrorMessage(tt('This village has no unit selected!'));
        }
    });
}

// Action Handler: Grab the "chosen" villages and calculate their launch times based on the unit type
function calculateLaunchTimes() {
    jQuery('#calculateLaunchTimes').on('click', function (e) {
        e.preventDefault();

        const landingTimeString = jQuery('#raLandingTime').val().trim();
        const destinationVillage = jQuery(
            '#content_value table table td:eq(2)'
        ).text();

        let villagesUnitsToSend = [];

        // collect user input
        jQuery('#raAttackPlannerTable .ra-selected-unit').each(function () {
            const id = parseInt(jQuery(this).attr('data-village-id'));
            const unit = jQuery(this).attr('data-unit-type');
            const coords = jQuery(this).attr('data-village-coords');
            const isPrioVillage = jQuery(this)
                .parent()
                .parent()
                .find('td .ra-priority-village')[0]
                ? true
                : false;

            const distance = calculateDistance(coords, destinationVillage);

            villagesUnitsToSend.push({
                id: id,
                unit: unit,
                coords: coords,
                highPrio: isPrioVillage,
                distance: distance,
            });
        });

        if (villagesUnitsToSend.length > 0 && landingTimeString !== '') {
            //UI.SuccessMessage(tt('Launch times are being calculated ...'));
            const landingTime = getLandingTime(landingTimeString);
            const plans = getPlans(
                landingTime,
                destinationVillage,
                villagesUnitsToSend
            );

            if (plans.length > 0) {
                const planBBCode = getBBCodePlans(plans, destinationVillage);
                const plansCode = getCodePlans(plans, destinationVillage);
                jQuery('#raVillagePlanner').show();
                jQuery('#raExportPlanBBCode').val(planBBCode);
                jQuery('#raExportPlanCode').val(plansCode);
            } else {
                UI.ErrorMessage(tt('No possible combinations found!'));
                jQuery('#raVillagePlanner').hide();
                jQuery('#raExportPlanBBCode').val('');
                jQuery('#raExportPlanCode').val('');
            }
        } else {
            UI.ErrorMessage(tt('Missing user input!'));
        }
    });
}

// Action Handler: Reset all user input
function resetAll() {
    jQuery('#resetAll').on('click', function (e) {
        e.preventDefault();
        initAttackPlanner(GROUP_ID);
    });
}

// Action Handler: When a command is clicked fill landing time with the landing time of the command
function fillLandingTimeFromCommand() {
    jQuery(
        '#commands_outgoings table tbody tr.command-row, #commands_incomings table tbody tr.command-row'
    ).on('click', function () {
        jQuery('#commands_outgoings table tbody tr.command-row').removeClass(
            'ra-chosen-command'
        );
        jQuery(this).addClass('ra-chosen-command');

        const commandLandingTime =
            parseInt(jQuery(this).find('td:eq(2) span').attr('data-endtime')) *
            1000;

        const landingTimeDateTime = new Date(commandLandingTime);
        const serverDateTime = getServerTime();
        const localDateTime = new Date();

        const diffTime = Math.abs(localDateTime - serverDateTime);
        const newLandingTime = Math.ceil(
            Math.abs(landingTimeDateTime - diffTime)
        );
        const newLandingTimeObj = new Date(newLandingTime);
        const formattedNewLandingTime = formatDateTime(newLandingTimeObj);

        jQuery('#raLandingTime').val(formattedNewLandingTime);
        UI.SuccessMessage(tt('Landing time was updated!'));
    });
}

// Action Handler: Filter villages shown by selected group
function filterVillagesByChosenGroup() {
    jQuery('#raGroupsFilter').on('change', function (e) {
        e.preventDefault();
        initAttackPlanner(e.target.value);
        localStorage.setItem(`${LS_PREFIX}_chosen_group`, e.target.value);
    });
}

// Action Handler: Reset chosen group
function resetGroup() {
    jQuery('#resetGroupBtn').on('click', function (e) {
        e.preventDefault();
        localStorage.removeItem(`${LS_PREFIX}_chosen_group`);
        UI.SuccessMessage(tt('Chosen group was reset!'));
        initAttackPlanner(0);
    });
}

// Action Handler: Set all villages to unit
function setAllUnits() {
    jQuery('#raAttackPlannerTable thead tr th.ra-unit-toggle').on(
        'click',
        function () {
            const chosenUnit = jQuery(this).find('img').attr('data-set-unit');
            jQuery('#raAttackPlannerTable tbody tr').each(function () {
                jQuery(this)
                    .find(`img[data-unit-type="${chosenUnit}"`)
                    .trigger('click');
            });
        }
    );
}

// Prepare plans based on user input
function getPlans(landingTime, destinationVillage, villagesUnitsToSend) {
    let plans = [];

    // Prepare plans list
    villagesUnitsToSend.forEach((item) => {
        const launchTime = getLaunchTime(item.unit, landingTime, item.distance);
        const plan = {
            destination: destinationVillage,
            landingTime: landingTime,
            distance: item.distance,
            unit: item.unit,
            highPrio: item.highPrio,
            villageId: item.id,
            launchTime: launchTime,
            coords: item.coords,
            launchTimeFormatted: formatDateTime(launchTime),
        };
        plans.push(plan);
    });

    // Sort times array by nearest launch time
    plans.sort((a, b) => {
        return a.launchTime - b.launchTime;
    });

    console.debug('plans', plans);

    // Filter only valid launch times
    const filteredPlans = plans.filter((item) => {
        return item.launchTime >= getServerTime().getTime();
    });

    console.debug('filteredPlans', filteredPlans);

    return filteredPlans;
}

// Export plan as BB Code
function getBBCodePlans(plans, destinationVillage) {
    const landingTime = jQuery('#raLandingTime').val().trim();

    let bbCode = `[quote][b][color=darkgreen]Terminal: Emin ERDEMÄ°R ÅŸunu yazdÄ±:[/color][/b]
    \n[b]${tt('Landing Time')}: [color=red]${landingTime}[/color][/b]\n\n`;
    //${tt('Landing Time:')}[/b] ${landingTime}[/size]\n\n`;
    bbCode += `[table][**][size=8]${tt('Launch Time')}[/size][||][size=8]${tt('From')}[/size][||][size=8]HEDEF[/size][||][size=8]${tt('Unit')}[/size][||][size=8]${tt('Command')}[/size][||][size=8]${tt('Status')}[/size][/**]`;

    plans.forEach((plan) => {
        const { unit, highPrio, coords, villageId, launchTimeFormatted } = plan;

        const [toX, toY] = destinationVillage.split('|');

        const priority = highPrio ? tt('Early send') : '';

        let commandUrl = '';

        if (game_data.player.sitter > 0) {
            commandUrl = `/game.php?t=${game_data.player.id}&village=${villageId}&screen=place&x=${toX}&y=${toY}`;
        } else {
            commandUrl = `/game.php?village=${villageId}&screen=place&x=${toX}&y=${toY}`;
        }

        bbCode += `[*]${launchTimeFormatted}[|][coord]${coords}[/coord][|][coord]${destinationVillage}[/coord][|][unit]${unit}[/unit][|][url=${window.location.origin
            }${commandUrl}]${tt('Send')}[/url][|]\n`;
    });

    bbCode += `[/table][/quote]`;
    return bbCode;
}

// Export plans without table
function getCodePlans(plans, destinationVillage) {
    const landingTime = jQuery('#raLandingTime').val().trim();

    let planCode = `[size=12][b]${tt(
        'Plan for:'
    )}[/b] ${destinationVillage}\n[b]${tt(
        'Landing Time:'
    )}[/b] ${landingTime}[/size]\n\n`;

    plans.forEach((plan) => {
        const { unit, highPrio, coords, villageId, launchTimeFormatted } = plan;

        const [toX, toY] = destinationVillage.split('|');

        const priority = highPrio ? tt('Early send') : '';

        let commandUrl = '';

        if (game_data.player.sitter > 0) {
            commandUrl = `/game.php?t=${game_data.player.id}&village=${villageId}&screen=place&x=${toX}&y=${toY}`;
        } else {
            commandUrl = `/game.php?village=${villageId}&screen=place&x=${toX}&y=${toY}`;
        }

        planCode += `[unit]${unit}[/unit] ${coords} [b][color=#ff0000]${priority}[/color][/b]${launchTimeFormatted}[url=${window.location.origin
            }${commandUrl}]${tt('Send')}[/url]\n`;
    });

    return planCode;
}

// Helper: Calculate distance between 2 villages
function calculateDistance(villageA, villageB) {
    const x1 = villageA.split('|')[0];
    const y1 = villageA.split('|')[1];

    const x2 = villageB.split('|')[0];
    const y2 = villageB.split('|')[1];

    const deltaX = Math.abs(x1 - x2);
    const deltaY = Math.abs(y1 - y2);

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
}

// Helper: Get launch time of command
function getLaunchTime(unit, landingTime, distance) {
    const msPerSec = 1000;
    const secsPerMin = 60;
    const msPerMin = msPerSec * secsPerMin;

    const unitSpeed = unitInfo.config[unit].speed;
    const unitTime = distance * unitSpeed * msPerMin;

    const launchTime = new Date();
    launchTime.setTime(
        Math.round((landingTime - unitTime) / msPerSec) * msPerSec
    );

    return launchTime.getTime();
}

// Helper: Get server time
function getServerTime() {
    const serverTime = jQuery('#serverTime').text();
    const serverDate = jQuery('#serverDate').text();

    const [day, month, year] = serverDate.split('/');
    const serverTimeFormatted =
        year + '-' + month + '-' + day + ' ' + serverTime;
    const serverTimeObject = new Date(serverTimeFormatted);

    return serverTimeObject;
}

// Helper: Format date
function formatDateTime(date) {
    let currentDateTime = new Date(date);

    var currentYear = currentDateTime.getFullYear();
    var currentMonth = currentDateTime.getMonth();
    var currentDate = currentDateTime.getDate();
    var currentHours = '' + currentDateTime.getHours();
    var currentMinutes = '' + currentDateTime.getMinutes();
    var currentSeconds = '' + currentDateTime.getSeconds();

    currentMonth = currentMonth + 1;
    currentMonth = '' + currentMonth;
    currentMonth = currentMonth.padStart(2, '0');

    currentHours = currentHours.padStart(2, '0');
    currentMinutes = currentMinutes.padStart(2, '0');
    currentSeconds = currentSeconds.padStart(2, '0');

    let formatted_date =
        currentDate +
        '/' +
        currentMonth +
        '/' +
        currentYear +
        ' ' +
        currentHours +
        ':' +
        currentMinutes +
        ':' +
        currentSeconds;

    return formatted_date;
}

// Helper: Get landing time date object
function getLandingTime(landingTime) {
    const [landingDay, landingHour] = landingTime.split(' ');
    const [day, month, year] = landingDay.split('/');
    const landingTimeFormatted =
        year + '-' + month + '-' + day + ' ' + landingHour;
    const landingTimeObject = new Date(landingTimeFormatted);
    return landingTimeObject;
}

// Helper: Render own villages table
function renderVillagesTable(villages) {
    if (villages.length) {
        const destinationVillage = jQuery(
            '#content_value table table td:eq(2)'
        ).text();

        let villagesTable = `
		<table id="raAttackPlannerTable" class="ra-table" width="100%">
			<thead>
				<tr>
					<th class="ra-text-left" style="width:25%; padding-left: 5px;" >
						${tt('Village')} (${villages.length})
					</th>
					<th style="width: 7%;">
						${tt('Dist.')}
					</th>
					<th class="ra-unit-toggle">
						<img src="/graphic/unit/unit_spear.png" data-set-unit="spear">
					</th>
					<th class="ra-unit-toggle">
						<img src="/graphic/unit/unit_sword.png" data-set-unit="sword">
					</th>
					<th class="ra-unit-toggle">
						<img src="/graphic/unit/unit_axe.png" data-set-unit="axe">
					</th>
					<th class="archer-world ra-unit-toggle">
						<img src="/graphic/unit/unit_archer.png" data-set-unit="archer">
					</th>
					<th class="ra-unit-toggle">
						<img src="/graphic/unit/unit_spy.png" data-set-unit="spy">
					</th>
					<th class="ra-unit-toggle">
						<img src="/graphic/unit/unit_light.png" data-set-unit="light">
					</th>
					<th class="archer-world ra-unit-toggle">
						<img src="/graphic/unit/unit_marcher.png" data-set-unit="marcher">
					</th>
					<th class="ra-unit-toggle">
						<img src="/graphic/unit/unit_heavy.png" data-set-unit="heavy">
					</th>
					<th class="ra-unit-toggle">
						<img src="/graphic/unit/unit_ram.png" data-set-unit="ram">
					</th>
					<th class="ra-unit-toggle">
						<img src="/graphic/unit/unit_catapult.png" data-set-unit="catapult">
					</th>
					<th class="paladin-world ra-unit-toggle">
						<img src="/graphic/unit/unit_knight.png" data-set-unit="knight">
					</th>
					<th class="ra-unit-toggle">
						<img src="/graphic/unit/unit_snob.png" data-set-unit="snob">
					</th>
				</tr>
			</thead>
			<tbody>
	`;

        const villageCombinations = [];
        villages.forEach((village) => {
            troopCounts.forEach((villageTroops) => {
                if (villageTroops.villageId === village.id) {
                    villageCombinations.push({
                        ...village,
                        ...villageTroops,
                    });
                }
            });
        });

        villageCombinations.forEach((village) => {
            const {
                name,
                coords,
                id,
                spear,
                sword,
                axe,
                archer,
                spy,
                light,
                marcher,
                heavy,
                ram,
                catapult,
                knight,
                snob,
                distance,
            } = village;

            const continent = getContinentByCoord(coords);
            const link = game_data.link_base_pure + `info_village&id=${id}`;

            villagesTable += `
			<tr class="" style="height:50px;">
				<td class="ra-text-left" style="padding-left:5px;">
					<a href="${link}" target="_blank" rel="noopener noreferrer">
						${name} (${coords}) K${continent}
					</a>
				</td>
				<td>
					${distance}
				</td>
				<td>
					<img data-unit-type="spear" data-village-id="${id}" data-village-coords="${coords}" src="/graphic/unit/unit_spear.png"><br>
					<span>${formatAsNumber(spear)}</span>
				</td>
				<td>
					<img data-unit-type="sword" data-village-id="${id}" data-village-coords="${coords}" src="/graphic/unit/unit_sword.png"><br>
					<span>${formatAsNumber(sword)}</span>
				</td>
				<td>
					<img data-unit-type="axe" data-village-id="${id}" data-village-coords="${coords}" src="/graphic/unit/unit_axe.png"><br>
					<span>${formatAsNumber(axe)}</span>
				</td>
				<td class="archer-world">
					<img data-unit-type="archer" data-village-id="${id}" data-village-coords="${coords}" src="/graphic/unit/unit_archer.png"><br>
					<span>${formatAsNumber(archer)}</span>
				</td>
				<td>
					<img data-unit-type="spy" data-village-id="${id}" data-village-coords="${coords}" src="/graphic/unit/unit_spy.png"><br>
					<span>${formatAsNumber(spy)}</span>
				</td>
				<td>
					<img data-unit-type="light" data-village-id="${id}" data-village-coords="${coords}" src="/graphic/unit/unit_light.png"><br>
					<span>${formatAsNumber(light)}</span>
				</td>
				<td class="archer-world">
					<img data-unit-type="marcher" data-village-id="${id}" data-village-coords="${coords}" src="/graphic/unit/unit_marcher.png"><br>
					<span>${formatAsNumber(marcher)}</span>
				</td>
				<td>
					<img data-unit-type="heavy" data-village-id="${id}" data-village-coords="${coords}" src="/graphic/unit/unit_heavy.png"><br>
					<span>${formatAsNumber(heavy)}</span>
				</td>
				<td>
					<img data-unit-type="ram" data-village-id="${id}" data-village-coords="${coords}" src="/graphic/unit/unit_ram.png"><br>
					<span>${formatAsNumber(ram)}</span>
				</td>
				<td>
					<img data-unit-type="catapult" data-village-id="${id}" data-village-coords="${coords}" src="/graphic/unit/unit_catapult.png"><br>
					<span>${formatAsNumber(catapult)}</span>
				</td>
				<td class="paladin-world">
					<img data-unit-type="knight" data-village-id="${id}" data-village-coords="${coords}" src="/graphic/unit/unit_knight.png"><br>
					<span>${formatAsNumber(knight)}</span>
				</td>
				<td>
					<img data-unit-type="snob" data-village-id="${id}" data-village-coords="${coords}" src="/graphic/unit/unit_snob.png"><br>
					<span>${formatAsNumber(snob)}</span>
				</td>
			</tr>
		`;
        });

        villagesTable += `
			</tbody>
		</table>
	`;

        return villagesTable;
    } else {
        return `<p><b>${tt('Villages list could not be fetched!')}</b><br></p>`;
    }
}

// Helper: Render groups filter
function renderGroupsFilter(groups) {
    const groupId = localStorage.getItem(`${LS_PREFIX}_chosen_group`) || 0;
    let groupsFilter = `<div class="ra_groups_filter_emin">
		<select name="ra_groups_filter" id="raGroupsFilter">
	`;

    for (const [_, group] of Object.entries(groups.result)) {
        const { group_id, name } = group;
        const isSelected =
            parseInt(group_id) === parseInt(groupId) ? 'selected' : '';
        if (name !== undefined) {
            groupsFilter += `
				<option value="${group_id}" ${isSelected}>
					${name}
				</option>
			`;
        }
    }

    groupsFilter += `
		</select></div>
	`;

    return groupsFilter;
}

// Helper: Process coordinate and extract coordinate continent
function getContinentByCoord(coord) {
    if (!coord) return '';
    const coordParts = coord.split('|');
    return coordParts[1].charAt(0) + coordParts[0].charAt(0);
}

// Helper: Fetch player villages by group
async function fetchAllPlayerVillagesByGroup(groupId) {
    let villagesByGroup = [];

    try {
        const url =
            game_data.link_base_pure + 'groups&ajax=load_villages_from_group';
        villagesByGroup = await jQuery
            .post({
                url: url,
                data: { group_id: groupId },
            })
            .then((response) => {
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(
                    response.html,
                    'text/html'
                );
                const tableRows = jQuery(htmlDoc)
                    .find('#group_table > tbody > tr')
                    .not(':eq(0)');

                let villagesList = [];

                tableRows.each(function () {
                    const villageId =
                        jQuery(this)
                            .find('td:eq(0) a')
                            .attr('data-village-id') ??
                        jQuery(this)
                            .find('td:eq(0) a')
                            .attr('href')
                            .match(/\d+/)[0];
                    const villageName = jQuery(this)
                        .find('td:eq(0)')
                        .text()
                        .trim();
                    const villageCoords = jQuery(this)
                        .find('td:eq(1)')
                        .text()
                        .trim();

                    villagesList.push({
                        id: parseInt(villageId),
                        name: villageName,
                        coords: villageCoords,
                    });
                });

                return villagesList;
            })
            .catch((error) => {
                UI.ErrorMessage(tt('Villages list could not be fetched!'));
                return [];
            });
    } catch (error) {
        console.error(`${scriptInfo()} Error:`, error);
        UI.ErrorMessage(tt('Villages list could not be fetched!'));
        return [];
    }

    return villagesByGroup;
}

// Helper: Fetch village groups
async function fetchVillageGroups() {
    const villageGroups = await jQuery
        .get(
            game_data.link_base_pure +
            'groups&mode=overview&ajax=load_group_menu'
        )
        .then((response) => response)
        .catch((error) => {
            UI.ErrorMessage('Error fetching village groups!');
            console.error(`${scriptInfo()} Error:`, error);
        });

    return villageGroups;
}

// Helper: Fetch World Unit Info
function fetchUnitInfo() {
    jQuery
        .ajax({
            url: '/interface.php?func=get_unit_info',
        })
        .done(function (response) {
            unitInfo = xml2json($(response));
            localStorage.setItem(
                `${LS_PREFIX}_unit_info`,
                JSON.stringify(unitInfo)
            );
            localStorage.setItem(
                `${LS_PREFIX}_last_updated`,
                Date.parse(new Date())
            );
        });
}

// Helper: Fetch home troop counts for current group
async function fetchTroopsForCurrentGroup() {
    const groupId = jQuery('.ra-group-filter.btn-confirm-yes').attr(
        'data-group-id'
    );
    const troopsForGroup = await jQuery
        .get(
            game_data.link_base_pure +
            `overview_villages&mode=combined&group=${groupId}&`
        )
        .then((response) => {
            const htmlDoc = jQuery.parseHTML(response);
            const combinedTableRows = jQuery(htmlDoc).find(
                '#combined_table tr.nowrap'
            );
            const combinedTableHead = jQuery(htmlDoc).find(
                '#combined_table tr:eq(0) th'
            );

            const homeTroops = [];
            const combinedTableHeader = [];

            // collect possible buildings and troop types
            jQuery(combinedTableHead).each(function () {
                const thImage = jQuery(this).find('img').attr('src');
                if (thImage) {
                    let thImageFilename = thImage.split('/').pop();
                    thImageFilename = thImageFilename.replace('.png', '');
                    combinedTableHeader.push(thImageFilename);
                } else {
                    combinedTableHeader.push(null);
                }
            });

            // collect possible troop types
            combinedTableRows.each(function () {
                let rowTroops = {};

                combinedTableHeader.forEach((tableHeader, index) => {
                    if (tableHeader) {
                        if (tableHeader.includes('unit_')) {
                            const villageId = jQuery(this)
                                .find('td:eq(1) span.quickedit-vn')
                                .attr('data-id');
                            const unitType = tableHeader.replace('unit_', '');
                            rowTroops = {
                                ...rowTroops,
                                villageId: parseInt(villageId),
                                [unitType]: parseInt(
                                    jQuery(this).find(`td:eq(${index})`).text()
                                ),
                            };
                        }
                    }
                });

                homeTroops.push(rowTroops);
            });

            return homeTroops;
        })
        .catch((error) => {
            UI.ErrorMessage(
                tt('An error occured while fetching troop counts!')
            );
            console.error(`${scriptInfo()} Error:`, error);
        });

    return troopsForGroup;
}

// Helper: XML to JSON converter
var xml2json = function ($xml) {
    var data = {};
    $.each($xml.children(), function (i) {
        var $this = $(this);
        if ($this.children().length > 0) {
            data[$this.prop('tagName')] = xml2json($this);
        } else {
            data[$this.prop('tagName')] = $.trim($this.text());
        }
    });
    return data;
};

// Helper: Clear script configuration
function resetScriptConfig() {
    localStorage.removeItem(`${LS_PREFIX}_unit_info`);
    localStorage.removeItem(`${LS_PREFIX}_chosen_group`);
    localStorage.removeItem(`${LS_PREFIX}_last_updated`);
    UI.SuccessMessage(tt('Script configuration was reset!'));
}

// Helper: Format as number
function formatAsNumber(number) {
    return parseInt(number).toLocaleString('de');
}

// Helper: Get parameter by name
function getParameterByName(name, url = window.location.href) {
    return new URL(url).searchParams.get(name);
}

// Helper: Text Translator
function tt(string) {
    var gameLocale = game_data.locale;

    if (translations[gameLocale] !== undefined) {
        return translations[gameLocale][string];
    } else {
        return translations['en_DK'][string];
    }
}
        }
} else {
    UI.InfoMessage('<a style="color:red;">Emin ERDEMÄ°R: </a>LÃ¼tfen <a style="color:blue;">KÃ¶y Bilgileri</a> bÃ¶lÃ¼mÃ¼ne giriniz.', 3000);	
}
} else {
	alert('SÃ¼reniz dolmuÅŸtur, Yeniden kiralamak iÃ§in;\n\n10 gÃ¼n = 20 â‚º\n30 gÃ¼n = 50 â‚º\n\n# Emin ERDEMÄ°R #\n> WhatsApp: +90 553 723 79 30\n> http://eminerdemir.rf.gd/')
}
})
.catch(error => {
  console.error("Sunucu HatasÄ±:", error);
});
} else {
    UI.InfoMessage('<a style="color:red; font-weight:bold;">Emin ERDEMÄ°R:</a> Bu script <a style="color:blue; font-weight:bold;">Premium</a> olmadan Ã§alÄ±ÅŸtÄ±rÄ±lamaz.',3000);
}
} else {
    UI.InfoMessage('<a style="color:red;">Emin ERDEMÄ°R:</a> LÃ¼tfen <a style="color:blue;">Kurulum</a> iÃ§in iletiÅŸime geÃ§iniz.',3000);
	awaitsleep();
    async function awaitsleep() {
    await sleep(4000);
	alert('Emin ERDEMÄ°R\n> WhatsApp: +90 553 723 79 30\n> http://eminerdemir.rf.gd/');
}
}
} else {
	eminodeme();
		async function eminodeme() {
			UI.InfoMessage('<a style="color:red;">Emin ERDEMÄ°R:</a> Bu script kiÅŸiye <a style="color:blue;">Ã¶zeldir!</a>');
			await sleep(2600);
			UI.InfoMessage('<a style="color:red;">Emin ERDEMÄ°R:</a> SatÄ±n almak iÃ§in iletiÅŸime geÃ§in!</a>');
			await sleep(2700);
			alert('10 gÃ¼n = 20 â‚º\n30 gÃ¼n = 50 â‚º\n\nEmin ERDEMÄ°R\n> WhatsApp: +90 553 723 79 30\n> http://eminerdemir.rf.gd/');
		}
}
