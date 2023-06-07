// Product Seeder - To Add Products

// Required Packages
const mongoose=require('mongoose')
const Product=require('../Models/Products')
const config=require('../config.json')

// Database Connection
const connection=mongoose.connect(config.MongoURI,()=>{
    console.log('Connected to Database')
})

// Products Adder
var products=[
    new Product({
        image:'static/productImages/img1.jpeg',
        alt:'Foldable Wheel Chair',
        name:'Foldable Wheel Chair',
        title:'FOLDABLE WHEEL CHAIR',
        category:'WHEELCHAIR',
        description:'A foldable wheelchair, it has a lightweight frame that can be folded into a compact shape and stored easily at home or into the trunk of a vehicle. The frame of the chair is foldable, including the seat. Some models even feature collapsible footrests and backrests.',
        price:0
    }),
    new Product({
        image:'static/productImages/img2.png',
        alt:'Foldable Commode Wheel Chair',
        name:'Foldable Commode Wheel Chair',
        title:'FOLDABLE COMMODE WHEEL CHAIR',
        category:'WHEELCHAIR',
        description:'A foldable commode wheel chair has a foldable frame, fixed armrest, foldable footrest, dual brake system, seat - detachable cushion fixed seat, backrest - fabric backrest with foam, cushion armrest.',
        price:0
    }),
    new Product({
        image:'static/productImages/img3.jpeg',
        alt:'Foldable High Back Recliner Wheel Chair',
        name:'Foldable High Back Recliner Wheel Chair',
        title:'FOLDABLE HIGH BACK RECLINER WHEEL CHAIR',
        category:'WHEELCHAIR',
        description:'A high-back reclining wheelchair typically has a higher than standard chair-back with an independent reclining functionality allowing, enhancing repositioning and comfort while also helping to improve blood flow. High-back reclining wheelchairs can assist individuals who need extra support due to poor trunk stability, respiratory difficulties, severe multiple sclerosis, severe arthritis, quadriplegia, or muscular dystrophy.',
        price:0
    }),
    new Product({
        image:'static/productImages/img4.jpeg',
        alt:'Foldable Children Wheel Chair',
        name:'Foldable Children Wheel Chair',
        title:'FOLDABLE CHILDREN WHEEL CHAIR',
        category:'WHEELCHAIR',
        description:'A foldable wheelchair specially for children, it has a lightweight frame that can be folded into a compact shape and stored easily at home or into the trunk of a vehicle. The frame of the chair is foldable, including the seat. Some models even feature collapsible footrests and backrests.',
        price:0
    }),
    new Product({
        image:'static/productImages/img5.jpeg',
        alt:'Wheel Chair With Detectable Armrest',
        name:'Wheel Chair With Detectable Armrest',
        title:'WHEEL CHAIR WITH DETECTABLE ARM REST',
        category:'WHEELCHAIR',
        description:'The Detachable Wheelchair Multi-Function Wheelchair has detachable Arm Rests, Detachable Foot Rests for easier patient transfer. It has detachable Arm Rest, detachable Leg Rest, handle Brakes, it is lightweight.',
        price:0
    }),
    new Product({
        image:'static/productImages/img6.jpg',
        alt:'Power Wheel Chair Motorised',
        name:'Power Wheel Chair Motorised',
        title:'POWER WHEEL CHAIR MOTORISED',
        category:'WHEELCHAIR',
        description:'A power wheelchair is a mobility aid that is propelled with the help of an electric motor rather than manual effort. This type of wheelchair usually comes with a joystick that has all the controls required to manoeuvre the wheelchair.Motorized wheelchair helps individuals with limited mobility, navigate with ease using a joystick controller, making them independent and mobile. This wheelchair can be used by stroke patients, paraplegic/quadriplegic, handicapped/disabled persons, or people suffering from lower limb illness/injury. It may also be used by people with cardiovascular and fatigue-based conditions.',
        price:0
    }),
    new Product({
        image:'static/productImages/img7.jpeg',
        alt:'ECG Machine 6 Channel',
        name:'ECG Machine 6 Channel',
        title:'ECG MACHINE 6 CHANNEL',
        category:'CARDIO',
        description:'ECG600G six channel ECG is such a kind of electrocardiograph, which samples 12 leads ECG signals simultaneously and prints out the ECG waveforms with thermal printing system. Its functions are as follows: Recording and displaying ECG waveforms in auto/manual mode; Auto-measuring and auto-diagnosing the ECG wave parameters; Prompting the state of lead off and paper lack.',
        price:0
    }),
    new Product({
        image:'static/productImages/img8.jpeg',
        alt:'ECG Machine 12 Channel',
        name:'ECG Machine 12 Channel',
        title:'ECG MACHINE 12 CHANNEL',
        category:'CARDIO',
        description:'Ecg1200g is an electrocardiograph which can 12-lead ecg signal simultaneously and print ecg waveform with thermal printing system. It features in, recording and displaying ecg waveform in Auto/manual mode, measuring and diagnosing ecg waveform parameters.',
        price:0
    }),
    new Product({
        image:'static/productImages/img9.jpeg',
        alt:'TMT Computerised',
        name:'TMT Computerised',
        title:'TMT COMPUTERISED',
        category:'CARDIO',
        description:'Computerised TMT is a diagnostic test employed to find abnormalities in working of heart. Usually this test is done by doctors to find coronary artery blockages in the patient. It is a kind of stress test to unmask symptons and signs of heart disease.',
        price:0
    }),
    new Product({
        image:'static/productImages/img10.jpeg',
        alt:'EEG Machine',
        name:'EEG Machine',
        title:'EEG MACHINE',
        category:'CARDIO',
        description:'An EEG machine is a device that records the electrical activity of the brain. It contain electrodes that can detect brain activity when placed on a subject’s scalp. The electrodes record the brain wave patterns and the EEG machine sends the data to a computer or cloud server.',
        price:0
    }),
    new Product({
        image:'static/productImages/img11.jpeg',
        alt:'Holters',
        name:'Holters',
        title:'HOLTERS',
        category:'CARDIO',
        description:'A Holter monitor is a small, wearable device that keeps track of your heart rhythm. Your doctor may want you to wear a Holter monitor for one to two days. During that time, the device records all of your heartbeats.Your doctor uses information captured on the Holter monitor to figure out if you have a heart rhythm problem.',
        price:0
    }),
    new Product({
        image:'static/productImages/img12.jpeg',
        alt:'Echo Machine',
        name:'Echo Machine',
        title:'ECHO MACHINE',
        category:'CARDIO',
        description:"An echocardiogram (echo) is a graphic outline of the heart's movement. During an echo test, ultrasound (high-frequency sound waves) from a hand-held wand placed on your chest provides pictures of the heart's valves and chambers and helps the sonographer evaluate the pumping action of the heart.",
        price:0
    }),
    new Product({
        image:'static/productImages/img13.jpeg',
        alt:'Table Top SPO2 Moniters',
        name:'Table Top SPO2 Moniters',
        title:'TABLE TOP SPO2 MONITERS',
        category:'CARDIO',
        description:'Table Top SPO2 Moniters is a compact and portable, allowing for uninterrupted monitoring with built-in battery and provides high resolution color LCD for trend tabular and SPO2 waveforms display.',
        price:0
    }),
    new Product({
        image:'static/productImages/img14.jpeg',
        alt:'Multipara Monitor',
        name:'Multipara Monitor',
        title:'MULTIPARA MONITER',
        category:'CARDIO',
        description:'Multiparameter monitors are designed to display multiple information of patient including  ECG, Spo2, Pulse rate, NIBP, Temperature, etc. data on a single screen, allowing you to see everything you need to know about your patient. It has evolved into a monitor that can accommodate a variety of critical care needs.',
        price:0
    }),
    new Product({
        image:'static/productImages/img15.jpeg',
        alt:'Defabilattors',
        name:'Defabilattors',
        title:'DEFABILATTORS',
        category:'CARDIO',
        description:"A defibrillator is a device that gives a high energy electric shock to the heart of someone who is in cardiac arrest. This high energy shock is called defibrillation, and it's an essential part in trying to save the life of someone who’s in cardiac arrest.",
        price:0
    }),
    new Product({
        image:'static/productImages/img16.jpeg',
        alt:'Nebulizer',
        name:'Nebulizer',
        title:'NEBULIZER',
        category:'CARDIO',
        description:'A nebulizer is an electrically powered machine that turns liquid medication into a mist so that it can be breathed directly into the lungs through a face mask or mouthpiece. People with asthma can use a nebulizer to take their medications.',
        price:0
    }),
    new Product({
        image:'static/productImages/img17.png',
        alt:'Treadmill',
        name:'Treadmill',
        title:'TREADMILL',
        category:'CARDIO',
        description:'A treadmill is a device generally used for walking, running, or climbing while staying in the same place.Treadmills have instead been used as exercise machines for running or walking in one place. Rather than the user powering a mill, the device provides a moving platform with a wide conveyor belt driven by an electric motor or a flywheel. The belt moves to the rear, requiring the user to walk or run at a speed matching the belt. The rate at which the belt moves is the rate of walking or running. Thus, the speed of running may be controlled and measured.',
        price:0
    }),
    new Product({
        image:'static/productImages/img18.jpeg',
        alt:'Oxygen Concentrator',
        name:'Oxygen Concentrator',
        title:'OXYGEN CONCENTRATOR',
        category:'CARDIO',
        description:'An oxygen concentrator is a medical device that concentrates oxygen from ambient air. Atmospheric air has about 78 per cent nitrogen and 21 per cent oxygen, with other gases making up the remaining 1 per cent. The oxygen concentrator takes in this air, filters it through a sieve, releases the nitrogen back into the air, and works on the remaining oxygen.',
        price:0
    }),
    new Product({
        image:'static/productImages/img19.jpeg',
        alt:'Oxygen Cylinder',
        name:'Oxygen Cylinder',
        title:'OXYGEN CYLINDER',
        category:'CARDIO',
        description:'Oxygen Cylinder is a A container designed as a refillable cylinder used to hold compressed medical Oxygen (O2) under safe conditions at high pressure.',
        price:0
    }),
    new Product({
        image:'static/productImages/img20.jpeg',
        alt:'ECG Cables',
        name:'ECG Cables',
        title:'ECG CABLES',
        category:'CARDIO',
        description:'An ECG cable is a graphical description of the electrical activity of the heart and it is created by analysing several electrodes. In other words, each ECG lead is computed by analysing the electrical currents detected by several electrodes.',
        price:0
    }),
    new Product({
        image:'static/productImages/img21.jpeg',
        alt:'ECG Gel',
        name:'ECG Gel',
        title:'ECG GEL',
        category:'CARDIO',
        description:'ECG Gel is a multipurpose gel with excellent conductive properties specially formulated to provide clear and consistance ultrasound transmission throughout a broad sign of frequencies, the ideal for all medical ultrasound procedures where a gel is preffered.',
        price:0
    }),
    new Product({
        image:'static/productImages/img22.png',
        alt:'Thermal Rolls',
        name:'Thermal Rolls',
        title:'THERMAL ROLLS',
        category:'CARDIO',
        description:'Thermal paper (sometimes referred to as an audit roll) is a special fine paper that is coated with a material formulated to change color when exposed to heat. It is used in thermal printers, particularly in inexpensive or lightweight devices such as adding machines, cash registers, and credit card terminals.',
        price:0
    }),
    new Product({
        image:'static/productImages/img23.jpeg',
        alt:'ECG Gel 5KG',
        name:'ECG Gel 5KG',
        title:'ECG GEL 5KG',
        category:'CARDIO',
        description:'This is a 5kg ECG Gel container. ECG Gel is a multipurpose gel with excellent conductive properties specially formulated to provide clear and consistance ultrasound transmission throughout a broad sign of frequencies, the ideal for all medical ultrasound procedures where a gel is preffered.',
        price:0
    }),
    new Product({
        image:'static/productImages/img24.jpeg',
        alt:'Ultrasound Machine',
        name:'Ultrasound Machine',
        title:'ULTRASOUND MACHINE',
        category:'RADIO',
        description:'An ultrasound machine makes images so that organs inside the body can be examined. The machine sends out high-frequency sound waves, which reflect off body structures. A computer receives the waves and uses them to create a picture. Unlike with an x-ray or CT scan, this test does not use ionizing radiation.',
        price:0
    }),
    new Product({
        image:'static/productImages/img25.jpeg',
        alt:'Colour Doppler',
        name:'Colour Doppler',
        title:'COLOUR DOPPLER',
        category:'RADIO',
        description:"A Doppler ultrasound is an imaging test that uses sound waves to show blood moving through blood vessels. A regular ultrasound also uses sound waves to create images of structures inside the body, but it can't show blood flow. Doppler ultrasound works by measuring sound waves that are reflected from moving objects, such as red blood cells. This is known as the Doppler effect.",
        price:0
    }),
    new Product({
        image:'static/productImages/img26.jpeg',
        alt:'C.T. Scan',
        name:'C.T. Scan',
        title:'C.T. SCAN',
        category:'RADIO',
        description:"A computerized tomography (CT) scan combines a series of X-ray images taken from different angles around your body and uses computer processing to create cross-sectional images (slices) of the bones, blood vessels and soft tissues inside your body. CT scan images provide more-detailed information than plain X-rays do. A CT scan has many uses, but it's particularly well-suited to quickly examine people who may have internal injuries from car accidents or other types of trauma. A CT scan can be used to visualize nearly all parts of the body and is used to diagnose disease or injury as well as to plan medical, surgical or radiation treatment.",
        price:0
    }),
    new Product({
        image:'static/productImages/img27.jpeg',
        alt:'MRI Machine',
        name:'MRI Machine',
        title:'MRI MACHINE',
        category:'RADIO',
        description:'MRI machines are large, tube-shaped magnets.Magnetic resonance imaging (MRI) is a medical imaging technique that uses a magnetic field and computer-generated radio waves to create detailed images of the organs and tissues in your body.',
        price:0
    }),
    new Product({
        image:'static/productImages/img28.jpeg',
        alt:'Ultrasound Roll',
        name:'Ultrasound Roll',
        title:'ULTRASOUND ROLL',
        category:'RADIO',
        description:'Ultrasound Roll are widely used for ultrasound printing.usage in ultrasound applications in the medical industry. It is highly demanded among clients for its light weight, smooth texture and easy to use features. Excellent manufacturing of this paper roll also ensures accurate as well as legible images.',
        price:0
    }),
    new Product({
        image:'static/productImages/img29.jpeg',
        alt:'Ultrasound Gel',
        name:'Ultrasound Gel',
        title:'ULTRASOUND GEL',
        category:'RADIO',
        description:'An ultrasound gel is a medium that is used in many routine exams, treatments and procedures and it has a wide range of purposes. It’s applied directly onto the skin before an ultrasound exam or procedure takes place. Ultrasound gel is a conductive medium that creates a bond between the skin and the ultrasound transducer.',
        price:0
    }),
    new Product({
        image:'static/productImages/img30.jpeg',
        alt:'Ultrasound Printer',
        name:'Ultrasound Printer',
        title:'ULTRASOUND PRINTER',
        category:'RADIO',
        description:'Ultrasound Printer is designed to be integrated into a wide range of compatible medical imaging environments such as digital ultrasound systems, mobile C-arms or cardiac catheterisation laboratory. The high quality thermal print engine can produce hard copy prints of still images captured by these systems for use in patient records and referrals.',
        price:0
    }),
    new Product({
        image:'static/productImages/img31.jpeg',
        alt:'X RAY Machine 100 WATT',
        name:'X RAY Machine 100 WATT',
        title:'X RAY MACHINE 100 WATT',
        category:'RADIO',
        description:'This is a 100 WATT X RAY Machine. X-rays are highly penetrating, ionizing radiation, therefore X-ray machines are used to take pictures of dense tissues such as bones and teeth. This is because bones absorb the radiation more than the less dense soft tissue. X-rays from a source pass through the body and onto a photographic cassette.',
        price:0
    }),
    new Product({
        image:'static/productImages/img32.jpeg',
        alt:'X RAY Machine 300 WATT',
        name:'X RAY Machine 300 WATT',
        title:'X RAY MACHINE 300 WATT',
        category:'RADIO',
        description:'This is a 300 WATT X RAY Machine. X-rays are highly penetrating, ionizing radiation, therefore X-ray machines are used to take pictures of dense tissues such as bones and teeth. This is because bones absorb the radiation more than the less dense soft tissue. X-rays from a source pass through the body and onto a photographic cassette.',
        price:0
    }),
    new Product({
        image:'static/productImages/img33.jpeg',
        alt:'X RAY Machine Digital',
        name:'X RAY Machine Digital',
        title:'X RAY MACHINE DIGITAL',
        category:'RADIO',
        description:'Digital X RAY Machine (DR) is an advanced form of x-ray inspection which produces a digital radiographic image instantly on a computer. This technique uses x-ray sensitive plates to capture data during object examination, which is immediately transferred to a computer without the use of an intermediate cassette. The incident x-ray radiation is converted into an equivalent electric charge and then to a digital image through a detector sensor.',
        price:0
    }),
    new Product({
        image:'static/productImages/img34.jpeg',
        alt:'X RAY Machine Films',
        name:'X RAY Machine Films',
        title:'X RAY MACHINE FILMS',
        category:'RADIO',
        description:'The X-ray film is the medium that record the image of part exposed with X-rays. ... However unlike photographic film, the light (or radiation) sensitive emulsion is usually coated on both sides of the base of X- ray film so that it can be used with intensifying screens.',
        price:0
    }),
    new Product({
        image:'static/productImages/img35.jpeg',
        alt:'X RAY Machine Developers or Fixer',
        name:'X RAY Machine Developers or Fixer',
        title:'X RAY MACHINE DEVELOPERS OR FIXER',
        category:'RADIO',
        description:'X RAY MACHINE DEVELOPERS OR FIXER',
        price:0
    }),
    new Product({
        image:'static/productImages/img36.png',
        alt:'X RAY Screen',
        name:'X RAY Screen',
        title:'X RAY SCREEN',
        category:'RADIO',
        description:'X RAY SCREEN',
        price:0
    }),
    new Product({
        image:'static/productImages/img37.png',
        alt:'X RAY Tray, Clip, Hangers',
        name:'X RAY Tray, Clip, Hangers',
        title:'X RAY TRAY, CLIP, HANGERS',
        category:'RADIO',
        description:'X RAY TRAY, CLIP, HANGERS',
        price:0
    }),
    new Product({
        image:'static/productImages/img38.jpeg',
        alt:'X RAY Table',
        name:'X RAY Table',
        title:'X RAY TABLE',
        category:'RADIO',
        description:'X-ray table means a patient support device with its patient support structure (tabletop) interposed between the patient and the image receptor during radiography or fluoroscopy. This includes, but is not limited to, any stretcher equipped with a radiolucent panel and any table equipped with a cassette tray (or bucky), cassette tunnel, image intensifier, or spot-film device beneath the tabletop.',
        price:0
    }),
    new Product({
        image:'static/productImages/img39.jpeg',
        alt:'Examination Gloves',
        name:'Examination Gloves',
        title:'EXAMINATION GLOVES',
        category:'GENERAL',
        description:'The use of examination gloves is part of the standard precautions to prevent medical staff from transmission of infectious agents between patients. Gloves also protect the staff from infectious agents originating from patients.',
        price:0
    }),
    new Product({
        image:'static/productImages/img40.jpeg',
        alt:'Surgical Gloves',
        name:'Surgical Gloves',
        title:'SURGICAL GLOVES',
        category:'GENERAL',
        description:'A surgical or sterile glove is worn to prevent contamination of the patient during invasive procedures and to protect the hand from exposure to potentially infectious materials.',
        price:0
    }),
    new Product({
        image:'static/productImages/img41.jpeg',
        alt:'Pulse Oximeter',
        name:'Pulse Oximeter',
        title:'PULSE OXIMETER',
        category:'GENERAL',
        description:'A pulse oximeter is a small, lightweight device used to monitor the amount of oxygen carried in the body. This non-invasive tool attaches painlessly to your fingertip, sending two wavelengths of light through the finger to measure your pulse rate and how much oxygen is in your system.',
        price:0
    }),
    new Product({
        image:'static/productImages/img42.png',
        alt:'Thermometer',
        name:'Thermometer',
        title:'THERMOMETER',
        category:'GENERAL',
        description:'A thermometer is a device used for measuring temperature. ... A thermometer is an instrument that measures temperature. It can measure the temperature of a solid such as food, a liquid such as water, or a gas such as air.',
        price:0
    }),
    new Product({
        image:'static/productImages/img43.jpeg',
        alt:'IR Thermometer',
        name:'IR Thermometer',
        title:'IR THERMOMETER',
        category:'GENERAL',
        description:'Infrared thermometers are temperature sensing devices that use electromagnetic radiation to make non-contact surface temperature readings. This allows for fast, touchless measurements from a safe distance.',
        price:0
    }),
    new Product({
        image:'static/productImages/img44.jpeg',
        alt:'Stethoscope',
        name:'Stethoscope',
        title:'STETHOSCOPE',
        category:'GENERAL',
        description:'A Stethoscope is an instrument that is used to transmit low-volume sounds such as a heartbeat (or intestinal, venous, or fetal sounds) to the ear of the listener. A stethoscope may consist of two ear pieces connected by means of flexible tubing to a diaphragm that is placed against the skin of the patient.',
        price:0
    }),
    new Product({
        image:'static/productImages/img45.jpeg',
        alt:'Steamer',
        name:'Steamer',
        title:'STEAMER',
        category:'GENERAL',
        description:'Steamer opens up your pores and helps loosen any buildup of dirt for a deeper cleanse. Opening up your pores also softens blackheads, making them easier to remove. It promotes circulation. The combination of warm steam and an increase in perspiration dilates your blood vessels and increases circulation.',
        price:0
    }),
    new Product({
        image:'static/productImages/img46.jpeg',
        alt:'Mask',
        name:'Mask',
        title:'MASK',
        category:'GENERAL',
        description:"A mask is an object normally worn on the face, typically for protection, disguise, performance, or entertainment. Masks have been used since antiquity for both ceremonial and practical purposes, as well as in the performing arts and for entertainment. They are usually worn on the face, although they may also be positioned for effect elsewhere on the wearer's body.",
        price:0
    }),
    new Product({
        image:'static/productImages/img47.jpeg',
        alt:'Shoe Covers',
        name:'Shoe Covers',
        title:'SHOE COVERS',
        category:'GENERAL',
        description:"Shoe covers are disposable slip-on garments that fit snugly over a variety of shoe style and sizes. They prevent potentially hazardous material (including organic and chemical particles) from coming in contact with the bottom of a person's shoes.",
        price:0
    }),
    new Product({
        image:'static/productImages/img48.jpeg',
        alt:'Caps',
        name:'Caps',
        title:'CAPS',
        category:'GENERAL',
        description:'Medical caps primarily protect the patient by preventing hair which may harbor contaminants from falling and making contact with the patient. It also protects the medical operator from hair-borne contaminants.',
        price:0
    }),
    new Product({
        image:'static/productImages/img49.jpeg',
        alt:'Zig-Zag Roll',
        name:'Zig-Zag Roll',
        title:'ZIG-ZAG ROLL',
        category:'GENERAL',
        description:'ZIG-ZAG ROLL',
        price:0
    }),
    new Product({
        image:'static/productImages/img50.jpeg',
        alt:'Cotton Rolls',
        name:'Cotton Rolls',
        title:'COTTON ROLLS',
        category:'GENERAL',
        description:'A cylindrical mass of purified and sterilized cotton used as packing or absorbent material in various dental procedures or medical procedures.',
        price:0
    }),
    new Product({
        image:'static/productImages/img51.jpeg',
        alt:'Micropore Tapes',
        name:'Micropore Tapes',
        title:'MICROPORE TAPES',
        category:'GENERAL',
        description:'Micropore Surgical Tape is a gentle, breathable general-purpose paper tape. Use to secure dressings and lightweight tubing and for repeated taping on fragile skin.',
        price:0
    }),
    new Product({
        image:'static/productImages/img52.jpeg',
        alt:'Spray Machines 8 LTR',
        name:'Spray Machines 8 LTR',
        title:'SPRAY MACHINES 8 LTR',
        category:'GENERAL',
        description:'This 8 liter capacity pressure sprayer provides the ideal way to easily and conveniently spray Featuring a compact design the high quality pressure sprayer is an alternative to a hose pipe and is suitable for use with most garden chemicals as well as water too.',
        price:0
    }),
    new Product({
        image:'static/productImages/img53.jpeg',
        alt:'Bandage',
        name:'Bandage',
        title:'BANDAGE',
        category:'GENERAL',
        description:'BANDAGE',
        price:0
    }),
    new Product({
        image:'static/productImages/img54.jpeg',
        alt:'Gauge',
        name:'Gauge',
        title:'GAUGE',
        category:'GENERAL',
        description:'GAUGE',
        price:0
    }),
    new Product({
        image:'static/productImages/img55.jpeg',
        alt:'Test Tubes',
        name:'Test Tubes',
        title:'TEST TUBES',
        category:'GENERAL',
        description:'The test tube is one of the most commonly used pieces of laboratory ware. Test tubes are the perfect shape and size to hold small amounts of substances, usually liquid, which are then manipulated in some way, such as being placed over the flame of a Bunsen burner.',
        price:0
    }),
    new Product({
        image:'static/productImages/img56.jpeg',
        alt:'Pipette',
        name:'Pipette',
        title:'PIPETTE',
        category:'GENERAL',
        description:'A pipette is a laboratory instrument used to measure out or transfer small quantities of liquid, in volumes of milliliters (mL), microliters (μL).',
        price:0
    }),
    new Product({
        image:'static/productImages/img57.jpeg',
        alt:'Microscope',
        name:'Microscope',
        title:'MICROSCOPE',
        category:'GENERAL',
        description:'A microscope is an instrument that can be used to observe small objects, even cells. The image of an object is magnified through at least one lens in the microscope. This lens bends light toward the eye and makes an object appear larger than it actually is.',
        price:0
    }),
    new Product({
        image:'static/productImages/img58.jpeg',
        alt:'Slides',
        name:'Slides',
        title:'SLIDES',
        category:'GENERAL',
        description:'A slide is a thin flat piece of glass and is used to hold objects for examination under a microscope. Typically the object is mounted (secured) on the slide, and then both are inserted together in the microscope for viewing.',
        price:0
    }),
    new Product({
        image:'static/productImages/img59.jpeg',
        alt:'Warm Water Bottle',
        name:'Warm Water Bottle',
        title:'WARM WATER BOTTLE',
        category:'GENERAL',
        description:'A warm water bottle is a bottle filled with hot water and sealed with a stopper, used to provide warmth, typically while in bed, but also for the application of heat to a specific part of the body.',
        price:0
    }),
    new Product({
        image:'static/productImages/img60.jpeg',
        alt:'Diaper Pants',
        name:'Diaper Pants',
        title:'DIAPER PANTS',
        category:'GENERAL',
        description:'Diaper Pants is a type of underwear that allows the wearer to urinate or defecate without using a toilet, by absorbing or containing waste products to prevent soiling of outer clothing or the external environment. When diapers become wet or soiled, they require changing, generally by a second person such as a parent or caregiver.',
        price:0
    }),
    new Product({
        image:'static/productImages/img61.jpeg',
        alt:'Sanitary Pads',
        name:'Sanitary Pads',
        title:'SANITARY PADS',
        category:'GENERAL',
        description:'A sanitary napkin, sanitary towel, sanitary pad, menstrual pad, or pad is an absorbent item worn by women when menstruating, bleeding after giving birth, recovering from gynecologic surgery, experiencing a miscarriage or abortion, or in any other situation where it is necessary to absorb a flow of blood.',
        price:0
    }),
    new Product({
        image:'static/productImages/img62.jpeg',
        alt:'Savlon Handwash 200 ML',
        name:'Savlon Handwash 200 ML',
        title:'SAVLON HANDWASH 200 ML',
        category:'GENERAL',
        description:'This is a 200ML Savlon Handwash. Savlon Handwash provides effective cleansing and protects you and your family from a million germs. Savlon Handwash also protects against the H1N1 virus, Rotavirus, Stomach Flu & Flu virus. It is dermatologically tested and is suitable for all skin types.',
        price:0
    }),
    new Product({
        image:'static/productImages/img63.jpeg',
        alt:'Savlon Handwash 500 ML',
        name:'Savlon Handwash 500 ML',
        title:'SAVLON HANDWASH 500 ML',
        category:'GENERAL',
        description:'This is a 500ML Savlon Handwash. Savlon Handwash provides effective cleansing and protects you and your family from a million germs. Savlon Handwash also protects against the H1N1 virus, Rotavirus, Stomach Flu & Flu virus. It is dermatologically tested and is suitable for all skin types.',
        price:0
    }),
    new Product({
        image:'static/productImages/img64.jpeg',
        alt:'Savlon Handwash 750 ML Refill Pack',
        name:'Savlon Handwash 750 ML Refill Pack',
        title:'SAVLON HANDWASH 750 ML REFILL PACK',
        category:'GENERAL',
        description:'This is a 750ML Savlon Handwash. Savlon Handwash provides effective cleansing and protects you and your family from a million germs. Savlon Handwash also protects against the H1N1 virus, Rotavirus, Stomach Flu & Flu virus. It is dermatologically tested and is suitable for all skin types.',
        price:0
    }),
    new Product({
        image:'static/productImages/img65.jpeg',
        alt:'Savlon Antiseptic Liquid 50 ML',
        name:'Savlon Antiseptic Liquid 50 ML',
        title:'SAVLON ANTISEPTIC LIQUID 50 ML',
        category:'GENERAL',
        description:'This is a 50ML Savlon Antiseptic Liquid. avlon Antiseptic Cream has effective cleansing agents and germ-killing. Savlons soft moisturizing cream base allows mild application onto damaged skin. It is utilized in first-aid to clean injury and prevent infection. It has two medicines called cetrimide and chlorhexidine which are both antiseptics that kill germs.',
        price:0
    }),
    new Product({
        image:'static/productImages/img66.jpeg',
        alt:'Savlon Antiseptic Liquid 100 ML',
        name:'Savlon Antiseptic Liquid 100 ML',
        title:'SAVLON ANTISEPTIC LIQUID 100 ML',
        category:'GENERAL',
        description:'This is a 100ML Savlon Antiseptic Liquid. avlon Antiseptic Cream has effective cleansing agents and germ-killing. Savlons soft moisturizing cream base allows mild application onto damaged skin. It is utilized in first-aid to clean injury and prevent infection. It has two medicines called cetrimide and chlorhexidine which are both antiseptics that kill germs.',
        price:0
    }),
    new Product({
        image:'static/productImages/img67.jpeg',
        alt:'Savlon Antiseptic Liquid 500 ML',
        name:'Savlon Antiseptic Liquid 500 ML',
        title:'SAVLON ANTISEPTIC LIQUID 500 ML',
        category:'GENERAL',
        description:'This is a big packet of 500ML Savlon Antiseptic Liquid. avlon Antiseptic Cream has effective cleansing agents and germ-killing. Savlons soft moisturizing cream base allows mild application onto damaged skin. It is utilized in first-aid to clean injury and prevent infection. It has two medicines called cetrimide and chlorhexidine which are both antiseptics that kill germs.',
        price:0
    }),
    new Product({
        image:'static/productImages/img68.jpeg',
        alt:'Savlon Antiseptic Liquid 0 ML',
        name:'Savlon Antiseptic Liquid 0 ML',
        title:'SAVLON ANTISEPTIC LIQUID 0 ML',
        category:'GENERAL',
        description:'This is a very big packet of 0ML Savlon Antiseptic Liquid. avlon Antiseptic Cream has effective cleansing agents and germ-killing. Savlons soft moisturizing cream base allows mild application onto damaged skin. It is utilized in first-aid to clean injury and prevent infection. It has two medicines called cetrimide and chlorhexidine which are both antiseptics that kill germs.',
        price:0
    }),
    new Product({
        image:'static/productImages/img69.jpeg',
        alt:'Dettol Handwash 500 ML',
        name:'Dettol Handwash 500 ML',
        title:'DETTOL HANDWASH 500 ML',
        category:'GENERAL',
        description:"This is a 500ML Dettol Handwash. Use Dettol's Original Germ Protection Handwash Liquid Soap pH balanced formula every day and keep your hands hygienically clean and refreshed. This hand wash provides soft and rich lather, leaving behind clean hands and mild pine fragrance. Wash hands properly with Dettol and help keep your family healthy!",
        price:0
    }),
    new Product({
        image:'static/productImages/img70.jpeg',
        alt:'Dettol Handwash 900 ML',
        name:'Dettol Handwash 900 ML',
        title:'DETTOL HANDWASH 900 ML',
        category:'GENERAL',
        description:"This is a 900ML Dettol Handwash. Use Dettol's Original Germ Protection Handwash Liquid Soap pH balanced formula every day and keep your hands hygienically clean and refreshed. This hand wash provides soft and rich lather, leaving behind clean hands and mild pine fragrance. Wash hands properly with Dettol and help keep your family healthy!",
        price:0
    }),
    new Product({
        image:'static/productImages/img71.jpeg',
        alt:'Dettol Antiseptic Liquid 550 ML',
        name:'Dettol Antiseptic Liquid 550 ML',
        title:'DETTOL ANTISEPTIC LIQUID 550 ML',
        category:'GENERAL',
        description:'This is a 550ML Dettol Antiseptic Liquid.Dettol Antiseptic Liquid protects you and your family from 100 illness-causing germs. It comes in a fresh pine fragrance. The topical antiseptic liquid sanitizes your home and helps maintain your personal hygiene. The Dettol first aid antiseptic liquid can be used to protect against infection from cuts and scratches, disinfect toys, and sanitize baby wear leaving everything clean and fresh. It can also be used as a household disinfectant and cleaner on surfaces or in laundry cleaning to kill germs. This liquid antiseptic is recommended by the Indian Medical Association and can be kept in your emergency first aid kit.',
        price:0
    }),
    new Product({
        image:'static/productImages/img72.jpeg',
        alt:'Short Wave Diathermy 500 WATT',
        name:'Short Wave Diathermy 500 WATT',
        title:'SHORT WAVE DIATHERMY 500 WATT',
        category:'PHYSIO',
        description:'Short Wave Diathermy 500 WATT is widely used in hospitals for the treatment of arthritis and rheumatism. It has a compact size, has high functionality.',
        price:0
        }),
    new Product({
        image:'static/productImages/img73.jpeg',
        alt:'Ultrasonic Therapy 5 LED',
        name:'Ultrasonic Therapy 5 LED',
        title:'ULTRASONIC THERAPY 5 LED',
        category:'PHYSIO',
        description:'Ultrasonic Therapy 5 LED provides therapeutic deep heat treatment for relaxation reduce swelling and inflammation. Encourage the synthesis of proteins inside the cells lymphatic drainage with cellulite reduction regenerate wounded tissues accelerate the metabolism of cells.',
        price:0
        }),
    new Product({
        image:'static/productImages/img74.jpeg',
        alt:'Tens Therapy',
        name:'Tens Therapy',
        title:'TENS THERAPY',
        category:'PHYSIO',
        description:'Transcutaneous electrical nerve stimulation (TENS) is a method of pain relief involving the use of a mild electrical current. A TENS machine is a small, battery-operated device that has leads connected to sticky pads called electrodes.',
        price:0
        }),
    new Product({
        image:'static/productImages/img75.jpeg',
        alt:'Muscle Stimulator',
        name:'Muscle Stimulator',
        title:'MUSCLE STIMULATOR',
        category:'PHYSIO',
        description:'Electrical muscle stimulators, also known as E-Stim, or EMS devices are devices that send electrical impulses to your muscles to promote muscle contractions.',
        price:0
        }),
    new Product({
        image:'static/productImages/img76.jpeg',
        alt:'Interferential Therapy 29 Program',
        name:'Interferential Therapy 29 Program',
        title:'INTERFERENTIAL THERAPY 29 PROGRAM',
        category:'PHYSIO',
        description:'Interferential Therapy 29 Program is an Excellent Pain relief Machine one can use very safely at home , customer can call us directly for any operational Problems. It is Excellent modality for pain Relief muscular Pain,Back Pain,Neck pain chronic arthritis Knee & slip disc pain.',
        price:0
        }),
    new Product({
        image:'static/productImages/img77.jpeg',
        alt:'Interferential Therapy 70 Program',
        name:'Interferential Therapy 70 Program',
        title:'INTERFERENTIAL THERAPY 70 PROGRAM',
        category:'PHYSIO',
        description:'This interferential therapy 70 program is an electro therapy device. It is compact in size and light in weight. It helps in increasing the blood flow and it is easy to use.',
        price:0
        }),
    new Product({
        image:'static/productImages/img78.jpeg',
        alt:'Interferential Therapy 125 Program',
        name:'Interferential Therapy 125 Program',
        title:'INTERFERENTIAL THERAPY 125 PROGRAM',
        category:'PHYSIO',
        description:'Interferential Therapy 125 Program is a computerized Inter Ferential Therapy machine with Mid-frequency current makes it very attractive and free from analog knobs systems. It contains concept is completely soft touch unit. The circuit is based on Micro Processors based which different programs for different type of treatment application.',
        price:0
        }),
    new Product({
        image:'static/productImages/img79.jpeg',
        alt:'Lazer Therapy',
        name:'Lazer Therapy',
        title:'LAZER THERAPY',
        category:'PHYSIO',
        description:'Laser therapies are medical treatments that use focused light. Unlike most light sources, light from a laser (which stands for light amplification by stimulated emission of radiation) is tuned to specific wavelengths. This allows it to be focused into powerful beams.',
        price:0
        }),
    new Product({
        image:'static/productImages/img80.jpeg',
        alt:'CPM Knee',
        name:'CPM Knee',
        title:'CPM KNEE',
        category:'PHYSIO',
        description:'A continuous passive motion (CPM) machine is a motorized device that passively moves a joint through a pre-set range of motion. These devices may be used after surgery to reduce joint stiffness and improve range of motion.',
        price:0
        }),
    new Product({
        image:'static/productImages/img81.jpeg',
        alt:'Compression Therapy',
        name:'Compression Therapy',
        title:'COMPRESSION THERAPY',
        category:'PHYSIO',
        description:'Compression therapy works by applying controlled pressure to the surface veins, keeping their diameter small and forcing blood back into the deep vein system which in turn pushes the blood uphill towards the heart. Improved blood flow aids in the healing of active ulcers and in preventing ulcer recurrences.',
        price:0
        }),
    new Product({
        image:'static/productImages/img82.jpeg',
        alt:'Traction Machine',
        name:'Traction Machine',
        title:'TRACTION MACHINE',
        category:'PHYSIO',
        description:'Traction machine is use used to relieve pain and restore muscle function by mobilizing muscles, ligaments and joints. Traction machines are clinically proven to be effective in pain treatment particularly for cervical and lumbar pain. Traction Machine helps in reducing disc pressure, relax muscles, relieve nerve root compression and improve blood flow.',
        price:0
        }),
    new Product({
        image:'static/productImages/img83.jpeg',
        alt:'Long Wave Therapy',
        name:'Long Wave Therapy',
        title:'LONG WAVE THERAPY',
        category:'PHYSIO',
        description:'Longwave Diathermy treatment is based on Capacitor Field. Longwave improves circulation, reduces pain and improves Mobility.',
        price:0
        }),
    new Product({
        image:'static/productImages/img84.jpeg',
        alt:'Ultrasonic Therapy 1 AND 3 MHZ',
        name:'Ultrasonic Therapy 1 AND 3 MHZ',
        title:'ULTRASONIC THERAPY 1 AND 3 MHZ',
        category:'PHYSIO',
        description:'ULTRASONIC THERAPY 1 AND 3 MHZ',
        price:0
        }),
    new Product({
        image:'static/productImages/img85.jpeg',
        alt:'Physical Therapy Couch',
        name:'Physical Therapy Couch',
        title:'PHYSICAL THERAPY COUCH',
        category:'PHYSIO',
        description:'PHYSICAL THERAPY COUCH',
        price:0
        }),
    new Product({
        image:'static/productImages/img86.jpeg',
        alt:'Quadicip Table',
        name:'Quadicip Table',
        title:'QUADICIP TABLE',
        category:'PHYSIO',
        description:'The Quadriceps Table consists of foam padded torque unit with two lever arms and of which hold the weight while the other provide contact with a patient. There are two models of Quadriceps table available. Quadriceps Table with Back Rest. Quadriceps Table without Back Rest.',
        price:0
        }),
    new Product({
        image:'static/productImages/img87.jpeg',
        alt:'Multifunctional Station',
        name:'Multifunctional Station',
        title:'MULTIFUNTIONAL STATION',
        category:'PHYSIO',
        description:'Multifunctional Station has a unique, compact and non-conventional design. A pulley travels upwards/downwards and is fully adjustable to various positions and levels. A pull-up and chin-up bar give the machine the extra feature allowing more variations to be exercised.',
        price:0
        }),
    new Product({
        image:'static/productImages/img88.jpeg',
        alt:'Wax Bath Medium Size',
        name:'Wax Bath Medium Size',
        title:'WAX BATH MEDIUM SIZE',
        category:'PHYSIO',
        description:'WAX BATH MEDIUM SIZE',
        price:0
        }),
    new Product({
        image:'static/productImages/img89.jpeg',
        alt:'Hydrocollator 4 Pack',
        name:'Hydrocollator 4 Pack',
        title:'HYDROCOLLATOR 4 PACK',
        category:'PHYSIO',
        description:'Hydrocollator Packs are a combination of bentonite clay and other natural fillings. These bentonite clay packs applied externally are used to alleviate inflammatory pain, joint pain, arthritis, congestion, bruised tissue, and strains.',
        price:0
        }),
    new Product({
        image:'static/productImages/img90.jpeg',
        alt:'Static Cycle',
        name:'Static Cycle',
        title:'STATIC CYCLE',
        category:'PHYSIO',
        description:'A stationary or static bicycle (also known as exercise bicycle, exercise bike or exercycle) is a device used as exercise equipment for indoor cycling. It includes a saddle, pedals, and some form of handlebars arranged as on a (stationary) bicycle.',
        price:0
        }),
    new Product({
        image:'static/productImages/img91.jpeg',
        alt:'Pedo Cycle Electric',
        name:'Pedo Cycle Electric',
        title:'PEDO CYCLE ELECTRIC',
        category:'PHYSIO',
        description:'The Pedo Cycle Electric can help to improve circulation and muscle strength and is ideal for those keen to exercise from the comfort of their own homes. It can be used to exercise your legs from a seated position or lying down, or on a table of r arm exercises.With a lightweight, sleek and compact design, the mini exercise bike can be easily stored away when not in use. minimal assembly required.',
        price:0
        }),
    new Product({
        image:'static/productImages/img92.jpeg',
        alt:'Pedo Cycle Manual',
        name:'Pedo Cycle Manual',
        title:'PEDO CYCLE MANUAL',
        category:'PHYSIO',
        description:'This Manual Pedo Cycle will help you improve your movement range and improve the flexibility of your leg muscles which further reduces the lower back pain and muscle strain. It will help with most of the muscle of your lower body such as your inner thighs and calves and will also re establish muscle power and coordination ability of your limb joints. This range of high quality pedo cycles were designed to facilitate the process of recover from any kind of injury or illness.',
        price:0
        }),
    new Product({
        image:'static/productImages/img93.jpeg',
        alt:'Ankle Exerciser',
        name:'Ankle Exerciser',
        title:'ANKLE EXERCISER',
        category:'PHYSIO',
        description:'Ankle Exerciser is an exercise therapy machine with painted Aluminium Boot and straps.As the name suggests this is used for ankle exercises.',
        price:0
        }),
    new Product({
        image:'static/productImages/img94.jpeg',
        alt:'Heal Exerciser',
        name:'Heal Exerciser',
        title:'HEAL EXERCISER',
        category:'PHYSIO',
        description:'A specifically designed unit for exercising the heel and tarsus muscle groups. Unit is fitted on a laminated wooden base and patient can exercise while sitting on chair. The resistance can be increased or decreased by shifting the foot older up or down on the lever.',
        price:0
        }),
    new Product({
        image:'static/productImages/img95.jpeg',
        alt:'Grip Exerciser',
        name:'Grip Exerciser',
        title:'GRIP EXERCISER',
        category:'PHYSIO',
        description:'Grip Exerciser, sometimes called hand grippers, are primarily used for testing and increasing the strength of the hands; this specific form of grip strength has been called crushing grip, which has been defined as meaning the prime movers are the four fingers, rather than the thumb.',
        price:0
        }),
    new Product({
        image:'static/productImages/img96.jpeg',
        alt:'Shoulder Ladder',
        name:'Shoulder Ladder',
        title:'SHOULDER LADDER',
        category:'PHYSIO',
        description:"The Shoulder Exercise Ladder increases the user's range of motion, strength and flexibility. The dowel rod moves on the adjustable-angle stand, permitting the user to work on different muscle groups. They can even increase resistance with adding cuff weights to bar.",
        price:0
        }),
    new Product({
        image:'static/productImages/img97.jpeg',
        alt:'Shoulder Pulley Set',
        name:'Shoulder Pulley Set',
        title:'SHOULDER PULLEY SET',
        category:'PHYSIO',
        description:"The shoulder pulley is an apparatus that's hooked over the top of a door, with a small pulley system near the top, and a rope with handles that hangs down from the pulley. Shoulder pulleys are an excellent way to improve rotator cuff and shoulder range of motion after injury or surgery.",
        price:0
        }),
    new Product({
        image:'static/productImages/img98.jpeg',
        alt:'Wrist Rotary Machine',
        name:'Wrist Rotary Machine',
        title:'WRIST ROTARY MACHINE',
        category:'PHYSIO',
        description:'Wrist Rotary Machine is used for the flexion and extension exercise of wrist and forearm.It is fitted on a laminated board and is controllable from zero to maximum for flexion and extension exercises of wrist and forearm.',
        price:0
        }),
    new Product({
        image:'static/productImages/img99.jpeg',
        alt:'Hand Exerciser Table',
        name:'Hand Exerciser Table',
        title:'HAND EXERCISER TABLE',
        category:'PHYSIO',
        description:'Hand Exerciser Table helps to rehabilitate the hands, fingers, and wrist disorders injuries, fractures through various physical methods and devices. It is also used for a variety of applications in rehabilitation centers, sports medicine facilities, hospitals and clinics for such conditions as arthritis, nerve damage, carpal tunnel syndrome, fractures and muscles/tendon tears.',
        price:0
        }),
    new Product({
        image:'static/productImages/img100.jpeg',
        alt:'Shoulder Wheel Compact',
        name:'Shoulder Wheel Compact',
        title:'SHOULDER WHEEL COMPACT',
        category:'PHYSIO',
        description:'Shoulder Wheel Compact, a wall mounting unit suitable for small clinics is adjustable in height and radios and fitted with calibrated sensitive resistance mechanism, resistance is controllable from zero to maximum by tightening the strap.',
        price:0
        }),
    new Product({
        image:'static/productImages/img101.jpeg',
        alt:'Shoulder Wheel Full Size',
        name:'Shoulder Wheel Full Size',
        title:'SHOULDER WHEEL FULL SIZE',
        category:'PHYSIO',
        description:'The Shoulder Wheel is a mechanism that helps in rehabilitation.Rehabilitation is the key to returning the shoulder to its original state, which is typically accomplished through simple exercises. Shoulder Wheel allows patients to perform resistance exercises to improve range of motion and relieve pain.',
        price:0
        }),
    new Product({
        image:'static/productImages/img102.jpeg',
        alt:'Parallel Walking Bar',
        name:'Parallel Walking Bar',
        title:'PARALLEL WALKING BAR',
        category:'PHYSIO',
        description:'Parallel bars are medical devices specifically used in physical and occupational rehabilitation therapy to assist individuals to re-learn to walk and for gait training, as well as to regain balance, strength, range of motion, and mobility.',
        price:0
        }),
    new Product({
        image:'static/productImages/img103.jpeg',
        alt:'Peg Board',
        name:'Peg Board',
        title:'PEG BOARD',
        category:'PHYSIO',
        description:'PEG BOARD',
        price:0
        }),
    new Product({
        image:'static/productImages/img104.jpeg',
        alt:'Stair Case Exerciser',
        name:'Stair Case Exerciser',
        title:'STAIR CASE EXERCISER',
        category:'PHYSIO',
        description:'Stair Case Exerciser is basically used in gyms, health centres and can also be used at homes. They are best to climb and downhill the stairs at a particular place.',
        price:0
        }),
    new Product({
        image:'static/productImages/img105.jpeg',
        alt:'Weight Cuff Set',
        name:'Weight Cuff Set',
        title:'WEIGHT CUFF SET',
        category:'PHYSIO',
        description:'Weight cuff are weights that are strapped around the wrists and ankles, and are generally filled with steel shot or sand, usually weighing between one to ten pounds.Weight Cuff Set is basically used to strengthen weak muscles through load resisting exercises of both upper and lower limbs.',
        price:0
        }),
    new Product({
        image:'static/productImages/img106.jpeg',
        alt:'Hand Gym Kit Board',
        name:'Hand Gym Kit Board',
        title:'HAND GYM KIT BOARD',
        category:'PHYSIO',
        description:'Hand Gym Kit Board is laminated exercise board with storage drawer, have several holes to fix pegs and springs. The unit permits active flexion and extension exercises of finger and grip.',
        price:0
        }),
    new Product({
        image:'static/productImages/img107.jpeg',
        alt:'I.R. Lamp',
        name:'I.R. Lamp',
        title:'I.R. LAMP',
        category:'PHYSIO',
        description:'An I.R. Lamp a high-power incandescent lamp operating at a lower filament temperature than a lamp used for illumination and yielding a large percentage of infrared radiation that is useful for heating purposes.',
        price:0
        }),
    new Product({
        image:'static/productImages/img108.jpeg',
        alt:'Combination Therapy',
        name:'Combination Therapy',
        title:'COMBINATION THERAPY',
        category:'PHYSIO',
        description:'COMBINATION THERAPY',
        price:0
        }),
    new Product({
        image:'static/productImages/img109.jpeg',
        alt:'IFT+TENS+MS+US',
        name:'IFT+TENS+MS+US',
        title:'IFT+TENS+MS+US',
        category:'PHYSIO',
        description:'IFT+TENS+MS+US',
        price:0
        }),
    new Product({
        image:'static/productImages/img110.jpeg',
        alt:'IFT+TENS+US',
        name:'IFT+TENS+US',
        title:'IFT+TENS+US',
        category:'PHYSIO',
        description:'IFT+TENS+US',
        price:0
        }),
    new Product({
        image:'static/productImages/img111.jpeg',
        alt:'IFT+TENS',
        name:'IFT+TENS',
        title:'IFT+TENS',
        category:'PHYSIO',
        description:'IFT+TENS',
        price:0
        }),
]

var done=0
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            console.log('All products added')
            exit()
        }
    })
}

function exit() {
    mongoose.disconnect()
}