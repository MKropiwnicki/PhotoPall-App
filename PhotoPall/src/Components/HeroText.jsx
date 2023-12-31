import * as React from "react";
import { motion } from "framer-motion";


export const HeroText = () => {

    const outlineDuration = 1.5;
    const fillDuration= 2.5;


    const letter = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(250, 106, 20, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            // fill: "rgba(250, 106, 20, 0)",
            fill: "rgba(255, 255, 255, 1)"
        }
    };

    return(
        <motion.div className='hero-text-container'>
            <motion.div className='hero-text'>
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 240"
                    className="letter"
                >
                    <motion.path
                        d="M52.9878,85.1021l4.78-18.129q1.9423-7.4076,12.6445-7.4267H80.6763a1.4922,1.4922,0,0,1,1.1714.5332,1.8249,1.8249,0,0,1,.4663,1.2378V85.1021a1.6476,1.6476,0,0,1-.5332,1.247,1.79,1.79,0,0,1-1.2759.5049h-3.58a1.7277,1.7277,0,0,1-1.79-1.79V80.2651h-13.54L60.3193,85.064a2.2384,2.2384,0,0,1-.8569,1.2851,2.2947,2.2947,0,0,1-1.4092.5049H54.3018a1.2757,1.2757,0,0,1-1.3809-1.1807A2.9366,2.9366,0,0,1,52.9878,85.1021ZM63.0044,74.876h12.13v-9.94H69.7075A5.0623,5.0623,0,0,0,64.68,68.7632Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M87.3794,85.6924V60.7271a1.1476,1.1476,0,0,1,.3335-.8477,1.1248,1.1248,0,0,1,.8281-.333h4.2656a1.1258,1.1258,0,0,1,.8282.333,1.15,1.15,0,0,1,.3335.8477V85.6924a1.1386,1.1386,0,0,1-1.1617,1.1616H88.541a1.1386,1.1386,0,0,1-1.1616-1.1616Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M98.6528,85.6924V60.7271a1.148,1.148,0,0,1,.3335-.8477,1.125,1.125,0,0,1,.8282-.333H104.08a1.1256,1.1256,0,0,1,.8281.333,1.15,1.15,0,0,1,.3335.8477V85.6924A1.1386,1.1386,0,0,1,104.08,86.854H99.8145a1.1386,1.1386,0,0,1-1.1617-1.1616Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M108.3647,76.0186V73.7524a1.1477,1.1477,0,0,1,.3335-.8476,1.125,1.125,0,0,1,.8282-.333h14.3584a1.14,1.14,0,0,1,1.1806,1.1806v2.2662a1.1179,1.1179,0,0,1-.333.8378,1.1672,1.1672,0,0,1-.8476.3238H109.5264a1.11,1.11,0,0,1-1.1617-1.1616Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M128.55,85.1021V61.3555a1.8206,1.8206,0,0,1,1.8091-1.8091h3.542a1.804,1.804,0,0,1,1.8281,1.8091V85.064a1.6944,1.6944,0,0,1-.543,1.2666,1.7871,1.7871,0,0,1-1.2851.5234h-3.542a1.79,1.79,0,0,1-1.2759-.5049A1.6472,1.6472,0,0,1,128.55,85.1021Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M140.814,85.6924V67.1636a1.1476,1.1476,0,0,1,.3335-.8477,1.1246,1.1246,0,0,1,.8281-.333h4.2656a1.1254,1.1254,0,0,1,.8281.333,1.15,1.15,0,0,1,.3335.8477v1.2a10.66,10.66,0,0,1,6.979-2.7612,8.2851,8.2851,0,0,1,6.0274,2.2568q2.3232,2.2558,2.3232,6.9028V85.6924a1.1267,1.1267,0,0,1-.333.8286,1.1489,1.1489,0,0,1-.8476.333h-4.2466a1.1378,1.1378,0,0,1-1.1616-1.1616V74.7617q0-4.5513-3.6373-4.5513-2.38,0-5.1035,2.7232V85.6924a1.1386,1.1386,0,0,1-1.1616,1.1616h-4.2656a1.1386,1.1386,0,0,1-1.1616-1.1616Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M165.8555,76.0186V73.7524a1.147,1.147,0,0,1,.333-.8476,1.1248,1.1248,0,0,1,.8281-.333H181.375a1.14,1.14,0,0,1,1.1807,1.1806v2.2662a1.1182,1.1182,0,0,1-.333.8378,1.1674,1.1674,0,0,1-.8477.3238H167.0166a1.1089,1.1089,0,0,1-1.1611-1.1616Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M211.2441,84.0259q-3.8949,3.419-11.4257,3.4184t-11.4356-3.4184Q184.4791,80.6085,184.48,73.2t3.9033-10.8164q3.9039-3.4088,11.4356-3.4087t11.4257,3.4087q3.8936,3.4086,3.8936,10.8164T211.2441,84.0259Zm-5.208-17.624q-1.9248-2.2853-6.2177-2.2852-4.295,0-6.2276,2.2852T191.6582,73.21q0,4.5234,1.9326,6.7988t6.2276,2.2754q4.2935,0,6.2177-2.2754,1.9219-2.2756,1.9229-6.7988T206.0361,66.4019Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M218.66,85.6924V67.1636a1.1483,1.1483,0,0,1,.3339-.8477,1.125,1.125,0,0,1,.8282-.333h4.2656a1.1248,1.1248,0,0,1,.8281.333,1.148,1.148,0,0,1,.334.8477v1.2a10.6574,10.6574,0,0,1,6.9785-2.7612,8.2846,8.2846,0,0,1,6.0274,2.2568q2.3232,2.2558,2.3232,6.9028V85.6924a1.1267,1.1267,0,0,1-.333.8286,1.1491,1.1491,0,0,1-.8477.333h-4.2461a1.1378,1.1378,0,0,1-1.1621-1.1616V74.7617q0-4.5513-3.6367-4.5513-2.3818,0-5.1035,2.7232V85.6924a1.1394,1.1394,0,0,1-1.1621,1.1616h-4.2656a1.1393,1.1393,0,0,1-1.1621-1.1616Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M247.0156,84.4546q-2.9327-2.78-2.9316-8.0078t2.9512-8.0362q2.9516-2.808,8.1884-2.8085t8.169,2.7324q2.9326,2.7333,2.9336,7.8364v1.0854a1.1411,1.1411,0,0,1-1.1817,1.1807H250.8057a5.0344,5.0344,0,0,0,1.3427,3.4087,5.3117,5.3117,0,0,0,3.6846,1.0664q2.5327,0,3.4658-1.1426a2.9234,2.9234,0,0,1,2.3047-1.1616H264.44a1.14,1.14,0,0,1,1.1807,1.1807q0,5.4652-10.416,5.4463Q249.9493,87.2349,247.0156,84.4546Zm3.752-10.0357h8.8554q-.1918-4.494-4.4091-4.4941T250.7676,74.4189Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M10.4839,131.8262V108.1938a1.82,1.82,0,0,1,.5141-1.3139,1.6792,1.6792,0,0,1,1.2569-.5332h7.7505a2.222,2.222,0,0,1,1.4092.5332,2.5948,2.5948,0,0,1,.895,1.2759l5.6176,16.2622,5.6177-16.2622a2.5948,2.5948,0,0,1,.895-1.2759,2.222,2.222,0,0,1,1.4092-.5332H43.6a1.6482,1.6482,0,0,1,1.2471.5332,1.8391,1.8391,0,0,1,.5049,1.3139v23.6324a1.7735,1.7735,0,0,1-.5235,1.3047,1.7282,1.7282,0,0,1-1.2666.5234H40.1338a1.7274,1.7274,0,0,1-1.2666-.5234,1.7718,1.7718,0,0,1-.5234-1.3047v-18.605L31.6216,131.94a2.7083,2.7083,0,0,1-.9331,1.209,2.2949,2.2949,0,0,1-1.4092.5049H26.5562a2.2574,2.2574,0,0,1-1.4-.5049,2.8767,2.8767,0,0,1-.9423-1.209l-6.7032-18.7192v18.605a1.7738,1.7738,0,0,1-.5234,1.3047,1.7282,1.7282,0,0,1-1.2666.5234H12.293a1.804,1.804,0,0,1-1.8091-1.8281Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M51.7783,132.2832a5.6769,5.6769,0,0,1-2.5229-4.9512,5.5822,5.5822,0,0,1,2.5229-4.9131,11.3474,11.3474,0,0,1,6.5034-1.7138H64.585a4.1605,4.1605,0,0,0-.9331-3.104,4.7591,4.7591,0,0,0-3.2662-.876A4.0262,4.0262,0,0,0,57.11,117.877a2.8821,2.8821,0,0,1-2.3135,1.1523H51.96a1.1464,1.1464,0,0,1-.8472-.333,1.1233,1.1233,0,0,1-.3335-.8286q0-5.4654,10.3784-5.4654a11.9466,11.9466,0,0,1,7.2744,2.0284q2.7423,2.0273,2.7422,6.2744v11.7871a1.11,1.11,0,0,1-1.1616,1.1621H66.3369a1.1179,1.1179,0,0,1-.8379-.333,1.1431,1.1431,0,0,1-.3237-.8291v-.59a11.5794,11.5794,0,0,1-6.9409,2.1426A11.1241,11.1241,0,0,1,51.7783,132.2832Zm4.8565-6.6074a2.0849,2.0849,0,0,0-.7715,1.6758,2.1094,2.1094,0,0,0,.8,1.6943,3.4462,3.4462,0,0,0,2.2661.667,10.474,10.474,0,0,0,5.6558-1.7149v-2.9707H58.7388A3.1693,3.1693,0,0,0,56.6348,125.6758Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M75.8584,132.4922V113.9639a1.1476,1.1476,0,0,1,.3335-.8477,1.1248,1.1248,0,0,1,.8281-.333h4.2656a1.1258,1.1258,0,0,1,.8282.333,1.15,1.15,0,0,1,.3335.8477v1.2a10.66,10.66,0,0,1,6.979-2.7613,8.2851,8.2851,0,0,1,6.0273,2.2569q2.3232,2.2559,2.3233,6.9033v10.93a1.1273,1.1273,0,0,1-.3331.8291,1.1507,1.1507,0,0,1-.8476.333H92.35a1.1378,1.1378,0,0,1-1.1616-1.1621v-10.93q0-4.5521-3.6372-4.5518-2.38,0-5.1035,2.7232v12.7583a1.1386,1.1386,0,0,1-1.1617,1.1621H77.02a1.1386,1.1386,0,0,1-1.1616-1.1621Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M103.8037,132.2832a5.6769,5.6769,0,0,1-2.5229-4.9512,5.5822,5.5822,0,0,1,2.5229-4.9131,11.3474,11.3474,0,0,1,6.5034-1.7138H116.61a4.16,4.16,0,0,0-.9332-3.104,4.7586,4.7586,0,0,0-3.2661-.876,4.0264,4.0264,0,0,0-3.2754,1.1519,2.8818,2.8818,0,0,1-2.3134,1.1523h-2.8374a1.1464,1.1464,0,0,1-.8472-.333,1.1233,1.1233,0,0,1-.3335-.8286q0-5.4654,10.3784-5.4654a11.9466,11.9466,0,0,1,7.2744,2.0284q2.7423,2.0273,2.7422,6.2744v11.7871a1.11,1.11,0,0,1-1.1616,1.1621h-3.6753a1.1179,1.1179,0,0,1-.8379-.333,1.1431,1.1431,0,0,1-.3237-.8291v-.59a11.5794,11.5794,0,0,1-6.9409,2.1426A11.1241,11.1241,0,0,1,103.8037,132.2832Zm4.8565-6.6074a2.0849,2.0849,0,0,0-.7715,1.6758,2.1094,2.1094,0,0,0,.8,1.6943,3.4462,3.4462,0,0,0,2.2661.667,10.474,10.474,0,0,0,5.6558-1.7149v-2.9707h-5.8462A3.1693,3.1693,0,0,0,108.66,125.6758Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M129.36,129.4453a9.6749,9.6749,0,0,1-2.6568-7.2363,8.986,8.986,0,0,1,3.0279-7.2168q3.0278-2.59,8.6836-2.59a28.0924,28.0924,0,0,1,5.7319.6192,15.0618,15.0618,0,0,1,4.4751,1.5137v17.6337q0,4.2466-2.7993,6.2745t-7.855,2.0283a19.0512,19.0512,0,0,1-7.7891-1.2666,4.3079,4.3079,0,0,1-2.7324-4.18,1.14,1.14,0,0,1,1.1807-1.1807h2.8374a2.6756,2.6756,0,0,1,2.19,1.0088q1.0475,1.295,3.7227,1.2949t3.666-.875a4.0088,4.0088,0,0,0,.99-3.1045v-.8955a22.9641,22.9641,0,0,1-5.6938.7813A9.5272,9.5272,0,0,1,129.36,129.4453Zm8.6547-12.4346q-4.513-.019-4.5131,5.2081t4.3989,5.2275a17.3634,17.3634,0,0,0,4.1323-.5713V117.43A15.3048,15.3048,0,0,0,138.0146,117.0107Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M153.3062,108.8032v-.6474a2.1813,2.1813,0,0,1,.5805-1.6,2.155,2.155,0,0,1,1.6094-.59h2.3613a2.1816,2.1816,0,0,1,1.6.5811,2.1539,2.1539,0,0,1,.59,1.6089v.6474a2.1834,2.1834,0,0,1-.5806,1.6,2.1558,2.1558,0,0,1-1.6094.59h-2.3613a2.0369,2.0369,0,0,1-2.19-2.19Zm.0761,23.689V114.4209a1.115,1.115,0,0,1,.3335-.8379,1.1408,1.1408,0,0,1,.8281-.3237H158.81a1.1167,1.1167,0,0,1,.8379.3335,1.1413,1.1413,0,0,1,.3237.8281v18.0713a1.1137,1.1137,0,0,1-.3335.8379,1.1379,1.1379,0,0,1-.8281.3242h-4.2657a1.11,1.11,0,0,1-1.1616-1.1621Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M164.7314,132.4922V113.9639a1.1484,1.1484,0,0,1,.334-.8477,1.125,1.125,0,0,1,.8282-.333h4.2656a1.1248,1.1248,0,0,1,.8281.333,1.148,1.148,0,0,1,.334.8477v1.2a10.6575,10.6575,0,0,1,6.9785-2.7613,8.2843,8.2843,0,0,1,6.0273,2.2569q2.3234,2.2559,2.3233,6.9033v10.93a1.1272,1.1272,0,0,1-.333.8291,1.1511,1.1511,0,0,1-.8477.333h-4.2461a1.1378,1.1378,0,0,1-1.1621-1.1621v-10.93q0-4.5521-3.6367-4.5518-2.3818,0-5.1035,2.7232v12.7583a1.1394,1.1394,0,0,1-1.1621,1.1621h-4.2656a1.1394,1.1394,0,0,1-1.1622-1.1621Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M192.8105,129.4453a9.6749,9.6749,0,0,1-2.6562-7.2363,8.9859,8.9859,0,0,1,3.0273-7.2168q3.0279-2.59,8.6836-2.59a28.0973,28.0973,0,0,1,5.7325.6192,15.06,15.06,0,0,1,4.4746,1.5137v17.6337q0,4.2466-2.7989,6.2745-2.8008,2.0288-7.8554,2.0283a19.0529,19.0529,0,0,1-7.7891-1.2666,4.3086,4.3086,0,0,1-2.7324-4.18,1.14,1.14,0,0,1,1.1806-1.1807h2.837a2.6766,2.6766,0,0,1,2.19,1.0088q1.0473,1.295,3.7226,1.2949t3.6661-.875a4.0088,4.0088,0,0,0,.99-3.1045v-.8955a22.9685,22.9685,0,0,1-5.6943.7813A9.5264,9.5264,0,0,1,192.8105,129.4453Zm8.6543-12.4346q-4.5117-.019-4.5127,5.2081t4.3995,5.2275a17.36,17.36,0,0,0,4.1318-.5713V117.43A15.3089,15.3089,0,0,0,201.4648,117.0107Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M228.5449,131.9023l4.7793-18.1289q1.9424-7.4076,12.6446-7.4267h10.2636a1.493,1.493,0,0,1,1.1719.5332,1.8252,1.8252,0,0,1,.4668,1.2378v23.7846a1.6508,1.6508,0,0,1-.5332,1.2471,1.7924,1.7924,0,0,1-1.2764.5049h-3.58a1.7278,1.7278,0,0,1-1.79-1.79v-4.7989H237.1523l-1.2763,4.7989a2.2425,2.2425,0,0,1-.8565,1.2851,2.2972,2.2972,0,0,1-1.41.5049h-3.751a1.2757,1.2757,0,0,1-1.3809-1.1807A2.9131,2.9131,0,0,1,228.5449,131.9023Zm10.0156-10.2265h12.1309v-9.94h-5.4277a5.0634,5.0634,0,0,0-5.0274,3.8277Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M262.9355,138.91V113.9639a1.1484,1.1484,0,0,1,.334-.8477,1.125,1.125,0,0,1,.8282-.333h3.6757a1.1282,1.1282,0,0,1,.8282.333,1.1515,1.1515,0,0,1,.333.8477v.5713a11.7745,11.7745,0,0,1,6.9892-2.1329,8.7888,8.7888,0,0,1,6.6455,2.8086q2.6661,2.81,2.6661,8.0362t-2.7608,8.0078a10.0254,10.0254,0,0,1-7.4463,2.78,18.6108,18.6108,0,0,1-5.5029-.9707V138.91a1.1477,1.1477,0,0,1-.334.8476,1.1248,1.1248,0,0,1-.8281.333h-4.2656a1.125,1.125,0,0,1-.8282-.333A1.1481,1.1481,0,0,1,262.9355,138.91Zm6.59-10.2452a14.1126,14.1126,0,0,0,4.1318.78,4.3015,4.3015,0,0,0,3.7041-1.4844,8.0911,8.0911,0,0,0,1.0948-4.7421,8.3861,8.3861,0,0,0-1.0381-4.7325,3.5453,3.5453,0,0,0-3.1035-1.4756,9.3371,9.3371,0,0,0-4.7891,1.7139Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />

                    <motion.path
                        d="M288.7578,138.91V113.9639a1.148,1.148,0,0,1,.334-.8477,1.1248,1.1248,0,0,1,.8281-.333h3.6758a1.1278,1.1278,0,0,1,.8281.333,1.1511,1.1511,0,0,1,.333.8477v.5713a11.7751,11.7751,0,0,1,6.9893-2.1329,8.7889,8.7889,0,0,1,6.6455,2.8086q2.666,2.81,2.666,8.0362t-2.7607,8.0078a10.0256,10.0256,0,0,1-7.4463,2.78,18.6108,18.6108,0,0,1-5.5029-.9707V138.91a1.1481,1.1481,0,0,1-.334.8476,1.125,1.125,0,0,1-.8282.333H289.92a1.1248,1.1248,0,0,1-.8281-.333A1.1477,1.1477,0,0,1,288.7578,138.91Zm6.59-10.2452a14.1126,14.1126,0,0,0,4.1318.78,4.3017,4.3017,0,0,0,3.7041-1.4844,8.0912,8.0912,0,0,0,1.0947-4.7421,8.3861,8.3861,0,0,0-1.0381-4.7325,3.5451,3.5451,0,0,0-3.1035-1.4756,9.3371,9.3371,0,0,0-4.789,1.7139Z"
                        variants={letter}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: outlineDuration, ease: "easeInOut" },
                            fill: { duration: fillDuration, ease: [1, 0, 0.8, 1] }
                        }}
                    />
                </motion.svg>
            </motion.div>
        </motion.div>


    )
}