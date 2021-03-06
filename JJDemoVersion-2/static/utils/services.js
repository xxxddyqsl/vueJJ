import utils from './utils';
var _mod = '- Emoji Modifier Fitzpatrick Type-';
var table = [{ u: '1F600', e: 'π', n: 'Grinning Face', f: 1, s: 'grinning' }, { u: '1F62C', e: 'π¬', n: 'Grimacing Face', f: 1, s: 'grimacing' }, { u: '1F601', e: 'π', n: 'Grinning Face With Smiling Eyes', f: 1, s: 'grin' }, { u: '1F602', e: 'π', n: 'Face With Tears Of Joy', f: 1, s: 'joy' }, { u: '1F603', e: 'π', n: 'Smiling Face With Open Mouth', f: 1, s: 'smiley' }, { u: '1F604', e: 'π', n: 'Smiling Face With Open Mouth And Smiling Eyes', f: 1, s: 'smile' }, { u: '1F605', e: 'π', n: 'Smiling Face With Open Mouth And Cold Sweat', f: 1, s: 'sweat_smile' }, { u: '1F606', e: 'π', n: 'Smiling Face With Open Mouth And Tightly-closed Eyes', f: 1, s: 'laughing' }, { u: '1F607', e: 'π', n: 'Smiling Face With Halo', f: 1, s: 'innocent' }, { u: '1F609', e: 'π', n: 'Winking Face', f: 1, s: 'wink' }, { u: '1F60A', e: 'π', n: 'Smiling Face With Smiling Eyes', f: 1, s: 'blush' }, { u: '1F642', e: 'π', n: 'Slightly Smiling Face', f: 1, s: 'slight_smile' }, { u: '1F643', e: 'π', n: 'Upside-down Face', f: 1 }, { u: '263A', e: 'βΊοΈ', n: 'White Smiling Face', f: 1, s: 'relaxed' }, { u: '1F60B', e: 'π', n: 'Face Savouring Delicious Food', f: 1, s: 'yum' }, { u: '1F60C', e: 'π', n: 'Relieved Face', f: 1, s: 'relieved' }, { u: '1F60D', e: 'π', n: 'Smiling Face With Heart-shaped Eyes', f: 1, s: 'heart_eyes' }, { u: '1F618', e: 'π', n: 'Face Throwing A Kiss', f: 1, s: 'kissing_heart' }, { u: '1F617', e: 'π', n: 'Kissing Face', f: 1, s: 'kissing' }, { u: '1F619', e: 'π', n: 'Kissing Face With Smiling Eyes', f: 1, s: 'kissing_smiling_eyes' }, { u: '1F61A', e: 'π', n: 'Kissing Face With Closed Eyes', f: 1, s: 'kissing_closed_eyes' }, { u: '1F61C', e: 'π', n: 'Face With Stuck-out Tongue And Winking Eye', f: 1, s: 'stuck_out_tongue_winking_eye' }, { u: '1F61D', e: 'π', n: 'Face With Stuck-out Tongue And Tightly-closed Eyes', f: 1, s: 'stuck_out_tongue_closed_eyes' }, { u: '1F61B', e: 'π', n: 'Face With Stuck-out Tongue', f: 1, s: 'stuck_out_tongue' }, { u: '1F911', e: 'π€', n: 'Money-mouth Face', f: 1 }, { u: '1F913', e: 'π€', n: 'Nerd Face', f: 1 }, { u: '1F60E', e: 'π', n: 'Smiling Face With Sunglasses', f: 1, s: 'sunglasses' }, { u: '1F917', e: 'π€', n: 'Hugging Face', f: 1 }, { u: '1F60F', e: 'π', n: 'Smirking Face', f: 1, s: 'smirk' }, { u: '1F636', e: 'πΆ', n: 'Face Without Mouth', f: 1, s: 'no_mouth' }, { u: '1F610', e: 'π', n: 'Neutral Face', f: 1, s: 'neutral_face' }, { u: '1F611', e: 'π', n: 'Expressionless Face', f: 1, s: 'expressionless' }, { u: '1F612', e: 'π', n: 'Unamused Face', f: 1, s: 'unamused' }, { u: '1F644', e: 'π', n: 'Face With Rolling Eyes', f: 1 }, { u: '1F914', e: 'π€', n: 'Thinking Face', f: 1 }, { u: '1F633', e: 'π³', n: 'Flushed Face', f: 1, s: 'flushed' }, { u: '1F61E', e: 'π', n: 'Disappointed Face', f: 1, s: 'disappointed' }, { u: '1F61F', e: 'π', n: 'Worried Face', f: 1, s: 'worried' }, { u: '1F620', e: 'π ', n: 'Angry Face', f: 1, s: 'angry' }, { u: '1F621', e: 'π‘', n: 'Pouting Face', f: 1, s: 'rage' }, { u: '1F614', e: 'π', n: 'Pensive Face', f: 1, s: 'pensive' }, { u: '1F615', e: 'π', n: 'Confused Face', f: 1, s: 'confused' }, { u: '1F641', e: 'π', n: 'Slightly Frowning Face', f: 1, s: 'slight_frown' }, { u: '2639', e: 'βΉοΈ', n: 'White Frowning Face', f: 1 }, { u: '1F623', e: 'π£', n: 'Persevering Face', f: 1, s: 'persevere' }, { u: '1F616', e: 'π', n: 'Confounded Face', f: 1, s: 'confounded' }, { u: '1F62B', e: 'π«', n: 'Tired Face', f: 1, s: 'tired_face' }, { u: '1F629', e: 'π©', n: 'Weary Face', f: 1, s: 'weary' }, { u: '1F624', e: 'π€', n: 'Face With Look Of Triumph', f: 1, s: 'triumph' }, { u: '1F62E', e: 'π?', n: 'Face With Open Mouth', f: 1, s: 'open_mouth' }, { u: '1F631', e: 'π±', n: 'Face Screaming In Fear', f: 1, s: 'scream' }, { u: '1F628', e: 'π¨', n: 'Fearful Face', f: 1, s: 'fearful' }, { u: '1F630', e: 'π°', n: 'Face With Open Mouth And Cold Sweat', f: 1, s: 'cold_sweat' }, { u: '1F62F', e: 'π―', n: 'Hushed Face', f: 1, s: 'hushed' }, { u: '1F626', e: 'π¦', n: 'Frowning Face With Open Mouth', f: 1, s: 'frowning' }, { u: '1F627', e: 'π§', n: 'Anguished Face', f: 1, s: 'anguished' }, { u: '1F622', e: 'π’', n: 'Crying Face', f: 1, s: 'cry' }, { u: '1F625', e: 'π₯', n: 'Disappointed But Relieved Face', f: 1, s: 'disappointed_relieved' }, { u: '1F62A', e: 'πͺ', n: 'Sleepy Face', f: 1, s: 'sleepy' }, { u: '1F613', e: 'π', n: 'Face With Cold Sweat', f: 1, s: 'sweat' }, { u: '1F62D', e: 'π­', n: 'Loudly Crying Face', f: 1, s: 'sob' }, { u: '1F635', e: 'π΅', n: 'Dizzy Face', f: 1, s: 'dizzy_face' }, { u: '1F632', e: 'π²', n: 'Astonished Face', f: 1, s: 'astonished' }, { u: '1F910', e: 'π€', n: 'Zipper-mouth Face', f: 1 }, { u: '1F637', e: 'π·', n: 'Face With Medical Mask', f: 1, s: 'mask' }, { u: '1F912', e: 'π€', n: 'Face With Thermometer', f: 1 }, { u: '1F915', e: 'π€', n: 'Face With Head-bandage', f: 1 }, { u: '1F634', e: 'π΄', n: 'Sleeping Face', f: 1, s: 'sleeping' }, { u: '1F4A4', e: 'π€', n: 'Sleeping Symbol', f: 1, s: 'zzz' }, { u: '1F4A9', e: 'π©', n: 'Pile Of Poo', f: 1, s: 'poop' }, { u: '1F608', e: 'π', n: 'Smiling Face With Horns', f: 1, s: 'smiling_imp' }, { u: '1F47F', e: 'πΏ', n: 'Imp', f: 1, s: 'imp' }, { u: '1F479', e: 'πΉ', n: 'Japanese Ogre', f: 1, s: 'japanese_ogre' }, { u: '1F47A', e: 'πΊ', n: 'Japanese Goblin', f: 1, s: 'japanese_goblin' }, { u: '1F480', e: 'π', n: 'Skull', f: 1, s: 'skull' }, { u: '1F47B', e: 'π»', n: 'Ghost', f: 1, s: 'ghost' }, { u: '1F47D', e: 'π½', n: 'Extraterrestrial Alien', f: 1, s: 'alien' }, { u: '1F916', e: 'π€', n: 'Robot Face', f: 1 }, { u: '1F63A', e: 'πΊ', n: 'Smiling Cat Face With Open Mouth', f: 1, s: 'smiley_cat' }, { u: '1F638', e: 'πΈ', n: 'Grinning Cat Face With Smiling Eyes', f: 1, s: 'smile_cat' }, { u: '1F639', e: 'πΉ', n: 'Cat Face With Tears Of Joy', f: 1, s: 'joy_cat' }, { u: '1F63B', e: 'π»', n: 'Smiling Cat Face With Heart-shaped Eyes', f: 1, s: 'heart_eyes_cat' }, { u: '1F63C', e: 'πΌ', n: 'Cat Face With Wry Smile', f: 1, s: 'smirk_cat' }, { u: '1F63D', e: 'π½', n: 'Kissing Cat Face With Closed Eyes', f: 1, s: 'kissing_cat' }, { u: '1F640', e: 'π', n: 'Weary Cat Face', f: 1, s: 'scream_cat' }, { u: '1F63F', e: 'πΏ', n: 'Crying Cat Face', f: 1, s: 'crying_cat_face' }, { u: '1F63E', e: 'πΎ', n: 'Pouting Cat Face', f: 1, s: 'pouting_cat' }, { u: '1F64C-1F3FB', e: 'ππ»', n: 'Person Raising Both Hands In Celebration' + _mod + '1-2', f: 1, s: 'raised_hands' }, { u: '1F64C', e: 'π', n: 'Person Raising Both Hands In Celebration', f: 1, s: 'raised_hands' }, { u: '1F64C-1F3FC', e: 'ππΌ', n: 'Person Raising Both Hands In Celebration' + _mod + '3', f: 1, s: 'raised_hands' }, { u: '1F64C-1F3FD', e: 'ππ½', n: 'Person Raising Both Hands In Celebration' + _mod + '4', f: 1, s: 'raised_hands' }, { u: '1F64C-1F3FE', e: 'ππΎ', n: 'Person Raising Both Hands In Celebration' + _mod + '5', f: 1, s: 'raised_hands' }, { u: '1F64C-1F3FF', e: 'ππΏ', n: 'Person Raising Both Hands In Celebration' + _mod + '6', f: 1, s: 'raised_hands' }, { u: '1F44F', e: 'π', n: 'Clapping Hands Sign', f: 1, s: 'clap' }, { u: '1F44F-1F3FB', e: 'ππ»', n: 'Clapping Hands Sign' + _mod + '1-2', f: 1, s: 'clap' }, { u: '1F44F-1F3FC', e: 'ππΌ', n: 'Clapping Hands Sign' + _mod + '3', f: 1, s: 'clap' }, { u: '1F44F-1F3FD', e: 'ππ½', n: 'Clapping Hands Sign' + _mod + '4', f: 1, s: 'clap' }, { u: '1F44F-1F3FE', e: 'ππΎ', n: 'Clapping Hands Sign' + _mod + '5', f: 1, s: 'clap' }, { u: '1F44F-1F3FF', e: 'ππΏ', n: 'Clapping Hands Sign' + _mod + '6', f: 1, s: 'clap' }, { u: '1F44B', e: 'π', n: 'Waving Hand Sign', f: 1, s: 'wave' }, { u: '1F44B-1F3FB', e: 'ππ»', n: 'Waving Hand Sign' + _mod + '1-2', f: 1, s: 'wave' }, { u: '1F44B-1F3FC', e: 'ππΌ', n: 'Waving Hand Sign' + _mod + '3', f: 1, s: 'wave' }, { u: '1F44B-1F3FD', e: 'ππ½', n: 'Waving Hand Sign' + _mod + '4', f: 1, s: 'wave' }, { u: '1F44B-1F3FE', e: 'ππΎ', n: 'Waving Hand Sign' + _mod + '5', f: 1, s: 'wave' }, { u: '1F44B-1F3FF', e: 'ππΏ', n: 'Waving Hand Sign' + _mod + '6', f: 1, s: 'wave' }, { u: '1F44D', e: 'π', n: 'Thumbs Up Sign', f: 1, s: 'thumbsup' }, { u: '1F44D-1F3FB', e: 'ππ»', n: 'Thumbs Up Sign' + _mod + '1-2', f: 1, s: 'thumbsup' }, { u: '1F44D-1F3FC', e: 'ππΌ', n: 'Thumbs Up Sign' + _mod + '3', f: 1, s: 'thumbsup' }, { u: '1F44D-1F3FD', e: 'ππ½', n: 'Thumbs Up Sign' + _mod + '4', f: 1, s: 'thumbsup' }, { u: '1F44D-1F3FE', e: 'ππΎ', n: 'Thumbs Up Sign' + _mod + '5', f: 1, s: 'thumbsup' }, { u: '1F44D-1F3FF', e: 'ππΏ', n: 'Thumbs Up Sign' + _mod + '6', f: 1, s: 'thumbsup' }, { u: '1F44E', e: 'π', n: 'Thumbs Down Sign', f: 1, s: 'thumbsdown' }, { u: '1F44E-1F3FB', e: 'ππ»', n: 'Thumbs Down Sign' + _mod + '1-2', f: 1, s: 'thumbsdown' }, { u: '1F44E-1F3FC', e: 'ππΌ', n: 'Thumbs Down Sign' + _mod + '3', f: 1, s: 'thumbsdown' }, { u: '1F44E-1F3FD', e: 'ππ½', n: 'Thumbs Down Sign' + _mod + '4', f: 1, s: 'thumbsdown' }, { u: '1F44E-1F3FE', e: 'ππΎ', n: 'Thumbs Down Sign' + _mod + '5', f: 1, s: 'thumbsdown' }, { u: '1F44E-1F3FF', e: 'ππΏ', n: 'Thumbs Down Sign' + _mod + '6', f: 1, s: 'thumbsdown' }, { u: '1F44A', e: 'π', n: 'Fisted Hand Sign', f: 1, s: 'punch' }, { u: '1F44A-1F3FB', e: 'ππ»', n: 'Fisted Hand Sign' + _mod + '1-2', f: 1, s: 'punch' }, { u: '1F44A-1F3FC', e: 'ππΌ', n: 'Fisted Hand Sign' + _mod + '3', f: 1, s: 'punch' }, { u: '1F44A-1F3FD', e: 'ππ½', n: 'Fisted Hand Sign' + _mod + '4', f: 1, s: 'punch' }, { u: '1F44A-1F3FE', e: 'ππΎ', n: 'Fisted Hand Sign' + _mod + '5', f: 1, s: 'punch' }, { u: '1F44A-1F3FF', e: 'ππΏ', n: 'Fisted Hand Sign' + _mod + '6', f: 1, s: 'punch' }, { u: '270A', e: 'β', n: 'Raised Fist', f: 1, s: 'fist' }, { u: '270A-1F3FB', e: 'βπ»', n: 'Raised Fist' + _mod + '1-2', f: 1, s: 'fist' }, { u: '270A-1F3FC', e: 'βπΌ', n: 'Raised Fist' + _mod + '3', f: 1, s: 'fist' }, { u: '270A-1F3FD', e: 'βπ½', n: 'Raised Fist' + _mod + '4', f: 1, s: 'fist' }, { u: '270A-1F3FE', e: 'βπΎ', n: 'Raised Fist' + _mod + '5', f: 1, s: 'fist' }, { u: '270A-1F3FF', e: 'βπΏ', n: 'Raised Fist' + _mod + '6', f: 1, s: 'fist' }, { u: '270C', e: 'βοΈ', n: 'Victory Hand', f: 1, s: 'v' }, { u: '270C-1F3FB', e: 'βοΈπ»', n: 'Victory Hand' + _mod + '1-2', f: 1, s: 'v' }, { u: '270C-1F3FC', e: 'βοΈπΌ', n: 'Victory Hand' + _mod + '3', f: 1, s: 'v' }, { u: '270C-1F3FD', e: 'βοΈπ½', n: 'Victory Hand' + _mod + '4', f: 1, s: 'v' }, { u: '270C-1F3FE', e: 'βοΈπΎ', n: 'Victory Hand' + _mod + '5', f: 1, s: 'v' }, { u: '270C-1F3FF', e: 'βοΈπΏ', n: 'Victory Hand' + _mod + '6', f: 1, s: 'v' }, { u: '1F44C-1F3FB', e: 'ππ»', n: 'Ok Hand Sign' + _mod + '1-2', f: 1, s: 'ok_hand' }, { u: '1F44C', e: 'π', n: 'Ok Hand Sign', f: 1, s: 'ok_hand' }, { u: '1F44C-1F3FC', e: 'ππΌ', n: 'Ok Hand Sign' + _mod + '3', f: 1, s: 'ok_hand' }, { u: '1F44C-1F3FD', e: 'ππ½', n: 'Ok Hand Sign' + _mod + '4', f: 1, s: 'ok_hand' }, { u: '1F44C-1F3FE', e: 'ππΎ', n: 'Ok Hand Sign' + _mod + '5', f: 1, s: 'ok_hand' }, { u: '1F44C-1F3FF', e: 'ππΏ', n: 'Ok Hand Sign' + _mod + '6', f: 1, s: 'ok_hand' }, { u: '270B', e: 'β', n: 'Raised Hand', f: 1, s: 'raised_hand' }, { u: '270B-1F3FB', e: 'βπ»', n: 'Raised Hand' + _mod + '1-2', f: 1, s: 'raised_hand' }, { u: '270B-1F3FC', e: 'βπΌ', n: 'Raised Hand' + _mod + '3', f: 1, s: 'raised_hand' }, { u: '270B-1F3FD', e: 'βπ½', n: 'Raised Hand' + _mod + '4', f: 1, s: 'raised_hand' }, { u: '270B-1F3FE', e: 'βπΎ', n: 'Raised Hand' + _mod + '5', f: 1, s: 'raised_hand' }, { u: '270B-1F3FF', e: 'βπΏ', n: 'Raised Hand' + _mod + '6', f: 1, s: 'raised_hand' }, { u: '1F450', e: 'π', n: 'Open Hands Sign', f: 1, s: 'open_hands' }, { u: '1F450-1F3FB', e: 'ππ»', n: 'Open Hands Sign' + _mod + '1-2', f: 1, s: 'open_hands' }, { u: '1F450-1F3FC', e: 'ππΌ', n: 'Open Hands Sign' + _mod + '3', f: 1, s: 'open_hands' }, { u: '1F450-1F3FD', e: 'ππ½', n: 'Open Hands Sign' + _mod + '4', f: 1, s: 'open_hands' }, { u: '1F450-1F3FE', e: 'ππΎ', n: 'Open Hands Sign' + _mod + '5', f: 1, s: 'open_hands' }, { u: '1F450-1F3FF', e: 'ππΏ', n: 'Open Hands Sign' + _mod + '6', f: 1, s: 'open_hands' }, { u: '1F4AA', e: 'πͺ', n: 'Flexed Biceps', f: 1, s: 'muscle' }, { u: '1F4AA-1F3FB', e: 'πͺπ»', n: 'Flexed Biceps' + _mod + '1-2', f: 1, s: 'muscle' }, { u: '1F4AA-1F3FC', e: 'πͺπΌ', n: 'Flexed Biceps' + _mod + '3', f: 1, s: 'muscle' }, { u: '1F4AA-1F3FD', e: 'πͺπ½', n: 'Flexed Biceps' + _mod + '4', f: 1, s: 'muscle' }, { u: '1F4AA-1F3FE', e: 'πͺπΎ', n: 'Flexed Biceps' + _mod + '5', f: 1, s: 'muscle' }, { u: '1F4AA-1F3FF', e: 'πͺπΏ', n: 'Flexed Biceps' + _mod + '6', f: 1, s: 'muscle' }, { u: '1F64F', e: 'π', n: 'Person With Folded Hands', f: 1, s: 'pray' }, { u: '1F64F-1F3FB', e: 'ππ»', n: 'Person With Folded Hands' + _mod + '1-2', f: 1, s: 'pray' }, { u: '1F64F-1F3FC', e: 'ππΌ', n: 'Person With Folded Hands' + _mod + '3', f: 1, s: 'pray' }, { u: '1F64F-1F3FD', e: 'ππ½', n: 'Person With Folded Hands' + _mod + '4', f: 1, s: 'pray' }, { u: '1F64F-1F3FE', e: 'ππΎ', n: 'Person With Folded Hands' + _mod + '5', f: 1, s: 'pray' }, { u: '1F64F-1F3FF', e: 'ππΏ', n: 'Person With Folded Hands' + _mod + '6', f: 1, s: 'pray' }, { u: '261D', e: 'βοΈ', n: 'White Up Pointing Index', f: 1, s: 'point_up' }, { u: '261D-1F3FB', e: 'βοΈπ»', n: 'White Up Pointing Index' + _mod + '1-2', f: 1, s: 'point_up' }, { u: '261D-1F3FC', e: 'βοΈπΌ', n: 'White Up Pointing Index' + _mod + '3', f: 1, s: 'point_up' }, { u: '261D-1F3FD', e: 'βοΈπ½', n: 'White Up Pointing Index' + _mod + '4', f: 1, s: 'point_up' }, { u: '261D-1F3FE', e: 'βοΈπΎ', n: 'White Up Pointing Index' + _mod + '5', f: 1, s: 'point_up' }, { u: '261D-1F3FF', e: 'βοΈπΏ', n: 'White Up Pointing Index' + _mod + '6', f: 1, s: 'point_up' }, { u: '1F446', e: 'π', n: 'White Up Pointing Backhand Index', f: 1, s: 'point_up_2' }, { u: '1F446-1F3FB', e: 'ππ»', n: 'White Up Pointing Backhand Index' + _mod + '1-2', f: 1, s: 'point_up_2' }, { u: '1F446-1F3FC', e: 'ππΌ', n: 'White Up Pointing Backhand Index' + _mod + '3', f: 1, s: 'point_up_2' }, { u: '1F446-1F3FD', e: 'ππ½', n: 'White Up Pointing Backhand Index' + _mod + '4', f: 1, s: 'point_up_2' }, { u: '1F446-1F3FE', e: 'ππΎ', n: 'White Up Pointing Backhand Index' + _mod + '5', f: 1, s: 'point_up_2' }, { u: '1F446-1F3FF', e: 'ππΏ', n: 'White Up Pointing Backhand Index' + _mod + '6', f: 1, s: 'point_up_2' }, { u: '1F447', e: 'π', n: 'White Down Pointing Backhand Index', f: 1, s: 'point_down' }, { u: '1F447-1F3FB', e: 'ππ»', n: 'White Down Pointing Backhand Index' + _mod + '1-2', f: 1, s: 'point_down' }, { u: '1F447-1F3FC', e: 'ππΌ', n: 'White Down Pointing Backhand Index' + _mod + '3', f: 1, s: 'point_down' }, { u: '1F447-1F3FD', e: 'ππ½', n: 'White Down Pointing Backhand Index' + _mod + '4', f: 1, s: 'point_down' }, { u: '1F447-1F3FE', e: 'ππΎ', n: 'White Down Pointing Backhand Index' + _mod + '5', f: 1, s: 'point_down' }, { u: '1F447-1F3FF', e: 'ππΏ', n: 'White Down Pointing Backhand Index' + _mod + '6', f: 1, s: 'point_down' }, { u: '1F448', e: 'π', n: 'White Left Pointing Backhand Index', f: 1, s: 'point_left' }, { u: '1F448-1F3FB', e: 'ππ»', n: 'White Left Pointing Backhand Index' + _mod + '1-2', f: 1, s: 'point_left' }, { u: '1F448-1F3FC', e: 'ππΌ', n: 'White Left Pointing Backhand Index' + _mod + '3', f: 1, s: 'point_left' }, { u: '1F448-1F3FD', e: 'ππ½', n: 'White Left Pointing Backhand Index' + _mod + '4', f: 1, s: 'point_left' }, { u: '1F448-1F3FE', e: 'ππΎ', n: 'White Left Pointing Backhand Index' + _mod + '5', f: 1, s: 'point_left' }, { u: '1F448-1F3FF', e: 'ππΏ', n: 'White Left Pointing Backhand Index' + _mod + '6', f: 1, s: 'point_left' }, { u: '1F449', e: 'π', n: 'White Right Pointing Backhand Index', f: 1, s: 'point_right' }, { u: '1F449-1F3FB', e: 'ππ»', n: 'White Right Pointing Backhand Index' + _mod + '1-2', f: 1, s: 'point_right' }, { u: '1F449-1F3FC', e: 'ππΌ', n: 'White Right Pointing Backhand Index' + _mod + '3', f: 1, s: 'point_right' }, { u: '1F449-1F3FD', e: 'ππ½', n: 'White Right Pointing Backhand Index' + _mod + '4', f: 1, s: 'point_right' }, { u: '1F449-1F3FE', e: 'ππΎ', n: 'White Right Pointing Backhand Index' + _mod + '5', f: 1, s: 'point_right' }, { u: '1F449-1F3FF', e: 'ππΏ', n: 'White Right Pointing Backhand Index' + _mod + '6', f: 1, s: 'point_right' }, { u: '1F595-1F3FB', e: 'ππ»', n: 'Reversed Hand With Middle Finger Extended' + _mod + '1-2', f: 1, s: 'middle_finger' }, { u: '1F595', e: 'π', n: 'Reversed Hand With Middle Finger Extended', f: 1, s: 'middle_finger' }, { u: '1F595-1F3FC', e: 'ππΌ', n: 'Reversed Hand With Middle Finger Extended' + _mod + '3', f: 1, s: 'middle_finger' }, { u: '1F595-1F3FD', e: 'ππ½', n: 'Reversed Hand With Middle Finger Extended' + _mod + '4', f: 1, s: 'middle_finger' }, { u: '1F595-1F3FE', e: 'ππΎ', n: 'Reversed Hand With Middle Finger Extended' + _mod + '5', f: 1, s: 'middle_finger' }, { u: '1F595-1F3FF', e: 'ππΏ', n: 'Reversed Hand With Middle Finger Extended' + _mod + '6', f: 1, s: 'middle_finger' }, { u: '1F590-1F3FB', e: 'ππ»', n: 'Raised Hand With Fingers Splayed' + _mod + '1-2', f: 1, s: 'hand_splayed' }, { u: '1F590', e: 'π', n: 'Raised Hand With Fingers Splayed', f: 1, s: 'hand_splayed' }, { u: '1F590-1F3FC', e: 'ππΌ', n: 'Raised Hand With Fingers Splayed' + _mod + '3', f: 1, s: 'hand_splayed' }, { u: '1F590-1F3FD', e: 'ππ½', n: 'Raised Hand With Fingers Splayed' + _mod + '4', f: 1, s: 'hand_splayed' }, { u: '1F590-1F3FE', e: 'ππΎ', n: 'Raised Hand With Fingers Splayed' + _mod + '5', f: 1, s: 'hand_splayed' }, { u: '1F590-1F3FF', e: 'ππΏ', n: 'Raised Hand With Fingers Splayed' + _mod + '6', f: 1, s: 'hand_splayed' }, { u: '1F918', e: 'π€', n: 'Sign Of The Horns', f: 1 }, { u: '1F918-1F3FB', e: 'π€π»', n: 'Sign Of The Horns' + _mod + '1-2', f: 1 }, { u: '1F918-1F3FC', e: 'π€πΌ', n: 'Sign Of The Horns' + _mod + '3', f: 1 }, { u: '1F918-1F3FD', e: 'π€π½', n: 'Sign Of The Horns' + _mod + '4', f: 1 }, { u: '1F918-1F3FE', e: 'π€πΎ', n: 'Sign Of The Horns' + _mod + '5', f: 1 }, { u: '1F918-1F3FF', e: 'π€πΏ', n: 'Sign Of The Horns' + _mod + '6', f: 1 }, { u: '1F596', e: 'π', n: 'Raised Hand With Part Between Middle And Ring Fingers', f: 1, s: 'vulcan' }, { u: '1F596-1F3FB', e: 'ππ»', n: 'Raised Hand With Part Between Middle And Ring Fingers' + _mod + '1-2', f: 1, s: 'vulcan' }, { u: '1F596-1F3FC', e: 'ππΌ', n: 'Raised Hand With Part Between Middle And Ring Fingers' + _mod + '3', f: 1, s: 'vulcan' }, { u: '1F596-1F3FD', e: 'ππ½', n: 'Raised Hand With Part Between Middle And Ring Fingers' + _mod + '4', f: 1, s: 'vulcan' }, { u: '1F596-1F3FE', e: 'ππΎ', n: 'Raised Hand With Part Between Middle And Ring Fingers' + _mod + '5', f: 1, s: 'vulcan' }, { u: '1F596-1F3FF', e: 'ππΏ', n: 'Raised Hand With Part Between Middle And Ring Fingers' + _mod + '6', f: 1, s: 'vulcan' }, { u: '270D', e: 'β', n: 'Writing Hand', f: 1 }, { u: '270D-1F3FB', e: 'βπ»', n: 'Writing Hand' + _mod + '1-2', f: 1 }, { u: '270D-1F3FC', e: 'βπΌ', n: 'Writing Hand' + _mod + '3', f: 1 }, { u: '270D-1F3FD', e: 'βπ½', n: 'Writing Hand' + _mod + '4', f: 1 }, { u: '270D-1F3FE', e: 'βπΎ', n: 'Writing Hand' + _mod + '5', f: 1 }, { u: '270D-1F3FF', e: 'βπΏ', n: 'Writing Hand' + _mod + '6', f: 1 }, { u: '1F485', e: 'π', n: 'Nail Polish', f: 1, s: 'nail_care' }, { u: '1F485-1F3FB', e: 'ππ»', n: 'Nail Polish' + _mod + '1-2', f: 1, s: 'nail_care' }, { u: '1F485-1F3FC', e: 'ππΌ', n: 'Nail Polish' + _mod + '3', f: 1, s: 'nail_care' }, { u: '1F485-1F3FD', e: 'ππ½', n: 'Nail Polish' + _mod + '4', f: 1, s: 'nail_care' }, { u: '1F485-1F3FE', e: 'ππΎ', n: 'Nail Polish' + _mod + '5', f: 1, s: 'nail_care' }, { u: '1F485-1F3FF', e: 'ππΏ', n: 'Nail Polish' + _mod + '6', f: 1, s: 'nail_care' }, { u: '1F444', e: 'π', n: 'Mouth', f: 1, s: 'lips' }, { u: '1F445', e: 'π', n: 'Tongue', f: 1, s: 'tongue' }, { u: '1F442', e: 'π', n: 'Ear', f: 1, s: 'ear' }, { u: '1F442-1F3FB', e: 'ππ»', n: 'Ear' + _mod + '1-2', f: 1, s: 'ear' }, { u: '1F442-1F3FC', e: 'ππΌ', n: 'Ear' + _mod + '3', f: 1, s: 'ear' }, { u: '1F442-1F3FD', e: 'ππ½', n: 'Ear' + _mod + '4', f: 1, s: 'ear' }, { u: '1F442-1F3FE', e: 'ππΎ', n: 'Ear' + _mod + '5', f: 1, s: 'ear' }, { u: '1F442-1F3FF', e: 'ππΏ', n: 'Ear' + _mod + '6', f: 1, s: 'ear' }, { u: '1F443', e: 'π', n: 'Nose', f: 1, s: 'nose' }, { u: '1F443-1F3FB', e: 'ππ»', n: 'Nose' + _mod + '1-2', f: 1, s: 'nose' }, { u: '1F443-1F3FC', e: 'ππΌ', n: 'Nose' + _mod + '3', f: 1, s: 'nose' }, { u: '1F443-1F3FD', e: 'ππ½', n: 'Nose' + _mod + '4', f: 1, s: 'nose' }, { u: '1F443-1F3FE', e: 'ππΎ', n: 'Nose' + _mod + '5', f: 1, s: 'nose' }, { u: '1F443-1F3FF', e: 'ππΏ', n: 'Nose' + _mod + '6', f: 1, s: 'nose' }, { u: '1F441', e: 'π', n: 'Eye', f: 1, s: 'eye' }, { u: '1F440', e: 'π', n: 'Eyes', f: 1, s: 'eyes' }, { u: '1F464', e: 'π€', n: 'Bust In Silhouette', f: 1, s: 'bust_in_silhouette' }, { u: '1F465', e: 'π₯', n: 'Busts In Silhouette', f: 1, s: 'busts_in_silhouette' }, { u: '1F5E3', e: 'π£', n: 'Speaking Head In Silhouette', f: 1, s: 'speaking_head' }, { u: '1F476', e: 'πΆ', n: 'Baby', f: 1, s: 'baby' }, { u: '1F476-1F3FB', e: 'πΆπ»', n: 'Baby' + _mod + '1-2', f: 1, s: 'baby' }, { u: '1F476-1F3FC', e: 'πΆπΌ', n: 'Baby' + _mod + '3', f: 1, s: 'baby' }, { u: '1F476-1F3FD', e: 'πΆπ½', n: 'Baby' + _mod + '4', f: 1, s: 'baby' }, { u: '1F476-1F3FE', e: 'πΆπΎ', n: 'Baby' + _mod + '5', f: 1, s: 'baby' }, { u: '1F476-1F3FF', e: 'πΆπΏ', n: 'Baby' + _mod + '6', f: 1, s: 'baby' }, { u: '1F466', e: 'π¦', n: 'Boy', f: 1, s: 'boy' }, { u: '1F466-1F3FB', e: 'π¦π»', n: 'Boy' + _mod + '1-2', f: 1, s: 'boy' }, { u: '1F466-1F3FC', e: 'π¦πΌ', n: 'Boy' + _mod + '3', f: 1, s: 'boy' }, { u: '1F466-1F3FD', e: 'π¦π½', n: 'Boy' + _mod + '4', f: 1, s: 'boy' }, { u: '1F466-1F3FE', e: 'π¦πΎ', n: 'Boy' + _mod + '5', f: 1, s: 'boy' }, { u: '1F466-1F3FF', e: 'π¦πΏ', n: 'Boy' + _mod + '6', f: 1, s: 'boy' }, { u: '1F467', e: 'π§', n: 'Girl', f: 1, s: 'girl' }, { u: '1F467-1F3FB', e: 'π§π»', n: 'Girl' + _mod + '1-2', f: 1, s: 'girl' }, { u: '1F467-1F3FC', e: 'π§πΌ', n: 'Girl' + _mod + '3', f: 1, s: 'girl' }, { u: '1F467-1F3FD', e: 'π§π½', n: 'Girl' + _mod + '4', f: 1, s: 'girl' }, { u: '1F467-1F3FE', e: 'π§πΎ', n: 'Girl' + _mod + '5', f: 1, s: 'girl' }, { u: '1F467-1F3FF', e: 'π§πΏ', n: 'Girl' + _mod + '6', f: 1, s: 'girl' }, { u: '1F468', e: 'π¨', n: 'Man', f: 1, s: 'man' }, { u: '1F468-1F3FB', e: 'π¨π»', n: 'Man' + _mod + '1-2', f: 1, s: 'man' }, { u: '1F468-1F3FC', e: 'π¨πΌ', n: 'Man' + _mod + '3', f: 1, s: 'man' }, { u: '1F468-1F3FD', e: 'π¨π½', n: 'Man' + _mod + '4', f: 1, s: 'man' }, { u: '1F468-1F3FE', e: 'π¨πΎ', n: 'Man' + _mod + '5', f: 1, s: 'man' }, { u: '1F468-1F3FF', e: 'π¨πΏ', n: 'Man' + _mod + '6', f: 1, s: 'man' }, { u: '1F469', e: 'π©', n: 'Woman', f: 1, s: 'woman' }, { u: '1F469-1F3FB', e: 'π©π»', n: 'Woman' + _mod + '1-2', f: 1, s: 'woman' }, { u: '1F469-1F3FC', e: 'π©πΌ', n: 'Woman' + _mod + '3', f: 1, s: 'woman' }, { u: '1F469-1F3FD', e: 'π©π½', n: 'Woman' + _mod + '4', f: 1, s: 'woman' }, { u: '1F469-1F3FE', e: 'π©πΎ', n: 'Woman' + _mod + '5', f: 1, s: 'woman' }, { u: '1F469-1F3FF', e: 'π©πΏ', n: 'Woman' + _mod + '6', f: 1, s: 'woman' }, { u: '1F471-1F3FB', e: 'π±π»', n: 'Person With Blond Hair' + _mod + '1-2', f: 1, s: 'person_with_blond_hair' }, { u: '1F471', e: 'π±', n: 'Person With Blond Hair', f: 1, s: 'person_with_blond_hair' }, { u: '1F471-1F3FC', e: 'π±πΌ', n: 'Person With Blond Hair' + _mod + '3', f: 1, s: 'person_with_blond_hair' }, { u: '1F471-1F3FD', e: 'π±π½', n: 'Person With Blond Hair' + _mod + '4', f: 1, s: 'person_with_blond_hair' }, { u: '1F471-1F3FE', e: 'π±πΎ', n: 'Person With Blond Hair' + _mod + '5', f: 1, s: 'person_with_blond_hair' }, { u: '1F471-1F3FF', e: 'π±πΏ', n: 'Person With Blond Hair' + _mod + '6', f: 1, s: 'person_with_blond_hair' }, { u: '1F474', e: 'π΄', n: 'Older Man', f: 1, s: 'older_man' }, { u: '1F474-1F3FB', e: 'π΄π»', n: 'Older Man' + _mod + '1-2', f: 1, s: 'older_man' }, { u: '1F474-1F3FC', e: 'π΄πΌ', n: 'Older Man' + _mod + '3', f: 1, s: 'older_man' }, { u: '1F474-1F3FD', e: 'π΄π½', n: 'Older Man' + _mod + '4', f: 1, s: 'older_man' }, { u: '1F474-1F3FE', e: 'π΄πΎ', n: 'Older Man' + _mod + '5', f: 1, s: 'older_man' }, { u: '1F474-1F3FF', e: 'π΄πΏ', n: 'Older Man' + _mod + '6', f: 1, s: 'older_man' }, { u: '1F475', e: 'π΅', n: 'Older Woman', f: 1, s: 'older_woman' }, { u: '1F475-1F3FB', e: 'π΅π»', n: 'Older Woman' + _mod + '1-2', f: 1, s: 'older_woman' }, { u: '1F475-1F3FC', e: 'π΅πΌ', n: 'Older Woman' + _mod + '3', f: 1, s: 'older_woman' }, { u: '1F475-1F3FD', e: 'π΅π½', n: 'Older Woman' + _mod + '4', f: 1, s: 'older_woman' }, { u: '1F475-1F3FE', e: 'π΅πΎ', n: 'Older Woman' + _mod + '5', f: 1, s: 'older_woman' }, { u: '1F475-1F3FF', e: 'π΅πΏ', n: 'Older Woman' + _mod + '6', f: 1, s: 'older_woman' }, { u: '1F472-1F3FB', e: 'π²π»', n: 'Man With Gua Pi Mao' + _mod + '1-2', f: 1, s: 'man_with_gua_pi_mao' }, { u: '1F472', e: 'π²', n: 'Man With Gua Pi Mao', f: 1, s: 'man_with_gua_pi_mao' }, { u: '1F472-1F3FC', e: 'π²πΌ', n: 'Man With Gua Pi Mao' + _mod + '3', f: 1, s: 'man_with_gua_pi_mao' }, { u: '1F472-1F3FD', e: 'π²π½', n: 'Man With Gua Pi Mao' + _mod + '4', f: 1, s: 'man_with_gua_pi_mao' }, { u: '1F472-1F3FE', e: 'π²πΎ', n: 'Man With Gua Pi Mao' + _mod + '5', f: 1, s: 'man_with_gua_pi_mao' }, { u: '1F472-1F3FF', e: 'π²πΏ', n: 'Man With Gua Pi Mao' + _mod + '6', f: 1, s: 'man_with_gua_pi_mao' }, { u: '1F473-1F3FB', e: 'π³π»', n: 'Man With Turban' + _mod + '1-2', f: 1, s: 'man_with_turban' }, { u: '1F473', e: 'π³', n: 'Man With Turban', f: 1, s: 'man_with_turban' }, { u: '1F473-1F3FC', e: 'π³πΌ', n: 'Man With Turban' + _mod + '3', f: 1, s: 'man_with_turban' }, { u: '1F473-1F3FD', e: 'π³π½', n: 'Man With Turban' + _mod + '4', f: 1, s: 'man_with_turban' }, { u: '1F473-1F3FE', e: 'π³πΎ', n: 'Man With Turban' + _mod + '5', f: 1, s: 'man_with_turban' }, { u: '1F473-1F3FF', e: 'π³πΏ', n: 'Man With Turban' + _mod + '6', f: 1, s: 'man_with_turban' }, { u: '1F46E', e: 'π?', n: 'Police Officer', f: 1, s: 'cop' }, { u: '1F46E-1F3FB', e: 'π?π»', n: 'Police Officer' + _mod + '1-2', f: 1, s: 'cop' }, { u: '1F46E-1F3FC', e: 'π?πΌ', n: 'Police Officer' + _mod + '3', f: 1, s: 'cop' }, { u: '1F46E-1F3FD', e: 'π?π½', n: 'Police Officer' + _mod + '4', f: 1, s: 'cop' }, { u: '1F46E-1F3FE', e: 'π?πΎ', n: 'Police Officer' + _mod + '5', f: 1, s: 'cop' }, { u: '1F46E-1F3FF', e: 'π?πΏ', n: 'Police Officer' + _mod + '6', f: 1, s: 'cop' }, { u: '1F477', e: 'π·', n: 'Construction Worker', f: 1, s: 'construction_worker' }, { u: '1F477-1F3FB', e: 'π·π»', n: 'Construction Worker' + _mod + '1-2', f: 1, s: 'construction_worker' }, { u: '1F477-1F3FC', e: 'π·πΌ', n: 'Construction Worker' + _mod + '3', f: 1, s: 'construction_worker' }, { u: '1F477-1F3FD', e: 'π·π½', n: 'Construction Worker' + _mod + '4', f: 1, s: 'construction_worker' }, { u: '1F477-1F3FE', e: 'π·πΎ', n: 'Construction Worker' + _mod + '5', f: 1, s: 'construction_worker' }, { u: '1F477-1F3FF', e: 'π·πΏ', n: 'Construction Worker' + _mod + '6', f: 1, s: 'construction_worker' }, { u: '1F482', e: 'π', n: 'Guardsman', f: 1, s: 'guardsman' }, { u: '1F482-1F3FB', e: 'ππ»', n: 'Guardsman' + _mod + '1-2', f: 1, s: 'guardsman' }, { u: '1F482-1F3FC', e: 'ππΌ', n: 'Guardsman' + _mod + '3', f: 1, s: 'guardsman' }, { u: '1F482-1F3FD', e: 'ππ½', n: 'Guardsman' + _mod + '4', f: 1, s: 'guardsman' }, { u: '1F482-1F3FE', e: 'ππΎ', n: 'Guardsman' + _mod + '5', f: 1, s: 'guardsman' }, { u: '1F482-1F3FF', e: 'ππΏ', n: 'Guardsman' + _mod + '6', f: 1, s: 'guardsman' }, { u: '1F575', e: 'π΅', n: 'Sleuth Or Spy', f: 1, s: 'spy' }, { u: '1F385', e: 'π', n: 'Father Christmas', f: 1, s: 'santa' }, { u: '1F385-1F3FB', e: 'ππ»', n: 'Father Christmas' + _mod + '1-2', f: 1, s: 'santa' }, { u: '1F385-1F3FC', e: 'ππΌ', n: 'Father Christmas' + _mod + '3', f: 1, s: 'santa' }, { u: '1F385-1F3FD', e: 'ππ½', n: 'Father Christmas' + _mod + '4', f: 1, s: 'santa' }, { u: '1F385-1F3FE', e: 'ππΎ', n: 'Father Christmas' + _mod + '5', f: 1, s: 'santa' }, { u: '1F385-1F3FF', e: 'ππΏ', n: 'Father Christmas' + _mod + '6', f: 1, s: 'santa' }, { u: '1F47C', e: 'πΌ', n: 'Baby Angel', f: 1, s: 'angel' }, { u: '1F47C-1F3FB', e: 'πΌπ»', n: 'Baby Angel' + _mod + '1-2', f: 1, s: 'angel' }, { u: '1F47C-1F3FC', e: 'πΌπΌ', n: 'Baby Angel' + _mod + '3', f: 1, s: 'angel' }, { u: '1F47C-1F3FD', e: 'πΌπ½', n: 'Baby Angel' + _mod + '4', f: 1, s: 'angel' }, { u: '1F47C-1F3FE', e: 'πΌπΎ', n: 'Baby Angel' + _mod + '5', f: 1, s: 'angel' }, { u: '1F47C-1F3FF', e: 'πΌπΏ', n: 'Baby Angel' + _mod + '6', f: 1, s: 'angel' }, { u: '1F478', e: 'πΈ', n: 'Princess', f: 1, s: 'princess' }, { u: '1F478-1F3FB', e: 'πΈπ»', n: 'Princess' + _mod + '1-2', f: 1, s: 'princess' }, { u: '1F478-1F3FC', e: 'πΈπΌ', n: 'Princess' + _mod + '3', f: 1, s: 'princess' }, { u: '1F478-1F3FD', e: 'πΈπ½', n: 'Princess' + _mod + '4', f: 1, s: 'princess' }, { u: '1F478-1F3FE', e: 'πΈπΎ', n: 'Princess' + _mod + '5', f: 1, s: 'princess' }, { u: '1F478-1F3FF', e: 'πΈπΏ', n: 'Princess' + _mod + '6', f: 1, s: 'princess' }, { u: '1F470', e: 'π°', n: 'Bride With Veil', f: 1, s: 'bride_with_veil' }, { u: '1F470-1F3FB', e: 'π°π»', n: 'Bride With Veil' + _mod + '1-2', f: 1, s: 'bride_with_veil' }, { u: '1F470-1F3FC', e: 'π°πΌ', n: 'Bride With Veil' + _mod + '3', f: 1, s: 'bride_with_veil' }, { u: '1F470-1F3FD', e: 'π°π½', n: 'Bride With Veil' + _mod + '4', f: 1, s: 'bride_with_veil' }, { u: '1F470-1F3FE', e: 'π°πΎ', n: 'Bride With Veil' + _mod + '5', f: 1, s: 'bride_with_veil' }, { u: '1F470-1F3FF', e: 'π°πΏ', n: 'Bride With Veil' + _mod + '6', f: 1, s: 'bride_with_veil' }, { u: '1F6B6', e: 'πΆ', n: 'Pedestrian', f: 1, s: 'walking' }, { u: '1F6B6-1F3FB', e: 'πΆπ»', n: 'Pedestrian' + _mod + '1-2', f: 1, s: 'walking' }, { u: '1F6B6-1F3FC', e: 'πΆπΌ', n: 'Pedestrian' + _mod + '3', f: 1, s: 'walking' }, { u: '1F6B6-1F3FD', e: 'πΆπ½', n: 'Pedestrian' + _mod + '4', f: 1, s: 'walking' }, { u: '1F6B6-1F3FE', e: 'πΆπΎ', n: 'Pedestrian' + _mod + '5', f: 1, s: 'walking' }, { u: '1F6B6-1F3FF', e: 'πΆπΏ', n: 'Pedestrian' + _mod + '6', f: 1, s: 'walking' }, { u: '1F3C3-1F3FB', e: 'ππ»', n: 'Runner' + _mod + '1-2', f: 1, s: 'runner' }, { u: '1F3C3', e: 'π', n: 'Runner', f: 1, s: 'runner' }, { u: '1F3C3-1F3FC', e: 'ππΌ', n: 'Runner' + _mod + '3', f: 1, s: 'runner' }, { u: '1F3C3-1F3FD', e: 'ππ½', n: 'Runner' + _mod + '4', f: 1, s: 'runner' }, { u: '1F3C3-1F3FE', e: 'ππΎ', n: 'Runner' + _mod + '5', f: 1, s: 'runner' }, { u: '1F3C3-1F3FF', e: 'ππΏ', n: 'Runner' + _mod + '6', f: 1, s: 'runner' }, { u: '1F483', e: 'π', n: 'Dancer', f: 1, s: 'dancer' }, { u: '1F483-1F3FB', e: 'ππ»', n: 'Dancer' + _mod + '1-2', f: 1, s: 'dancer' }, { u: '1F483-1F3FC', e: 'ππΌ', n: 'Dancer' + _mod + '3', f: 1, s: 'dancer' }, { u: '1F483-1F3FD', e: 'ππ½', n: 'Dancer' + _mod + '4', f: 1, s: 'dancer' }, { u: '1F483-1F3FE', e: 'ππΎ', n: 'Dancer' + _mod + '5', f: 1, s: 'dancer' }, { u: '1F483-1F3FF', e: 'ππΏ', n: 'Dancer' + _mod + '6', f: 1, s: 'dancer' }, { u: '1F46F', e: 'π―', n: 'Woman With Bunny Ears', f: 1, s: 'dancers' }, { u: '1F46B', e: 'π«', n: 'Man And Woman Holding Hands', f: 1, s: 'couple' }, { u: '1F46C', e: 'π¬', n: 'Two Men Holding Hands', f: 1, s: 'two_men_holding_hands' }, { u: '1F46D', e: 'π­', n: 'Two Women Holding Hands', f: 1, s: 'two_women_holding_hands' }, { u: '1F647', e: 'π', n: 'Person Bowing Deeply', f: 1, s: 'bow' }, { u: '1F647-1F3FB', e: 'ππ»', n: 'Person Bowing Deeply' + _mod + '1-2', f: 1, s: 'bow' }, { u: '1F647-1F3FC', e: 'ππΌ', n: 'Person Bowing Deeply' + _mod + '3', f: 1, s: 'bow' }, { u: '1F647-1F3FD', e: 'ππ½', n: 'Person Bowing Deeply' + _mod + '4', f: 1, s: 'bow' }, { u: '1F647-1F3FE', e: 'ππΎ', n: 'Person Bowing Deeply' + _mod + '5', f: 1, s: 'bow' }, { u: '1F647-1F3FF', e: 'ππΏ', n: 'Person Bowing Deeply' + _mod + '6', f: 1, s: 'bow' }, { u: '1F481', e: 'π', n: 'Information Desk Person', f: 1, s: 'information_desk_person' }, { u: '1F481-1F3FB', e: 'ππ»', n: 'Information Desk Person' + _mod + '1-2', f: 1, s: 'information_desk_person' }, { u: '1F481-1F3FC', e: 'ππΌ', n: 'Information Desk Person' + _mod + '3', f: 1, s: 'information_desk_person' }, { u: '1F481-1F3FD', e: 'ππ½', n: 'Information Desk Person' + _mod + '4', f: 1, s: 'information_desk_person' }, { u: '1F481-1F3FE', e: 'ππΎ', n: 'Information Desk Person' + _mod + '5', f: 1, s: 'information_desk_person' }, { u: '1F481-1F3FF', e: 'ππΏ', n: 'Information Desk Person' + _mod + '6', f: 1, s: 'information_desk_person' }, { u: '1F645-1F3FB', e: 'ππ»', n: 'Face With No Good Gesture' + _mod + '1-2', f: 1, s: 'no_good' }, { u: '1F645', e: 'π', n: 'Face With No Good Gesture', f: 1, s: 'no_good' }, { u: '1F645-1F3FC', e: 'ππΌ', n: 'Face With No Good Gesture' + _mod + '3', f: 1, s: 'no_good' }, { u: '1F645-1F3FD', e: 'ππ½', n: 'Face With No Good Gesture' + _mod + '4', f: 1, s: 'no_good' }, { u: '1F645-1F3FE', e: 'ππΎ', n: 'Face With No Good Gesture' + _mod + '5', f: 1, s: 'no_good' }, { u: '1F645-1F3FF', e: 'ππΏ', n: 'Face With No Good Gesture' + _mod + '6', f: 1, s: 'no_good' }, { u: '1F646', e: 'π', n: 'Face With Ok Gesture', f: 1, s: 'ok_woman' }, { u: '1F646-1F3FB', e: 'ππ»', n: 'Face With Ok Gesture' + _mod + '1-2', f: 1, s: 'ok_woman' }, { u: '1F646-1F3FC', e: 'ππΌ', n: 'Face With Ok Gesture' + _mod + '3', f: 1, s: 'ok_woman' }, { u: '1F646-1F3FD', e: 'ππ½', n: 'Face With Ok Gesture' + _mod + '4', f: 1, s: 'ok_woman' }, { u: '1F646-1F3FE', e: 'ππΎ', n: 'Face With Ok Gesture' + _mod + '5', f: 1, s: 'ok_woman' }, { u: '1F646-1F3FF', e: 'ππΏ', n: 'Face With Ok Gesture' + _mod + '6', f: 1, s: 'ok_woman' }, { u: '1F64B-1F3FB', e: 'ππ»', n: 'Happy Person Raising One Hand' + _mod + '1-2', f: 1, s: 'raising_hand' }, { u: '1F64B', e: 'π', n: 'Happy Person Raising One Hand', f: 1, s: 'raising_hand' }, { u: '1F64B-1F3FC', e: 'ππΌ', n: 'Happy Person Raising One Hand' + _mod + '3', f: 1, s: 'raising_hand' }, { u: '1F64B-1F3FD', e: 'ππ½', n: 'Happy Person Raising One Hand' + _mod + '4', f: 1, s: 'raising_hand' }, { u: '1F64B-1F3FE', e: 'ππΎ', n: 'Happy Person Raising One Hand' + _mod + '5', f: 1, s: 'raising_hand' }, { u: '1F64B-1F3FF', e: 'ππΏ', n: 'Happy Person Raising One Hand' + _mod + '6', f: 1, s: 'raising_hand' }, { u: '1F64E-1F3FB', e: 'ππ»', n: 'Person With Pouting Face' + _mod + '1-2', f: 1, s: 'person_with_pouting_face' }, { u: '1F64E', e: 'π', n: 'Person With Pouting Face', f: 1, s: 'person_with_pouting_face' }, { u: '1F64E-1F3FC', e: 'ππΌ', n: 'Person With Pouting Face' + _mod + '3', f: 1, s: 'person_with_pouting_face' }, { u: '1F64E-1F3FD', e: 'ππ½', n: 'Person With Pouting Face' + _mod + '4', f: 1, s: 'person_with_pouting_face' }, { u: '1F64E-1F3FE', e: 'ππΎ', n: 'Person With Pouting Face' + _mod + '5', f: 1, s: 'person_with_pouting_face' }, { u: '1F64E-1F3FF', e: 'ππΏ', n: 'Person With Pouting Face' + _mod + '6', f: 1, s: 'person_with_pouting_face' }, { u: '1F64D-1F3FB', e: 'ππ»', n: 'Person Frowning' + _mod + '1-2', f: 1, s: 'person_frowning' }, { u: '1F64D', e: 'π', n: 'Person Frowning', f: 1, s: 'person_frowning' }, { u: '1F64D-1F3FC', e: 'ππΌ', n: 'Person Frowning' + _mod + '3', f: 1, s: 'person_frowning' }, { u: '1F64D-1F3FD', e: 'ππ½', n: 'Person Frowning' + _mod + '4', f: 1, s: 'person_frowning' }, { u: '1F64D-1F3FE', e: 'ππΎ', n: 'Person Frowning' + _mod + '5', f: 1, s: 'person_frowning' }, { u: '1F64D-1F3FF', e: 'ππΏ', n: 'Person Frowning' + _mod + '6', f: 1, s: 'person_frowning' }, { u: '1F487', e: 'π', n: 'Haircut', f: 1, s: 'haircut' }, { u: '1F487-1F3FB', e: 'ππ»', n: 'Haircut' + _mod + '1-2', f: 1, s: 'haircut' }, { u: '1F487-1F3FC', e: 'ππΌ', n: 'Haircut' + _mod + '3', f: 1, s: 'haircut' }, { u: '1F487-1F3FD', e: 'ππ½', n: 'Haircut' + _mod + '4', f: 1, s: 'haircut' }, { u: '1F487-1F3FE', e: 'ππΎ', n: 'Haircut' + _mod + '5', f: 1, s: 'haircut' }, { u: '1F487-1F3FF', e: 'ππΏ', n: 'Haircut' + _mod + '6', f: 1, s: 'haircut' }, { u: '1F486', e: 'π', n: 'Face Massage', f: 1, s: 'massage' }, { u: '1F486-1F3FB', e: 'ππ»', n: 'Face Massage' + _mod + '1-2', f: 1, s: 'massage' }, { u: '1F486-1F3FC', e: 'ππΌ', n: 'Face Massage' + _mod + '3', f: 1, s: 'massage' }, { u: '1F486-1F3FD', e: 'ππ½', n: 'Face Massage' + _mod + '4', f: 1, s: 'massage' }, { u: '1F486-1F3FE', e: 'ππΎ', n: 'Face Massage' + _mod + '5', f: 1, s: 'massage' }, { u: '1F486-1F3FF', e: 'ππΏ', n: 'Face Massage' + _mod + '6', f: 1, s: 'massage' }, { u: '1F491', e: 'π', n: 'Couple With Heart', f: 1, s: 'couple_with_heart' }, { u: '1F469-2764-1F469', e: 'π©ββ€οΈβπ©', n: 'Couple (Woman, Woman)', f: 1, s: 'couple_ww' }, { u: '1F468-2764-1F468', e: 'π¨ββ€οΈβπ¨', n: 'Couple (Man, Man)', f: 1, s: 'couple_mm' }, { u: '1F48F', e: 'π', n: 'Kiss', f: 1, s: 'couplekiss' }, { u: '1F469-2764-1F48B-1F469', e: 'π©ββ€οΈβπβπ©', n: 'Kiss (Woman, Woman)', f: 1, s: 'kiss_ww' }, { u: '1F468-2764-1F48B-1F468', e: 'π¨ββ€οΈβπβπ¨', n: 'Kiss (Man, Man)', f: 1, s: 'kiss_mm' }, { u: '1F46A', e: 'πͺ', n: 'Family', f: 1, s: 'family' }, { u: '1F468-1F469-1F467', e: 'π¨βπ©βπ§', n: 'Family (Man, Woman, Girl)', f: 1, s: 'family_mwg' }, { u: '1F468-1F469-1F467-1F466', e: 'π¨βπ©βπ§βπ¦', n: 'Family (Man, Woman, Girl, Boy)', f: 1, s: 'family_mwgb' }, { u: '1F468-1F469-1F466-1F466', e: 'π¨βπ©βπ¦βπ¦', n: 'Family (Man, Woman, Boy, Boy)', f: 1, s: 'family_mwbb' }, { u: '1F468-1F469-1F467-1F467', e: 'π¨βπ©βπ§βπ§', n: 'Family (Man, Woman, Girl, Girl)', f: 1, s: 'family_mwgg' }, { u: '1F469-1F469-1F466', e: 'π©βπ©βπ¦', n: 'Family (Woman, Woman, Boy)', f: 1, s: 'family_wwb' }, { u: '1F469-1F469-1F467', e: 'π©βπ©βπ§', n: 'Family (Woman, Woman, Girl)', f: 1, s: 'family_wwg' }, { u: '1F469-1F469-1F467-1F466', e: 'π©βπ©βπ§βπ¦', n: 'Family (Woman, Woman, Girl, Boy)', f: 1, s: 'family_wwgb' }, { u: '1F469-1F469-1F466-1F466', e: 'π©βπ©βπ¦βπ¦', n: 'Family (Woman, Woman, Boy, Boy)', f: 1, s: 'family_wwbb' }, { u: '1F469-1F469-1F467-1F467', e: 'π©βπ©βπ§βπ§', n: 'Family (Woman, Woman, Girl, Girl)', f: 1, s: 'family_wwgg' }, { u: '1F468-1F468-1F466', e: 'π¨βπ¨βπ¦', n: 'Family (Man, Man, Boy)', f: 1, s: 'family_mmb' }, { u: '1F468-1F468-1F467', e: 'π¨βπ¨βπ§', n: 'Family (Man, Man, Girl)', f: 1, s: 'family_mmg' }, { u: '1F468-1F468-1F467-1F466', e: 'π¨βπ¨βπ§βπ¦', n: 'Family (Man, Man, Girl, Boy)', f: 1, s: 'family_mmgb' }, { u: '1F468-1F468-1F466-1F466', e: 'π¨βπ¨βπ¦βπ¦', n: 'Family (Man, Man, Boy, Boy)', f: 1, s: 'family_mmbb' }, { u: '1F468-1F468-1F467-1F467', e: 'π¨βπ¨βπ§βπ§', n: 'Family (Man, Man, Girl, Girl)', f: 1, s: 'family_mmgg' }, { u: '1F45A', e: 'π', n: 'Womans Clothes', f: 1, s: 'womans_clothes' }, { u: '1F455', e: 'π', n: 'T-shirt', f: 1, s: 'shirt' }, { u: '1F456', e: 'π', n: 'Jeans', f: 1, s: 'jeans' }, { u: '1F454', e: 'π', n: 'Necktie', f: 1, s: 'necktie' }, { u: '1F457', e: 'π', n: 'Dress', f: 1, s: 'dress' }, { u: '1F459', e: 'π', n: 'Bikini', f: 1, s: 'bikini' }, { u: '1F458', e: 'π', n: 'Kimono', f: 1, s: 'kimono' }, { u: '1F484', e: 'π', n: 'Lipstick', f: 1, s: 'lipstick' }, { u: '1F48B', e: 'π', n: 'Kiss Mark', f: 1, s: 'kiss' }, { u: '1F463', e: 'π£', n: 'Footprints', f: 1, s: 'footprints' }, { u: '1F460', e: 'π ', n: 'High-heeled Shoe', f: 1, s: 'high_heel' }, { u: '1F461', e: 'π‘', n: 'Womans Sandal', f: 1, s: 'sandal' }, { u: '1F462', e: 'π’', n: 'Womans Boots', f: 1, s: 'boot' }, { u: '1F45E', e: 'π', n: 'Mans Shoe', f: 1, s: 'mans_shoe' }, { u: '1F45F', e: 'π', n: 'Athletic Shoe', f: 1, s: 'athletic_shoe' }, { u: '1F452', e: 'π', n: 'Womans Hat', f: 1, s: 'womans_hat' }, { u: '1F3A9', e: 'π©', n: 'Top Hat', f: 1, s: 'tophat' }, { u: '26D1', e: 'β', n: 'Helmet With White Cross', f: 1 }, { u: '1F393', e: 'π', n: 'Graduation Cap', f: 1, s: 'mortar_board' }, { u: '1F451', e: 'π', n: 'Crown', f: 1, s: 'crown' }, { u: '1F392', e: 'π', n: 'School Satchel', f: 1, s: 'school_satchel' }, { u: '1F45D', e: 'π', n: 'Pouch', f: 1, s: 'pouch' }, { u: '1F45B', e: 'π', n: 'Purse', f: 1, s: 'purse' }, { u: '1F45C', e: 'π', n: 'Handbag', f: 1, s: 'handbag' }, { u: '1F4BC', e: 'πΌ', n: 'Briefcase', f: 1, s: 'briefcase' }, { u: '1F453', e: 'π', n: 'Eyeglasses', f: 1, s: 'eyeglasses' }, { u: '1F576', e: 'πΆ', n: 'Dark Sunglasses', f: 1, s: 'dark_sunglasses' }, { u: '1F48D', e: 'π', n: 'Ring', f: 1, s: 'ring' }, { u: '1F302', e: 'π', n: 'Closed Umbrella', f: 1, s: 'closed_umbrella' }, { u: '1F436', e: 'πΆ', n: 'Dog Face', f: 2, s: 'dog' }, { u: '1F431', e: 'π±', n: 'Cat Face', f: 2, s: 'cat' }, { u: '1F42D', e: 'π­', n: 'Mouse Face', f: 2, s: 'mouse' }, { u: '1F439', e: 'πΉ', n: 'Hamster Face', f: 2, s: 'hamster' }, { u: '1F430', e: 'π°', n: 'Rabbit Face', f: 2, s: 'rabbit' }, { u: '1F43B', e: 'π»', n: 'Bear Face', f: 2, s: 'bear' }, { u: '1F43C', e: 'πΌ', n: 'Panda Face', f: 2, s: 'panda_face' }, { u: '1F428', e: 'π¨', n: 'Koala', f: 2, s: 'koala' }, { u: '1F42F', e: 'π―', n: 'Tiger Face', f: 2, s: 'tiger' }, { u: '1F981', e: 'π¦', n: 'Lion Face', f: 2 }, { u: '1F42E', e: 'π?', n: 'Cow Face', f: 2, s: 'cow' }, { u: '1F437', e: 'π·', n: 'Pig Face', f: 2, s: 'pig' }, { u: '1F43D', e: 'π½', n: 'Pig Nose', f: 2, s: 'pig_nose' }, { u: '1F438', e: 'πΈ', n: 'Frog Face', f: 2, s: 'frog' }, { u: '1F419', e: 'π', n: 'Octopus', f: 2, s: 'octopus' }, { u: '1F435', e: 'π΅', n: 'Monkey Face', f: 2, s: 'monkey_face' }, { u: '1F648', e: 'π', n: 'See-no-evil Monkey', f: 2, s: 'see_no_evil' }, { u: '1F649', e: 'π', n: 'Hear-no-evil Monkey', f: 2, s: 'hear_no_evil' }, { u: '1F64A', e: 'π', n: 'Speak-no-evil Monkey', f: 2, s: 'speak_no_evil' }, { u: '1F412', e: 'π', n: 'Monkey', f: 2, s: 'monkey' }, { u: '1F414', e: 'π', n: 'Chicken', f: 2, s: 'chicken' }, { u: '1F427', e: 'π§', n: 'Penguin', f: 2, s: 'penguin' }, { u: '1F426', e: 'π¦', n: 'Bird', f: 2, s: 'bird' }, { u: '1F424', e: 'π€', n: 'Baby Chick', f: 2, s: 'baby_chick' }, { u: '1F423', e: 'π£', n: 'Hatching Chick', f: 2, s: 'hatching_chick' }, { u: '1F425', e: 'π₯', n: 'Front-facing Baby Chick', f: 2, s: 'hatched_chick' }, { u: '1F43A', e: 'πΊ', n: 'Wolf Face', f: 2, s: 'wolf' }, { u: '1F417', e: 'π', n: 'Boar', f: 2, s: 'boar' }, { u: '1F434', e: 'π΄', n: 'Horse Face', f: 2, s: 'horse' }, { u: '1F984', e: 'π¦', n: 'Unicorn Face', f: 2 }, { u: '1F41D', e: 'π', n: 'Honeybee', f: 2, s: 'bee' }, { u: '1F41B', e: 'π', n: 'Bug', f: 2, s: 'bug' }, { u: '1F40C', e: 'π', n: 'Snail', f: 2, s: 'snail' }, { u: '1F41E', e: 'π', n: 'Lady Beetle', f: 2, s: 'beetle' }, { u: '1F41C', e: 'π', n: 'Ant', f: 2, s: 'ant' }, { u: '1F577', e: 'π·', n: 'Spider', f: 2, s: 'spider' }, { u: '1F982', e: 'π¦', n: 'Scorpion', f: 2 }, { u: '1F980', e: 'π¦', n: 'Crab', f: 2 }, { u: '1F40D', e: 'π', n: 'Snake', f: 2, s: 'snake' }, { u: '1F422', e: 'π’', n: 'Turtle', f: 2, s: 'turtle' }, { u: '1F420', e: 'π ', n: 'Tropical Fish', f: 2, s: 'tropical_fish' }, { u: '1F41F', e: 'π', n: 'Fish', f: 2, s: 'fish' }, { u: '1F421', e: 'π‘', n: 'Blowfish', f: 2, s: 'blowfish' }, { u: '1F42C', e: 'π¬', n: 'Dolphin', f: 2, s: 'dolphin' }, { u: '1F433', e: 'π³', n: 'Spouting Whale', f: 2, s: 'whale' }, { u: '1F40B', e: 'π', n: 'Whale', f: 2, s: 'whale2' }, { u: '1F40A', e: 'π', n: 'Crocodile', f: 2, s: 'crocodile' }, { u: '1F406', e: 'π', n: 'Leopard', f: 2, s: 'leopard' }, { u: '1F405', e: 'π', n: 'Tiger', f: 2, s: 'tiger2' }, { u: '1F403', e: 'π', n: 'Water Buffalo', f: 2, s: 'water_buffalo' }, { u: '1F402', e: 'π', n: 'Ox', f: 2, s: 'ox' }, { u: '1F404', e: 'π', n: 'Cow', f: 2, s: 'cow2' }, { u: '1F42A', e: 'πͺ', n: 'Dromedary Camel', f: 2, s: 'dromedary_camel' }, { u: '1F42B', e: 'π«', n: 'Bactrian Camel', f: 2, s: 'camel' }, { u: '1F418', e: 'π', n: 'Elephant', f: 2, s: 'elephant' }, { u: '1F410', e: 'π', n: 'Goat', f: 2, s: 'goat' }, { u: '1F40F', e: 'π', n: 'Ram', f: 2, s: 'ram' }, { u: '1F411', e: 'π', n: 'Sheep', f: 2, s: 'sheep' }, { u: '1F40E', e: 'π', n: 'Horse', f: 2, s: 'racehorse' }, { u: '1F416', e: 'π', n: 'Pig', f: 2, s: 'pig2' }, { u: '1F400', e: 'π', n: 'Rat', f: 2, s: 'rat' }, { u: '1F401', e: 'π', n: 'Mouse', f: 2, s: 'mouse2' }, { u: '1F413', e: 'π', n: 'Rooster', f: 2, s: 'rooster' }, { u: '1F983', e: 'π¦', n: 'Turkey', f: 2 }, { u: '1F54A', e: 'π', n: 'Dove Of Peace', f: 2, s: 'dove' }, { u: '1F415', e: 'π', n: 'Dog', f: 2, s: 'dog2' }, { u: '1F429', e: 'π©', n: 'Poodle', f: 2, s: 'poodle' }, { u: '1F408', e: 'π', n: 'Cat', f: 2, s: 'cat2' }, { u: '1F407', e: 'π', n: 'Rabbit', f: 2, s: 'rabbit2' }, { u: '1F43F', e: 'πΏ', n: 'Chipmunk', f: 2, s: 'chipmunk' }, { u: '1F43E', e: 'πΎ', n: 'Paw Prints', f: 2, s: 'feet' }, { u: '1F409', e: 'π', n: 'Dragon', f: 2, s: 'dragon' }, { u: '1F432', e: 'π²', n: 'Dragon Face', f: 2, s: 'dragon_face' }, { u: '1F335', e: 'π΅', n: 'Cactus', f: 2, s: 'cactus' }, { u: '1F384', e: 'π', n: 'Christmas Tree', f: 2, s: 'christmas_tree' }, { u: '1F332', e: 'π²', n: 'Evergreen Tree', f: 2, s: 'evergreen_tree' }, { u: '1F333', e: 'π³', n: 'Deciduous Tree', f: 2, s: 'deciduous_tree' }, { u: '1F334', e: 'π΄', n: 'Palm Tree', f: 2, s: 'palm_tree' }, { u: '1F331', e: 'π±', n: 'Seedling', f: 2, s: 'seedling' }, { u: '1F33F', e: 'πΏ', n: 'Herb', f: 2, s: 'herb' }, { u: '2618', e: 'β', n: 'Shamrock', f: 2 }, { u: '1F340', e: 'π', n: 'Four Leaf Clover', f: 2, s: 'four_leaf_clover' }, { u: '1F38D', e: 'π', n: 'Pine Decoration', f: 2, s: 'bamboo' }, { u: '1F38B', e: 'π', n: 'Tanabata Tree', f: 2, s: 'tanabata_tree' }, { u: '1F343', e: 'π', n: 'Leaf Fluttering In Wind', f: 2, s: 'leaves' }, { u: '1F342', e: 'π', n: 'Fallen Leaf', f: 2, s: 'fallen_leaf' }, { u: '1F341', e: 'π', n: 'Maple Leaf', f: 2, s: 'maple_leaf' }, { u: '1F33E', e: 'πΎ', n: 'Ear Of Rice', f: 2, s: 'ear_of_rice' }, { u: '1F33A', e: 'πΊ', n: 'Hibiscus', f: 2, s: 'hibiscus' }, { u: '1F33B', e: 'π»', n: 'Sunflower', f: 2, s: 'sunflower' }, { u: '1F339', e: 'πΉ', n: 'Rose', f: 2, s: 'rose' }, { u: '1F337', e: 'π·', n: 'Tulip', f: 2, s: 'tulip' }, { u: '1F33C', e: 'πΌ', n: 'Blossom', f: 2, s: 'blossom' }, { u: '1F338', e: 'πΈ', n: 'Cherry Blossom', f: 2, s: 'cherry_blossom' }, { u: '1F490', e: 'π', n: 'Bouquet', f: 2, s: 'bouquet' }, { u: '1F344', e: 'π', n: 'Mushroom', f: 2, s: 'mushroom' }, { u: '1F330', e: 'π°', n: 'Chestnut', f: 2, s: 'chestnut' }, { u: '1F383', e: 'π', n: 'Jack-o-lantern', f: 2, s: 'jack_o_lantern' }, { u: '1F41A', e: 'π', n: 'Spiral Shell', f: 2, s: 'shell' }, { u: '1F578', e: 'πΈ', n: 'Spider Web', f: 2, s: 'spider_web' }, { u: '1F30E', e: 'π', n: 'Earth Globe Americas', f: 2, s: 'earth_americas' }, { u: '1F30D', e: 'π', n: 'Earth Globe Europe-africa', f: 2, s: 'earth_africa' }, { u: '1F30F', e: 'π', n: 'Earth Globe Asia-australia', f: 2, s: 'earth_asia' }, { u: '1F315', e: 'π', n: 'Full Moon Symbol', f: 2, s: 'full_moon' }, { u: '1F316', e: 'π', n: 'Waning Gibbous Moon Symbol', f: 2, s: 'waning_gibbous_moon' }, { u: '1F317', e: 'π', n: 'Last Quarter Moon Symbol', f: 2, s: 'last_quarter_moon' }, { u: '1F318', e: 'π', n: 'Waning Crescent Moon Symbol', f: 2, s: 'waning_crescent_moon' }, { u: '1F311', e: 'π', n: 'New Moon Symbol', f: 2, s: 'new_moon' }, { u: '1F312', e: 'π', n: 'Waxing Crescent Moon Symbol', f: 2, s: 'waxing_crescent_moon' }, { u: '1F313', e: 'π', n: 'First Quarter Moon Symbol', f: 2, s: 'first_quarter_moon' }, { u: '1F314', e: 'π', n: 'Waxing Gibbous Moon Symbol', f: 2, s: 'waxing_gibbous_moon' }, { u: '1F31A', e: 'π', n: 'New Moon With Face', f: 2, s: 'new_moon_with_face' }, { u: '1F31D', e: 'π', n: 'Full Moon With Face', f: 2, s: 'full_moon_with_face' }, { u: '1F31B', e: 'π', n: 'First Quarter Moon With Face', f: 2, s: 'first_quarter_moon_with_face' }, { u: '1F31C', e: 'π', n: 'Last Quarter Moon With Face', f: 2, s: 'last_quarter_moon_with_face' }, { u: '1F31E', e: 'π', n: 'Sun With Face', f: 2, s: 'sun_with_face' }, { u: '1F319', e: 'π', n: 'Crescent Moon', f: 2, s: 'crescent_moon' }, { u: '2B50', e: 'β­οΈ', n: 'White Medium Star', f: 2, s: 'star' }, { u: '1F31F', e: 'π', n: 'Glowing Star', f: 2, s: 'star2' }, { u: '1F4AB', e: 'π«', n: 'Dizzy Symbol', f: 2, s: 'dizzy' }, { u: '2728', e: 'β¨', n: 'Sparkles', f: 2, s: 'sparkles' }, { u: '2604', e: 'β', n: 'Comet', f: 2 }, { u: '2600', e: 'βοΈ', n: 'Black Sun With Rays', f: 2, s: 'sunny' }, { u: '1F324', e: 'π€', n: 'White Sun With Small Cloud', f: 2 }, { u: '26C5', e: 'βοΈ', n: 'Sun Behind Cloud', f: 2, s: 'partly_sunny' }, { u: '1F325', e: 'π₯', n: 'White Sun Behind Cloud', f: 2 }, { u: '1F326', e: 'π¦', n: 'White Sun Behind Cloud With Rain', f: 2 }, { u: '2601', e: 'βοΈ', n: 'Cloud', f: 2, s: 'cloud' }, { u: '1F327', e: 'π§', n: 'Cloud With Rain', f: 2, s: 'cloud_rain' }, { u: '26C8', e: 'β', n: 'Thunder Cloud And Rain', f: 2 }, { u: '1F329', e: 'π©', n: 'Cloud With Lightning', f: 2, s: 'cloud_lightning' }, { u: '26A1', e: 'β‘οΈ', n: 'High Voltage Sign', f: 2, s: 'zap' }, { u: '1F525', e: 'π₯', n: 'Fire', f: 2, s: 'fire' }, { u: '1F4A5', e: 'π₯', n: 'Collision Symbol', f: 2, s: 'boom' }, { u: '2744', e: 'βοΈ', n: 'Snowflake', f: 2, s: 'snowflake' }, { u: '1F328', e: 'π¨', n: 'Cloud With Snow', f: 2, s: 'cloud_snow' }, { u: '2603', e: 'βοΈ', n: 'Snowman', f: 2 }, { u: '26C4', e: 'βοΈ', n: 'Snowman Without Snow', f: 2, s: 'snowman' }, { u: '1F32C', e: 'π¬', n: 'Wind Blowing Face', f: 2, s: 'wind_blowing_face' }, { u: '1F4A8', e: 'π¨', n: 'Dash Symbol', f: 2, s: 'dash' }, { u: '1F32A', e: 'πͺ', n: 'Cloud With Tornado', f: 2, s: 'cloud_tornado' }, { u: '1F32B', e: 'π«', n: 'Fog', f: 2, s: 'fog' }, { u: '2602', e: 'βοΈ', n: 'Umbrella', f: 2 }, { u: '2614', e: 'βοΈ', n: 'Umbrella With Rain Drops', f: 2, s: 'umbrella' }, { u: '1F4A7', e: 'π§', n: 'Droplet', f: 2, s: 'droplet' }, { u: '1F4A6', e: 'π¦', n: 'Splashing Sweat Symbol', f: 2, s: 'sweat_drops' }, { u: '1F30A', e: 'π', n: 'Water Wave', f: 2, s: 'ocean' }, { u: '1F34F', e: 'π', n: 'Green Apple', f: 3, s: 'green_apple' }, { u: '1F34E', e: 'π', n: 'Red Apple', f: 3, s: 'apple' }, { u: '1F350', e: 'π', n: 'Pear', f: 3, s: 'pear' }, { u: '1F34A', e: 'π', n: 'Tangerine', f: 3, s: 'tangerine' }, { u: '1F34B', e: 'π', n: 'Lemon', f: 3, s: 'lemon' }, { u: '1F34C', e: 'π', n: 'Banana', f: 3, s: 'banana' }, { u: '1F349', e: 'π', n: 'Watermelon', f: 3, s: 'watermelon' }, { u: '1F347', e: 'π', n: 'Grapes', f: 3, s: 'grapes' }, { u: '1F353', e: 'π', n: 'Strawberry', f: 3, s: 'strawberry' }, { u: '1F348', e: 'π', n: 'Melon', f: 3, s: 'melon' }, { u: '1F352', e: 'π', n: 'Cherries', f: 3, s: 'cherries' }, { u: '1F351', e: 'π', n: 'Peach', f: 3, s: 'peach' }, { u: '1F34D', e: 'π', n: 'Pineapple', f: 3, s: 'pineapple' }, { u: '1F345', e: 'π', n: 'Tomato', f: 3, s: 'tomato' }, { u: '1F346', e: 'π', n: 'Aubergine', f: 3, s: 'eggplant' }, { u: '1F336', e: 'πΆ', n: 'Hot Pepper', f: 3, s: 'hot_pepper' }, { u: '1F33D', e: 'π½', n: 'Ear Of Maize', f: 3, s: 'corn' }, { u: '1F360', e: 'π ', n: 'Roasted Sweet Potato', f: 3, s: 'sweet_potato' }, { u: '1F36F', e: 'π―', n: 'Honey Pot', f: 3, s: 'honey_pot' }, { u: '1F35E', e: 'π', n: 'Bread', f: 3, s: 'bread' }, { u: '1F9C0', e: 'π§', n: 'Cheese Wedge', f: 3 }, { u: '1F357', e: 'π', n: 'Poultry Leg', f: 3, s: 'poultry_leg' }, { u: '1F356', e: 'π', n: 'Meat On Bone', f: 3, s: 'meat_on_bone' }, { u: '1F364', e: 'π€', n: 'Fried Shrimp', f: 3, s: 'fried_shrimp' }, { u: '1F373', e: 'π³', n: 'Cooking', f: 3, s: 'egg' }, { u: '1F354', e: 'π', n: 'Hamburger', f: 3, s: 'hamburger' }, { u: '1F35F', e: 'π', n: 'French Fries', f: 3, s: 'fries' }, { u: '1F32D', e: 'π­', n: 'Hot Dog', f: 3 }, { u: '1F355', e: 'π', n: 'Slice Of Pizza', f: 3, s: 'pizza' }, { u: '1F35D', e: 'π', n: 'Spaghetti', f: 3, s: 'spaghetti' }, { u: '1F32E', e: 'π?', n: 'Taco', f: 3 }, { u: '1F32F', e: 'π―', n: 'Burrito', f: 3 }, { u: '1F35C', e: 'π', n: 'Steaming Bowl', f: 3, s: 'ramen' }, { u: '1F372', e: 'π²', n: 'Pot Of Food', f: 3, s: 'stew' }, { u: '1F365', e: 'π₯', n: 'Fish Cake With Swirl Design', f: 3, s: 'fish_cake' }, { u: '1F363', e: 'π£', n: 'Sushi', f: 3, s: 'sushi' }, { u: '1F371', e: 'π±', n: 'Bento Box', f: 3, s: 'bento' }, { u: '1F35B', e: 'π', n: 'Curry And Rice', f: 3, s: 'curry' }, { u: '1F359', e: 'π', n: 'Rice Ball', f: 3, s: 'rice_ball' }, { u: '1F35A', e: 'π', n: 'Cooked Rice', f: 3, s: 'rice' }, { u: '1F358', e: 'π', n: 'Rice Cracker', f: 3, s: 'rice_cracker' }, { u: '1F362', e: 'π’', n: 'Oden', f: 3, s: 'oden' }, { u: '1F361', e: 'π‘', n: 'Dango', f: 3, s: 'dango' }, { u: '1F367', e: 'π§', n: 'Shaved Ice', f: 3, s: 'shaved_ice' }, { u: '1F368', e: 'π¨', n: 'Ice Cream', f: 3, s: 'ice_cream' }, { u: '1F366', e: 'π¦', n: 'Soft Ice Cream', f: 3, s: 'icecream' }, { u: '1F370', e: 'π°', n: 'Shortcake', f: 3, s: 'cake' }, { u: '1F382', e: 'π', n: 'Birthday Cake', f: 3, s: 'birthday' }, { u: '1F36E', e: 'π?', n: 'Custard', f: 3, s: 'custard' }, { u: '1F36C', e: 'π¬', n: 'Candy', f: 3, s: 'candy' }, { u: '1F36D', e: 'π­', n: 'Lollipop', f: 3, s: 'lollipop' }, { u: '1F36B', e: 'π«', n: 'Chocolate Bar', f: 3, s: 'chocolate_bar' }, { u: '1F37F', e: 'πΏ', n: 'Popcorn', f: 3 }, { u: '1F369', e: 'π©', n: 'Doughnut', f: 3, s: 'doughnut' }, { u: '1F36A', e: 'πͺ', n: 'Cookie', f: 3, s: 'cookie' }, { u: '1F37A', e: 'πΊ', n: 'Beer Mug', f: 3, s: 'beer' }, { u: '1F37B', e: 'π»', n: 'Clinking Beer Mugs', f: 3, s: 'beers' }, { u: '1F377', e: 'π·', n: 'Wine Glass', f: 3, s: 'wine_glass' }, { u: '1F378', e: 'πΈ', n: 'Cocktail Glass', f: 3, s: 'cocktail' }, { u: '1F379', e: 'πΉ', n: 'Tropical Drink', f: 3, s: 'tropical_drink' }, { u: '1F37E', e: 'πΎ', n: 'Bottle With Popping Cork', f: 3 }, { u: '1F376', e: 'πΆ', n: 'Sake Bottle And Cup', f: 3, s: 'sake' }, { u: '1F375', e: 'π΅', n: 'Teacup Without Handle', f: 3, s: 'tea' }, { u: '2615', e: 'βοΈ', n: 'Hot Beverage', f: 3, s: 'coffee' }, { u: '1F37C', e: 'πΌ', n: 'Baby Bottle', f: 3, s: 'baby_bottle' }, { u: '1F374', e: 'π΄', n: 'Fork And Knife', f: 3, s: 'fork_and_knife' }, { u: '1F37D', e: 'π½', n: 'Fork And Knife With Plate', f: 3, s: 'fork_knife_plate' }, { u: '26BD', e: 'β½οΈ', n: 'Soccer Ball', f: 4, s: 'soccer' }, { u: '1F3C0', e: 'π', n: 'Basketball And Hoop', f: 4, s: 'basketball' }, { u: '1F3C8', e: 'π', n: 'American Football', f: 4, s: 'football' }, { u: '26BE', e: 'βΎοΈ', n: 'Baseball', f: 4, s: 'baseball' }, { u: '1F3BE', e: 'πΎ', n: 'Tennis Racquet And Ball', f: 4, s: 'tennis' }, { u: '1F3D0', e: 'π', n: 'Volleyball', f: 4 }, { u: '1F3C9', e: 'π', n: 'Rugby Football', f: 4, s: 'rugby_football' }, { u: '1F3B1', e: 'π±', n: 'Billiards', f: 4, s: '8ball' }, { u: '26F3', e: 'β³οΈ', n: 'Flag In Hole', f: 4, s: 'golf' }, { u: '1F3CC', e: 'π', n: 'Golfer', f: 4, s: 'golfer' }, { u: '1F3D3', e: 'π', n: 'Table Tennis Paddle And Ball', f: 4 }, { u: '1F3F8', e: 'πΈ', n: 'Badminton Racquet And Shuttlecock', f: 4 }, { u: '1F3D2', e: 'π', n: 'Ice Hockey Stick And Puck', f: 4 }, { u: '1F3D1', e: 'π', n: 'Field Hockey Stick And Ball', f: 4 }, { u: '1F3CF', e: 'π', n: 'Cricket Bat And Ball', f: 4 }, { u: '1F3BF', e: 'πΏ', n: 'Ski And Ski Boot', f: 4, s: 'ski' }, { u: '26F7', e: 'β·', n: 'Skier', f: 4 }, { u: '1F3C2', e: 'π', n: 'Snowboarder', f: 4, s: 'snowboarder' }, { u: '26F8', e: 'βΈ', n: 'Ice Skate', f: 4 }, { u: '1F3F9', e: 'πΉ', n: 'Bow And Arrow', f: 4 }, { u: '1F3A3', e: 'π£', n: 'Fishing Pole And Fish', f: 4, s: 'fishing_pole_and_fish' }, { u: '1F6A3', e: 'π£', n: 'Rowboat', f: 4, s: 'rowboat' }, { u: '1F6A3-1F3FB', e: 'π£π»', n: 'Rowboat' + _mod + '1-2', f: 4, s: 'rowboat' }, { u: '1F6A3-1F3FC', e: 'π£πΌ', n: 'Rowboat' + _mod + '3', f: 4, s: 'rowboat' }, { u: '1F6A3-1F3FD', e: 'π£π½', n: 'Rowboat' + _mod + '4', f: 4, s: 'rowboat' }, { u: '1F6A3-1F3FE', e: 'π£πΎ', n: 'Rowboat' + _mod + '5', f: 4, s: 'rowboat' }, { u: '1F6A3-1F3FF', e: 'π£πΏ', n: 'Rowboat' + _mod + '6', f: 4, s: 'rowboat' }, { u: '1F3CA', e: 'π', n: 'Swimmer', f: 4, s: 'swimmer' }, { u: '1F3CA-1F3FB', e: 'ππ»', n: 'Swimmer' + _mod + '1-2', f: 4, s: 'swimmer' }, { u: '1F3CA-1F3FC', e: 'ππΌ', n: 'Swimmer' + _mod + '3', f: 4, s: 'swimmer' }, { u: '1F3CA-1F3FD', e: 'ππ½', n: 'Swimmer' + _mod + '4', f: 4, s: 'swimmer' }, { u: '1F3CA-1F3FE', e: 'ππΎ', n: 'Swimmer' + _mod + '5', f: 4, s: 'swimmer' }, { u: '1F3CA-1F3FF', e: 'ππΏ', n: 'Swimmer' + _mod + '6', f: 4, s: 'swimmer' }, { u: '1F3C4-1F3FB', e: 'ππ»', n: 'Surfer' + _mod + '1-2', f: 4, s: 'surfer' }, { u: '1F3C4', e: 'π', n: 'Surfer', f: 4, s: 'surfer' }, { u: '1F3C4-1F3FC', e: 'ππΌ', n: 'Surfer' + _mod + '3', f: 4, s: 'surfer' }, { u: '1F3C4-1F3FD', e: 'ππ½', n: 'Surfer' + _mod + '4', f: 4, s: 'surfer' }, { u: '1F3C4-1F3FE', e: 'ππΎ', n: 'Surfer' + _mod + '5', f: 4, s: 'surfer' }, { u: '1F3C4-1F3FF', e: 'ππΏ', n: 'Surfer' + _mod + '6', f: 4, s: 'surfer' }, { u: '1F6C0', e: 'π', n: 'Bath', f: 4, s: 'bath' }, { u: '1F6C0-1F3FB', e: 'ππ»', n: 'Bath' + _mod + '1-2', f: 4, s: 'bath' }, { u: '1F6C0-1F3FC', e: 'ππΌ', n: 'Bath' + _mod + '3', f: 4, s: 'bath' }, { u: '1F6C0-1F3FD', e: 'ππ½', n: 'Bath' + _mod + '4', f: 4, s: 'bath' }, { u: '1F6C0-1F3FE', e: 'ππΎ', n: 'Bath' + _mod + '5', f: 4, s: 'bath' }, { u: '1F6C0-1F3FF', e: 'ππΏ', n: 'Bath' + _mod + '6', f: 4, s: 'bath' }, { u: '26F9', e: 'βΉ', n: 'Person With Ball', f: 4 }, { u: '26F9-1F3FB', e: 'βΉπ»', n: 'Person With Ball' + _mod + '1-2', f: 4 }, { u: '26F9-1F3FC', e: 'βΉπΌ', n: 'Person With Ball' + _mod + '3', f: 4 }, { u: '26F9-1F3FD', e: 'βΉπ½', n: 'Person With Ball' + _mod + '4', f: 4 }, { u: '26F9-1F3FE', e: 'βΉπΎ', n: 'Person With Ball' + _mod + '5', f: 4 }, { u: '26F9-1F3FF', e: 'βΉπΏ', n: 'Person With Ball' + _mod + '6', f: 4 }, { u: '1F3CB', e: 'π', n: 'Weight Lifter', f: 4, s: 'lifter' }, { u: '1F3CB-1F3FB', e: 'ππ»', n: 'Weight Lifter' + _mod + '1-2', f: 4, s: 'lifter' }, { u: '1F3CB-1F3FC', e: 'ππΌ', n: 'Weight Lifter' + _mod + '3', f: 4, s: 'lifter' }, { u: '1F3CB-1F3FD', e: 'ππ½', n: 'Weight Lifter' + _mod + '4', f: 4, s: 'lifter' }, { u: '1F3CB-1F3FE', e: 'ππΎ', n: 'Weight Lifter' + _mod + '5', f: 4, s: 'lifter' }, { u: '1F3CB-1F3FF', e: 'ππΏ', n: 'Weight Lifter' + _mod + '6', f: 4, s: 'lifter' }, { u: '1F6B4-1F3FB', e: 'π΄π»', n: 'Bicyclist' + _mod + '1-2', f: 4, s: 'bicyclist' }, { u: '1F6B4', e: 'π΄', n: 'Bicyclist', f: 4, s: 'bicyclist' }, { u: '1F6B4-1F3FC', e: 'π΄πΌ', n: 'Bicyclist' + _mod + '3', f: 4, s: 'bicyclist' }, { u: '1F6B4-1F3FD', e: 'π΄π½', n: 'Bicyclist' + _mod + '4', f: 4, s: 'bicyclist' }, { u: '1F6B4-1F3FE', e: 'π΄πΎ', n: 'Bicyclist' + _mod + '5', f: 4, s: 'bicyclist' }, { u: '1F6B4-1F3FF', e: 'π΄πΏ', n: 'Bicyclist' + _mod + '6', f: 4, s: 'bicyclist' }, { u: '1F6B5-1F3FB', e: 'π΅π»', n: 'Mountain Bicyclist' + _mod + '1-2', f: 4, s: 'mountain_bicyclist' }, { u: '1F6B5', e: 'π΅', n: 'Mountain Bicyclist', f: 4, s: 'mountain_bicyclist' }, { u: '1F6B5-1F3FC', e: 'π΅πΌ', n: 'Mountain Bicyclist' + _mod + '3', f: 4, s: 'mountain_bicyclist' }, { u: '1F6B5-1F3FD', e: 'π΅π½', n: 'Mountain Bicyclist' + _mod + '4', f: 4, s: 'mountain_bicyclist' }, { u: '1F6B5-1F3FE', e: 'π΅πΎ', n: 'Mountain Bicyclist' + _mod + '5', f: 4, s: 'mountain_bicyclist' }, { u: '1F6B5-1F3FF', e: 'π΅πΏ', n: 'Mountain Bicyclist' + _mod + '6', f: 4, s: 'mountain_bicyclist' }, { u: '1F3C7-1F3FB', e: 'ππ»', n: 'Horse Racing' + _mod + '1-2', f: 4, s: 'horse_racing' }, { u: '1F3C7', e: 'π', n: 'Horse Racing', f: 4, s: 'horse_racing' }, { u: '1F3C7-1F3FC', e: 'ππΌ', n: 'Horse Racing' + _mod + '3', f: 4, s: 'horse_racing' }, { u: '1F3C7-1F3FD', e: 'ππ½', n: 'Horse Racing' + _mod + '4', f: 4, s: 'horse_racing' }, { u: '1F3C7-1F3FE', e: 'ππΎ', n: 'Horse Racing' + _mod + '5', f: 4, s: 'horse_racing' }, { u: '1F3C7-1F3FF', e: 'ππΏ', n: 'Horse Racing' + _mod + '6', f: 4, s: 'horse_racing' }, { u: '1F574', e: 'π΄', n: 'Man In Business Suit Levitating', f: 4, s: 'levitate' }, { u: '1F3C6', e: 'π', n: 'Trophy', f: 4, s: 'trophy' }, { u: '1F3BD', e: 'π½', n: 'Running Shirt With Sash', f: 4, s: 'running_shirt_with_sash' }, { u: '1F3C5', e: 'π', n: 'Sports Medal', f: 4, s: 'medal' }, { u: '1F396', e: 'π', n: 'Military Medal', f: 4, s: 'military_medal' }, { u: '1F397', e: 'π', n: 'Reminder Ribbon', f: 4, s: 'reminder_ribbon' }, { u: '1F3F5', e: 'π΅', n: 'Rosette', f: 4, s: 'rosette' }, { u: '1F3AB', e: 'π«', n: 'Ticket', f: 4, s: 'ticket' }, { u: '1F39F', e: 'π', n: 'Admission Tickets', f: 4, s: 'tickets' }, { u: '1F3AD', e: 'π­', n: 'Performing Arts', f: 4, s: 'performing_arts' }, { u: '1F3A8', e: 'π¨', n: 'Artist Palette', f: 4, s: 'art' }, { u: '1F3AA', e: 'πͺ', n: 'Circus Tent', f: 4, s: 'circus_tent' }, { u: '1F3A4', e: 'π€', n: 'Microphone', f: 4, s: 'microphone' }, { u: '1F3A7', e: 'π§', n: 'Headphone', f: 4, s: 'headphones' }, { u: '1F3BC', e: 'πΌ', n: 'Musical Score', f: 4, s: 'musical_score' }, { u: '1F3B9', e: 'πΉ', n: 'Musical Keyboard', f: 4, s: 'musical_keyboard' }, { u: '1F3B7', e: 'π·', n: 'Saxophone', f: 4, s: 'saxophone' }, { u: '1F3BA', e: 'πΊ', n: 'Trumpet', f: 4, s: 'trumpet' }, { u: '1F3B8', e: 'πΈ', n: 'Guitar', f: 4, s: 'guitar' }, { u: '1F3BB', e: 'π»', n: 'Violin', f: 4, s: 'violin' }, { u: '1F3AC', e: 'π¬', n: 'Clapper Board', f: 4, s: 'clapper' }, { u: '1F3AE', e: 'π?', n: 'Video Game', f: 4, s: 'video_game' }, { u: '1F47E', e: 'πΎ', n: 'Alien Monster', f: 4, s: 'space_invader' }, { u: '1F3AF', e: 'π―', n: 'Direct Hit', f: 4, s: 'dart' }, { u: '1F3B2', e: 'π²', n: 'Game Die', f: 4, s: 'game_die' }, { u: '1F3B0', e: 'π°', n: 'Slot Machine', f: 4, s: 'slot_machine' }, { u: '1F3B3', e: 'π³', n: 'Bowling', f: 4, s: 'bowling' }, { u: '1F697', e: 'π', n: 'Automobile', f: 5, s: 'red_car' }, { u: '1F695', e: 'π', n: 'Taxi', f: 5, s: 'taxi' }, { u: '1F699', e: 'π', n: 'Recreational Vehicle', f: 5, s: 'blue_car' }, { u: '1F68C', e: 'π', n: 'Bus', f: 5, s: 'bus' }, { u: '1F68E', e: 'π', n: 'Trolleybus', f: 5, s: 'trolleybus' }, { u: '1F3CE', e: 'π', n: 'Racing Car', f: 5, s: 'race_car' }, { u: '1F693', e: 'π', n: 'Police Car', f: 5, s: 'police_car' }, { u: '1F691', e: 'π', n: 'Ambulance', f: 5, s: 'ambulance' }, { u: '1F692', e: 'π', n: 'Fire Engine', f: 5, s: 'fire_engine' }, { u: '1F690', e: 'π', n: 'Minibus', f: 5, s: 'minibus' }, { u: '1F69A', e: 'π', n: 'Delivery Truck', f: 5, s: 'truck' }, { u: '1F69B', e: 'π', n: 'Articulated Lorry', f: 5, s: 'articulated_lorry' }, { u: '1F69C', e: 'π', n: 'Tractor', f: 5, s: 'tractor' }, { u: '1F3CD', e: 'π', n: 'Racing Motorcycle', f: 5, s: 'motorcycle' }, { u: '1F6B2', e: 'π²', n: 'Bicycle', f: 5, s: 'bike' }, { u: '1F6A8', e: 'π¨', n: 'Police Cars Revolving Light', f: 5, s: 'rotating_light' }, { u: '1F694', e: 'π', n: 'Oncoming Police Car', f: 5, s: 'oncoming_police_car' }, { u: '1F68D', e: 'π', n: 'Oncoming Bus', f: 5, s: 'oncoming_bus' }, { u: '1F698', e: 'π', n: 'Oncoming Automobile', f: 5, s: 'oncoming_automobile' }, { u: '1F696', e: 'π', n: 'Oncoming Taxi', f: 5, s: 'oncoming_taxi' }, { u: '1F6A1', e: 'π‘', n: 'Aerial Tramway', f: 5, s: 'aerial_tramway' }, { u: '1F6A0', e: 'π ', n: 'Mountain Cableway', f: 5, s: 'mountain_cableway' }, { u: '1F69F', e: 'π', n: 'Suspension Railway', f: 5, s: 'suspension_railway' }, { u: '1F683', e: 'π', n: 'Railway Car', f: 5, s: 'railway_car' }, { u: '1F68B', e: 'π', n: 'Tram Car', f: 5, s: 'train' }, { u: '1F69D', e: 'π', n: 'Monorail', f: 5, s: 'monorail' }, { u: '1F684', e: 'π', n: 'High-speed Train', f: 5, s: 'bullettrain_side' }, { u: '1F685', e: 'π', n: 'High-speed Train With Bullet Nose', f: 5, s: 'bullettrain_front' }, { u: '1F688', e: 'π', n: 'Light Rail', f: 5, s: 'light_rail' }, { u: '1F69E', e: 'π', n: 'Mountain Railway', f: 5, s: 'mountain_railway' }, { u: '1F682', e: 'π', n: 'Steam Locomotive', f: 5, s: 'steam_locomotive' }, { u: '1F686', e: 'π', n: 'Train', f: 5, s: 'train2' }, { u: '1F687', e: 'π', n: 'Metro', f: 5, s: 'metro' }, { u: '1F68A', e: 'π', n: 'Tram', f: 5, s: 'tram' }, { u: '1F689', e: 'π', n: 'Station', f: 5, s: 'station' }, { u: '1F681', e: 'π', n: 'Helicopter', f: 5, s: 'helicopter' }, { u: '1F6E9', e: 'π©', n: 'Small Airplane', f: 5, s: 'airplane_small' }, { u: '2708', e: 'βοΈ', n: 'Airplane', f: 5, s: 'airplane' }, { u: '1F6EB', e: 'π«', n: 'Airplane Departure', f: 5, s: 'airplane_departure' }, { u: '1F6EC', e: 'π¬', n: 'Airplane Arriving', f: 5, s: 'airplane_arriving' }, { u: '26F5', e: 'β΅οΈ', n: 'Sailboat', f: 5, s: 'sailboat' }, { u: '1F6E5', e: 'π₯', n: 'Motor Boat', f: 5, s: 'motorboat' }, { u: '1F6A4', e: 'π€', n: 'Speedboat', f: 5, s: 'speedboat' }, { u: '26F4', e: 'β΄', n: 'Ferry', f: 5 }, { u: '1F6F3', e: 'π³', n: 'Passenger Ship', f: 5, s: 'cruise_ship' }, { u: '1F680', e: 'π', n: 'Rocket', f: 5, s: 'rocket' }, { u: '1F6F0', e: 'π°', n: 'Satellite', f: 5, s: 'satellite_orbital' }, { u: '1F4BA', e: 'πΊ', n: 'Seat', f: 5, s: 'seat' }, { u: '2693', e: 'βοΈ', n: 'Anchor', f: 5, s: 'anchor' }, { u: '1F6A7', e: 'π§', n: 'Construction Sign', f: 5, s: 'construction' }, { u: '26FD', e: 'β½οΈ', n: 'Fuel Pump', f: 5, s: 'fuelpump' }, { u: '1F68F', e: 'π', n: 'Bus Stop', f: 5, s: 'busstop' }, { u: '1F6A6', e: 'π¦', n: 'Vertical Traffic Light', f: 5, s: 'vertical_traffic_light' }, { u: '1F6A5', e: 'π₯', n: 'Horizontal Traffic Light', f: 5, s: 'traffic_light' }, { u: '1F3C1', e: 'π', n: 'Chequered Flag', f: 5, s: 'checkered_flag' }, { u: '1F6A2', e: 'π’', n: 'Ship', f: 5, s: 'ship' }, { u: '1F3A1', e: 'π‘', n: 'Ferris Wheel', f: 5, s: 'ferris_wheel' }, { u: '1F3A2', e: 'π’', n: 'Roller Coaster', f: 5, s: 'roller_coaster' }, { u: '1F3A0', e: 'π ', n: 'Carousel Horse', f: 5, s: 'carousel_horse' }, { u: '1F3D7', e: 'π', n: 'Building Construction', f: 5, s: 'contruction_site' }, { u: '1F301', e: 'π', n: 'Foggy', f: 5, s: 'foggy' }, { u: '1F5FC', e: 'πΌ', n: 'Tokyo Tower', f: 5, s: 'tokyo_tower' }, { u: '1F3ED', e: 'π­', n: 'Factory', f: 5, s: 'factory' }, { u: '26F2', e: 'β²οΈ', n: 'Fountain', f: 5, s: 'fountain' }, { u: '1F391', e: 'π', n: 'Moon Viewing Ceremony', f: 5, s: 'rice_scene' }, { u: '26F0', e: 'β°', n: 'Mountain', f: 5 }, { u: '1F3D4', e: 'π', n: 'Snow Capped Mountain', f: 5, s: 'mountain_snow' }, { u: '1F5FB', e: 'π»', n: 'Mount Fuji', f: 5, s: 'mount_fuji' }, { u: '1F30B', e: 'π', n: 'Volcano', f: 5, s: 'volcano' }, { u: '1F5FE', e: 'πΎ', n: 'Silhouette Of Japan', f: 5, s: 'japan' }, { u: '1F3D5', e: 'π', n: 'Camping', f: 5, s: 'camping' }, { u: '26FA', e: 'βΊοΈ', n: 'Tent', f: 5, s: 'tent' }, { u: '1F3DE', e: 'π', n: 'National Park', f: 5, s: 'park' }, { u: '1F6E3', e: 'π£', n: 'Motorway', f: 5, s: 'motorway' }, { u: '1F6E4', e: 'π€', n: 'Railway Track', f: 5, s: 'railway_track' }, { u: '1F305', e: 'π', n: 'Sunrise', f: 5, s: 'sunrise' }, { u: '1F304', e: 'π', n: 'Sunrise Over Mountains', f: 5, s: 'sunrise_over_mountains' }, { u: '1F3DC', e: 'π', n: 'Desert', f: 5, s: 'desert' }, { u: '1F3D6', e: 'π', n: 'Beach With Umbrella', f: 5, s: 'beach' }, { u: '1F3DD', e: 'π', n: 'Desert Island', f: 5, s: 'island' }, { u: '1F307', e: 'π', n: 'Sunset Over Buildings', f: 5, s: 'city_sunset' }, { u: '1F306', e: 'π', n: 'Cityscape At Dusk', f: 5, s: 'city_dusk' }, { u: '1F3D9', e: 'π', n: 'Cityscape', f: 5, s: 'cityscape' }, { u: '1F303', e: 'π', n: 'Night With Stars', f: 5, s: 'night_with_stars' }, { u: '1F309', e: 'π', n: 'Bridge At Night', f: 5, s: 'bridge_at_night' }, { u: '1F30C', e: 'π', n: 'Milky Way', f: 5, s: 'milky_way' }, { u: '1F320', e: 'π ', n: 'Shooting Star', f: 5, s: 'stars' }, { u: '1F387', e: 'π', n: 'Firework Sparkler', f: 5, s: 'sparkler' }, { u: '1F386', e: 'π', n: 'Fireworks', f: 5, s: 'fireworks' }, { u: '1F308', e: 'π', n: 'Rainbow', f: 5, s: 'rainbow' }, { u: '1F3D8', e: 'π', n: 'House Buildings', f: 5, s: 'homes' }, { u: '1F3F0', e: 'π°', n: 'European Castle', f: 5, s: 'european_castle' }, { u: '1F3EF', e: 'π―', n: 'Japanese Castle', f: 5, s: 'japanese_castle' }, { u: '1F3DF', e: 'π', n: 'Stadium', f: 5, s: 'stadium' }, { u: '1F5FD', e: 'π½', n: 'Statue Of Liberty', f: 5, s: 'statue_of_liberty' }, { u: '1F3E0', e: 'π ', n: 'House Building', f: 5, s: 'house' }, { u: '1F3E1', e: 'π‘', n: 'House With Garden', f: 5, s: 'house_with_garden' }, { u: '1F3DA', e: 'π', n: 'Derelict House Building', f: 5, s: 'house_abandoned' }, { u: '1F3E2', e: 'π’', n: 'Office Building', f: 5, s: 'office' }, { u: '1F3EC', e: 'π¬', n: 'Department Store', f: 5, s: 'department_store' }, { u: '1F3E3', e: 'π£', n: 'Japanese Post Office', f: 5, s: 'post_office' }, { u: '1F3E4', e: 'π€', n: 'European Post Office', f: 5, s: 'european_post_office' }, { u: '1F3E5', e: 'π₯', n: 'Hospital', f: 5, s: 'hospital' }, { u: '1F3E6', e: 'π¦', n: 'Bank', f: 5, s: 'bank' }, { u: '1F3E8', e: 'π¨', n: 'Hotel', f: 5, s: 'hotel' }, { u: '1F3EA', e: 'πͺ', n: 'Convenience Store', f: 5, s: 'convenience_store' }, { u: '1F3EB', e: 'π«', n: 'School', f: 5, s: 'school' }, { u: '1F3E9', e: 'π©', n: 'Love Hotel', f: 5, s: 'love_hotel' }, { u: '1F492', e: 'π', n: 'Wedding', f: 5, s: 'wedding' }, { u: '1F3DB', e: 'π', n: 'Classical Building', f: 5, s: 'classical_building' }, { u: '26EA', e: 'βͺοΈ', n: 'Church', f: 5, s: 'church' }, { u: '1F54C', e: 'π', n: 'Mosque', f: 5 }, { u: '1F54D', e: 'π', n: 'Synagogue', f: 5 }, { u: '1F54B', e: 'π', n: 'Kaaba', f: 5 }, { u: '26E9', e: 'β©', n: 'Shinto Shrine', f: 5 }, { u: '231A', e: 'βοΈ', n: 'Watch', f: 6, s: 'watch' }, { u: '1F4F1', e: 'π±', n: 'Mobile Phone', f: 6, s: 'iphone' }, { u: '1F4F2', e: 'π²', n: 'Mobile Phone With Rightwards Arrow At Left', f: 6, s: 'calling' }, { u: '1F4BB', e: 'π»', n: 'Personal Computer', f: 6, s: 'computer' }, { u: '2328', e: 'β¨', n: 'Keyboard', f: 6 }, { u: '1F5A5', e: 'π₯', n: 'Desktop Computer', f: 6, s: 'desktop' }, { u: '1F5A8', e: 'π¨', n: 'Printer', f: 6, s: 'printer' }, { u: '1F5B1', e: 'π±', n: 'Three Button Mouse', f: 6 }, { u: '1F5B2', e: 'π²', n: 'Trackball', f: 6, s: 'trackball' }, { u: '1F579', e: 'πΉ', n: 'Joystick', f: 6, s: 'joystick' }, { u: '1F5DC', e: 'π', n: 'Compression', f: 6, s: 'compression' }, { u: '1F4BD', e: 'π½', n: 'Minidisc', f: 6, s: 'minidisc' }, { u: '1F4BE', e: 'πΎ', n: 'Floppy Disk', f: 6, s: 'floppy_disk' }, { u: '1F4BF', e: 'πΏ', n: 'Optical Disc', f: 6, s: 'cd' }, { u: '1F4C0', e: 'π', n: 'Dvd', f: 6, s: 'dvd' }, { u: '1F4FC', e: 'πΌ', n: 'Videocassette', f: 6, s: 'vhs' }, { u: '1F4F7', e: 'π·', n: 'Camera', f: 6, s: 'camera' }, { u: '1F4F8', e: 'πΈ', n: 'Camera With Flash', f: 6, s: 'camera_with_flash' }, { u: '1F4F9', e: 'πΉ', n: 'Video Camera', f: 6, s: 'video_camera' }, { u: '1F3A5', e: 'π₯', n: 'Movie Camera', f: 6, s: 'movie_camera' }, { u: '1F4FD', e: 'π½', n: 'Film Projector', f: 6, s: 'projector' }, { u: '1F39E', e: 'π', n: 'Film Frames', f: 6, s: 'film_frames' }, { u: '1F4DE', e: 'π', n: 'Telephone Receiver', f: 6, s: 'telephone_receiver' }, { u: '260E', e: 'βοΈ', n: 'Black Telephone', f: 6, s: 'telephone' }, { u: '1F4DF', e: 'π', n: 'Pager', f: 6, s: 'pager' }, { u: '1F4E0', e: 'π ', n: 'Fax Machine', f: 6, s: 'fax' }, { u: '1F4FA', e: 'πΊ', n: 'Television', f: 6, s: 'tv' }, { u: '1F4FB', e: 'π»', n: 'Radio', f: 6, s: 'radio' }, { u: '1F399', e: 'π', n: 'Studio Microphone', f: 6, s: 'microphone2' }, { u: '1F39A', e: 'π', n: 'Level Slider', f: 6, s: 'level_slider' }, { u: '1F39B', e: 'π', n: 'Control Knobs', f: 6, s: 'control_knobs' }, { u: '23F1', e: 'β±', n: 'Stopwatch', f: 6 }, { u: '23F2', e: 'β²', n: 'Timer Clock', f: 6 }, { u: '23F0', e: 'β°', n: 'Alarm Clock', f: 6, s: 'alarm_clock' }, { u: '1F570', e: 'π°', n: 'Mantelpiece Clock', f: 6, s: 'clock' }, { u: '23F3', e: 'β³', n: 'Hourglass With Flowing Sand', f: 6, s: 'hourglass_flowing_sand' }, { u: '231B', e: 'βοΈ', n: 'Hourglass', f: 6, s: 'hourglass' }, { u: '1F4E1', e: 'π‘', n: 'Satellite Antenna', f: 6, s: 'satellite' }, { u: '1F50B', e: 'π', n: 'Battery', f: 6, s: 'battery' }, { u: '1F50C', e: 'π', n: 'Electric Plug', f: 6, s: 'electric_plug' }, { u: '1F4A1', e: 'π‘', n: 'Electric Light Bulb', f: 6, s: 'bulb' }, { u: '1F526', e: 'π¦', n: 'Electric Torch', f: 6, s: 'flashlight' }, { u: '1F56F', e: 'π―', n: 'Candle', f: 6, s: 'candle' }, { u: '1F5D1', e: 'π', n: 'Wastebasket', f: 6, s: 'wastebasket' }, { u: '1F6E2', e: 'π’', n: 'Oil Drum', f: 6, s: 'oil' }, { u: '1F4B8', e: 'πΈ', n: 'Money With Wings', f: 6, s: 'money_with_wings' }, { u: '1F4B5', e: 'π΅', n: 'Banknote With Dollar Sign', f: 6, s: 'dollar' }, { u: '1F4B4', e: 'π΄', n: 'Banknote With Yen Sign', f: 6, s: 'yen' }, { u: '1F4B6', e: 'πΆ', n: 'Banknote With Euro Sign', f: 6, s: 'euro' }, { u: '1F4B7', e: 'π·', n: 'Banknote With Pound Sign', f: 6, s: 'pound' }, { u: '1F4B0', e: 'π°', n: 'Money Bag', f: 6, s: 'moneybag' }, { u: '1F4B3', e: 'π³', n: 'Credit Card', f: 6, s: 'credit_card' }, { u: '1F48E', e: 'π', n: 'Gem Stone', f: 6, s: 'gem' }, { u: '2696', e: 'β', n: 'Scales', f: 6 }, { u: '1F527', e: 'π§', n: 'Wrench', f: 6, s: 'wrench' }, { u: '1F528', e: 'π¨', n: 'Hammer', f: 6, s: 'hammer' }, { u: '2692', e: 'β', n: 'Hammer And Pick', f: 6 }, { u: '1F6E0', e: 'π ', n: 'Hammer And Wrench', f: 6, s: 'tools' }, { u: '26CF', e: 'β', n: 'Pick', f: 6 }, { u: '1F529', e: 'π©', n: 'Nut And Bolt', f: 6, s: 'nut_and_bolt' }, { u: '2699', e: 'β', n: 'Gear', f: 6 }, { u: '26D3', e: 'β', n: 'Chains', f: 6 }, { u: '1F52B', e: 'π«', n: 'Pistol', f: 6, s: 'gun' }, { u: '1F4A3', e: 'π£', n: 'Bomb', f: 6, s: 'bomb' }, { u: '1F52A', e: 'πͺ', n: 'Hocho', f: 6, s: 'knife' }, { u: '1F5E1', e: 'π‘', n: 'Dagger Knife', f: 6, s: 'dagger' }, { u: '2694', e: 'β', n: 'Crossed Swords', f: 6 }, { u: '1F6E1', e: 'π‘', n: 'Shield', f: 6, s: 'shield' }, { u: '1F6AC', e: 'π¬', n: 'Smoking Symbol', f: 6, s: 'smoking' }, { u: '2620', e: 'β ', n: 'Skull And Crossbones', f: 6 }, { u: '26B0', e: 'β°', n: 'Coffin', f: 6 }, { u: '26B1', e: 'β±', n: 'Funeral Urn', f: 6 }, { u: '1F3FA', e: 'πΊ', n: 'Amphora', f: 6 }, { u: '1F52E', e: 'π?', n: 'Crystal Ball', f: 6, s: 'crystal_ball' }, { u: '1F4FF', e: 'πΏ', n: 'Prayer Beads', f: 6 }, { u: '1F488', e: 'π', n: 'Barber Pole', f: 6, s: 'barber' }, { u: '2697', e: 'β', n: 'Alembic', f: 6 }, { u: '1F52D', e: 'π­', n: 'Telescope', f: 6, s: 'telescope' }, { u: '1F52C', e: 'π¬', n: 'Microscope', f: 6, s: 'microscope' }, { u: '1F573', e: 'π³', n: 'Hole', f: 6, s: 'hole' }, { u: '1F48A', e: 'π', n: 'Pill', f: 6, s: 'pill' }, { u: '1F489', e: 'π', n: 'Syringe', f: 6, s: 'syringe' }, { u: '1F321', e: 'π‘', n: 'Thermometer', f: 6, s: 'thermometer' }, { u: '1F3F7', e: 'π·', n: 'Label', f: 6, s: 'label' }, { u: '1F516', e: 'π', n: 'Bookmark', f: 6, s: 'bookmark' }, { u: '1F6BD', e: 'π½', n: 'Toilet', f: 6, s: 'toilet' }, { u: '1F6BF', e: 'πΏ', n: 'Shower', f: 6, s: 'shower' }, { u: '1F6C1', e: 'π', n: 'Bathtub', f: 6, s: 'bathtub' }, { u: '1F511', e: 'π', n: 'Key', f: 6, s: 'key' }, { u: '1F5DD', e: 'π', n: 'Old Key', f: 6, s: 'key2' }, { u: '1F6CB', e: 'π', n: 'Couch And Lamp', f: 6, s: 'couch' }, { u: '1F6CC', e: 'π', n: 'Sleeping Accommodation', f: 6, s: 'sleeping_accommodation' }, { u: '1F6CF', e: 'π', n: 'Bed', f: 6, s: 'bed' }, { u: '1F6AA', e: 'πͺ', n: 'Door', f: 6, s: 'door' }, { u: '1F6CE', e: 'π', n: 'Bellhop Bell', f: 6, s: 'bellhop' }, { u: '1F5BC', e: 'πΌ', n: 'Frame With Picture', f: 6, s: 'frame_photo' }, { u: '1F5FA', e: 'πΊ', n: 'World Map', f: 6, s: 'map' }, { u: '26F1', e: 'β±', n: 'Umbrella On Ground', f: 6 }, { u: '1F5FF', e: 'πΏ', n: 'Moyai', f: 6, s: 'moyai' }, { u: '1F6CD', e: 'π', n: 'Shopping Bags', f: 6, s: 'shopping_bags' }, { u: '1F388', e: 'π', n: 'Balloon', f: 6, s: 'balloon' }, { u: '1F38F', e: 'π', n: 'Carp Streamer', f: 6, s: 'flags' }, { u: '1F380', e: 'π', n: 'Ribbon', f: 6, s: 'ribbon' }, { u: '1F381', e: 'π', n: 'Wrapped Present', f: 6, s: 'gift' }, { u: '1F38A', e: 'π', n: 'Confetti Ball', f: 6, s: 'confetti_ball' }, { u: '1F389', e: 'π', n: 'Party Popper', f: 6, s: 'tada' }, { u: '1F38E', e: 'π', n: 'Japanese Dolls', f: 6, s: 'dolls' }, { u: '1F390', e: 'π', n: 'Wind Chime', f: 6, s: 'wind_chime' }, { u: '1F38C', e: 'π', n: 'Crossed Flags', f: 6, s: 'crossed_flags' }, { u: '1F3EE', e: 'π?', n: 'Izakaya Lantern', f: 6, s: 'izakaya_lantern' }, { u: '2709', e: 'βοΈ', n: 'Envelope', f: 6, s: 'envelope' }, { u: '1F4E9', e: 'π©', n: 'Envelope With Downwards Arrow Above', f: 6, s: 'envelope_with_arrow' }, { u: '1F4E8', e: 'π¨', n: 'Incoming Envelope', f: 6, s: 'incoming_envelope' }, { u: '1F4E7', e: 'π§', n: 'E-mail Symbol', f: 6, s: 'e-mail' }, { u: '1F48C', e: 'π', n: 'Love Letter', f: 6, s: 'love_letter' }, { u: '1F4EE', e: 'π?', n: 'Postbox', f: 6, s: 'postbox' }, { u: '1F4EA', e: 'πͺ', n: 'Closed Mailbox With Lowered Flag', f: 6, s: 'mailbox_closed' }, { u: '1F4EB', e: 'π«', n: 'Closed Mailbox With Raised Flag', f: 6, s: 'mailbox' }, { u: '1F4EC', e: 'π¬', n: 'Open Mailbox With Raised Flag', f: 6, s: 'mailbox_with_mail' }, { u: '1F4ED', e: 'π­', n: 'Open Mailbox With Lowered Flag', f: 6, s: 'mailbox_with_no_mail' }, { u: '1F4E6', e: 'π¦', n: 'Package', f: 6, s: 'package' }, { u: '1F4EF', e: 'π―', n: 'Postal Horn', f: 6, s: 'postal_horn' }, { u: '1F4E5', e: 'π₯', n: 'Inbox Tray', f: 6, s: 'inbox_tray' }, { u: '1F4E4', e: 'π€', n: 'Outbox Tray', f: 6, s: 'outbox_tray' }, { u: '1F4DC', e: 'π', n: 'Scroll', f: 6, s: 'scroll' }, { u: '1F4C3', e: 'π', n: 'Page With Curl', f: 6, s: 'page_with_curl' }, { u: '1F4D1', e: 'π', n: 'Bookmark Tabs', f: 6, s: 'bookmark_tabs' }, { u: '1F4CA', e: 'π', n: 'Bar Chart', f: 6, s: 'bar_chart' }, { u: '1F4C8', e: 'π', n: 'Chart With Upwards Trend', f: 6, s: 'chart_with_upwards_trend' }, { u: '1F4C9', e: 'π', n: 'Chart With Downwards Trend', f: 6, s: 'chart_with_downwards_trend' }, { u: '1F4C4', e: 'π', n: 'Page Facing Up', f: 6, s: 'page_facing_up' }, { u: '1F4C5', e: 'π', n: 'Calendar', f: 6, s: 'date' }, { u: '1F4C6', e: 'π', n: 'Tear-off Calendar', f: 6, s: 'calendar' }, { u: '1F5D3', e: 'π', n: 'Spiral Calendar Pad', f: 6, s: 'calendar_spiral' }, { u: '1F4C7', e: 'π', n: 'Card Index', f: 6, s: 'card_index' }, { u: '1F5C3', e: 'π', n: 'Card File Box', f: 6, s: 'card_box' }, { u: '1F5F3', e: 'π³', n: 'Ballot Box With Ballot', f: 6, s: 'ballot_box' }, { u: '1F5C4', e: 'π', n: 'File Cabinet', f: 6, s: 'file_cabinet' }, { u: '1F4CB', e: 'π', n: 'Clipboard', f: 6, s: 'clipboard' }, { u: '1F5D2', e: 'π', n: 'Spiral Note Pad', f: 6, s: 'notepad_spiral' }, { u: '1F4C1', e: 'π', n: 'File Folder', f: 6, s: 'file_folder' }, { u: '1F4C2', e: 'π', n: 'Open File Folder', f: 6, s: 'open_file_folder' }, { u: '1F5C2', e: 'π', n: 'Card Index Dividers', f: 6, s: 'dividers' }, { u: '1F5DE', e: 'π', n: 'Rolled-up Newspaper', f: 6, s: 'newspaper2' }, { u: '1F4F0', e: 'π°', n: 'Newspaper', f: 6, s: 'newspaper' }, { u: '1F4D3', e: 'π', n: 'Notebook', f: 6, s: 'notebook' }, { u: '1F4D5', e: 'π', n: 'Closed Book', f: 6, s: 'closed_book' }, { u: '1F4D7', e: 'π', n: 'Green Book', f: 6, s: 'green_book' }, { u: '1F4D8', e: 'π', n: 'Blue Book', f: 6, s: 'blue_book' }, { u: '1F4D9', e: 'π', n: 'Orange Book', f: 6, s: 'orange_book' }, { u: '1F4D4', e: 'π', n: 'Notebook With Decorative Cover', f: 6, s: 'notebook_with_decorative_cover' }, { u: '1F4D2', e: 'π', n: 'Ledger', f: 6, s: 'ledger' }, { u: '1F4DA', e: 'π', n: 'Books', f: 6, s: 'books' }, { u: '1F4D6', e: 'π', n: 'Open Book', f: 6, s: 'book' }, { u: '1F517', e: 'π', n: 'Link Symbol', f: 6, s: 'link' }, { u: '1F4CE', e: 'π', n: 'Paperclip', f: 6, s: 'paperclip' }, { u: '1F587', e: 'π', n: 'Linked Paperclips', f: 6, s: 'paperclips' }, { u: '2702', e: 'βοΈ', n: 'Black Scissors', f: 6, s: 'scissors' }, { u: '1F4D0', e: 'π', n: 'Triangular Ruler', f: 6, s: 'triangular_ruler' }, { u: '1F4CF', e: 'π', n: 'Straight Ruler', f: 6, s: 'straight_ruler' }, { u: '1F4CC', e: 'π', n: 'Pushpin', f: 6, s: 'pushpin' }, { u: '1F4CD', e: 'π', n: 'Round Pushpin', f: 6, s: 'round_pushpin' }, { u: '1F6A9', e: 'π©', n: 'Triangular Flag On Post', f: 6, s: 'triangular_flag_on_post' }, { u: '1F3F3', e: 'π³', n: 'Waving White Flag', f: 6, s: 'flag_white' }, { u: '1F3F4', e: 'π΄', n: 'Waving Black Flag', f: 6, s: 'flag_black' }, { u: '1F510', e: 'π', n: 'Closed Lock With Key', f: 6, s: 'closed_lock_with_key' }, { u: '1F512', e: 'π', n: 'Lock', f: 6, s: 'lock' }, { u: '1F513', e: 'π', n: 'Open Lock', f: 6, s: 'unlock' }, { u: '1F50F', e: 'π', n: 'Lock With Ink Pen', f: 6, s: 'lock_with_ink_pen' }, { u: '1F58A', e: 'π', n: 'Lower Left Ballpoint Pen', f: 6, s: 'pen_ballpoint' }, { u: '1F58B', e: 'π', n: 'Lower Left Fountain Pen', f: 6, s: 'pen_fountain' }, { u: '2712', e: 'βοΈ', n: 'Black Nib', f: 6, s: 'black_nib' }, { u: '1F4DD', e: 'π', n: 'Memo', f: 6, s: 'pencil' }, { u: '270F', e: 'βοΈ', n: 'Pencil', f: 6, s: 'pencil2' }, { u: '1F58D', e: 'π', n: 'Lower Left Crayon', f: 6, s: 'crayon' }, { u: '1F58C', e: 'π', n: 'Lower Left Paintbrush', f: 6, s: 'paintbrush' }, { u: '1F50D', e: 'π', n: 'Left-pointing Magnifying Glass', f: 6, s: 'mag' }, { u: '1F50E', e: 'π', n: 'Right-pointing Magnifying Glass', f: 6, s: 'mag_right' }, { u: '2764', e: 'β€οΈ', n: 'Heavy Black Heart', f: 7, s: 'heart' }, { u: '1F49B', e: 'π', n: 'Yellow Heart', f: 7, s: 'yellow_heart' }, { u: '1F49A', e: 'π', n: 'Green Heart', f: 7, s: 'green_heart' }, { u: '1F499', e: 'π', n: 'Blue Heart', f: 7, s: 'blue_heart' }, { u: '1F49C', e: 'π', n: 'Purple Heart', f: 7, s: 'purple_heart' }, { u: '1F494', e: 'π', n: 'Broken Heart', f: 7, s: 'broken_heart' }, { u: '2763', e: 'β£οΈ', n: 'Heavy Heart Exclamation Mark Ornament', f: 7 }, { u: '1F495', e: 'π', n: 'Two Hearts', f: 7, s: 'two_hearts' }, { u: '1F49E', e: 'π', n: 'Revolving Hearts', f: 7, s: 'revolving_hearts' }, { u: '1F493', e: 'π', n: 'Beating Heart', f: 7, s: 'heartbeat' }, { u: '1F497', e: 'π', n: 'Growing Heart', f: 7, s: 'heartpulse' }, { u: '1F496', e: 'π', n: 'Sparkling Heart', f: 7, s: 'sparkling_heart' }, { u: '1F498', e: 'π', n: 'Heart With Arrow', f: 7, s: 'cupid' }, { u: '1F49D', e: 'π', n: 'Heart With Ribbon', f: 7, s: 'gift_heart' }, { u: '1F49F', e: 'π', n: 'Heart Decoration', f: 7, s: 'heart_decoration' }, { u: '262E', e: 'β?', n: 'Peace Symbol', f: 7 }, { u: '271D', e: 'βοΈ', n: 'Latin Cross', f: 7 }, { u: '262A', e: 'βͺ', n: 'Star And Crescent', f: 7 }, { u: '1F549', e: 'π', n: 'Om Symbol', f: 7, s: 'om_symbol' }, { u: '2638', e: 'βΈ', n: 'Wheel Of Dharma', f: 7 }, { u: '2721', e: 'β‘οΈ', n: 'Star Of David', f: 7 }, { u: '1F52F', e: 'π―', n: 'Six Pointed Star With Middle Dot', f: 7, s: 'six_pointed_star' }, { u: '1F54E', e: 'π', n: 'Menorah With Nine Branches', f: 7 }, { u: '262F', e: 'β―οΈ', n: 'Yin Yang', f: 7 }, { u: '2626', e: 'β¦', n: 'Orthodox Cross', f: 7 }, { u: '1F6D0', e: 'π', n: 'Place Of Worship', f: 7 }, { u: '26CE', e: 'β', n: 'Ophiuchus', f: 7, s: 'ophiuchus' }, { u: '2648', e: 'βοΈ', n: 'Aries', f: 7, s: 'aries' }, { u: '2649', e: 'βοΈ', n: 'Taurus', f: 7, s: 'taurus' }, { u: '264A', e: 'βοΈ', n: 'Gemini', f: 7, s: 'gemini' }, { u: '264B', e: 'βοΈ', n: 'Cancer', f: 7, s: 'cancer' }, { u: '264C', e: 'βοΈ', n: 'Leo', f: 7, s: 'leo' }, { u: '264D', e: 'βοΈ', n: 'Virgo', f: 7, s: 'virgo' }, { u: '264E', e: 'βοΈ', n: 'Libra', f: 7, s: 'libra' }, { u: '264F', e: 'βοΈ', n: 'Scorpius', f: 7, s: 'scorpius' }, { u: '2650', e: 'βοΈ', n: 'Sagittarius', f: 7, s: 'sagittarius' }, { u: '2651', e: 'βοΈ', n: 'Capricorn', f: 7, s: 'capricorn' }, { u: '2652', e: 'βοΈ', n: 'Aquarius', f: 7, s: 'aquarius' }, { u: '2653', e: 'βοΈ', n: 'Pisces', f: 7, s: 'pisces' }, { u: '1F194', e: 'π', n: 'Squared Id', f: 7, s: 'id' }, { u: '269B', e: 'β', n: 'Atom Symbol', f: 7 }, { u: '1F233', e: 'π³', n: 'Squared Cjk Unified Ideograph-7a7a', f: 7, s: 'u7a7a' }, { u: '1F239', e: 'πΉ', n: 'Squared Cjk Unified Ideograph-5272', f: 7, s: 'u5272' }, { u: '2622', e: 'β’', n: 'Radioactive Sign', f: 7 }, { u: '2623', e: 'β£', n: 'Biohazard Sign', f: 7 }, { u: '1F4F4', e: 'π΄', n: 'Mobile Phone Off', f: 7, s: 'mobile_phone_off' }, { u: '1F4F3', e: 'π³', n: 'Vibration Mode', f: 7, s: 'vibration_mode' }, { u: '1F236', e: 'πΆ', n: 'Squared Cjk Unified Ideograph-6709', f: 7, s: 'u6709' }, { u: '1F21A', e: 'ποΈ', n: 'Squared Cjk Unified Ideograph-7121', f: 7, s: 'u7121' }, { u: '1F238', e: 'πΈ', n: 'Squared Cjk Unified Ideograph-7533', f: 7, s: 'u7533' }, { u: '1F23A', e: 'πΊ', n: 'Squared Cjk Unified Ideograph-55b6', f: 7, s: 'u55b6' }, { u: '1F237', e: 'π·οΈ', n: 'Squared Cjk Unified Ideograph-6708', f: 7, s: 'u6708' }, { u: '2734', e: 'β΄οΈ', n: 'Eight Pointed Black Star', f: 7, s: 'eight_pointed_black_star' }, { u: '1F19A', e: 'π', n: 'Squared Vs', f: 7, s: 'vs' }, { u: '1F251', e: 'π', n: 'Circled Ideograph Accept', f: 7, s: 'accept' }, { u: '1F4AE', e: 'π?', n: 'White Flower', f: 7, s: 'white_flower' }, { u: '1F250', e: 'π', n: 'Circled Ideograph Advantage', f: 7, s: 'ideograph_advantage' }, { u: '3299', e: 'γοΈ', n: 'Circled Ideograph Secret', f: 7, s: 'secret' }, { u: '3297', e: 'γοΈ', n: 'Circled Ideograph Congratulation', f: 7, s: 'congratulations' }, { u: '1F234', e: 'π΄', n: 'Squared Cjk Unified Ideograph-5408', f: 7, s: 'u5408' }, { u: '1F235', e: 'π΅', n: 'Squared Cjk Unified Ideograph-6e80', f: 7, s: 'u6e80' }, { u: '1F232', e: 'π²', n: 'Squared Cjk Unified Ideograph-7981', f: 7, s: 'u7981' }, { u: '1F170', e: 'π°οΈ', n: 'Negative Squared Latin Capital Letter A', f: 7, s: 'a' }, { u: '1F171', e: 'π±οΈ', n: 'Negative Squared Latin Capital Letter B', f: 7, s: 'b' }, { u: '1F18E', e: 'π', n: 'Negative Squared Ab', f: 7, s: 'ab' }, { u: '1F191', e: 'π', n: 'Squared Cl', f: 7, s: 'cl' }, { u: '1F17E', e: 'πΎοΈ', n: 'Negative Squared Latin Capital Letter O', f: 7, s: 'o2' }, { u: '1F198', e: 'π', n: 'Squared Sos', f: 7, s: 'sos' }, { u: '26D4', e: 'βοΈ', n: 'No Entry', f: 7, s: 'no_entry' }, { u: '1F4DB', e: 'π', n: 'Name Badge', f: 7, s: 'name_badge' }, { u: '1F6AB', e: 'π«', n: 'No Entry Sign', f: 7, s: 'no_entry_sign' }, { u: '274C', e: 'β', n: 'Cross Mark', f: 7, s: 'x' }, { u: '2B55', e: 'β­οΈ', n: 'Heavy Large Circle', f: 7, s: 'o' }, { u: '1F4A2', e: 'π’', n: 'Anger Symbol', f: 7, s: 'anger' }, { u: '2668', e: 'β¨οΈ', n: 'Hot Springs', f: 7, s: 'hotsprings' }, { u: '1F6B7', e: 'π·', n: 'No Pedestrians', f: 7, s: 'no_pedestrians' }, { u: '1F6AF', e: 'π―', n: 'Do Not Litter Symbol', f: 7, s: 'do_not_litter' }, { u: '1F6B3', e: 'π³', n: 'No Bicycles', f: 7, s: 'no_bicycles' }, { u: '1F6B1', e: 'π±', n: 'Non-potable Water Symbol', f: 7, s: 'non-potable_water' }, { u: '1F51E', e: 'π', n: 'No One Under Eighteen Symbol', f: 7, s: 'underage' }, { u: '1F4F5', e: 'π΅', n: 'No Mobile Phones', f: 7, s: 'no_mobile_phones' }, { u: '2757', e: 'βοΈ', n: 'Heavy Exclamation Mark Symbol', f: 7, s: 'exclamation' }, { u: '2755', e: 'β', n: 'White Exclamation Mark Ornament', f: 7, s: 'grey_exclamation' }, { u: '2753', e: 'β', n: 'Black Question Mark Ornament', f: 7, s: 'question' }, { u: '2754', e: 'β', n: 'White Question Mark Ornament', f: 7, s: 'grey_question' }, { u: '203C', e: 'βΌοΈ', n: 'Double Exclamation Mark', f: 7, s: 'bangbang' }, { u: '2049', e: 'βοΈ', n: 'Exclamation Question Mark', f: 7, s: 'interrobang' }, { u: '1F4AF', e: 'π―', n: 'Hundred Points Symbol', f: 7, s: '100' }, { u: '1F505', e: 'π', n: 'Low Brightness Symbol', f: 7, s: 'low_brightness' }, { u: '1F506', e: 'π', n: 'High Brightness Symbol', f: 7, s: 'high_brightness' }, { u: '1F531', e: 'π±', n: 'Trident Emblem', f: 7, s: 'trident' }, { u: '269C', e: 'β', n: 'Fleur-de-lis', f: 7 }, { u: '303D', e: 'γ½οΈ', n: 'Part Alternation Mark', f: 7, s: 'part_alternation_mark' }, { u: '26A0', e: 'β οΈ', n: 'Warning Sign', f: 7, s: 'warning' }, { u: '1F6B8', e: 'πΈ', n: 'Children Crossing', f: 7, s: 'children_crossing' }, { u: '1F530', e: 'π°', n: 'Japanese Symbol For Beginner', f: 7, s: 'beginner' }, { u: '267B', e: 'β»οΈ', n: 'Black Universal Recycling Symbol', f: 7, s: 'recycle' }, { u: '1F22F', e: 'π―οΈ', n: 'Squared Cjk Unified Ideograph-6307', f: 7, s: 'u6307' }, { u: '1F4B9', e: 'πΉ', n: 'Chart With Upwards Trend And Yen Sign', f: 7, s: 'chart' }, { u: '2747', e: 'βοΈ', n: 'Sparkle', f: 7, s: 'sparkle' }, { u: '2733', e: 'β³οΈ', n: 'Eight Spoked Asterisk', f: 7, s: 'eight_spoked_asterisk' }, { u: '274E', e: 'β', n: 'Negative Squared Cross Mark', f: 7, s: 'negative_squared_cross_mark' }, { u: '2705', e: 'β', n: 'White Heavy Check Mark', f: 7, s: 'white_check_mark' }, { u: '1F4A0', e: 'π ', n: 'Diamond Shape With A Dot Inside', f: 7, s: 'diamond_shape_with_a_dot_inside' }, { u: '1F300', e: 'π', n: 'Cyclone', f: 7, s: 'cyclone' }, { u: '27BF', e: 'βΏ', n: 'Double Curly Loop', f: 7, s: 'loop' }, { u: '1F310', e: 'π', n: 'Globe With Meridians', f: 7, s: 'globe_with_meridians' }, { u: '24C2', e: 'βοΈ', n: 'Circled Latin Capital Letter M', f: 7, s: 'm' }, { u: '1F3E7', e: 'π§', n: 'Automated Teller Machine', f: 7, s: 'atm' }, { u: '1F202', e: 'ποΈ', n: 'Squared Katakana Sa', f: 7, s: 'sa' }, { u: '1F6C2', e: 'π', n: 'Passport Control', f: 7, s: 'passport_control' }, { u: '1F6C3', e: 'π', n: 'Customs', f: 7, s: 'customs' }, { u: '1F6C4', e: 'π', n: 'Baggage Claim', f: 7, s: 'baggage_claim' }, { u: '1F6C5', e: 'π', n: 'Left Luggage', f: 7, s: 'left_luggage' }, { u: '267F', e: 'βΏοΈ', n: 'Wheelchair Symbol', f: 7, s: 'wheelchair' }, { u: '1F6AD', e: 'π­', n: 'No Smoking Symbol', f: 7, s: 'no_smoking' }, { u: '1F6BE', e: 'πΎ', n: 'Water Closet', f: 7, s: 'wc' }, { u: '1F17F', e: 'πΏοΈ', n: 'Negative Squared Latin Capital Letter P', f: 7, s: 'parking' }, { u: '1F6B0', e: 'π°', n: 'Potable Water Symbol', f: 7, s: 'potable_water' }, { u: '1F6B9', e: 'πΉ', n: 'Mens Symbol', f: 7, s: 'mens' }, { u: '1F6BA', e: 'πΊ', n: 'Womens Symbol', f: 7, s: 'womens' }, { u: '1F6BC', e: 'πΌ', n: 'Baby Symbol', f: 7, s: 'baby_symbol' }, { u: '1F6BB', e: 'π»', n: 'Restroom', f: 7, s: 'restroom' }, { u: '1F6AE', e: 'π?', n: 'Put Litter In Its Place Symbol', f: 7, s: 'put_litter_in_its_place' }, { u: '1F3A6', e: 'π¦', n: 'Cinema', f: 7, s: 'cinema' }, { u: '1F4F6', e: 'πΆ', n: 'Antenna With Bars', f: 7, s: 'signal_strength' }, { u: '1F201', e: 'π', n: 'Squared Katakana Koko', f: 7, s: 'koko' }, { u: '1F196', e: 'π', n: 'Squared Ng', f: 7, s: 'ng' }, { u: '1F197', e: 'π', n: 'Squared Ok', f: 7, s: 'ok' }, { u: '1F199', e: 'π', n: 'Squared Up With Exclamation Mark', f: 7, s: 'up' }, { u: '1F192', e: 'π', n: 'Squared Cool', f: 7, s: 'cool' }, { u: '1F195', e: 'π', n: 'Squared New', f: 7, s: 'new' }, { u: '1F193', e: 'π', n: 'Squared Free', f: 7, s: 'free' }, { u: '0030-20E3', e: '0οΈβ£', n: 'Keycap Digit Zero', f: 7, s: 'zero' }, { u: '0031-20E3', e: '1οΈβ£', n: 'Keycap Digit One', f: 7, s: 'one' }, { u: '0032-20E3', e: '2οΈβ£', n: 'Keycap Digit Two', f: 7, s: 'two' }, { u: '0033-20E3', e: '3οΈβ£', n: 'Keycap Digit Three', f: 7, s: 'three' }, { u: '0034-20E3', e: '4οΈβ£', n: 'Keycap Digit Four', f: 7, s: 'four' }, { u: '0035-20E3', e: '5οΈβ£', n: 'Keycap Digit Five', f: 7, s: 'five' }, { u: '0036-20E3', e: '6οΈβ£', n: 'Keycap Digit Six', f: 7, s: 'six' }, { u: '0037-20E3', e: '7οΈβ£', n: 'Keycap Digit Seven', f: 7, s: 'seven' }, { u: '0038-20E3', e: '8οΈβ£', n: 'Keycap Digit Eight', f: 7, s: 'eight' }, { u: '0039-20E3', e: '9οΈβ£', n: 'Keycap Digit Nine', f: 7, s: 'nine' }, { u: '1F51F', e: 'π', n: 'Keycap Ten', f: 7, s: 'keycap_ten' }, { u: '1F522', e: 'π’', n: 'Input Symbol For Numbers', f: 7, s: '1234' }, { u: '25B6', e: 'βΆοΈ', n: 'Black Right-pointing Triangle', f: 7, s: 'arrow_forward' }, { u: '23F8', e: 'βΈ', n: 'Double Vertical Bar', f: 7 }, { u: '23EF', e: 'β―', n: 'Black Right-pointing Triangle With Double Vertical Bar', f: 7 }, { u: '23F9', e: 'βΉ', n: 'Black Square For Stop', f: 7 }, { u: '23FA', e: 'βΊ', n: 'Black Circle For Record', f: 7 }, { u: '23ED', e: 'β­', n: 'Black Right-pointing Double Triangle With Vertical Bar', f: 7 }, { u: '23EE', e: 'β?', n: 'Black Left-pointing Double Triangle With Vertical Bar', f: 7 }, { u: '23E9', e: 'β©', n: 'Black Right-pointing Double Triangle', f: 7, s: 'fast_forward' }, { u: '23EA', e: 'βͺ', n: 'Black Left-pointing Double Triangle', f: 7, s: 'rewind' }, { u: '1F500', e: 'π', n: 'Twisted Rightwards Arrows', f: 7, s: 'twisted_rightwards_arrows' }, { u: '1F501', e: 'π', n: 'Clockwise Rightwards And Leftwards Open Circle Arrows', f: 7, s: 'repeat' }, { u: '1F502', e: 'π', n: 'Clockwise Rightwards And Leftwards Open Circle Arrows With Circled One Overlay', f: 7, s: 'repeat_one' }, { u: '25C0', e: 'βοΈ', n: 'Black Left-pointing Triangle', f: 7, s: 'arrow_backward' }, { u: '1F53C', e: 'πΌ', n: 'Up-pointing Small Red Triangle', f: 7, s: 'arrow_up_small' }, { u: '1F53D', e: 'π½', n: 'Down-pointing Small Red Triangle', f: 7, s: 'arrow_down_small' }, { u: '23EB', e: 'β«', n: 'Black Up-pointing Double Triangle', f: 7, s: 'arrow_double_up' }, { u: '23EC', e: 'β¬', n: 'Black Down-pointing Double Triangle', f: 7, s: 'arrow_double_down' }, { u: '27A1', e: 'β‘οΈ', n: 'Black Rightwards Arrow', f: 7, s: 'arrow_right' }, { u: '2B05', e: 'β¬οΈ', n: 'Leftwards Black Arrow', f: 7, s: 'arrow_left' }, { u: '2B06', e: 'β¬οΈ', n: 'Upwards Black Arrow', f: 7, s: 'arrow_up' }, { u: '2B07', e: 'β¬οΈ', n: 'Downwards Black Arrow', f: 7, s: 'arrow_down' }, { u: '2197', e: 'βοΈ', n: 'North East Arrow', f: 7, s: 'arrow_upper_right' }, { u: '2198', e: 'βοΈ', n: 'South East Arrow', f: 7, s: 'arrow_lower_right' }, { u: '2199', e: 'βοΈ', n: 'South West Arrow', f: 7, s: 'arrow_lower_left' }, { u: '2196', e: 'βοΈ', n: 'North West Arrow', f: 7, s: 'arrow_upper_left' }, { u: '2195', e: 'βοΈ', n: 'Up Down Arrow', f: 7, s: 'arrow_up_down' }, { u: '2194', e: 'βοΈ', n: 'Left Right Arrow', f: 7, s: 'left_right_arrow' }, { u: '1F504', e: 'π', n: 'Anticlockwise Downwards And Upwards Open Circle Arrows', f: 7, s: 'arrows_counterclockwise' }, { u: '21AA', e: 'βͺοΈ', n: 'Rightwards Arrow With Hook', f: 7, s: 'arrow_right_hook' }, { u: '21A9', e: 'β©οΈ', n: 'Leftwards Arrow With Hook', f: 7, s: 'leftwards_arrow_with_hook' }, { u: '2934', e: 'β€΄οΈ', n: 'Arrow Pointing Rightwards Then Curving Upwards', f: 7, s: 'arrow_heading_up' }, { u: '2935', e: 'β€΅οΈ', n: 'Arrow Pointing Rightwards Then Curving Downwards', f: 7, s: 'arrow_heading_down' }, { u: '0023-20E3', e: '#οΈβ£', n: 'Keycap Number Sign', f: 7, s: 'hash' }, { u: '002A-20E3', e: '*οΈβ£', n: 'Keycap Asterisk', f: 7 }, { u: '2139', e: 'βΉοΈ', n: 'Information Source', f: 7, s: 'information_source' }, { u: '1F524', e: 'π€', n: 'Input Symbol For Latin Letters', f: 7, s: 'abc' }, { u: '1F521', e: 'π‘', n: 'Input Symbol For Latin Small Letters', f: 7, s: 'abcd' }, { u: '1F520', e: 'π ', n: 'Input Symbol For Latin Capital Letters', f: 7, s: 'capital_abcd' }, { u: '1F523', e: 'π£', n: 'Input Symbol For Symbols', f: 7, s: 'symbols' }, { u: '1F3B5', e: 'π΅', n: 'Musical Note', f: 7, s: 'musical_note' }, { u: '1F3B6', e: 'πΆ', n: 'Multiple Musical Notes', f: 7, s: 'notes' }, { u: '3030', e: 'γ°οΈ', n: 'Wavy Dash', f: 7, s: 'wavy_dash' }, { u: '27B0', e: 'β°', n: 'Curly Loop', f: 7, s: 'curly_loop' }, { u: '2714', e: 'βοΈ', n: 'Heavy Check Mark', f: 7, s: 'heavy_check_mark' }, { u: '1F503', e: 'π', n: 'Clockwise Downwards And Upwards Open Circle Arrows', f: 7, s: 'arrows_clockwise' }, { u: '2795', e: 'β', n: 'Heavy Plus Sign', f: 7, s: 'heavy_plus_sign' }, { u: '2796', e: 'β', n: 'Heavy Minus Sign', f: 7, s: 'heavy_minus_sign' }, { u: '2797', e: 'β', n: 'Heavy Division Sign', f: 7, s: 'heavy_division_sign' }, { u: '2716', e: 'βοΈ', n: 'Heavy Multiplication X', f: 7, s: 'heavy_multiplication_x' }, { u: '1F4B2', e: 'π²', n: 'Heavy Dollar Sign', f: 7, s: 'heavy_dollar_sign' }, { u: '1F4B1', e: 'π±', n: 'Currency Exchange', f: 7, s: 'currency_exchange' }, { u: '00A9', e: 'Β©οΈ', n: 'Copyright Sign', f: 7, s: 'copyright' }, { u: '00AE', e: 'Β?οΈ', n: 'Registered Sign', f: 7, s: 'registered' }, { u: '2122', e: 'β’οΈ', n: 'Trade Mark Sign', f: 7, s: 'tm' }, { u: '1F51A', e: 'π', n: 'End With Leftwards Arrow Above', f: 7, s: 'end' }, { u: '1F519', e: 'π', n: 'Back With Leftwards Arrow Above', f: 7, s: 'back' }, { u: '1F51B', e: 'π', n: 'On With Exclamation Mark With Left Right Arrow Above', f: 7, s: 'on' }, { u: '1F51D', e: 'π', n: 'Top With Upwards Arrow Above', f: 7, s: 'top' }, { u: '1F51C', e: 'π', n: 'Soon With Rightwards Arrow Above', f: 7, s: 'soon' }, { u: '2611', e: 'βοΈ', n: 'Ballot Box With Check', f: 7, s: 'ballot_box_with_check' }, { u: '1F518', e: 'π', n: 'Radio Button', f: 7, s: 'radio_button' }, { u: '26AA', e: 'βͺοΈ', n: 'Medium White Circle', f: 7, s: 'white_circle' }, { u: '26AB', e: 'β«οΈ', n: 'Medium Black Circle', f: 7, s: 'black_circle' }, { u: '1F534', e: 'π΄', n: 'Large Red Circle', f: 7, s: 'red_circle' }, { u: '1F535', e: 'π΅', n: 'Large Blue Circle', f: 7, s: 'large_blue_circle' }, { u: '1F538', e: 'πΈ', n: 'Small Orange Diamond', f: 7, s: 'small_orange_diamond' }, { u: '1F539', e: 'πΉ', n: 'Small Blue Diamond', f: 7, s: 'small_blue_diamond' }, { u: '1F536', e: 'πΆ', n: 'Large Orange Diamond', f: 7, s: 'large_orange_diamond' }, { u: '1F537', e: 'π·', n: 'Large Blue Diamond', f: 7, s: 'large_blue_diamond' }, { u: '1F53A', e: 'πΊ', n: 'Up-pointing Red Triangle', f: 7, s: 'small_red_triangle' }, { u: '25AA', e: 'βͺοΈ', n: 'Black Small Square', f: 7, s: 'black_small_square' }, { u: '25AB', e: 'β«οΈ', n: 'White Small Square', f: 7, s: 'white_small_square' }, { u: '2B1B', e: 'β¬οΈ', n: 'Black Large Square', f: 7, s: 'black_large_square' }, { u: '2B1C', e: 'β¬οΈ', n: 'White Large Square', f: 7, s: 'white_large_square' }, { u: '1F53B', e: 'π»', n: 'Down-pointing Red Triangle', f: 7, s: 'small_red_triangle_down' }, { u: '25FC', e: 'βΌοΈ', n: 'Black Medium Square', f: 7, s: 'black_medium_square' }, { u: '25FB', e: 'β»οΈ', n: 'White Medium Square', f: 7, s: 'white_medium_square' }, { u: '25FE', e: 'βΎοΈ', n: 'Black Medium Small Square', f: 7, s: 'black_medium_small_square' }, { u: '25FD', e: 'β½οΈ', n: 'White Medium Small Square', f: 7, s: 'white_medium_small_square' }, { u: '1F532', e: 'π²', n: 'Black Square Button', f: 7, s: 'black_square_button' }, { u: '1F533', e: 'π³', n: 'White Square Button', f: 7, s: 'white_square_button' }, { u: '1F508', e: 'π', n: 'Speaker', f: 7, s: 'speaker' }, { u: '1F509', e: 'π', n: 'Speaker With One Sound Wave', f: 7, s: 'sound' }, { u: '1F50A', e: 'π', n: 'Speaker With Three Sound Waves', f: 7, s: 'loud_sound' }, { u: '1F507', e: 'π', n: 'Speaker With Cancellation Stroke', f: 7, s: 'mute' }, { u: '1F4E3', e: 'π£', n: 'Cheering Megaphone', f: 7, s: 'mega' }, { u: '1F4E2', e: 'π’', n: 'Public Address Loudspeaker', f: 7, s: 'loudspeaker' }, { u: '1F514', e: 'π', n: 'Bell', f: 7, s: 'bell' }, { u: '1F515', e: 'π', n: 'Bell With Cancellation Stroke', f: 7, s: 'no_bell' }, { u: '1F0CF', e: 'π', n: 'Playing Card Black Joker', f: 7, s: 'black_joker' }, { u: '1F004', e: 'ποΈ', n: 'Mahjong Tile Red Dragon', f: 7, s: 'mahjong' }, { u: '2660', e: 'β οΈ', n: 'Black Spade Suit', f: 7, s: 'spades' }, { u: '2663', e: 'β£οΈ', n: 'Black Club Suit', f: 7, s: 'clubs' }, { u: '2665', e: 'β₯οΈ', n: 'Black Heart Suit', f: 7, s: 'hearts' }, { u: '2666', e: 'β¦οΈ', n: 'Black Diamond Suit', f: 7, s: 'diamonds' }, { u: '1F3B4', e: 'π΄', n: 'Flower Playing Cards', f: 7, s: 'flower_playing_cards' }, { u: '1F4AD', e: 'π­', n: 'Thought Balloon', f: 7, s: 'thought_balloon' }, { u: '1F5EF', e: 'π―', n: 'Right Anger Bubble', f: 7, s: 'anger_right' }, { u: '1F4AC', e: 'π¬', n: 'Speech Balloon', f: 7, s: 'speech_balloon' }, { u: '1F550', e: 'π', n: 'Clock Face One Oclock', f: 7, s: 'clock1' }, { u: '1F551', e: 'π', n: 'Clock Face Two Oclock', f: 7, s: 'clock2' }, { u: '1F552', e: 'π', n: 'Clock Face Three Oclock', f: 7, s: 'clock3' }, { u: '1F553', e: 'π', n: 'Clock Face Four Oclock', f: 7, s: 'clock4' }, { u: '1F554', e: 'π', n: 'Clock Face Five Oclock', f: 7, s: 'clock5' }, { u: '1F555', e: 'π', n: 'Clock Face Six Oclock', f: 7, s: 'clock6' }, { u: '1F556', e: 'π', n: 'Clock Face Seven Oclock', f: 7, s: 'clock7' }, { u: '1F557', e: 'π', n: 'Clock Face Eight Oclock', f: 7, s: 'clock8' }, { u: '1F558', e: 'π', n: 'Clock Face Nine Oclock', f: 7, s: 'clock9' }, { u: '1F559', e: 'π', n: 'Clock Face Ten Oclock', f: 7, s: 'clock10' }, { u: '1F55A', e: 'π', n: 'Clock Face Eleven Oclock', f: 7, s: 'clock11' }, { u: '1F55B', e: 'π', n: 'Clock Face Twelve Oclock', f: 7, s: 'clock12' }, { u: '1F55C', e: 'π', n: 'Clock Face One-thirty', f: 7, s: 'clock130' }, { u: '1F55D', e: 'π', n: 'Clock Face Two-thirty', f: 7, s: 'clock230' }, { u: '1F55E', e: 'π', n: 'Clock Face Three-thirty', f: 7, s: 'clock330' }, { u: '1F55F', e: 'π', n: 'Clock Face Four-thirty', f: 7, s: 'clock430' }, { u: '1F560', e: 'π ', n: 'Clock Face Five-thirty', f: 7, s: 'clock530' }, { u: '1F561', e: 'π‘', n: 'Clock Face Six-thirty', f: 7, s: 'clock630' }, { u: '1F562', e: 'π’', n: 'Clock Face Seven-thirty', f: 7, s: 'clock730' }, { u: '1F563', e: 'π£', n: 'Clock Face Eight-thirty', f: 7, s: 'clock830' }, { u: '1F564', e: 'π€', n: 'Clock Face Nine-thirty', f: 7, s: 'clock930' }, { u: '1F565', e: 'π₯', n: 'Clock Face Ten-thirty', f: 7, s: 'clock1030' }, { u: '1F566', e: 'π¦', n: 'Clock Face Eleven-thirty', f: 7, s: 'clock1130' }, { u: '1F567', e: 'π§', n: 'Clock Face Twelve-thirty', f: 7, s: 'clock1230' }, { u: '1F5E8', e: 'π¨', n: 'Left Speech Bubble', f: 7, s: 'speech_left' }, { u: '1F441-1F5E8', e: 'πβπ¨', n: 'Eye in Speech Bubble', f: 7 }, { u: '23CF', e: 'β', n: 'Eject Symbol', f: 7 }, { u: '1F1E6-1F1EB', e: 'π¦π«', n: 'Flag For Afghanistan', f: 8, s: 'flag_af' }, { u: '1F1E6-1F1FD', e: 'π¦π½', n: 'Flag For ΓLand Islands', f: 8, s: 'flag_ax' }, { u: '1F1E6-1F1F1', e: 'π¦π±', n: 'Flag For Albania', f: 8, s: 'flag_al' }, { u: '1F1E9-1F1FF', e: 'π©πΏ', n: 'Flag For Algeria', f: 8, s: 'flag_dz' }, { u: '1F1E6-1F1F8', e: 'π¦πΈ', n: 'Flag For American Samoa', f: 8, s: 'flag_as' }, { u: '1F1E6-1F1E9', e: 'π¦π©', n: 'Flag For Andorra', f: 8, s: 'flag_ad' }, { u: '1F1E6-1F1F4', e: 'π¦π΄', n: 'Flag For Angola', f: 8, s: 'flag_ao' }, { u: '1F1E6-1F1EE', e: 'π¦π?', n: 'Flag For Anguilla', f: 8, s: 'flag_ai' }, { u: '1F1E6-1F1F6', e: 'π¦πΆ', n: 'Flag For Antarctica', f: 8, s: 'flag_aq' }, { u: '1F1E6-1F1EC', e: 'π¦π¬', n: 'Flag For Antigua & Barbuda', f: 8, s: 'flag_ag' }, { u: '1F1E6-1F1F7', e: 'π¦π·', n: 'Flag For Argentina', f: 8, s: 'flag_ar' }, { u: '1F1E6-1F1F2', e: 'π¦π²', n: 'Flag For Armenia', f: 8, s: 'flag_am' }, { u: '1F1E6-1F1FC', e: 'π¦πΌ', n: 'Flag For Aruba', f: 8, s: 'flag_aw' }, { u: '1F1E6-1F1FA', e: 'π¦πΊ', n: 'Flag For Australia', f: 8, s: 'flag_au' }, { u: '1F1E6-1F1F9', e: 'π¦πΉ', n: 'Flag For Austria', f: 8, s: 'flag_at' }, { u: '1F1E6-1F1FF', e: 'π¦πΏ', n: 'Flag For Azerbaijan', f: 8, s: 'flag_az' }, { u: '1F1E7-1F1F8', e: 'π§πΈ', n: 'Flag For Bahamas', f: 8, s: 'flag_bs' }, { u: '1F1E7-1F1ED', e: 'π§π­', n: 'Flag For Bahrain', f: 8, s: 'flag_bh' }, { u: '1F1E7-1F1E9', e: 'π§π©', n: 'Flag For Bangladesh', f: 8, s: 'flag_bd' }, { u: '1F1E7-1F1E7', e: 'π§π§', n: 'Flag For Barbados', f: 8, s: 'flag_bb' }, { u: '1F1E7-1F1FE', e: 'π§πΎ', n: 'Flag For Belarus', f: 8, s: 'flag_by' }, { u: '1F1E7-1F1EA', e: 'π§πͺ', n: 'Flag For Belgium', f: 8, s: 'flag_be' }, { u: '1F1E7-1F1FF', e: 'π§πΏ', n: 'Flag For Belize', f: 8, s: 'flag_bz' }, { u: '1F1E7-1F1EF', e: 'π§π―', n: 'Flag For Benin', f: 8, s: 'flag_bj' }, { u: '1F1E7-1F1F2', e: 'π§π²', n: 'Flag For Bermuda', f: 8, s: 'flag_bm' }, { u: '1F1E7-1F1F9', e: 'π§πΉ', n: 'Flag For Bhutan', f: 8, s: 'flag_bt' }, { u: '1F1E7-1F1F4', e: 'π§π΄', n: 'Flag For Bolivia', f: 8, s: 'flag_bo' }, { u: '1F1E7-1F1F6', e: 'π§πΆ', n: 'Flag For Caribbean Netherlands', f: 8, s: 'flag_bq' }, { u: '1F1E7-1F1E6', e: 'π§π¦', n: 'Flag For Bosnia & Herzegovina', f: 8, s: 'flag_ba' }, { u: '1F1E7-1F1FC', e: 'π§πΌ', n: 'Flag For Botswana', f: 8, s: 'flag_bw' }, { u: '1F1E7-1F1F7', e: 'π§π·', n: 'Flag For Brazil', f: 8, s: 'flag_br' }, { u: '1F1EE-1F1F4', e: 'π?π΄', n: 'Flag For British Indian Ocean Territory', f: 8, s: 'flag_io' }, { u: '1F1FB-1F1EC', e: 'π»π¬', n: 'Flag For British Virgin Islands', f: 8, s: 'flag_vg' }, { u: '1F1E7-1F1F3', e: 'π§π³', n: 'Flag For Brunei', f: 8, s: 'flag_bn' }, { u: '1F1E7-1F1EC', e: 'π§π¬', n: 'Flag For Bulgaria', f: 8, s: 'flag_bg' }, { u: '1F1E7-1F1EB', e: 'π§π«', n: 'Flag For Burkina Faso', f: 8, s: 'flag_bf' }, { u: '1F1E7-1F1EE', e: 'π§π?', n: 'Flag For Burundi', f: 8, s: 'flag_bi' }, { u: '1F1E8-1F1FB', e: 'π¨π»', n: 'Flag For Cape Verde', f: 8, s: 'flag_cv' }, { u: '1F1F0-1F1ED', e: 'π°π­', n: 'Flag For Cambodia', f: 8, s: 'flag_kh' }, { u: '1F1E8-1F1F2', e: 'π¨π²', n: 'Flag For Cameroon', f: 8, s: 'flag_cm' }, { u: '1F1E8-1F1E6', e: 'π¨π¦', n: 'Flag For Canada', f: 8, s: 'flag_ca' }, { u: '1F1EE-1F1E8', e: 'π?π¨', n: 'Flag For Canary Islands', f: 8, s: 'flag_ic' }, { u: '1F1F0-1F1FE', e: 'π°πΎ', n: 'Flag For Cayman Islands', f: 8, s: 'flag_ky' }, { u: '1F1E8-1F1EB', e: 'π¨π«', n: 'Flag For Central African Republic', f: 8, s: 'flag_cf' }, { u: '1F1F9-1F1E9', e: 'πΉπ©', n: 'Flag For Chad', f: 8, s: 'flag_td' }, { u: '1F1E8-1F1F1', e: 'π¨π±', n: 'Flag For Chile', f: 8, s: 'flag_cl' }, { u: '1F1E8-1F1F3', e: 'π¨π³', n: 'Flag For China', f: 8, s: 'flag_cn' }, { u: '1F1E8-1F1FD', e: 'π¨π½', n: 'Flag For Christmas Island', f: 8, s: 'flag_cx' }, { u: '1F1E8-1F1E8', e: 'π¨π¨', n: 'Flag For Cocos Islands', f: 8, s: 'flag_cc' }, { u: '1F1E8-1F1F4', e: 'π¨π΄', n: 'Flag For Colombia', f: 8, s: 'flag_co' }, { u: '1F1F0-1F1F2', e: 'π°π²', n: 'Flag For Comoros', f: 8, s: 'flag_km' }, { u: '1F1E8-1F1EC', e: 'π¨π¬', n: 'Flag For Congo - Brazzaville', f: 8, s: 'flag_cg' }, { u: '1F1E8-1F1E9', e: 'π¨π©', n: 'Flag For Congo - Kinshasa', f: 8, s: 'flag_cd' }, { u: '1F1E8-1F1F0', e: 'π¨π°', n: 'Flag For Cook Islands', f: 8, s: 'flag_ck' }, { u: '1F1E8-1F1F7', e: 'π¨π·', n: 'Flag For Costa Rica', f: 8, s: 'flag_cr' }, { u: '1F1ED-1F1F7', e: 'π­π·', n: 'Flag For Croatia', f: 8, s: 'flag_hr' }, { u: '1F1E8-1F1FA', e: 'π¨πΊ', n: 'Flag For Cuba', f: 8, s: 'flag_cu' }, { u: '1F1E8-1F1FC', e: 'π¨πΌ', n: 'Flag For CuraΓ§ao', f: 8, s: 'flag_cw' }, { u: '1F1E8-1F1FE', e: 'π¨πΎ', n: 'Flag For Cyprus', f: 8, s: 'flag_cy' }, { u: '1F1E8-1F1FF', e: 'π¨πΏ', n: 'Flag For Czech Republic', f: 8, s: 'flag_cz' }, { u: '1F1E9-1F1F0', e: 'π©π°', n: 'Flag For Denmark', f: 8, s: 'flag_dk' }, { u: '1F1E9-1F1EF', e: 'π©π―', n: 'Flag For Djibouti', f: 8, s: 'flag_dj' }, { u: '1F1E9-1F1F2', e: 'π©π²', n: 'Flag For Dominica', f: 8, s: 'flag_dm' }, { u: '1F1E9-1F1F4', e: 'π©π΄', n: 'Flag For Dominican Republic', f: 8, s: 'flag_do' }, { u: '1F1EA-1F1E8', e: 'πͺπ¨', n: 'Flag For Ecuador', f: 8, s: 'flag_ec' }, { u: '1F1EA-1F1EC', e: 'πͺπ¬', n: 'Flag For Egypt', f: 8, s: 'flag_eg' }, { u: '1F1F8-1F1FB', e: 'πΈπ»', n: 'Flag For El Salvador', f: 8, s: 'flag_sv' }, { u: '1F1EC-1F1F6', e: 'π¬πΆ', n: 'Flag For Equatorial Guinea', f: 8, s: 'flag_gq' }, { u: '1F1EA-1F1F7', e: 'πͺπ·', n: 'Flag For Eritrea', f: 8, s: 'flag_er' }, { u: '1F1EA-1F1EA', e: 'πͺπͺ', n: 'Flag For Estonia', f: 8, s: 'flag_ee' }, { u: '1F1EA-1F1F9', e: 'πͺπΉ', n: 'Flag For Ethiopia', f: 8, s: 'flag_et' }, { u: '1F1EA-1F1FA', e: 'πͺπΊ', n: 'Flag For European Union', f: 8, s: 'flag_eu' }, { u: '1F1EB-1F1F0', e: 'π«π°', n: 'Flag For Falkland Islands', f: 8, s: 'flag_fk' }, { u: '1F1EB-1F1F4', e: 'π«π΄', n: 'Flag For Faroe Islands', f: 8, s: 'flag_fo' }, { u: '1F1EB-1F1EF', e: 'π«π―', n: 'Flag For Fiji', f: 8, s: 'flag_fj' }, { u: '1F1EB-1F1EE', e: 'π«π?', n: 'Flag For Finland', f: 8, s: 'flag_fi' }, { u: '1F1EB-1F1F7', e: 'π«π·', n: 'Flag For France', f: 8, s: 'flag_fr' }, { u: '1F1EC-1F1EB', e: 'π¬π«', n: 'Flag For French Guiana', f: 8, s: 'flag_gf' }, { u: '1F1F5-1F1EB', e: 'π΅π«', n: 'Flag For French Polynesia', f: 8, s: 'flag_pf' }, { u: '1F1F9-1F1EB', e: 'πΉπ«', n: 'Flag For French Southern Territories', f: 8 }, { u: '1F1EC-1F1E6', e: 'π¬π¦', n: 'Flag For Gabon', f: 8, s: 'flag_ga' }, { u: '1F1EC-1F1F2', e: 'π¬π²', n: 'Flag For Gambia', f: 8, s: 'flag_gm' }, { u: '1F1EC-1F1EA', e: 'π¬πͺ', n: 'Flag For Georgia', f: 8, s: 'flag_ge' }, { u: '1F1E9-1F1EA', e: 'π©πͺ', n: 'Flag For Germany', f: 8, s: 'flag_de' }, { u: '1F1EC-1F1ED', e: 'π¬π­', n: 'Flag For Ghana', f: 8, s: 'flag_gh' }, { u: '1F1EC-1F1EE', e: 'π¬π?', n: 'Flag For Gibraltar', f: 8, s: 'flag_gi' }, { u: '1F1EC-1F1F7', e: 'π¬π·', n: 'Flag For Greece', f: 8, s: 'flag_gr' }, { u: '1F1EC-1F1F1', e: 'π¬π±', n: 'Flag For Greenland', f: 8, s: 'flag_gl' }, { u: '1F1EC-1F1E9', e: 'π¬π©', n: 'Flag For Grenada', f: 8, s: 'flag_gd' }, { u: '1F1EC-1F1F5', e: 'π¬π΅', n: 'Flag For Guadeloupe', f: 8, s: 'flag_gp' }, { u: '1F1EC-1F1FA', e: 'π¬πΊ', n: 'Flag For Guam', f: 8, s: 'flag_gu' }, { u: '1F1EC-1F1F9', e: 'π¬πΉ', n: 'Flag For Guatemala', f: 8, s: 'flag_gt' }, { u: '1F1EC-1F1EC', e: 'π¬π¬', n: 'Flag For Guernsey', f: 8, s: 'flag_gg' }, { u: '1F1EC-1F1F3', e: 'π¬π³', n: 'Flag For Guinea', f: 8, s: 'flag_gn' }, { u: '1F1EC-1F1FC', e: 'π¬πΌ', n: 'Flag For Guinea-bissau', f: 8, s: 'flag_gw' }, { u: '1F1EC-1F1FE', e: 'π¬πΎ', n: 'Flag For Guyana', f: 8, s: 'flag_gy' }, { u: '1F1ED-1F1F9', e: 'π­πΉ', n: 'Flag For Haiti', f: 8, s: 'flag_ht' }, { u: '1F1ED-1F1F3', e: 'π­π³', n: 'Flag For Honduras', f: 8, s: 'flag_hn' }, { u: '1F1ED-1F1F0', e: 'π­π°', n: 'Flag For Hong Kong', f: 8, s: 'flag_hk' }, { u: '1F1ED-1F1FA', e: 'π­πΊ', n: 'Flag For Hungary', f: 8, s: 'flag_hu' }, { u: '1F1EE-1F1F8', e: 'π?πΈ', n: 'Flag For Iceland', f: 8, s: 'flag_is' }, { u: '1F1EE-1F1F3', e: 'π?π³', n: 'Flag For India', f: 8, s: 'flag_in' }, { u: '1F1EE-1F1E9', e: 'π?π©', n: 'Flag For Indonesia', f: 8, s: 'flag_id' }, { u: '1F1EE-1F1F7', e: 'π?π·', n: 'Flag For Iran', f: 8, s: 'flag_ir' }, { u: '1F1EE-1F1F6', e: 'π?πΆ', n: 'Flag For Iraq', f: 8, s: 'flag_iq' }, { u: '1F1EE-1F1EA', e: 'π?πͺ', n: 'Flag For Ireland', f: 8, s: 'flag_ie' }, { u: '1F1EE-1F1F2', e: 'π?π²', n: 'Flag For Isle Of Man', f: 8, s: 'flag_im' }, { u: '1F1EE-1F1F1', e: 'π?π±', n: 'Flag For Israel', f: 8, s: 'flag_il' }, { u: '1F1EE-1F1F9', e: 'π?πΉ', n: 'Flag For Italy', f: 8, s: 'flag_it' }, { u: '1F1E8-1F1EE', e: 'π¨π?', n: 'Flag For CΓ΄te Dβivoire', f: 8, s: 'flag_ci' }, { u: '1F1EF-1F1F2', e: 'π―π²', n: 'Flag For Jamaica', f: 8, s: 'flag_jm' }, { u: '1F1EF-1F1F5', e: 'π―π΅', n: 'Flag For Japan', f: 8, s: 'flag_jp' }, { u: '1F1EF-1F1EA', e: 'π―πͺ', n: 'Flag For Jersey', f: 8, s: 'flag_je' }, { u: '1F1EF-1F1F4', e: 'π―π΄', n: 'Flag For Jordan', f: 8, s: 'flag_jo' }, { u: '1F1F0-1F1FF', e: 'π°πΏ', n: 'Flag For Kazakhstan', f: 8, s: 'flag_kz' }, { u: '1F1F0-1F1EA', e: 'π°πͺ', n: 'Flag For Kenya', f: 8, s: 'flag_ke' }, { u: '1F1F0-1F1EE', e: 'π°π?', n: 'Flag For Kiribati', f: 8, s: 'flag_ki' }, { u: '1F1FD-1F1F0', e: 'π½π°', n: 'Flag For Kosovo', f: 8, s: 'flag_xk' }, { u: '1F1F0-1F1FC', e: 'π°πΌ', n: 'Flag For Kuwait', f: 8, s: 'flag_kw' }, { u: '1F1F0-1F1EC', e: 'π°π¬', n: 'Flag For Kyrgyzstan', f: 8, s: 'flag_kg' }, { u: '1F1F1-1F1E6', e: 'π±π¦', n: 'Flag For Laos', f: 8, s: 'flag_la' }, { u: '1F1F1-1F1FB', e: 'π±π»', n: 'Flag For Latvia', f: 8, s: 'flag_lv' }, { u: '1F1F1-1F1E7', e: 'π±π§', n: 'Flag For Lebanon', f: 8, s: 'flag_lb' }, { u: '1F1F1-1F1F8', e: 'π±πΈ', n: 'Flag For Lesotho', f: 8, s: 'flag_ls' }, { u: '1F1F1-1F1F7', e: 'π±π·', n: 'Flag For Liberia', f: 8, s: 'flag_lr' }, { u: '1F1F1-1F1FE', e: 'π±πΎ', n: 'Flag For Libya', f: 8, s: 'flag_ly' }, { u: '1F1F1-1F1EE', e: 'π±π?', n: 'Flag For Liechtenstein', f: 8, s: 'flag_li' }, { u: '1F1F1-1F1F9', e: 'π±πΉ', n: 'Flag For Lithuania', f: 8, s: 'flag_lt' }, { u: '1F1F1-1F1FA', e: 'π±πΊ', n: 'Flag For Luxembourg', f: 8, s: 'flag_lu' }, { u: '1F1F2-1F1F4', e: 'π²π΄', n: 'Flag For Macau', f: 8, s: 'flag_mo' }, { u: '1F1F2-1F1F0', e: 'π²π°', n: 'Flag For Macedonia', f: 8, s: 'flag_mk' }, { u: '1F1F2-1F1EC', e: 'π²π¬', n: 'Flag For Madagascar', f: 8, s: 'flag_mg' }, { u: '1F1F2-1F1FC', e: 'π²πΌ', n: 'Flag For Malawi', f: 8, s: 'flag_mw' }, { u: '1F1F2-1F1FE', e: 'π²πΎ', n: 'Flag For Malaysia', f: 8, s: 'flag_my' }, { u: '1F1F2-1F1FB', e: 'π²π»', n: 'Flag For Maldives', f: 8, s: 'flag_mv' }, { u: '1F1F2-1F1F1', e: 'π²π±', n: 'Flag For Mali', f: 8, s: 'flag_ml' }, { u: '1F1F2-1F1F9', e: 'π²πΉ', n: 'Flag For Malta', f: 8, s: 'flag_mt' }, { u: '1F1F2-1F1ED', e: 'π²π­', n: 'Flag For Marshall Islands', f: 8, s: 'flag_mh' }, { u: '1F1F2-1F1F6', e: 'π²πΆ', n: 'Flag For Martinique', f: 8, s: 'flag_mq' }, { u: '1F1F2-1F1F7', e: 'π²π·', n: 'Flag For Mauritania', f: 8, s: 'flag_mr' }, { u: '1F1F2-1F1FA', e: 'π²πΊ', n: 'Flag For Mauritius', f: 8, s: 'flag_mu' }, { u: '1F1FE-1F1F9', e: 'πΎπΉ', n: 'Flag For Mayotte', f: 8, s: 'flag_yt' }, { u: '1F1F2-1F1FD', e: 'π²π½', n: 'Flag For Mexico', f: 8, s: 'flag_mx' }, { u: '1F1EB-1F1F2', e: 'π«π²', n: 'Flag For Micronesia', f: 8, s: 'flag_fm' }, { u: '1F1F2-1F1E9', e: 'π²π©', n: 'Flag For Moldova', f: 8, s: 'flag_md' }, { u: '1F1F2-1F1E8', e: 'π²π¨', n: 'Flag For Monaco', f: 8, s: 'flag_mc' }, { u: '1F1F2-1F1F3', e: 'π²π³', n: 'Flag For Mongolia', f: 8, s: 'flag_mn' }, { u: '1F1F2-1F1EA', e: 'π²πͺ', n: 'Flag For Montenegro', f: 8, s: 'flag_me' }, { u: '1F1F2-1F1F8', e: 'π²πΈ', n: 'Flag For Montserrat', f: 8, s: 'flag_ms' }, { u: '1F1F2-1F1E6', e: 'π²π¦', n: 'Flag For Morocco', f: 8, s: 'flag_ma' }, { u: '1F1F2-1F1FF', e: 'π²πΏ', n: 'Flag For Mozambique', f: 8, s: 'flag_mz' }, { u: '1F1F2-1F1F2', e: 'π²π²', n: 'Flag For Myanmar', f: 8, s: 'flag_mm' }, { u: '1F1F3-1F1E6', e: 'π³π¦', n: 'Flag For Namibia', f: 8, s: 'flag_na' }, { u: '1F1F3-1F1F7', e: 'π³π·', n: 'Flag For Nauru', f: 8, s: 'flag_nr' }, { u: '1F1F3-1F1F5', e: 'π³π΅', n: 'Flag For Nepal', f: 8, s: 'flag_np' }, { u: '1F1F3-1F1F1', e: 'π³π±', n: 'Flag For Netherlands', f: 8, s: 'flag_nl' }, { u: '1F1F3-1F1E8', e: 'π³π¨', n: 'Flag For New Caledonia', f: 8, s: 'flag_nc' }, { u: '1F1F3-1F1FF', e: 'π³πΏ', n: 'Flag For New Zealand', f: 8, s: 'flag_nz' }, { u: '1F1F3-1F1EE', e: 'π³π?', n: 'Flag For Nicaragua', f: 8, s: 'flag_ni' }, { u: '1F1F3-1F1EA', e: 'π³πͺ', n: 'Flag For Niger', f: 8, s: 'flag_ne' }, { u: '1F1F3-1F1EC', e: 'π³π¬', n: 'Flag For Nigeria', f: 8, s: 'flag_ng' }, { u: '1F1F3-1F1FA', e: 'π³πΊ', n: 'Flag For Niue', f: 8, s: 'flag_nu' }, { u: '1F1F3-1F1EB', e: 'π³π«', n: 'Flag For Norfolk Island', f: 8, s: 'flag_nf' }, { u: '1F1F2-1F1F5', e: 'π²π΅', n: 'Flag For Northern Mariana Islands', f: 8, s: 'flag_mp' }, { u: '1F1F0-1F1F5', e: 'π°π΅', n: 'Flag For North Korea', f: 8, s: 'flag_kp' }, { u: '1F1F3-1F1F4', e: 'π³π΄', n: 'Flag For Norway', f: 8, s: 'flag_no' }, { u: '1F1F4-1F1F2', e: 'π΄π²', n: 'Flag For Oman', f: 8, s: 'flag_om' }, { u: '1F1F5-1F1F0', e: 'π΅π°', n: 'Flag For Pakistan', f: 8, s: 'flag_pk' }, { u: '1F1F5-1F1FC', e: 'π΅πΌ', n: 'Flag For Palau', f: 8, s: 'flag_pw' }, { u: '1F1F5-1F1F8', e: 'π΅πΈ', n: 'Flag For Palestinian Territories', f: 8, s: 'flag_ps' }, { u: '1F1F5-1F1E6', e: 'π΅π¦', n: 'Flag For Panama', f: 8, s: 'flag_pa' }, { u: '1F1F5-1F1EC', e: 'π΅π¬', n: 'Flag For Papua New Guinea', f: 8, s: 'flag_pg' }, { u: '1F1F5-1F1FE', e: 'π΅πΎ', n: 'Flag For Paraguay', f: 8, s: 'flag_py' }, { u: '1F1F5-1F1EA', e: 'π΅πͺ', n: 'Flag For Peru', f: 8, s: 'flag_pe' }, { u: '1F1F5-1F1ED', e: 'π΅π­', n: 'Flag For Philippines', f: 8, s: 'flag_ph' }, { u: '1F1F5-1F1F3', e: 'π΅π³', n: 'Flag For Pitcairn Islands', f: 8, s: 'flag_pn' }, { u: '1F1F5-1F1F1', e: 'π΅π±', n: 'Flag For Poland', f: 8, s: 'flag_pl' }, { u: '1F1F5-1F1F9', e: 'π΅πΉ', n: 'Flag For Portugal', f: 8, s: 'flag_pt' }, { u: '1F1F5-1F1F7', e: 'π΅π·', n: 'Flag For Puerto Rico', f: 8, s: 'flag_pr' }, { u: '1F1F6-1F1E6', e: 'πΆπ¦', n: 'Flag For Qatar', f: 8, s: 'flag_qa' }, { u: '1F1F7-1F1EA', e: 'π·πͺ', n: 'Flag For RΓ©union', f: 8, s: 'flag_re' }, { u: '1F1F7-1F1F4', e: 'π·π΄', n: 'Flag For Romania', f: 8, s: 'flag_ro' }, { u: '1F1F7-1F1FA', e: 'π·πΊ', n: 'Flag For Russia', f: 8, s: 'flag_ru' }, { u: '1F1F7-1F1FC', e: 'π·πΌ', n: 'Flag For Rwanda', f: 8, s: 'flag_rw' }, { u: '1F1E7-1F1F1', e: 'π§π±', n: 'Flag For St. BarthΓ©lemy', f: 8, s: 'flag_bl' }, { u: '1F1F8-1F1ED', e: 'πΈπ­', n: 'Flag For St. Helena', f: 8, s: 'flag_sh' }, { u: '1F1F0-1F1F3', e: 'π°π³', n: 'Flag For St. Kitts & Nevis', f: 8, s: 'flag_kn' }, { u: '1F1F1-1F1E8', e: 'π±π¨', n: 'Flag For St. Lucia', f: 8, s: 'flag_lc' }, { u: '1F1F5-1F1F2', e: 'π΅π²', n: 'Flag For St. Pierre & Miquelon', f: 8, s: 'flag_pm' }, { u: '1F1FB-1F1E8', e: 'π»π¨', n: 'Flag For St. Vincent & Grenadines', f: 8, s: 'flag_vc' }, { u: '1F1FC-1F1F8', e: 'πΌπΈ', n: 'Flag For Samoa', f: 8, s: 'flag_ws' }, { u: '1F1F8-1F1F2', e: 'πΈπ²', n: 'Flag For San Marino', f: 8, s: 'flag_sm' }, { u: '1F1F8-1F1F9', e: 'πΈπΉ', n: 'Flag For SΓ£o TomΓ© & PrΓ­ncipe', f: 8, s: 'flag_st' }, { u: '1F1F8-1F1E6', e: 'πΈπ¦', n: 'Flag For Saudi Arabia', f: 8, s: 'flag_sa' }, { u: '1F1F8-1F1F3', e: 'πΈπ³', n: 'Flag For Senegal', f: 8, s: 'flag_sn' }, { u: '1F1F7-1F1F8', e: 'π·πΈ', n: 'Flag For Serbia', f: 8, s: 'flag_rs' }, { u: '1F1F8-1F1E8', e: 'πΈπ¨', n: 'Flag For Seychelles', f: 8, s: 'flag_sc' }, { u: '1F1F8-1F1F1', e: 'πΈπ±', n: 'Flag For Sierra Leone', f: 8, s: 'flag_sl' }, { u: '1F1F8-1F1EC', e: 'πΈπ¬', n: 'Flag For Singapore', f: 8, s: 'flag_sg' }, { u: '1F1F8-1F1FD', e: 'πΈπ½', n: 'Flag For Sint Maarten', f: 8, s: 'flag_sx' }, { u: '1F1F8-1F1F0', e: 'πΈπ°', n: 'Flag For Slovakia', f: 8, s: 'flag_sk' }, { u: '1F1F8-1F1EE', e: 'πΈπ?', n: 'Flag For Slovenia', f: 8, s: 'flag_si' }, { u: '1F1F8-1F1E7', e: 'πΈπ§', n: 'Flag For Solomon Islands', f: 8, s: 'flag_sb' }, { u: '1F1F8-1F1F4', e: 'πΈπ΄', n: 'Flag For Somalia', f: 8, s: 'flag_so' }, { u: '1F1FF-1F1E6', e: 'πΏπ¦', n: 'Flag For South Africa', f: 8, s: 'flag_za' }, { u: '1F1EC-1F1F8', e: 'π¬πΈ', n: 'Flag For South Georgia & South Sandwich Islands', f: 8, s: 'flag_gs' }, { u: '1F1F0-1F1F7', e: 'π°π·', n: 'Flag For South Korea', f: 8, s: 'flag_kr' }, { u: '1F1F8-1F1F8', e: 'πΈπΈ', n: 'Flag For South Sudan', f: 8, s: 'flag_ss' }, { u: '1F1EA-1F1F8', e: 'πͺπΈ', n: 'Flag For Spain', f: 8, s: 'flag_es' }, { u: '1F1F1-1F1F0', e: 'π±π°', n: 'Flag For Sri Lanka', f: 8, s: 'flag_lk' }, { u: '1F1F8-1F1E9', e: 'πΈπ©', n: 'Flag For Sudan', f: 8, s: 'flag_sd' }, { u: '1F1F8-1F1F7', e: 'πΈπ·', n: 'Flag For Suriname', f: 8, s: 'flag_sr' }, { u: '1F1F8-1F1FF', e: 'πΈπΏ', n: 'Flag For Swaziland', f: 8, s: 'flag_sz' }, { u: '1F1F8-1F1EA', e: 'πΈπͺ', n: 'Flag For Sweden', f: 8, s: 'flag_se' }, { u: '1F1E8-1F1ED', e: 'π¨π­', n: 'Flag For Switzerland', f: 8, s: 'flag_ch' }, { u: '1F1F8-1F1FE', e: 'πΈπΎ', n: 'Flag For Syria', f: 8, s: 'flag_sy' }, { u: '1F1F9-1F1FC', e: 'πΉπΌ', n: 'Flag For Taiwan', f: 8, s: 'flag_tw' }, { u: '1F1F9-1F1EF', e: 'πΉπ―', n: 'Flag For Tajikistan', f: 8, s: 'flag_tj' }, { u: '1F1F9-1F1FF', e: 'πΉπΏ', n: 'Flag For Tanzania', f: 8, s: 'flag_tz' }, { u: '1F1F9-1F1ED', e: 'πΉπ­', n: 'Flag For Thailand', f: 8, s: 'flag_th' }, { u: '1F1F9-1F1F1', e: 'πΉπ±', n: 'Flag For Timor-leste', f: 8, s: 'flag_tl' }, { u: '1F1F9-1F1EC', e: 'πΉπ¬', n: 'Flag For Togo', f: 8, s: 'flag_tg' }, { u: '1F1F9-1F1F0', e: 'πΉπ°', n: 'Flag For Tokelau', f: 8, s: 'flag_tk' }, { u: '1F1F9-1F1F4', e: 'πΉπ΄', n: 'Flag For Tonga', f: 8, s: 'flag_to' }, { u: '1F1F9-1F1F9', e: 'πΉπΉ', n: 'Flag For Trinidad & Tobago', f: 8, s: 'flag_tt' }, { u: '1F1F9-1F1F3', e: 'πΉπ³', n: 'Flag For Tunisia', f: 8, s: 'flag_tn' }, { u: '1F1F9-1F1F7', e: 'πΉπ·', n: 'Flag For Turkey', f: 8, s: 'flag_tr' }, { u: '1F1F9-1F1F2', e: 'πΉπ²', n: 'Flag For Turkmenistan', f: 8, s: 'flag_tm' }, { u: '1F1F9-1F1E8', e: 'πΉπ¨', n: 'Flag For Turks & Caicos Islands', f: 8, s: 'flag_tc' }, { u: '1F1F9-1F1FB', e: 'πΉπ»', n: 'Flag For Tuvalu', f: 8, s: 'flag_tv' }, { u: '1F1FA-1F1EC', e: 'πΊπ¬', n: 'Flag For Uganda', f: 8, s: 'flag_ug' }, { u: '1F1FA-1F1E6', e: 'πΊπ¦', n: 'Flag For Ukraine', f: 8, s: 'flag_ua' }, { u: '1F1E6-1F1EA', e: 'π¦πͺ', n: 'Flag For United Arab Emirates', f: 8, s: 'flag_ae' }, { u: '1F1EC-1F1E7', e: 'π¬π§', n: 'Flag For United Kingdom', f: 8, s: 'flag_gb' }, { u: '1F1FA-1F1F8', e: 'πΊπΈ', n: 'Flag For United States', f: 8, s: 'flag_us' }, { u: '1F1FB-1F1EE', e: 'π»π?', n: 'Flag For U.S. Virgin Islands', f: 8, s: 'flag_vi' }, { u: '1F1FA-1F1FE', e: 'πΊπΎ', n: 'Flag For Uruguay', f: 8, s: 'flag_uy' }, { u: '1F1FA-1F1FF', e: 'πΊπΏ', n: 'Flag For Uzbekistan', f: 8, s: 'flag_uz' }, { u: '1F1FB-1F1FA', e: 'π»πΊ', n: 'Flag For Vanuatu', f: 8, s: 'flag_vu' }, { u: '1F1FB-1F1E6', e: 'π»π¦', n: 'Flag For Vatican City', f: 8, s: 'flag_va' }, { u: '1F1FB-1F1EA', e: 'π»πͺ', n: 'Flag For Venezuela', f: 8, s: 'flag_ve' }, { u: '1F1FB-1F1F3', e: 'π»π³', n: 'Flag For Vietnam', f: 8, s: 'flag_vn' }, { u: '1F1FC-1F1EB', e: 'πΌπ«', n: 'Flag For Wallis & Futuna', f: 8, s: 'flag_wf' }, { u: '1F1EA-1F1ED', e: 'πͺπ­', n: 'Flag For Western Sahara', f: 8, s: 'flag_eh' }, { u: '1F1FE-1F1EA', e: 'πΎπͺ', n: 'Flag For Yemen', f: 8, s: 'flag_ye' }, { u: '1F1FF-1F1F2', e: 'πΏπ²', n: 'Flag For Zambia', f: 8, s: 'flag_zm' }, { u: '1F1FF-1F1FC', e: 'πΏπΌ', n: 'Flag For Zimbabwe', f: 8, s: 'flag_zw' }, { u: '1F1E6-1F1E8', e: 'π¦π¨', n: 'Flag For Ascension Island', f: 8, s: 'flag_ac' }, { u: '1F1E7-1F1FB', e: 'π§π»', n: 'Flag For Bouvet Island', f: 8, s: 'flag_bv' }, { u: '1F1E8-1F1F5', e: 'π¨π΅', n: 'Flag For Clipperton Island', f: 8, s: 'flag_cp' }, { u: '1F1E9-1F1EC', e: 'π©π¬', n: 'Flag For Diego Garcia', f: 8, s: 'flag_dg' }, { u: '1F1EA-1F1E6', e: 'πͺπ¦', n: 'Flag For Ceuta & Melilla', f: 8, s: 'flag_ea' }, { u: '1F1ED-1F1F2', e: 'π­π²', n: 'Flag For Heard & Mcdonald Islands', f: 8, s: 'flag_hm' }, { u: '1F1F2-1F1EB', e: 'π²π«', n: 'Flag For St. Martin', f: 8, s: 'flag_mf' }, { u: '1F1F8-1F1EF', e: 'πΈπ―', n: 'Flag For Svalbard & Jan Mayen', f: 8, s: 'flag_sj' }, { u: '1F1F9-1F1E6', e: 'πΉπ¦', n: 'Flag For Tristan Da Cunha', f: 8, s: 'flag_ta' }, { u: '1F1FA-1F1F2', e: 'πΊπ²', n: 'Flag For U.S. Outlying Islands', f: 8, s: 'flag_um' }, { u: '1F3FB', e: 'π»', n: 'Emoji Modifier Fitzpatrick Type-1-2', f: 9 }, { u: '1F3FC', e: 'πΌ', n: 'Emoji Modifier Fitzpatrick Type-3', f: 9 }, { u: '1F3FD', e: 'π½', n: 'Emoji Modifier Fitzpatrick Type-4', f: 9 }, { u: '1F3FE', e: 'πΎ', n: 'Emoji Modifier Fitzpatrick Type-5', f: 9 }, { u: '1F3FF', e: 'πΏ', n: 'Emoji Modifier Fitzpatrick Type-6', f: 9 }];
var emojiFaceMap = {};
var emojiTitleMap = {};
for (var i = 0; i < table.length; i++) {
    if (table[i].s) {
        emojiFaceMap[table[i].u.toLowerCase()] = {
            code: table[i].u,
            title: table[i].s
        };
        if (table[i].u.indexOf('-') == -1) {
            emojiTitleMap[table[i].s] = {
                code: table[i].u,
                title: table[i].s
            }
        };
    }
}
function handlerChatList(list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].index === undefined) {
            list[i].index = i;
        }
    }
    list.sort(function (v1, v2) {
        if (v1.Sticky != v2.Sticky) {
            return v1.Sticky > v2.Sticky ? -1 : 1;
        } else {
            if (v1.ActiveTimestamp == v2.ActiveTimestamp) {
                if (v1.MsgTimestamp == v2.MsgTimestamp) {
                    return v1.index > v2.index ? 1 : -1;
                }
                return v1.MsgTimestamp > v2.MsgTimestamp ? -1 : 1;
            } else {
                return v1.ActiveTimestamp > v2.ActiveTimestamp ? -1 : 1;
            }
        }
    })
    return list;
};
function callCefMethod(path, data, callback) {
    console.log('jj.fetch(%s), params:%s , ----------------- start', path, JSON.stringify(data));
    // var _ns = window[nameSpace];
    // var fn = _ns[methodName];
    // if(!fn){
    // alert([nameSpace,methodName].join('.') + 'ζΉζ³δΈε­ε¨');
    // return;
    // }
    var params = {};
    var frame;
    if (typeof data == 'function') {
        frame = callback;
        callback = data;
        data = '';
    }
    var callbackName = 'cef_callback_' + new Date().getTime();
    while (window[callbackName]) {
        callbackName = 'cef_callback_' + new Date().getTime();
    }
    // params.serviceName = serviceName;
    if (data) {
        params.data = data;
    }
    if (!callback) {
        params.callback = '';
    } else {
        params.callback = callbackName;
    }
    // if (typeof FRAMEID !== 'undefined' || typeof utils.FRAMEID  !== 'undefined') {
    //     params.frameId = FRAMEID|| utils.FRAMEID;
    // }
    if ( typeof utils.FRAMEID  !== 'undefined') {
        params.frameId =   utils.FRAMEID;
    }
    // var params = data ? JSON.stringify(data) : '';
    params = JSON.stringify(params);
    console.log(callback)
    if (callback) {
        window[callbackName] = {
            path: path,
            params: params,
            fn: function (data, usedLater) {
                var res;
                var execpt;
                try {
                    res = callback(data);
                    if (res === undefined) {
                        res = {
                            Flag: data.Flag,
                            Message: 'callback invoked success'
                        }
                    }
                } catch (e) {
                    console.log(e);
                    execpt = e;
                    res = {
                        Flag: data.Flag || 1,
                        Message: 'callback invoked fail'
                    }
                }
                // if(data.Flag != 0){
                // console.log('%cend -------- jj.fetch(%s) invoked fail \nparams:%s\nres:','background:#fff0f0;color:red;',path,params,data);
                // }else{
                // console.log('end -------- jj.fetch(%s) invoked success \nparams:%s\nres:',path,params,data);
                // }
                if (execpt) {
                    console.log(execpt);
                }
                res = JSON.stringify(res);
                // if(res.Flag == 0){
                // window[callbackName] = undefined;
                // }
                if (!usedLater || !callback) {
                    delete window[callbackName];
                }
                return res;
            }
        }
    }
    /** 
        ζεζ°οΌζεθ°
        @path path
        @params {callback : callbackName,data : '{xxx}'}
        ζεζ°οΌζ²‘εθ°
        @path path
        @params {callback : '',data : '{xxx}'}
        ζ²‘εζ°οΌζεθ°
        @path path
        @params {callback : callbackName}
        ζ²‘εζ°οΌζ²‘εθ°
        @path path
        @params '{}'
    */
    return jj.fetch(path, params);
}
window.jjCallback = jjCallback;
/*ζΉζ³θ―΄ζ
       *@method jjCallback
       *@for ζε±windowε―Ήθ±‘ window.jjCallback(param)
       *@param {
                   callBackName:cef_callback_1596509800498,
                   usedLater:boolean,
                   callBackData:obj 
               }
       *@return 1.ε¨callBackData.CodeδΈζ―0ηζΆεη΄ζ₯θ·³εΊ,θΏειθ――δΏ‘ζ―
       *        2.ε¦ζcallBackNameεζ°εΈ¦. δΌδ»₯.εε²ζζ°η»εΉΆδΈιεδ½ΏcallbackObjδΈζ­ζεwindowε±ζ§οΌcallbackObjε€ζ­ζ―ε¦δΈΊfunοΌζ―εθΏεε―ΉεΊwindowδΈηζΉζ³callbackObj(callBackData,usedLater)οΌε¦εθΏειθ――δΏ‘ζ―
       *        3.ε¦ζcallBackNameεζ°δΈεΈ¦. η΄ζ₯ζΎε°window[callBackName]δΈηζΉζ³θ΅εΌη»callbackObjοΌε€ζ­callbackObj.fnζ―ε¦δΈΊfunζ―εθΏεcallbackObj.fn(callBackData,usedLater)ε¦εθΏειθ――δΏ‘ζ―
       */

function jjCallback(callBackName, usedLater, callBackData) {
    usedLater = usedLater !== 'False';
    if (callBackData) {
        // 4η¦»ηΊΏ
        if (callBackData.Code == 4) {
            // alert(langPack.getKey('offlineTip'));
            // return;
        }
        // var hanlderError = langPack.getKey('error' + callBackData.Code,true);
        // if(hanlderError){//εΆδ»ηΆζθ·³εΊ
        // alert(langPack.getKey('error' + callBackData.Code));
        //     return;
        // }
    }
    if (callBackName.indexOf('.') != -1) { // 
        var arr = callBackName.split('.');
        var idx = 0;
        callbackObj = window;
        while (idx < arr.length) {
            callbackObj = callbackObj[arr[idx]];//θ?©callbackObjδΈζ­ζεwindowε±ζ§
            idx++;
        }
        if (typeof callbackObj === 'function') {
            return callbackObj(callBackData, usedLater);
        } else {
            console.log('%s is undefined or not a function', callBackName, callBackData);
            return JSON.stringify({
                Flag: 1,
                Message: callBackName + ' is undefined or not a function'
            })
        }
    } else {
        var callbackObj = window[callBackName];
        if (callbackObj) {
            if (callBackData.Flag != 0) {
                console.log('%cend -------- jj.fetch(%s) invoked fail \nparams:%s\nres:', 'background:#fff0f0;color:red;', callbackObj.path, callbackObj.params, callBackData);
            } else {
                console.log('end -------- jj.fetch(%s) invoked success \nparams:%s\nres:', callbackObj.path, callbackObj.params, callBackData);
            }
            if (typeof callbackObj.fn === 'function') {
                return callbackObj.fn(callBackData, usedLater);
            }
        } else {
            console.log('%s is undefined or not a function', callBackName, callBackData);
            return JSON.stringify({
                Flag: 1,
                Message: callBackName + ' is undefined or not a function'
            })
        }
    }

}
// ε¬ε±ζε‘ ε€η
export default {
    langPack() {
        var lang = utils.getLs('lang') || 'cn';
        var LANGMAP = {
            cn: {
                langName: 'δΈ­ζ',
                unsupport: 'δΈζ―ζζ­€ζ΅θ§ε¨',
                unsupportAd: 'ε»Ίθ??δ½Ώη¨ChromeζθFirefoXζ΅θ§ε¨',
                appName: 'ιιεε¬',
                newMessage: 'ζζ°ηζΆζ―',

                countryArea: 'ε½ε?Ά/ε°εΊ',
                phone: 'ζζΊε·η ',
                phone2: 'ζζΊε·η ',
                password: 'ε―η ',
                captcha: 'ιͺθ―η ',
                loginButton: 'η»ε½',
                InvitationCode: 'ιθ―·η ',
                forget: 'εΏθ?°ε―η ?',
                forgetTitle: 'εΏθ?°ε―η ',
                forgetInfo: 'δΏ?ζΉη»ε½ε―η θ―·θη³»δ»₯δΈδΊΊεοΌ',
                tel: 'η΅θ―οΌ',
                wechat: 'εΎ?δΏ‘οΌ',
                QQ: 'QQοΌ',
                forgetLine1: 'δ½Ώη¨ιιεε¬APPοΌζΎεε―η οΌζ³¨ε/η»ε½ηι’οΌηΉε»εΏθ?°ε―η ζι?οΌ',
                forgetLine2: 'δΉε―ζ«ζδΈζΉδΊη»΄η δΈθ½½ιιεε¬APP',

                search: 'ζη΄’',
                message: 'ζΆζ―',
                concat: 'θη³»δΊΊ',
                organize: 'η»η»ζΆζ',
                department: 'ι¨ι¨',
                loadmore: 'ε θ½½ζ΄ε€',

                startChat: 'εθ΅·ηΎ€θ',
                fcontacts: 'εΈΈη¨θη³»δΊΊ',
                rcontacts: 'ζθΏθη³»δΊΊ',
                friends: 'ζηε₯½ε',
                maxNum: 'ζ³¨ζοΌζ¬ζ¬‘ιζ©δΊΊζ°ε·²θΎΎδΈι',
                forwardTitle: 'θ½¬εζΆζ―',
                addStaff: 'ζ·»ε ζε',
                videoConference: '[θ§ι’δΌθ??]',
                BookAVideoConference: '[ι’ηΊ¦θ§ι’δΌθ??]',
                noResult: 'ζ²‘ζζη΄’ε°ηΈε³δΊΊε',
                noFrequentContacts: 'ζ²‘ζεΈΈη¨θη³»δΊΊ',
                noGroupChat: 'ζ²‘ζηΎ€θ',
                noRecentContacts: 'ζ²‘ζζθΏθη³»δΊΊ',
                noFirends: 'ζ²‘ζε₯½ε',
                expand: 'ε±εΌ',
                collapse: 'ζΆθ΅·',
                mineGroup: 'ζηηΎ€θ',

                turnOffNotif: 'ε³ι­ζ‘ι’ιη₯',
                turnOnNotif: 'εΌε―ζ‘ι’ιη₯',
                turnOffSounds: 'ε³ι­ε£°ι³ζη€Ί',
                turnOnSounds: 'εΌε―ε£°ι³ζη€Ί',
                downloadApp: 'δΈθ½½εΊη¨',
                updatePersonnel: 'ζ΄ζ°η»η»ζΆζ',
                exit: 'ιεΊεΊη¨',

                setTop: 'η½?ι‘Άθε€©',
                cancelTop: 'εζΆη½?ι‘Ά',
                deleteChat: 'η§»ι€',
                removeChat: 'η§»ι€εΉΆε ι€ζΆζ―',
                removeChatConfirm: 'η‘?ε?θ¦η§»ι€θ―₯θε€©εΉΆε ι€θ―₯θε€©ηζζθε€©θ?°ε½οΌ',
                forward: 'θ½¬ε',
                copy: 'ε€εΆ',

                groupName: 'ηΎ€θεη§°',
                saveToContacts: 'δΏε­ε°ιθ?―ε½',
                stickOnTop: 'ζΆζ―η½?ι‘Ά',
                groupInfo: 'ηΎ€θθ―¦ζ',
                groupOwner: 'ηΎ€δΈ»',
                leaveGroup: 'η¦»εΌδΊηΎ€θ',

                profile: 'θ―¦ζ',
                firendProfile: 'ε₯½εθ―¦ζ',
                manager: 'η΄ζ₯δΈ»η?‘',
                profileDepartment: 'ζε¨ι¨ι¨',
                sendMessage: 'εζΆζ―',
                sendEmail: 'ει?δ»Ά',
                sendGroupEmail: 'ηΎ€ει?δ»Ά',

                loginFail: 'η»ε½ε€±θ΄₯οΌθ―·η‘?ε?ζζΊε·ε―η ζ­£η‘?',
                failCreateRoom: 'ηΎ€θεε»Ίε€±θ΄₯',
                audioFailed: 'θ―­ι³ζ­ζΎε€±θ΄₯',
                videoFailed: 'θ§ι’ζ­ζΎε€±θ΄₯',
                maxUpload: 'ζδ»ΆδΈδΌ ζε€ζ―ζ',
                mb: 'MB',
                zeroFile: 'ζδ»Άε€§ε°δΈΊ0οΌζ ζ³δΈδΌ ',
                maxMembers: 'ζ ζ³εε»ΊθΆθΏ80δΊΊηηΎ€η»θε€©',
                selectStaff: 'θ―·ιζ©θ¦θ½¬εηδΊΊε',
                confirmForward: 'η‘?ε?θ¦θ½¬εη»θΏδΊδΊΊοΌ',
                errorGroupName: 'ηΎ€θεη§°ε¨0-16δΈͺε­η¬¦',
                errorEmjgroupName: 'ηΎ€θεη§°δΈζ―ζθ‘¨ζ',
                leaveError: 'εε»Ίθζ ζ³ιεΊηΎ€θ',
                uploading: 'εΎηδΈδΌ δΈ­οΌθ―·η¨ε',
                imageError: 'ζ ζ³ε θ½½εΎη',
                unknownPhone: 'θ―₯ζζΊε·ζͺζ³¨ε',
                unknownLoginError: 'η»ε½εΌεΈΈοΌθ―·θη³»η?‘ηε',
                incorrectPhone: 'θ―·θΎε₯ζ­£η‘?ηζζΊε·η ',
                sendMsgTips: 'ζδΈCtrl+Enterζ’θ‘',
                closeBrowser: 'ε³ι­ζ΅θ§ε¨θε€©εε?Ήε°δΌδΈ’ε€±γ',
                webuploaderError: 'webuploaderεΊιοΌθ―·ιθ―γ',
                loginInOther: 'ηΈεθ΄¦ε·ε¨εΆδ»ε°ζΉη»ε½,ζ¨ε·²ιεΊ!',

                xxpb: '',
                xxpe: 'δΊΊ',

                downloadViewTitle: 'δΈθ½½ιιεε¬',
                scanQr: 'ζζΊζ«δΈζ«δΈθ½½ιιεε¬',
                downloadTips: '(iPhone,ε?εε?’ζ·η«―δΈθ½½)',

                uploadingViewTitle: 'ειεΎη',

                am: 'δΈε',
                pm: 'δΈε',
                draft: '[θη¨Ώ]',
                someoneAt: '[ζδΊΊοΌ ζ]',
                atedby: 'ζε°δΊδ½ ',
                changeGroupName: 'δΏ?ζΉηΎ€εδΈΊ',
                removedMember: 'θ’«η§»εΊηΎ€θ',
                removedMemberAdminStart: 'ζ¨ε°',
                removedMemberAdminEnd: 'η§»εΊηΎ€θ',
                leftGroup: 'η¦»εΌηΎ€θ',
                addGroup: 'ε ε₯ηΎ€θ',
                invitedIntoGroup: 'ιθ―·δΊ',
                invitedIntoGroupEnd: 'ε ε₯ηΎ€θ',
                you: 'ζ¨',
                download: 'δΈθ½½',

                file: '[ζδ»Ά]',
                img: '[εΎη]',
                video: '[θ§ι’]',
                audio: '[θ―­ι³]',
                link: '[ιΎζ₯]',

                languageSettingTitle: 'θ―­θ¨θ?Ύη½?',
                languageSettingTip: 'ηΉε»εΎηθ?Ύη½?θ―­θ¨',
                languageSettingTitle1: 'language setting',

                joinEnt: 'ε ε₯δΊ',
                inviteEnt: 'ιθ―·δ½ ε ε₯ε¬εΈ',
                voiceConference: 'θ―­ι³δΌθ??',
                invitedIntoMetting: ' ιθ―·δ½ εε θ―­ι³δΌθ??οΌθ―·ε¨ζζΊδΈε ε₯γ',
                invitedIntoMettingInSender: 'εθ΅·δΊθ―­ι³δΌθ??οΌθ―·ε¨ζζΊδΈζ₯ηγ',
                invitedVideoconferencing: ' ιθ―·δ½ εε θ§ι’δΌθ??γ',
                invitedVideoconferencingInSender: ' εθ΅·δΊθ§ι’δΌθ??γ',
                seeInMobile: 'θ―·ε¨ζζΊδΈζ₯ηγ',

                loading: 'ε θ½½δΈ­ ...',
                serviceNumber: 'ζε‘ε·',
                noChat: 'θΏζ²‘ζδ»»δ½θε€©θ?°ε½',
                start: 'εθ΅·θε€©',
                send: 'ει',
                cancel: 'εζΆ',
                back: 'θΏε',
                group: 'ηΎ€η»',
                rgroup: 'εΈΈη¨ηΎ€η»',
                confirm: 'η‘?ε?',

                userName: 'ε§ε',
                userPost: 'θδ½',
                userEntEmail: 'ε¬εΈι?η?±',
                userEmpNo: 'ε·₯ε·',
                userAddress: 'ε°ε',
                userDept: 'η»η»ζΆζ',
                userLeader: 'η΄ζ₯δΈ»η?‘',
                weekDays: ['ζζζ₯', 'ζζδΈ', 'ζζδΊ', 'ζζδΈ', 'ζζε', 'ζζδΊ', 'ζζε­'],
                yesterday: 'ζ¨ε€©',
                thedaybeforeyesterday: 'εε€©',
                stranger: 'ιηδΊΊ',
                broad: 'εΉΏζ­ζΆζ―',
                addToFriends: 'ε δΈΊε₯½ε',
                addToFrequents: 'ε ε₯εΈΈη¨θη³»δΊΊ',
                removeFriends: 'ε ι€ε₯½ε',
                removeFrequents: 'ε ι€θη³»δΊΊ',
                msgdisturb: 'ζΆζ―εζζ°',
                noSign: 'θΏε?ΆδΌεΎζοΌδ»δΉι½ζ²‘ζηδΈ...',
                shutUpAction: 'θ’«{name}η¦θ¨',
                shutUpWarn: 'θ’«{name}η¦θ¨οΌθ―·η¨ειθ―',
                minutes: 'ει',
                forever: 'ζ°ΈδΉ',
                shutUpForever: 'ε·²θ’«ηΎ€δΈ»ζ°ΈδΉη¦θ¨',
                cancelShutUp: 'ηη¦θ¨ε·²θ’«εζΆ',
                banned: 'η¦θ¨',
                loginFail: 'ζζΊε·ζε―η δΈζ­£η‘?',
                requestError: 'θ―·ζ±εΊιοΌθ―·η¨ειθ―',
                connectServer: 'θΏζ₯ζε‘ε¨...',
                connectSuccess: 'ζε‘ε¨θΏζ₯ζε',
                connectFail: 'ζε‘ε¨θΏζ₯ε€±θ΄₯',
                afterSSOSuccess: 'ιͺθ―ζεοΌθΏζ₯θε€©ζε‘ε¨',
                loginSuccess: 'θε€©ζε‘ε¨θΏζ₯ζεοΌη­εΎηι’εε§ε',
                sessionExpired: 'θΊ«δ»½θΏζθ―·ιζ°η»ε½',
                chatServerTimeout: 'θε€©ζε‘ε¨θΏζ₯θΆζΆοΌθ―·η¨ειθ―',
                downApp: 'δΈθ½½ιιεε¬',
                companyLogin: 'δΌδΈη»ε½',
                appNameWeb: 'ιιεε¬η½ι‘΅η',
                china: 'δΈ­ε½',
                taiwan: 'ε°ζΉΎ',
                usa: 'ηΎε½',
                korea: 'ι©ε½',
                russia: 'δΏη½ζ―',
                japan: 'ζ₯ζ¬',
                deptLoading: 'η»η»ζΆζε θ½½δΈ­...',
                withDrawMsg: 'ζ€εδΊδΈζ‘ζΆζ―',
                withDraw: 'ζ€ε',
                canNotWithDraw: 'θΆθΏ2ειζ ζ³ζ€ε',
                privacyAttention: 'δΈζ¨δΈζ―ε₯½εζεδΊοΌθ―·ζ¨ζ³¨ζδΏζ€ιη§',
                loadMoreMsg: 'ζ΄ε€ζΆζ―θ―·ε¨θε€©θ?°ε½δΈ­ζ₯η',
                openRecords: 'ζεΌζΆζ―θ?°ε½',
                seeDetail: 'ζ₯ηθ―¦ζ',

                cancelUpload: 'εζΆδΈδΌ ',
                reupload: 'ιζ°δΈδΌ ',
                open: 'ζεΌ',
                openDir: 'ζεΌζδ»Άε€Ή',
                fileCacheDay: 'ζδ»Άζε­7ε€©',
                receiverDonwloaded: 'ε―ΉζΉε·²ζ₯ζΆ',
                fileSendFail: 'ζδ»Άειε€±θ΄₯',

                cancelDownload: 'εζΆδΈθ½½',
                reDownload: 'ιζ°δΈθ½½',
                cancelTrans: 'δΌ θΎε·²εζΆ',
                downloaded: 'ζ₯ζΆζε',
                downloadFail: 'δΈθ½½ε€±θ΄₯',
                transFail: 'δΌ θΎε€±θ΄₯',
                saveAs: 'ε¦ε­δΈΊ',
                fileOutOfDay: 'ζδ»Άε·²θΏζ',
                allFiles: 'ζζζδ»Ά|*.*',
                imageFiles: 'εΎηζδ»Ά|*.png;*.jpg;*.gif',

                setting: 'θ?Ύη½?',
                about: 'ε³δΊ',
                switchAccount: 'εζ’θ΄¦ε·',
                quit: 'ιεΊ',

                serviceAccount: 'ζε‘ε·',
                fdepts: 'εΈΈη¨ι¨ι¨',
                fgroups: 'εΈΈη¨ηΎ€θ',
                entCharger: 'δΌδΈθ΄θ΄£δΊΊ',
                entEmpCount: 'δΌδΈζ»δΊΊζ°',

                deptLeader: 'ι¨ι¨δΈ»η?‘',
                deptDirector: 'εη?‘ι’ε―Ό',
                deptEmpCount: 'ι¨ι¨δΊΊζ°',
                noEmp: 'ζζ ',

                'ent.userName': 'ε§ε',
                'ent.job': 'θδ½',
                'ent.email': 'δΌδΈι?η?±',
                'ent.empNo': 'ε·₯ε·',
                'ent.depts': 'η»η»ζΆζ',
                'ent.leader': 'η΄ζ₯δΈ»η?‘',
                'user.userName': 'ε§ε',
                'user.mobile': 'η΅θ―',
                'user.email': 'ι?η?±',
                'user.noSignature': 'θΏε?ΆδΌεΎζ,δ»δΉι½ζ²‘ζηδΈ...',

                favoriteDept: 'ζ·»ε εΈΈη¨ι¨ι¨',
                favoriteEmp: 'ζ·»ε εΈΈη¨θη³»δΊΊ',
                sendInstantMessage: 'ειε³ζΆζΆζ―',
                refreshEnts: 'ε·ζ°η»η»ζΆζ',

                setUserToFavorite: 'ζ·»ε εΈΈη¨θη³»δΊΊ',
                setGroupToFavorite: 'ζ·»ε εΈΈη¨ηΎ€θ',
                cancelUserToFavorite: 'η§»ι€εΈΈη¨θη³»δΊΊ',
                cancelGroupToFavorite: 'η§»ι€εΈΈη¨ηΎ€θ',
                cancelDeptToFavorite: 'η§»ι€εΈΈη¨ι¨ι¨',

                goback: '<θΏε',
                broadDetailTitle: 'εΉΏζ­θ―¦ζ',

                quitGroup: 'ιεΊηΎ€θ',
                chooseUser: 'ιζ©ηΎ€θζε',
                vidioMeeting: 'θ§ι’δΌθ??',
                voiceConference: 'θ―­ι³δΌθ??',
                selectedUsers: 'ε·²ιζ©ζεοΌ',
                selectedUsersUnit: 'δΊΊ',

                clickToEditEmail: 'ηΉε»ηΌθΎι?η?±',

                account: 'θ΄¦ε·',
                serviceLogin: 'ζε‘ε·η»ε½',
                autoLogin: 'θͺε¨η»ε½',
                resetPwd: 'ιη½?ε―η ',
                pwdLogin: 'ε―η η»ε½',
                register: 'ζ³¨ε',
                smsCode: 'ιͺθ―η ',
                wrongSmsCode: 'ιͺθ―η ιθ――',
                blankSmsCode: 'θ―·θΎε₯ιͺθ―η ',
                diffPassword: 'δΈ€ζ¬‘θΎε₯ηε―η δΈδΈθ΄',
                alreadyInUse: 'ζζΊε·ε·²η»θ’«δ½Ώη¨',
                writeInvitationCode: 'θ―·ε‘«ειθ―·η ',
                finish: 'ε?ζ',
                next: 'δΈδΈζ­₯',
                skip: 'θ·³θΏ',
                getCode: 'θ·ειͺθ―η ',
                countDown: '{d}η§ειζ°θ·ε',
                newPwd: 'ζ°ε―η ',
                confirmNewPwd: 'εζ¬‘θΎε₯ζ°ε―η ',
                confirmPwd: 'η‘?θ?€ε―η ',
                repeatPwd: 'εζ¬‘θΎε₯ε―η ',

                safeTipTitle: 'ε?ε¨ζη€Ί',
                safeTipContentLine1: 'ε¬ε±η―ε’θ―·εΏεΌε―θͺε¨η»ε½εθ½οΌ',
                safeTipContentLine2: 'δ»₯εζ°ζ?ζ³ι²',
                donNotOpen: 'δΈεΌε―',
                confirmOpen: 'η‘?θ?€εΌε―',

                forgetPwdTitle: 'εΏθ?°ε―η ',
                forgetPwdContentLine1: 'θ―·ιη₯ζ»η?‘ηεοΌη»ε½η?‘ηεε°ιη½?',
                forgetPwdContentLine2: 'ε―η http://mgr.jj.snail.com',
                getThat: 'ζη₯ιδΊ',

                loadEntError: 'η»η»ζΆζε θ½½ιθ――',
                clickToRetry: 'ηΉζ­€ιζ°ε θ½½',

                'setting.login': 'η»ε½',
                'setting.hotkey': 'η­ι?',
                'setting.sound': 'ε£°ι³',
                'setting.backup': 'θε€©ε€δ»½',
                autoStart: 'εΌζΊθͺε¨ε―ε¨',
                getMsg: 'ζεζΆζ―',
                showMainIframe: 'ζΎη€ΊδΈ»ι’ζΏ',
                capture: 'ζζε±εΉ',
                quickSend: 'εΏ«ιει',
                recordingVoice: 'θ―­ι³ζι?θ―΄θ―',
                openChatHistory: 'ζεΌθε€©θ?°ε½',
                setToDefault: 'ζ’ε€ι»θ?€θ?Ύη½?',
                sendMsgHotKey: 'δΌθ―ηͺε£ειζΆζ―',
                hasSameHotKey: 'ε²ηͺ',
                CESend: 'ζCtrl+Enterι?',
                ESend: 'Enterι?',
                closeTone: 'ε³ι­ζΆζ―ζη€Ίι³',
                backupToPC: 'ε€δ»½ε°η΅θ',
                backupBtn: 'ε€δ»½',
                recoverToPhone: 'ζ’ε€ε°ζζΊ',
                recoverBtn: 'ζ’ε€',
                managerBackup: 'η?‘ηε€δ»½',
                managerBackupBtn: 'η?‘η',

                close: 'ε³ι­',
                scanQrCode: 'ζ«δΊη»΄η δΈθ½½ζζΊη',
                copyRight: 'θε·θηζ°ε­η§ζθ‘δ»½ζιε¬εΈΒ©ηζζζ',

                backupTips: 'θ―·ε¨ζζΊδΈη‘?θ?€οΌδ»₯εΌε§ε€δ»½',
                restoreTips: 'θ―·ε¨ζζΊδΈη‘?θ?€οΌδ»₯εΌε§θΏε',
                managerTips: 'ε°ζη€ΊοΌδΏ?ζΉε€δ»½ε­ε¨η?ε½ε°δΌθΏη§»ζζε·²ε­ε¨ηε€δ»½οΌζδΈζ―ζδΈ­ζθ·―εΎ',
                currentBackUpDir: 'ε€δ»½ε­ε¨δ½η½?η?ε½οΌ',
                modify: 'ζ΄ζΉ',
                backupName: 'ε€δ»½εη§°',
                firstBackupTime: 'ι¦ζ¬‘ε€δ»½ζΆι΄',
                lastBackupTime: 'δΈζ¬‘ε€δ»½ζΆι΄',
                operate: 'ζδ½',
                deleteBackup: 'ε ι€ε€δ»½',

                backupComplete: 'ε€δ»½ε·²ε?ζ',
                restoreComplete: 'δΌ θΎε·²ε?ζοΌθ―·ε¨ζζΊδΈη»§η»­ζ’ε€',
                notCloseApp: 'δΈΊδΊδΏθ―θ―ε₯½ηη½η»ιΎζ₯οΌθ―·δΈθ¦ε³ι­ιιεε¬',
                transError: 'δΌ θΎεΊιοΌθ―·ιθ―',
                backuped: 'ε·²ε€δ»½',
                restoreed: 'ε·²θΏε',

                sendFail: '[ειε€±θ΄₯]',

                recording: 'ζ­£ε¨ε½ι³...',
                recordFinish: 'ε½ι³ε?ζ',

                noMicroPhone: 'ζͺζΎε°ιΊ¦ει£',
                noBroadcaster: 'ζͺζΎε°ζ­ζΎθ?Ύε€',

                recentChat: 'ζθΏθε€©',

                msgTooLong: 'εε?ΉθΏιΏοΌθ―·ε ι€ι¨εεε?Ήειθ―',

                shareLink: 'εδΊ«δΊδΈδΈͺιΎζ₯',

                hasBeenShutup: 'ε·²θ’«ηΎ€δΈ»η¦θ¨οΌθΏε© ',

                largeFileMsg: '[ε€§ζδ»Ά]',
                largeFile: 'ε€§ζδ»ΆδΌ θΎε©ζ',
                largeFilePC: 'ε€§ζδ»ΆδΌ θΎε©ζ(δ»ε±εη½PCι΄)',
                largeFIleMsgTip: '(δ»ιεδΈε±εη½PCη«―ζ₯ζΆ)',
                receiveFileTitle: 'ζ₯θͺ{name}ηζ₯ζΆδΊι‘Ή',
                dragFileTips: 'ζζ½ζδ»ΆοΌζδ»Άε€ΉοΌε°ζ­€ζθηΉε»ζ·»ε ζι?',
                deleteFile: 'ε ι€',

                messageManager: 'ζΆζ―η?‘ηε¨',
                contacts: 'θη³»δΊΊ',
                addressBook: 'ιθ?―ε½',
                content: 'εε?Ή',
                searchRange: 'ζ₯ζΎθε΄',

                all: 'ε¨ι¨',
                recentOneMonth: 'ζθΏδΈδΈͺζ',
                recentThreeMonth: 'ζθΏδΈδΈͺζ',
                recentOneYear: 'ζθΏδΈεΉ΄',

                searchText: 'ζ₯ηζζ¬',
                searchFile: 'ζ₯ηζδ»Ά',

                remark: 'ε€ζ³¨',
                notSupportSendFileDir: 'ε―ΉδΈθ΅·οΌζζΆδΈζ―ζειζδ»Άε€Ήγθ―·δ½Ώη¨ε€§ζδ»ΆδΌ ιεθ½ειζδ»Άε€Ήγ',

                fileMsgHistory: 'ζδ»Ά[{name}]οΌθ―·ε¨θε€©ηͺε£ζ₯η',

                allResult: 'ε¨ι¨η»ζ',

                imgView: 'εΎηζ₯ηε¨',
                sourceSize: 'ε?ιε°Ίε―Έ',
                optimumSize: 'ζδ½³ζ―δΎ',
                zoomout: 'ζΎε€§',
                zoomin: 'ηΌ©ε°',
                prevImg: 'δΈδΈεΌ ',
                nextImg: 'δΈδΈεΌ ',
                rotateAntiWise: 'ιζΆιζθ½¬90εΊ¦',
                rotateWise: 'ι‘ΊζΆιζθ½¬90εΊ¦',
                saveImg: 'δΏε­',
                saveSuccess: 'δΏε­ζε',
                imageLoadFail: 'ζ ζ³ε θ½½εΎη',
                lastImg: 'ε·²η»ζ―ζεδΈεΌ εΎη',
                firstImg: 'ε·²η»ζ―η¬¬δΈεΌ εΎη',

                loadingMsg: 'ζΆζ―ε θ½½δΈ­',

                receiveStatus: 'ζ₯ηζ₯ζΆηΆζ',
                receive: 'ζ₯ζΆ',
                reject: 'ζη»',
                cancelReceive: 'εζΆζ₯ζΆ',
                reReceive: 'ιζ°ζ₯ζΆ',
                stillReceive: 'δ»ηΆζ₯ζΆ',
                hasReject: 'ε·²ζη»',
                waitReceive: 'η­εΎζ₯ζΆ',
                receiveError: 'ζ₯ζΆδΈ­ζ­',
                receiveComplete: 'ε·²ζ₯ζΆ',
                intranetPicTips: 'ε½εδΈΊεη½η―ε’οΌθ―₯εΎδ»ιεη½η¨ζ·ζ₯η',
                senderCancel: 'ειζΉεζΆει',
                cancelLargeFile: 'εζΆει',
                receiveCancel: 'ε―ΉζΉεζΆζ₯ζΆ',
                cancelLargeFileMsgInSender: 'ζ¨ε·²εζΆειε€§ζδ»Ά',
                cancelLargeFileMsgInReceiver: 'ε·²εζΆειε€§ζδ»Ά',
                fileTransfering: 'ζζδ»Άζ­£ε¨δΌ θΎοΌη‘?ε?θ¦ιεΊοΌ',

                unreadMsg: 'ζ‘ζͺθ―»ζΆζ―',
                newMsg: 'ζ‘ζ°ζΆζ―',

                'btn.face': 'ζε₯θ‘¨ζ',
                'btn.file': 'ειζδ»Ά',
                'btn.img': 'ζε₯εΎη',
                'btn.voice': 'εΌε§ε½ι³',
                'btn.capture': 'ζͺεΎ',
                'btn.history': 'ζΆζ―θ?°ε½',

                offlineTip: 'ιιε·²η¦»ηΊΏοΌθ―·ζ£ζ₯η½η»',

                paste: 'η²θ΄΄',

                minwin: 'ζε°ε',
                restorewin: 'εδΈθΏε',
                maxwin: 'ζε€§ε',

                error107: 'ζδ»ΆδΈε­ε¨',
                error108: 'ζδ»Άε€ΉδΈε­ε¨',
                error8: 'ζ ζ³εΌε―ζδ»Άειη«―ε£οΌθ―·ζ£ζ₯η½η»ζι²η«ε’θ?Ύη½?',
                loginError100: 'η¨ζ·δΈε­ε¨',
                loginError12: 'η¨ζ·εζε―η ιθ――',
                loginError2: 'η¨ζ·εζε―η ιθ――',
                loginError10: 'η½η»εΌεΈΈ',
                loginError15: 'ζ¨ηθ΄¦ε·ε·²η»ε½οΌζ ζ³ιε€η»ε½γ',
                loginError16: 'θ―·θΎε₯ζ­£η‘?ηιͺθ―η ',
                noStaffs: 'ζιι¨ι¨ζ²‘ζεε·₯οΌζ ζ³εε»ΊηΎ€θ',
                saveImgPifx: 'ιιεΎη',
                leaveGroupConfirm: 'ζ―ε¦η‘?θ?€ιεΊθ―₯ηΎ€οΌ',
                imageWasWithDrawBySender: 'εΎηε·²θ’«ζ€ε',
                noMessage: 'ζ²‘ζθε€©θ?°ε½',
                noSearchMsg: 'ζ²‘ζζη΄’ε°ηΈε³ζΆζ―',
                outOfToken: 'θΊ«δ»½ε·²θΏζοΌθ―·ιζ°η»ε½γ',
                clear: 'ζΈε±',
                cut: 'εͺε',
                deleteContent: 'ε ι€',
                fileTooLarge: 'ζδ»Άε€§ε°θΆθΏ80MοΌθ―·δ½Ώη¨ε€§ζδ»ΆδΌ θΎε©ζει',
                tooLargeFile: 'ε­ε¨θΆθΏ80Mηζδ»Άζ ζ³ειοΌθ―·δ½Ώη¨ε€§ζδ»ΆδΌ θΎε©ζει'
            },
            en: {
                langName: 'English',
                unsupport: 'Browser not supported.',
                unsupportAd: 'Try Chrome or Firefox instead.',
                appName: 'ιιεε¬',
                newMessage: 'New Message',

                countryArea: 'Country/Area',
                phone: 'Mobile number',
                phone2: 'Phone',
                password: 'Password',
                InvitationCode: 'InvitationCode',
                captcha: 'ιͺθ―η ',
                loginButton: 'Log in',

                forget: 'Forgot password?',
                forgetTitle: 'Forgot password',
                forgetInfo: 'To change your password, contact the following staff:',
                tel: 'Tel:',
                wechat: 'Wechat:',
                QQ: 'QQ:',
                forgetLine1: 'Use Snail IM App,recover your password by clicking Forgot Password;Scan the QR Code and download the app now!',
                forgetLine2: '',

                search: 'Search',
                message: 'Message',
                concat: 'Contacts',
                organize: 'Personnel',
                department: 'Department',
                loadmore: 'More',

                startChat: 'Group chat',
                fcontacts: 'Frequent contacts',
                rcontacts: 'Recent contacts',
                friends: 'Friends',
                maxNum: 'Maximum number of members reached',
                forwardTitle: 'Forward',
                addStaff: 'Add staff',
                videoConference: 'video conference',
                BookAVideoConference: 'Book a video conference',
                noResult: 'No results found',
                noFrequentContacts: 'No frequent contacts found',
                noGroupChat: 'No group chats found',
                noRecentContacts: 'No recent contacts found',
                noFirends: 'No friends found',
                expand: 'Expand',
                collapse: 'Collapse',
                mineGroup: 'Mine Groups',

                turnOffNotif: 'Turn off notifications',
                turnOnNotif: 'Turn on notifications',
                turnOffSounds: 'Turn off notifications sounds',
                turnOnSounds: 'Turn on notifications sounds',
                downloadApp: 'Download app',
                updatePersonnel: 'Update personnel',
                exit: 'Exit',

                setTop: 'Stick on top',
                cancelTop: 'Remove from top',
                deleteChat: 'Remove',
                removeChat: 'η§»ι€εΉΆε ι€ζΆζ―',
                removeChatConfirm: 'η‘?ε?θ¦η§»ι€θ―₯θε€©εΉΆε ι€θ―₯θε€©ηζζθε€©θ?°ε½οΌ',
                forward: 'Forward',
                copy: 'Copy',

                groupName: 'Group name',
                saveToContacts: 'Save to contacts',
                stickOnTop: 'Stick on top',
                groupInfo: 'Chat history',
                groupOwner: 'Owner',
                leaveGroup: 'Leave',

                profile: 'Profile',
                firendProfile: 'Friend Profile',
                manager: 'Manager',
                profileDepartment: 'Department',
                sendMessage: 'Send message',
                sendEmail: 'Send email',
                sendGroupEmail: 'Send group email',

                loginFail: 'Incorrect phone number or password',
                failCreateRoom: 'Failed to create group',
                audioFailed: 'Failed to play the audio',
                videoFailed: 'Failed to play the video',
                maxUpload: 'Upload a file no larger than',
                mb: 'MB',
                zeroFile: 'Incorrect file size. Unable to upload.',
                maxMembers: 'The maximum number of members is 80',
                selectStaff: 'Select a staff',
                confirmForward: 'Are you sure that you want to forward the message?',
                errorGroupName: 'Group name must be no more than 16 characters',
                errorEmjgroupName: 'Group name does not support emoji',
                leaveError: 'Group leader cannot leave the group',
                uploading: 'Uploading picturesβ¦',
                imageError: 'Failed to load pictures',
                unknownPhone: 'This phone number has not been registered yet.',
                unknownLoginError: 'Unknown error. Contact the Admin.',
                incorrectPhone: 'Incorrect phone number',
                sendMsgTips: 'Press Ctrl-Enter to start a new line',
                closeBrowser: 'You\'ll lose your chats after closing the browser.',
                webuploaderError: 'Webuploader error. Try again later.',
                loginInOther: 'ηΈεθ΄¦ε·ε¨εΆδ»ε°ζΉη»ε½,ζ¨ε·²ιεΊ!',

                xxpb: '(',
                xxpe: ')',

                downloadViewTitle: 'Downloads IM App',
                scanQr: 'Scan the QR Code and download now!',
                downloadTips: '(Available on iOS and Android)',

                uploadingViewTitle: 'Send picture',

                am: 'A.M.',
                pm: 'P.M.',
                draft: '[Draft]',
                someoneAt: '[Someone mentioned me]',
                atedby: ' mentioned you',
                changeGroupName: ' has changed the group name to',
                removedMember: ' was removed out of the group',
                removedMemberAdminStart: 'You removed ',
                removedMemberAdminEnd: ' out of the group',
                leftGroup: ' left the group',
                addGroup: ' were added to the group',
                invitedIntoGroup: ' have invited ',
                invitedIntoGroupEnd: ' into the group',
                you: 'You',
                download: 'Download',

                file: '[File]',
                img: '[Image]',
                video: '[Video]',
                audio: '[Audio]',
                link: '[Link]',

                languageSettingTitle: 'Language Setting',
                languageSettingTip: 'Click image to set Language',
                languageSettingTitle1: 'θ―­θ¨θ?Ύη½?',

                joinEnt: 'ε ε₯δΊ',
                inviteEnt: 'ιθ―·δ½ ε ε₯ε¬εΈ',
                voiceConference: 'Voice conference',
                invitedIntoMetting: ' attend voice conference , please check on your mobile phone.',
                invitedIntoMettingInSender: ' εθ΅·δΊθ―­ι³δΌθ??οΌθ―·ε¨ζζΊδΈζ₯ηγ',
                seeInMobile: 'please check it on your phone.',

                loading: 'loading...',
                serviceNumber: 'Service number',
                noChat: 'No Content',
                start: 'Get Start',
                send: 'Send',
                cancel: 'Cancel',
                back: 'Back',
                group: 'Group',
                confirm: 'Confirm',

                userName: 'Name',
                userPost: 'Post',
                userEntEmail: 'Company Email',
                userEmpNo: 'EmpNo',
                userAddress: 'Address',
                userDept: 'Department',
                userLeader: 'Leader',
                weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                yesterday: 'yesterday',
                thedaybeforeyesterday: 'the day before yesterday',
                stranger: 'stranger',
                broad: 'broad',
                addToFriends: 'Add to friend',
                addToFrequents: 'Add to frequent',
                removeFriends: 'Remove friend',
                removeFrequents: 'Remove from frequent',
                msgdisturb: 'Message Don\'t disturb',
                noSign: 'No Contents',
                shutUpAction: ' have been banned',
                shutUpWarn: ' have been banned , please try later',
                minutes: 'minutes',
                forever: 'forever',
                shutUpForever: ' have been banned forever',
                cancelShutUp: 'can speak now',
                banned: 'banned',
                loginFail: 'Phone number or password incorrect',
                requestError: 'Request error, please try again later',
                connectServer: 'connecting server...',
                connectSuccess: 'Server connection success',
                connectFail: 'Server connection fail',
                afterSSOSuccess: 'Verify successful , connection to chat server',
                loginSuccess: 'Chat server connection is successful, waiting for initialization',
                sessionExpired: 'Session expired , Please log in again',
                chatServerTimeout: 'Chat server connection timed out, please try again later',
                downApp: 'Download Jingjing',
                companyLogin: 'Company Login',
                appNameWeb: 'Web Jingjing',
                china: 'China',
                taiwan: 'Taiwan',
                usa: 'U.S.A',
                korea: 'Korea',
                russia: 'Russia',
                japan: 'Japan',
                deptLoading: 'Personnel data loading...',
                withDrawMsg: 'withdrew a message',
                withDraw: 'Withdraw',
                canNotWithDraw: 'More than 2 minutes can not be withdrawn',
                privacyAttention: ' not your friends or colleagues, please pay attention to the protection of privacy',
                loadMoreMsg: 'ζ΄ε€ζΆζ―θ―·ε¨θε€©θ?°ε½δΈ­ζ₯η',
                openRecords: 'ζεΌζΆζ―θ?°ε½',
                seeDetail: 'ζ₯ηθ―¦ζ',

                cancelUpload: 'δΌ θΎε·²εζΆ',
                reupload: 'ιζ°δΈδΌ ',
                open: 'ζεΌ',
                openDir: 'ζεΌζδ»Άε€Ή',
                fileCacheDay: 'ζδ»Άζε­7ε€©',
                receiverDonwloaded: 'ε―ΉζΉε·²ζ₯ζΆ',
                fileSendFail: 'ζδ»Άειε€±θ΄₯',

                cancelDownload: 'εζΆδΈθ½½',
                reDownload: 'ιζ°δΈθ½½',
                cancelTrans: 'δΌ θΎε·²εζΆ',
                downloaded: 'ζ₯ζΆζε',
                downloadFail: 'δΈθ½½ε€±θ΄₯',
                transFail: 'δΌ θΎε€±θ΄₯',
                saveAs: 'ε¦ε­δΈΊ',
                fileOutOfDay: 'ζδ»Άε·²θΏζ',
                allFiles: 'All Files|*.*',
                imageFiles: 'Images|*.png;*.jpg;*.gif',

                setting: 'Setting',
                about: 'About',
                switchAccount: 'Switch Account',
                quit: 'Quit',

                serviceAccount: 'ζε‘ε·',
                fdepts: 'εΈΈη¨ι¨ι¨',
                fgroups: 'εΈΈη¨ηΎ€θ ',
                entCharger: 'δΌδΈθ΄θ΄£δΊΊ',
                entEmpCount: 'δΌδΈζ»δΊΊζ°',

                deptLeader: 'ι¨ι¨δΈ»η?‘',
                deptDirector: 'εη?‘ι’ε―Ό',
                deptEmpCount: 'ι¨ι¨δΊΊζ°',
                noEmp: 'ζζ ',

                'ent.userName': 'ε§ε',
                'ent.job': 'θδ½',
                'ent.email': 'δΌδΈι?η?±',
                'ent.empNo': 'ε·₯ε·',
                'ent.depts': 'η»η»ζΆζ',
                'ent.leader': 'η΄ζ₯δΈ»η?‘',
                'user.userName': 'ε§ε',
                'user.mobile': 'η΅θ―',
                'user.email': 'ι?η?±',
                'user.noSignature': 'θΏε?ΆδΌεΎζ,δ»δΉι½ζ²‘ζηδΈ...',

                favoriteDept: 'ζ·»ε εΈΈη¨ι¨ι¨',
                favoriteEmp: 'ζ·»ε εΈΈη¨θη³»δΊΊ',
                sendInstantMessage: 'ειε³ζΆζΆζ―',
                refreshEnts: 'ε·ζ°η»η»ζΆζ',

                setUserToFavorite: 'ζ·»ε εΈΈη¨θη³»δΊΊ',
                setGroupToFavorite: 'ζ·»ε εΈΈη¨ηΎ€θ',
                cancelUserToFavorite: 'η§»ι€εΈΈη¨θη³»δΊΊ',
                cancelGroupToFavorite: 'η§»ι€εΈΈη¨ηΎ€θ',
                cancelDeptToFavorite: 'η§»ι€εΈΈη¨ι¨ι¨',

                goback: '<θΏε',
                broadDetailTitle: 'εΉΏζ­θ―¦ζ',

                quitGroup: 'quit group chat',
                chooseUser: 'ιζ©ηΎ€θζε',

                selectedUsers: 'ε·²ιζ©ζεοΌ',
                selectedUsersUnit: 'δΊΊ',

                clickToEditEmail: 'click  to edit email',

                account: 'θ΄¦ε·',
                serviceLogin: 'ζε‘ε·η»ε½',
                autoLogin: 'θͺε¨η»ε½',
                resetPwd: 'ιη½?ε―η ',
                pwdLogin: 'ε―η η»ε½',
                register: 'ζ³¨ε',
                smsCode: 'ιͺθ―η ',
                wrongSmsCode: 'ιͺθ―η ιθ――',
                blankSmsCode: 'θ―·θΎε₯ιͺθ―η ',
                diffPassword: 'δΈ€ζ¬‘θΎε₯ηε―η δΈδΈθ΄',
                alreadyInUse: 'ζζΊε·ε·²η»θ’«δ½Ώη¨',
                writeInvitationCode: 'θ―·ε‘«ειθ―·η ',
                finish: 'ε?ζ',
                next: 'δΈδΈζ­₯',
                skip: 'θ·³θΏ',
                getCode: 'θ·ειͺθ―η ',
                countDown: '{d}η§ειζ°θ·ε',
                newPwd: 'ζ°ε―η ',
                confirmNewPwd: 'εζ¬‘θΎε₯ζ°ε―η ',
                confirmPwd: 'η‘?θ?€ε―η ',
                repeatPwd: 'εζ¬‘θΎε₯ε―η ',

                safeTipTitle: 'ε?ε¨ζη€Ί',
                safeTipContentLine1: 'ε¬ε±η―ε’θ―·εΏεΌε―θͺε¨η»ε½εθ½οΌ',
                safeTipContentLine2: 'δ»₯εζ°ζ?ζ³ι²',
                donNotOpen: 'δΈεΌε―',
                confirmOpen: 'η‘?θ?€εΌε―',

                forgetPwdTitle: 'εΏθ?°ε―η ',
                forgetPwdContentLine1: 'θ―·ιη₯ζ»η?‘ηεοΌη»ε½η?‘ηεε°ιη½?',
                forgetPwdContentLine2: 'ε―η http://mgr.jj.snail.com',
                getThat: 'ζη₯ιδΊ',

                loadEntError: 'η»η»ζΆζε θ½½ιθ――',
                clickToRetry: 'ηΉζ­€ιζ°ε θ½½',

                'setting.login': 'η»ε½',
                'setting.hotkey': 'η­ι?',
                'setting.sound': 'ε£°ι³',
                'setting.backup': 'θε€©ε€δ»½',
                autoStart: 'εΌζΊθͺε¨ε―ε¨',
                getMsg: 'ζεζΆζ―',
                showMainIframe: 'ζΎη€ΊδΈ»ι’ζΏ',
                capture: 'ζζε±εΉ',
                quickSend: 'εΏ«ιει',
                recordingVoice: 'θ―­ι³ζι?θ―΄θ―',
                openChatHistory: 'ζεΌθε€©θ?°ε½',
                setToDefault: 'ζ’ε€ι»θ?€θ?Ύη½?',
                sendMsgHotKey: 'δΌθ―ηͺε£ειζΆζ―',
                hasSameHotKey: 'ε²ηͺ',
                CESend: 'ζCtrl+Enterι?',
                ESend: 'Enterι?',
                closeTone: 'ε³ι­ζΆζ―ζη€Ίι³',
                backupToPC: 'ε€δ»½ε°η΅θ',
                backupBtn: 'ε€δ»½',
                recoverToPhone: 'ζ’ε€ε°ζζΊ',
                recoverBtn: 'ζ’ε€',
                managerBackup: 'η?‘ηε€δ»½',
                managerBackupBtn: 'η?‘η',

                close: 'ε³ι­',
                scanQrCode: 'ζ«δΊη»΄η δΈθ½½ζζΊη',
                copyRight: 'θε·θηζ°ε­η§ζθ‘δ»½ζιε¬εΈΒ©ηζζζ',

                backupTips: 'θ―·ε¨ζζΊδΈη‘?θ?€οΌδ»₯εΌε§ε€δ»½',
                restoreTips: 'θ―·ε¨ζζΊδΈη‘?θ?€οΌδ»₯εΌε§θΏε',
                managerTips: 'ε°ζη€ΊοΌδΏ?ζΉε€δ»½ε­ε¨η?ε½ε°δΌθΏη§»ζζε·²ε­ε¨ηε€δ»½οΌζδΈζ―ζδΈ­ζθ·―εΎ',
                currentBackUpDir: 'ε€δ»½ε­ε¨δ½η½?η?ε½οΌ',
                modify: 'ζ΄ζΉ',
                backupName: 'ε€δ»½εη§°',
                firstBackupTime: 'ι¦ζ¬‘ε€δ»½ζΆι΄',
                lastBackupTime: 'δΈζ¬‘ε€δ»½ζΆι΄',
                operate: 'ζδ½',
                deleteBackup: 'ε ι€ε€δ»½',

                backupComplete: 'ε€δ»½ε·²ε?ζ',
                restoreComplete: 'δΌ θΎε·²ε?ζοΌθ―·ε¨ζζΊδΈη»§η»­ζ’ε€',
                notCloseApp: 'δΈΊδΊδΏθ―θ―ε₯½ηη½η»ιΎζ₯οΌθ―·δΈθ¦ε³ι­ιιεε¬',
                backuped: 'ε·²ε€δ»½',
                restoreed: 'ε·²θΏε',

                sendFail: '[ειε€±θ΄₯]',

                recording: 'ζ­£ε¨ε½ι³...',
                recordFinish: 'ε½ι³ε?ζ',

                noMicroPhone: 'ζͺζΎε°ιΊ¦ει£',
                noBroadcaster: 'ζͺζΎε°ζ­ζΎθ?Ύε€',

                recentChat: 'ζθΏθε€©',

                msgTooLong: 'εε?ΉθΏιΏοΌθ―·ε ι€ι¨εεε?Ήειθ―',

                shareLink: 'εδΊ«δΊδΈδΈͺιΎζ₯',

                hasBeenShutup: 'ε·²θ’«ηΎ€δΈ»η¦θ¨οΌθΏε© ',

                largeFileMsg: '[ε€§ζδ»Ά]',
                largeFile: 'ε€§ζδ»ΆδΌ θΎε©ζ',
                largeFilePC: 'ε€§ζδ»ΆδΌ θΎε©ζ(δ»ε±εη½PCι΄)',
                largeFIleMsgTip: '(δ»ιεδΈε±εη½PCη«―ζ₯ζΆ)',
                receiveFileTitle: 'ζ₯θͺ{name}ηζ₯ζΆδΊι‘Ή',
                stillReceive: 'δ»ηΆζ₯ζΆ',
                hasReject: 'ε·²ζη»',
                waitReceive: 'η­εΎζ₯ζΆ',
                receiveError: 'ζ₯ζΆδΈ­ζ­',
                dragFileTips: 'ζζ½ζδ»ΆοΌζδ»Άε€ΉοΌε°ζ­€ζθηΉε»ζ·»ε ζι?',
                deleteFile: 'ε ι€',

                messageManager: 'ζΆζ―η?‘ηε¨',
                contacts: 'θη³»δΊΊ',
                addressBook: 'ιθ?―ε½',
                content: 'εε?Ή',
                searchRange: 'ζ₯ζΎθε΄',

                all: 'ε¨ι¨',
                recentOneMonth: 'ζθΏδΈδΈͺζ',
                recentThreeMonth: 'ζθΏδΈδΈͺζ',
                recentOneYear: 'ζθΏδΈεΉ΄',

                text: 'ζ₯ηζζ¬',
                file: 'ζ₯ηζδ»Ά',

                remark: 'ε€ζ³¨',
                notSupportSendFileDir: 'ε―ΉδΈθ΅·οΌζζΆδΈζ―ζειζδ»Άε€Ήγθ―·δ½Ώη¨ε€§ζδ»ΆδΌ ιεθ½ειζδ»Άε€Ήγ',

                fileMsgHistory: 'ζδ»Ά[{name}]οΌθ―·ε¨θε€©ηͺε£ζ₯η',
                allResult: 'ε¨ι¨η»ζ',

                imgView: 'εΎηζ₯ηε¨',
                sourceSize: 'ε?ιε°Ίε―Έ',
                optimumSize: 'ζδ½³ζ―δΎ',
                zoomout: 'ζΎε€§',
                zoomin: 'ηΌ©ε°',
                prevImg: 'δΈδΈεΌ ',
                nextImg: 'δΈδΈεΌ ',
                rotateAntiWise: 'ιζΆιζθ½¬90εΊ¦',
                rotateWise: 'ι‘ΊζΆιζθ½¬90εΊ¦',
                saveImg: 'δΏε­',
                saveSuccess: 'δΏε­ζε',
                imageLoadFail: 'ζ ζ³ε θ½½εΎη',
                lastImg: 'ε·²η»ζ―ζεδΈεΌ εΎη',
                firstImg: 'ε·²η»ζ―η¬¬δΈεΌ εΎη',

                loadingMsg: 'ζΆζ―ε θ½½δΈ­',

                receiveStatus: 'ζ₯ηζ₯ζΆηΆζ',
                receive: 'ζ₯ζΆ',
                reject: 'ζη»',
                cancelReceive: 'εζΆζ₯ζΆ',
                reReceive: 'ιζ°ζ₯ζΆ',
                stillReceive: 'δ»ηΆζ₯ζΆ',
                hasReject: 'ε·²ζη»',
                waitReceive: 'η­εΎζ₯ζΆ',
                receiveError: 'ζ₯ζΆδΈ­ζ­',
                receiveComplete: 'ε·²ζ₯ζΆ',
                intranetPicTips: 'ε½εδΈΊεη½η―ε’οΌθ―₯εΎδ»ιεη½η¨ζ·ζ₯η',
                senderCancel: 'ειζΉεζΆει',
                cancelLargeFile: 'εζΆει',
                receiveCancel: 'ε―ΉζΉεζΆζ₯ζΆ',
                cancelLargeFileMsgInSender: 'ζ¨ε·²εζΆειε€§ζδ»Ά',
                cancelLargeFileMsgInReceiver: 'ε·²εζΆειε€§ζδ»Ά',
                fileTransfering: 'ζζδ»Άζ­£ε¨δΌ θΎοΌη‘?ε?θ¦ιεΊοΌ',

                unreadMsg: 'ζ‘ζͺθ―»ζΆζ―',
                newMsg: 'ζ‘ζ°ζΆζ―',

                'btn.face': 'ζε₯θ‘¨ζ',
                'btn.file': 'ειζδ»Ά',
                'btn.img': 'ζε₯εΎη',
                'btn.voice': 'εΌε§ε½ι³',
                'btn.capture': 'ζͺεΎ',
                'btn.history': 'ζΆζ―θ?°ε½',

                offlineTip: 'ιιε·²η¦»ηΊΏοΌθ―·ζ£ζ₯η½η»',
                paste: 'η²θ΄΄',

                minwin: 'ζε°ε',
                restorewin: 'εδΈθΏε',
                maxwin: 'ζε€§ε',

                error107: 'ζδ»ΆδΈε­ε¨',
                error108: 'ζδ»Άε€ΉδΈε­ε¨',
                error8: 'ζ ζ³εΌε―ζδ»Άειη«―ε£οΌθ―·ζ£ζ₯η½η»ζι²η«ε’θ?Ύη½?',
                loginError2: 'η¨ζ·εζε―η ιθ――',
                loginError12: 'η¨ζ·εζε―η ιθ――',
                loginError10: 'η½η»εΌεΈΈ',
                loginError15: 'ζ¨ηθ΄¦ε·ε·²η»ε½οΌζ ζ³ιε€η»ε½γ',
                loginError16: 'θ―·θΎε₯ζ­£η‘?ηιͺθ―η ',
                loginError100: 'η¨ζ·δΈε­ε¨',
                noStaffs: 'ζιι¨ι¨ζ²‘ζεε·₯οΌζ ζ³εε»ΊηΎ€θ',
                saveImgPifx: 'ιιεΎη',
                leaveGroupConfirm: 'ζ―ε¦η‘?θ?€ιεΊθ―₯ηΎ€οΌ',
                imageWasWithDrawBySender: 'εΎηε·²θ’«ζ€ε',
                noMessage: 'ζ²‘ζθε€©θ?°ε½',
                noSearchMsg: 'ζ²‘ζζη΄’ε°ηΈε³ζΆζ―',
                outOfToken: 'θΊ«δ»½ε·²θΏζοΌθ―·ιζ°η»ε½γ',
                clear: 'ζΈε±',
                cut: 'cut',
                deleteContent: 'delete',
                fileTooLarge: 'ζδ»Άε€§ε°θΆθΏ80MοΌθ―·δ½Ώη¨ε€§ζδ»ΆδΌ θΎε©ζει',
                tooLargeFile: 'ε­ε¨θΆθΏ80Mηζδ»Άζ ζ³ειοΌθ―·δ½Ώη¨ε€§ζδ»ΆδΌ θΎε©ζει'
            }
        }
        var langs = [];
        for (var p in LANGMAP) {
            langs.push({
                langName: LANGMAP[p].langName,
                langValue: p
            });
        }
        var obj = {
            langs: langs,
            setLang: function (_lang) {
                utils.setLs('lang', _lang);
                // lang = _lang;
            },
            getLang: function () {
                // if(lang) return lang;
                return utils.getLs('lang') || 'cn';
            },
            getKey: function (key, returnBlank) {
                var _l = this.getLang();
                if (LANGMAP[_l] && LANGMAP[_l][key] !== undefined) {
                    return LANGMAP[_l][key];
                }
                return !returnBlank ? key : '';
            },
            isSeted: function () {
                if (!(utils.getLs('lang'))) return false;
                return true;
            }
        }
        return obj;
    },
    webConfig: {
        user: {},
        setUser: function (_user) {
            if (_user.STicket) {
                token = _user.STicket;
            }
            if (!_user.STicket && token) {
                _user.STicket = token;
            }
            this.user.SUserId = _user.Id;
            this.user = _user;
        },

        // ζΆζ―η±»ε
        MSG_TEXT_TYPE: 'text',
        MSG_VOICE_TYPE: 'voice',
        MSG_VIDEO_TYPE: 'video',
        MSG_SYSTEM_TYPE: 'system',
        MSG_FILE_TYPE: 'file',
        MSG_PIC_TYPE: 'image',
        MSG_NEWS_TYPE: 'news',
        MSG_METTING_TYPE: 'metting',
        MSG_HTML_TYPE: 'html',
        MSG_READMSG_TYPE: 'readmsg',
        MSG_CLEAR_TYPE: 'clear',
        MSG_SERVICE_TYPE: 'service',
        MSG_NAME: 'msg',
        // ε€εͺδ½ζΆζ―ζ―ε¦ε¨ζ­ζΎ
        MSG_ISPLAYING: false,
        getUser: function (userId) {
            this.user = {
                "Avatar": require("../../src/assets/images/user_D.png"),
                "Gender": 0, "Mobile": "+8617749721923", "Email": "", "Status": 0, "Address": "", "Birthday": "", "Signature": "", "NickName": null, "PrivacyType": 0, "Staffs": [{ "No": "WN9799", "UserId": "f43245bd9824430b973fbf57320bb38b", "Company": { "Owner": null, "Id": "ff808081581b3e2801581b47dd4e0000", "Name": "θηζΈΈζ" }, "Type": 0, "Leader": { "No": "WN2557", "UserId": "1130b4ea7eb74fd5b5b1f23994925ef5", "Company": { "Owner": null, "Id": "ff808081581b3e2801581b47dd4e0000", "Name": "θηζΈΈζ" }, "Type": 0, "Leader": { "No": "WN3891", "UserId": "82d6cfb16c274461a59518d2b358346e", "Company": null, "Type": 0, "Leader": null, "JobTitle": "θΏη»΄ζ»η", "Email": "zhaoym@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": null, "ExtendProps": [{ "Key": "ζηΊ§", "Value": "ββββ" }, { "Key": "ε·₯δ½ε°ηΉ", "Value": "171" }], "ExtendPropsAfterName": ["ββββ"], "Id": "82d6cfb16c274461a59518d2b35834", "Name": "θ΅΅δΊζ" }, "JobTitle": "ITι«ηΊ§η»η", "Email": "lvxl@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": null, "ExtendProps": [{ "Key": "ζηΊ§", "Value": "ββ" }], "ExtendPropsAfterName": ["ββ"], "Id": "1130b4ea7eb74fd5b5b1f23994925e", "Name": "εε°ιΎ" }, "JobTitle": "WEBεη«―", "Email": "xingxin@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": [{ "Leader": null, "Director": null, "LevelInfo": "θηε¬εΈ\\θηζΈΈζ\\η?‘ηζΆζ\\η?‘η\\ITδΈ­εΏ\\ιιεε¬", "AllStaffCount": null, "Children": null, "Staffs": null, "CompanyId": "ff808081581b3e2801581b47dd4e0000", "IsMain": 1, "Id": "1d5792a38bf64834b12b70c9f8e7d92a", "Name": "ιιεε¬" }], "ExtendProps": [{ "Key": "ζηΊ§", "Value": "" }, { "Key": "ε·₯δ½ε°ηΉ", "Value": "" }], "ExtendPropsAfterName": null, "Id": "f43245bd9824430b973fbf57320bb3", "Name": "ι’ι«" }, { "No": "", "UserId": "f43245bd9824430b973fbf57320bb38b", "Company": { "Owner": null, "Id": "ff80808178f8a3550179f8da50b000bf", "Name": "abc" }, "Type": 0, "Leader": null, "JobTitle": "", "Email": "", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": [{ "Leader": null, "Director": null, "LevelInfo": "abc", "AllStaffCount": null, "Children": null, "Staffs": null, "CompanyId": "ff80808178f8a3550179f8da50b000bf", "IsMain": 1, "Id": "ff80808178f8a3550179f8da50d800c3", "Name": "abc" }], "ExtendProps": null, "ExtendPropsAfterName": null, "Id": "ff80808178f8a3550179f8da50b800c0", "Name": "ι’ι«" }], "Privacy": null, "AvatarMD5": "", "Favorite": 0, "BannedTimeLeft": 0, "IMStatus": 1, "Token": "TGT-2142-zjPJRfFUuewh7nZt0hEMdaCSKhDGa1aj4joes12AKoDMcDDkqn-oa.sso.woniu.com", "Password": null, "Code": null, "AutoLogin": true, "ValidateCodeId": null, "ValidateCode": null, "InvitationCode": null, "Type": 0, "Id": "f43245bd9824430b973fbf57320bb38b", "Name": "ι’ι«"
            };
            return this.user;
        },
    },
    chatService: {
        getChats(page, pageSize, callback) {
            let that = this;
            let chatList = [
                // { "Type": 1002, "MsgContent": "[εΎη]", "MsgType": 4, "MsgStatus": 1, "MsgTimestamp": 1654133988256, "UnreadMsgCount": 1, "ReadTimestamp": 1654062602335, "Sticky": 0, "Undisturbed": 0, "MsgSenderId": "d6de88cdd0be414ba9b4c44269c4de25", "MsgSenderName": "δΈ₯θΎζ", "AtMeTimestamp": 0, "IsEncryption": 0, "Avatar": require("../../src/assets/images/women.png"), "Favorite": 0, "MemberCount": 12, "IMStatus": 1, "Id": "group_1130b4ea7eb74fd5b5b1f23994925ef5_1615253903620", "Name": "ιιεε¬εΌεη»", "isGroup": true, "ActiveTimestamp": 1654133986842, "id": "group_1130b4ea7eb74fd5b5b1f23994925ef5_1615253903620", "index": 0, "_h": 64, "_offsetTop": 0, "_senderName": "δΈ₯θΎζ", "LastMsgId": "d6de88cdd0be414ba9b4c44269c4de25_1654133987660", "firstUnReadId": "d6de88cdd0be414ba9b4c44269c4de25_1654133987660" },
                {
                    ActiveTimestamp: 1655360696444,
                    AtMeTimestamp: 0,
                    Avatar: require("../../src/assets/images/group_icon.png"),
                    Favorite: 0,
                    IMStatus: 1,
                    Id: "group_d2c28119863f4a2f8bdd2f0dc393f3f4_1653638892828",
                    IsEncryption: 0,
                    MemberCount: 5,
                    MsgContent: "[εΎ?η¬]ζ΅θ―ζΆζ―",
                    MsgSenderId: "8f31027c967d4bdfaca19d2146e8aedf",
                    MsgSenderName: "ζ±ηιͺ",
                    MsgStatus: 1,
                    MsgTimestamp: 1655360696444,
                    MsgType: 0,
                    Name: "εε°ιΎ,ζ±ηιͺ,ζ’θ,δ½δ½³η,ι’ι«",
                    ReadTimestamp: 1655360696444,
                    Sticky: 0,
                    Type: 1002,
                    Undisturbed: 0,
                    UnreadMsgCount: 100,
                    id: "group_d2c28119863f4a2f8bdd2f0dc393f3f4_1653638892828",
                    index: 0,
                    isGroup: true,
                    _h: 64,
                    _offsetTop: 0,
                }, {
                    ActiveTimestamp: 1654050044124,
                    AtMeTimestamp: 0,
                    Avatar: require("../../src/assets/images/user_B.png"),
                    Favorite: 1,
                    IMStatus: 1,
                    Id: "5bfcdc99aa55498aa1c5da6be672c136",
                    IsEncryption: 0,
                    MemberCount: 1,
                    MsgContent: "2[θ¦η¬][εΎ?η¬][εΎ?η¬][εΎ?η¬][εΎ?η¬][εΎ?η¬][εΎ?η¬]",
                    MsgSenderId: "f43245bd9824430b973fbf57320bb38b",
                    MsgSenderName: "ι’ι«",
                    MsgStatus: 1,
                    MsgTimestamp: 1654050044124,
                    MsgType: 0,
                    Name: "εΌ δΈ",
                    ReadTimestamp: 1654050044124,
                    Sticky: 0,
                    Type: 1000,
                    Undisturbed: 0,
                    UnreadMsgCount: 99,
                    id: "5bfcdc99aa55498aa1c5da6be672c136",
                    index: 0,
                    isGroup: false,
                    _h: 64,
                    _offsetTop: 0,
                },
                // { "Type": 1002, "MsgContent": "{\"multiplayer\":true,\"chatRoomId\":\"group_5bfcdc99aa55498aa1c5da6be672c136_1636694918551\",\"message\":\"θ§ι’δΌθ??ιθ―·\",\"n_TYPE\":10,\"voiceMeetingType\":\"invite\",\"voiceRoomKey\":\"f93560de-5134-8a55-8c95-1e1684f3ce58\"}", "MsgType": 10, "MsgStatus": 1, "MsgTimestamp": 1653873696662, "UnreadMsgCount": 0, "ReadTimestamp": 1653873696662, "Sticky": 0, "Undisturbed": 0, "MsgSenderId": "f43245bd9824430b973fbf57320bb38b", "MsgSenderName": "ι’ι«", "AtMeTimestamp": 0, "IsEncryption": 0, "Avatar": require("../../src/assets/images/women.png"), "Favorite": 0, "MemberCount": 10, "IMStatus": 1, "Id": "group_5bfcdc99aa55498aa1c5da6be672c136_1636694918551", "Name": "εε°ιΎ,ι©¬ζΆζΆ,δ½©ζ©,carl,123,ι»ε€ε?,yhh,δΈ₯θΎζ,θ°’δΉιΎ,ι’ι«", "isGroup": true, "ActiveTimestamp": 1653873696662, "id": "group_5bfcdc99aa55498aa1c5da6be672c136_1636694918551", "index": 8, "_senderName": "ι’ι«", "_h": 64, "_offsetTop": 512 }
            ];
            handlerChatList(chatList);
            this.chatList = handlerChatList(chatList);
            callback && callback(_res);
        },
        chatList: this.chatList,
        getChat(id, notCreate) {
            let that = this;
            for (var i = 0; i < this.chatList.length; i++) {
                if (id == this.chatList[i].Id) {
                    return this.chatList[i];
                }
            }
        },

    },
    concatService: {
        getUserDetail(id) {
            var userList = [
                { "Avatar": require("../../src/assets/images/user_D.png"), "Gender": 0, "Mobile": "+8617749721923", "Email": "", "Status": 0, "Address": "", "Birthday": "", "Signature": "", "NickName": null, "PrivacyType": 0, "Staffs": [{ "No": "WN9799", "UserId": "f43245bd9824430b973fbf57320bb38b", "Company": { "Owner": null, "Id": "ff808081581b3e2801581b47dd4e0000", "Name": "θηζΈΈζ" }, "Type": 0, "Leader": { "No": "WN2557", "UserId": "1130b4ea7eb74fd5b5b1f23994925ef5", "Company": { "Owner": null, "Id": "ff808081581b3e2801581b47dd4e0000", "Name": "θηζΈΈζ" }, "Type": 0, "Leader": { "No": "WN3891", "UserId": "82d6cfb16c274461a59518d2b358346e", "Company": null, "Type": 0, "Leader": null, "JobTitle": "θΏη»΄ζ»η", "Email": "zhaoym@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": null, "ExtendProps": [{ "Key": "ζηΊ§", "Value": "ββββ" }, { "Key": "ε·₯δ½ε°ηΉ", "Value": "171" }], "ExtendPropsAfterName": ["ββββ"], "Id": "82d6cfb16c274461a59518d2b35834", "Name": "θ΅΅δΊζ" }, "JobTitle": "ITι«ηΊ§η»η", "Email": "lvxl@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": null, "ExtendProps": [{ "Key": "ζηΊ§", "Value": "ββ" }], "ExtendPropsAfterName": ["ββ"], "Id": "1130b4ea7eb74fd5b5b1f23994925e", "Name": "εε°ιΎ" }, "JobTitle": "WEBεη«―", "Email": "xingxin@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": [{ "Leader": null, "Director": null, "LevelInfo": "θηε¬εΈ\\θηζΈΈζ\\η?‘ηζΆζ\\η?‘η\\ITδΈ­εΏ\\ιιεε¬", "AllStaffCount": null, "Children": null, "Staffs": null, "CompanyId": "ff808081581b3e2801581b47dd4e0000", "IsMain": 1, "Id": "1d5792a38bf64834b12b70c9f8e7d92a", "Name": "ιιεε¬" }], "ExtendProps": [{ "Key": "ζηΊ§", "Value": "" }, { "Key": "ε·₯δ½ε°ηΉ", "Value": "" }], "ExtendPropsAfterName": null, "Id": "f43245bd9824430b973fbf57320bb3", "Name": "ι’ι«" }, { "No": "", "UserId": "f43245bd9824430b973fbf57320bb38b", "Company": { "Owner": null, "Id": "ff80808178f8a3550179f8da50b000bf", "Name": "abc" }, "Type": 0, "Leader": null, "JobTitle": "", "Email": "", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": [{ "Leader": null, "Director": null, "LevelInfo": "abc", "AllStaffCount": null, "Children": null, "Staffs": null, "CompanyId": "ff80808178f8a3550179f8da50b000bf", "IsMain": 1, "Id": "ff80808178f8a3550179f8da50d800c3", "Name": "abc" }], "ExtendProps": null, "ExtendPropsAfterName": null, "Id": "ff80808178f8a3550179f8da50b800c0", "Name": "ι’ι«" }], "Privacy": null, "AvatarMD5": "", "Favorite": 0, "BannedTimeLeft": 0, "IMStatus": 1, "Token": "TGT-2142-zjPJRfFUuewh7nZt0hEMdaCSKhDGa1aj4joes12AKoDMcDDkqn-oa.sso.woniu.com", "Password": null, "Code": null, "AutoLogin": true, "ValidateCodeId": null, "ValidateCode": null, "InvitationCode": null, "Type": 0, "Id": "f43245bd9824430b973fbf57320bb38b", "Name": "ι’ι«" },
                {
                    Address: "",
                    AutoLogin: false,
                    Avatar: require("../../src/assets/images/user_B.png"),
                    AvatarMD5: "",
                    BannedTimeLeft: 0,
                    Birthday: "",
                    Code: null,
                    Email: "",
                    Favorite: 1,
                    Gender: 0,
                    IMStatus: 1,
                    Id: "5bfcdc99aa55498aa1c5da6be672c136",
                    InvitationCode: null,
                    Mobile: "+8613962524322",
                    Name: "εΌ δΈ",
                    NickName: null,
                    Password: null,
                    Privacy: [{
                        CompanyId: "ff8080816b4fb4ae016b69eb16410022",
                        CompanyName: "Snail Games USA",
                        CompanyPrivacy: 0,
                        Id: null,
                        JobTitle: "",
                        JobTitlePrivacy: 0,
                        Name: null,
                        Status: 1,
                        UserId: "5bfcdc99aa55498aa1c5da6be672c136",
                    },
                    {
                        CompanyId: "ff8080816b4fb4ae017186118687041b",
                        CompanyName: "IndiEV",
                        CompanyPrivacy: 1,
                        Id: null,
                        JobTitle: "",
                        JobTitlePrivacy: 1,
                        Name: null,
                        Status: 0,
                        UserId: "5bfcdc99aa55498aa1c5da6be672c136",
                    },
                    ],
                    PrivacyType: 0,
                    Signature: "",
                    Staffs: [],
                    Status: 0,
                    Token: null,
                    Type: 0,
                    ValidateCode: null,
                    ValidateCodeId: null,
                },
                {
                    Address: "",
                    AutoLogin: false,
                    Avatar: require("../../src/assets/images/user_L.png"),
                    AvatarMD5: "2742ebf902cd08ce2844c075eb7dab0c",
                    BannedTimeLeft: 0,
                    Birthday: "",
                    Code: null,
                    Email: "",
                    Favorite: 0,
                    Gender: 0,
                    IMStatus: 1,
                    Id: "1130b4ea7eb74fd5b5b1f23994925ef5",
                    InvitationCode: null,
                    Mobile: "+8617095012304",
                    Name: "εε°ιΎ",
                    NickName: null,
                    Password: null,
                    Privacy: [],
                    PrivacyType: 0,
                    Signature: "",
                    Staffs: [],
                    Status: 0,
                    Token: null,
                    Type: 0,
                    ValidateCode: null,
                    ValidateCodeId: null,
                },
                { "Avatar": require("../../src/assets/images/user_F.png"), "Gender": 0, "Mobile": "+8617090832047", "Email": "", "Status": 0, "Address": "", "Birthday": "", "Signature": "", "NickName": null, "PrivacyType": 0, "Staffs": [{ "No": "WN4899", "UserId": "8f31027c967d4bdfaca19d2146e8aedf", "Company": { "Owner": null, "Id": "ff808081581b3e2801581b47dd4e0000", "Name": "θηζΈΈζ" }, "Type": 0, "Leader": { "No": "WN3891", "UserId": "82d6cfb16c274461a59518d2b358346e", "Company": { "Owner": null, "Id": "ff808081581b3e2801581b47dd4e0000", "Name": "θηζΈΈζ" }, "Type": 0, "Leader": { "No": "WN0001", "UserId": "0c2a2e336456490fb68596729c16c782", "Company": { "Owner": null, "Id": "ff808081581b3e2801581b47dd4e0000", "Name": "θηζΈΈζ" }, "Type": 0, "Leader": { "No": "WN0001", "UserId": "0c2a2e336456490fb68596729c16c782", "Company": null, "Type": 0, "Leader": null, "JobTitle": "ζ»θ£", "Email": "shihai@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": null, "ExtendProps": [{ "Key": "ζηΊ§", "Value": "βββββ" }], "ExtendPropsAfterName": ["βββββ"], "Id": "0c2a2e336456490fb68596729c16c7", "Name": "η³ζ΅·" }, "JobTitle": "ζ»θ£", "Email": "shihai@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": null, "ExtendProps": [{ "Key": "ζηΊ§", "Value": "βββββ" }], "ExtendPropsAfterName": ["βββββ"], "Id": "0c2a2e336456490fb68596729c16c7", "Name": "η³ζ΅·" }, "JobTitle": "θΏη»΄ζ»η", "Email": "zhaoym@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": null, "ExtendProps": [{ "Key": "ζηΊ§", "Value": "ββββ" }, { "Key": "ε·₯δ½ε°ηΉ", "Value": "171" }], "ExtendPropsAfterName": ["ββββ"], "Id": "82d6cfb16c274461a59518d2b35834", "Name": "θ΅΅δΊζ" }, "JobTitle": "ι«ηΊ§δΊ§εη»η", "Email": "zhuyj@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": [{ "Leader": null, "Director": null, "LevelInfo": "θηε¬εΈ\\θηζΈΈζ\\η?‘ηζΆζ\\η?‘η\\ITδΈ­εΏ\\APPεΌεη»\\η»η«―", "AllStaffCount": null, "Children": null, "Staffs": null, "CompanyId": "ff808081581b3e2801581b47dd4e0000", "IsMain": 1, "Id": "4e36d07a28d543d1ad420905069a88b3", "Name": "η»η«―" }], "ExtendProps": [{ "Key": "ζηΊ§", "Value": "ββ" }, { "Key": "ε·₯δ½ε°ηΉ", "Value": "171" }], "ExtendPropsAfterName": ["ββ"], "Id": "8f31027c967d4bdfaca19d2146e8ae", "Name": "ζ±ηιͺ" }], "Privacy": [{ "UserId": "8f31027c967d4bdfaca19d2146e8aedf", "CompanyId": "ff808081581b3e2801581b47dd4e0000", "CompanyName": "θηζΈΈζ", "JobTitle": "ι«ηΊ§δΊ§εη»η", "CompanyPrivacy": 0, "JobTitlePrivacy": 1, "Status": 0, "Id": null, "Name": null }], "AvatarMD5": "101fd1ad3f075dd1a74544c3e53303dd", "Favorite": 0, "BannedTimeLeft": 0, "IMStatus": 1, "Token": null, "Password": null, "Code": null, "AutoLogin": false, "ValidateCodeId": null, "ValidateCode": null, "InvitationCode": null, "Type": 0, "Id": "8f31027c967d4bdfaca19d2146e8aedf", "Name": "ζ±ηιͺ" },

                {
                    Address: "",
                    AutoLogin: false,
                    Avatar: require("D:/JJPC/img/HeadImg/man.png"),
                    AvatarMD5: "",
                    BannedTimeLeft: 0,
                    Birthday: "",
                    Code: null,
                    Email: "",
                    Favorite: 0,
                    Gender: 0,
                    IMStatus: 1,
                    Id: "cc8dd0a740a441309328adeac211f1ed",
                    InvitationCode: null,
                    Mobile: "+8617095071862",
                    Name: "ζ’θ",
                    NickName: null,
                    Password: null,
                    Privacy: [],
                    PrivacyType: 0,
                    Signature: "",
                    Staffs: [],
                    Status: 0,
                    Token: null,
                    Type: 0,
                    ValidateCode: null,
                    ValidateCodeId: null,
                },
                { "Avatar": require("../../src/assets/images/user_K.png"), "Gender": 0, "Mobile": "+8617095012163", "Email": "", "Status": 0, "Address": "", "Birthday": "", "Signature": "", "NickName": null, "PrivacyType": 0, "Staffs": [{ "No": "WN4885", "UserId": "d2c28119863f4a2f8bdd2f0dc393f3f4", "Company": { "Owner": null, "Id": "ff808081581b3e2801581b47dd4e0000", "Name": "θηζΈΈζ" }, "Type": 0, "Leader": { "No": "WN3891", "UserId": "82d6cfb16c274461a59518d2b358346e", "Company": { "Owner": null, "Id": "ff808081581b3e2801581b47dd4e0000", "Name": "θηζΈΈζ" }, "Type": 0, "Leader": { "No": "WN0001", "UserId": "0c2a2e336456490fb68596729c16c782", "Company": { "Owner": null, "Id": "ff808081581b3e2801581b47dd4e0000", "Name": "θηζΈΈζ" }, "Type": 0, "Leader": { "No": "WN0001", "UserId": "0c2a2e336456490fb68596729c16c782", "Company": null, "Type": 0, "Leader": null, "JobTitle": "ζ»θ£", "Email": "shihai@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": null, "ExtendProps": [{ "Key": "ζηΊ§", "Value": "βββββ" }], "ExtendPropsAfterName": ["βββββ"], "Id": "0c2a2e336456490fb68596729c16c7", "Name": "η³ζ΅·" }, "JobTitle": "ζ»θ£", "Email": "shihai@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": null, "ExtendProps": [{ "Key": "ζηΊ§", "Value": "βββββ" }], "ExtendPropsAfterName": ["βββββ"], "Id": "0c2a2e336456490fb68596729c16c7", "Name": "η³ζ΅·" }, "JobTitle": "θΏη»΄ζ»η", "Email": "zhaoym@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": null, "ExtendProps": [{ "Key": "ζηΊ§", "Value": "ββββ" }, { "Key": "ε·₯δ½ε°ηΉ", "Value": "171" }], "ExtendPropsAfterName": ["ββββ"], "Id": "82d6cfb16c274461a59518d2b35834", "Name": "θ΅΅δΊζ" }, "JobTitle": "δΊ§εη»η-εεεΊ/εζ¨", "Email": "hejl@mysnail.com", "ExtNo": "", "Status": 0, "Avatar": null, "IMStatus": 1, "Departments": [{ "Leader": null, "Director": null, "LevelInfo": "θηε¬εΈ\\θηζΈΈζ\\η?‘ηζΆζ\\η?‘η\\ITδΈ­εΏ\\APPεΌεη»\\εεεΊ", "AllStaffCount": null, "Children": null, "Staffs": null, "CompanyId": "ff808081581b3e2801581b47dd4e0000", "IsMain": 1, "Id": "7e7a342656b04ff9ae51e2d3edf25f07", "Name": "εεεΊ" }], "ExtendProps": [{ "Key": "ζηΊ§", "Value": "ββ" }, { "Key": "ε·₯δ½ε°ηΉ", "Value": "171" }], "ExtendPropsAfterName": ["ββ"], "Id": "d2c28119863f4a2f8bdd2f0dc393f3", "Name": "δ½δ½³η" }], "Privacy": [{ "UserId": "d2c28119863f4a2f8bdd2f0dc393f3f4", "CompanyId": "ff808081581b3e2801581b47dd4e0000", "CompanyName": "θηζΈΈζ", "JobTitle": "δΊ§εη»η-εεεΊ/εζ¨", "CompanyPrivacy": 0, "JobTitlePrivacy": 0, "Status": 0, "Id": null, "Name": null }], "AvatarMD5": "", "Favorite": 0, "BannedTimeLeft": 0, "IMStatus": 1, "Token": null, "Password": null, "Code": null, "AutoLogin": false, "ValidateCodeId": null, "ValidateCode": null, "InvitationCode": null, "Type": 0, "Id": "d2c28119863f4a2f8bdd2f0dc393f3f4", "Name": "δ½δ½³η" },

                {
                    Avatar: require("../../src/assets/images/group_icon.png"),
                    Id: "group_d2c28119863f4a2f8bdd2f0dc393f3f4_1653638892828",
                    MemberCount: 5,
                    Members: [
                        {
                            Address: "",
                            AutoLogin: false,
                            Avatar: require("../../src/assets/images/user_L.png"),
                            AvatarMD5: "2742ebf902cd08ce2844c075eb7dab0c",
                            BannedTimeLeft: 0,
                            Birthday: "",
                            Code: null,
                            Email: "",
                            Favorite: 0,
                            Gender: 0,
                            IMStatus: 1,
                            Id: "1130b4ea7eb74fd5b5b1f23994925ef5",
                            InvitationCode: null,
                            Mobile: "+8617095012304",
                            Name: "εε°ιΎ",
                            NickName: null,
                            Password: null,
                            Privacy: [],
                            PrivacyType: 0,
                            Signature: "",
                            Staffs: [],
                            Status: 0,
                            Token: null,
                            Type: 0,
                            ValidateCode: null,
                            ValidateCodeId: null,
                        },
                        {
                            Address: "",
                            AutoLogin: false,
                            Avatar: require("../../src/assets/images/user_F.png"),
                            AvatarMD5: "101fd1ad3f075dd1a74544c3e53303dd",
                            BannedTimeLeft: 0,
                            Birthday: "",
                            Code: null,
                            Email: "",
                            Favorite: 0,
                            Gender: 0,
                            IMStatus: 1,
                            Id: "8f31027c967d4bdfaca19d2146e8aedf",
                            InvitationCode: null,
                            Mobile: "+8617090832047",
                            Name: "ζ±ηιͺ",
                            NickName: null,
                            Password: null,
                            Privacy: [],
                            PrivacyType: 0,
                            Signature: "",
                            Staffs: [],
                            Status: 0,
                            Token: null,
                            Type: 0,
                            ValidateCode: null,
                            ValidateCodeId: null,
                        },
                        {
                            Address: "",
                            AutoLogin: false,
                            Avatar: require("D:/JJPC/img/HeadImg/man.png"),
                            AvatarMD5: "",
                            BannedTimeLeft: 0,
                            Birthday: "",
                            Code: null,
                            Email: "",
                            Favorite: 0,
                            Gender: 0,
                            IMStatus: 1,
                            Id: "cc8dd0a740a441309328adeac211f1ed",
                            InvitationCode: null,
                            Mobile: "+8617095071862",
                            Name: "ζ’θ",
                            NickName: null,
                            Password: null,
                            Privacy: [],
                            PrivacyType: 0,
                            Signature: "",
                            Staffs: [],
                            Status: 0,
                            Token: null,
                            Type: 0,
                            ValidateCode: null,
                            ValidateCodeId: null,
                        },
                        {
                            Address: "",
                            AutoLogin: false,
                            Avatar: require("../../src/assets/images/user_K.png"),
                            AvatarMD5: '',
                            BannedTimeLeft: 0,
                            Birthday: "",
                            Code: null,
                            Email: "",
                            Favorite: 0,
                            Gender: 0,
                            IMStatus: 1,
                            Id: "d2c28119863f4a2f8bdd2f0dc393f3f4",
                            InvitationCode: null,
                            Mobile: "+8617095012163",
                            Name: "δ½δ½³η",
                            NickName: null,
                            Password: null,
                            Privacy: [],
                            PrivacyType: 0,
                            Signature: "",
                            Staffs: [],
                            Status: 0,
                            Token: null,
                            Type: 0,
                            ValidateCode: null,
                            ValidateCodeId: null,
                        },
                        {
                            Address: "",
                            AutoLogin: false,
                            Avatar: require("../../src/assets/images/user_D.png"),
                            AvatarMD5: "",
                            BannedTimeLeft: 0,
                            Birthday: "",
                            Code: null,
                            Email: "",
                            Favorite: 0,
                            Gender: 0,
                            IMStatus: 1,
                            Id: "f43245bd9824430b973fbf57320bb38b",
                            InvitationCode: null,
                            Mobile: "+8617749721923",
                            Name: "ι’ι«",
                            NickName: null,
                            Password: null,
                            Privacy: [],
                            PrivacyType: 0,
                            Signature: "",
                            Staffs: [],
                            Status: 0,
                            Token: null,
                            Type: 0,
                            ValidateCode: null,
                            ValidateCodeId: null,
                        },
                    ],
                    Name: "",
                    OperatorId: "f43245bd9824430b973fbf57320bb38b",
                    OwnerId: "d2c28119863f4a2f8bdd2f0dc393f3f4",
                    SDKAction: 22,
                    SDKContent: "ζͺζΎε°ε―ΉεΊεΌ",
                    ShowName: "εε°ιΎ,ζ±ηιͺ,ζ’θ,δ½δ½³η,ι’ι«",
                },
            ];
            var info = null;
            for (let i in userList) {
                if (userList[i].Id == id) {
                    info = userList[i];
                    break;
                }
            };
            console.log(info)
            return info;
        },
    },
    convertMsg(content) {
        var _content = content;
        var reg = /<br[^>]*\/*>/g, nbsp = /&nbsp;/g;
        _content = _content.replace(reg, '\n');
        _content = _content.replace(nbsp, ' ');
        _content = _content.replace(/(<\/?a.*?>)|(<\/?span.*?>)/g, '');//ε»ι€ a ζ η­Ύ
        _content = utils.emojiImgToUnicode(_content);
        _content = this.faceToFont(_content);
        _content = this.htmlEncode(_content);
        _content = this.htmlDecode(_content);
        //@δΊΊθ½¬ζ’
        // _content = utils.convertAtToMob(_content, empService.getEmpInfo, empService.getEmpName);
        _content = utils.convertAtToMob(_content);
        // message.setContent(CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(_content)));
        return _content;
    },
    createMessage: (() => {
        var sending = {};
        let that = this;
        return function (chatId, msgType, content, file, onlineFiles) {
            var user = this.webConfig.getUser();
            var chat = this.chatService.getChat(chatId);
            // θ§ι’δΌθ?? - ζ°ε’ι»θΎ ε ι€ε·¦δΎ§ζ εθη³»δΊΊηε―Ήθ―ζ‘ θ°η¨getChatε½ζ°θ·εδΈε°θη³»δΊΊηδΈͺδΊΊδΏ‘ζ―θΏε undefined ιζ°θ°η¨ζ₯ε£ θ·εθη³»δΊΊηδΈͺδΊΊδΏ‘ζ―
            if (chat == undefined) {
                // θ·ε - θ§ι’δΌθ?? εε­ε₯η θη³»δΊΊηδΈͺδΊΊδΏ‘ζ―
                chat = getChatIdObj.getData();
                chat.isGroup = chat.Type == 1002 ? true : false;
                // θ°η¨ζ₯ε£ ε¦δ½Ώη¨ async/await η­εΎεΌζ­₯ θΏεηε―Ήθ±‘δΈΊ PromiseΒ ιθ¦ε€ε€δΏ?ζΉηθδ»£η εεΌζΉεΌ
                //  await new Promise((resolve) => {
                //     callCefMethod('user/getAllInfoById', {
                //         userId: chatId,
                //     }, function (res) {
                //         if (res.Code == 0) {
                //             res.Data.isGroup = res.Data.Type == 1002 ? true : false;
                //             chat = res.Data;
                //             resolve();
                //         }
                //     })

                // })

            }
            // θ§ι’δΌθ?? ηΉζ?ε€η
            // if(msgType == 10 && JSON.parse(content) && JSON.parse(content).chatRoomId.indexOf('group_') >= 0){
            //     chat = chatService.getChat(JSON.parse(content).chatRoomId) ;
            console.log(chat);
            var now = new Date().getTime();
            var messageId = [user.Id, now].join('_');
            while (sending[messageId]) {
                now = new Date().getTime();
                messageId = [user.Id, now].join('_');
            }
            var msg = {
                id: messageId,
                chatId: chatId,
                chatType: !chat.isGroup ? 1000 : 1002,
                type: msgType,
                content: content,
                senderId: user.Id,
                filePath: file ? file.Path : '',
                timeStamp: now,
                fileLength: file ? file.Size : 0,
                fileUrl: file ? (file.FileUrl || '') : ''
            };
            var fileStart = /file:\/\/\//;
            msg.SendMode = 0;
            if (onlineFiles) {
                var arr = [];
                var msgContent = {};
                msgContent.totalLength = 0;
                msgContent.n_TYPE = 9;
                msgContent.type = 0;
                for (var i = 0; i < onlineFiles.length; i++) {
                    var temp = {};
                    onlineFiles[i].Path = onlineFiles[i].Path.replace(fileStart, '');
                    temp.Path = onlineFiles[i].Path;
                    temp.Size = onlineFiles[i].Size;
                    temp.IsDirectory = onlineFiles[i].IsDirectory;
                    msgContent.totalLength += onlineFiles[i].Size;
                    arr.push(temp);
                }
                msgContent.fileList = arr;
                msg.onlineFiles = arr;
                msg.content = angular.toJson(msgContent);
                msg.SendMode = 1;
            }
            msg.filePath = msg.filePath.replace(fileStart, '');
            sending[messageId] = 1;
            setTimeout(function () {
                delete sending[messageId];
            }, 20000);
            return {
                msg: msg,
                now: now
            };


        }
    })(),
    emojiFaceReplace(str) {
        if (!str) return str;
        var patt = /[\ud800-\udbff][\udc00-\udfff]/g;
        str = str.replace(patt, function (_char) {
            var H, L, code;
            if (_char.length === 2) {
                H = _char.charCodeAt(0);
                // εεΊι«δ½
                L = _char.charCodeAt(1);
                // εεΊδ½δ½
                code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00;
                // θ½¬ζ’η?ζ³
                code = code.toString(16).toLowerCase();
                if (emojiFaceMap[code]) {
                    // require εΌε₯εΎηθ·―εΎ ε¦εvue ηΌθ―ζΎδΈε°θ·―εΎ
                    let url = require("../../src/assets/images/emoji/'" + code + ".png");
                    // console.log(url)
                    return '<img src="' + url + '" title1="[emoji_' + emojiFaceMap[code].title + ']" class="emoji_face"/>';
                    // return '<img src="../../src/assets/images/emoji/' + code + '.png" title1="[emoji_' + emojiFaceMap[code].title + ']" class="emoji_face"/>';
                } else {
                    return '';
                }
            } else {
                return _char;
            }
        })
        var patt2 = /[\u0000-\uffff]/g;
        str = str.replace(patt2, function (_char) {
            var code;
            if (_char.length === 1) {
                code = _char.charCodeAt(0).toString(16).toLowerCase();;
                if (emojiFaceMap[code]) {
                    // require εΌε₯εΎηθ·―εΎ ε¦εvue ηΌθ―ζΎδΈε°θ·―εΎ
                    let url = require("../../src/assets/images/emoji/'" + code + ".png");
                    return '<img isface="1" src="' + url + '" title1="[emoji_' + emojiFaceMap[code].title + ']" class="emoji_face"/>';
                } else {
                    return _char;
                }
            } else {
                return _char;
            }
        })
        return str;
    },
    faceToFont(html) {
        var reg1 = /<img[^>]+(title="(\[[^>]+\])")[^>]*\/*>/gi;
        var reg2 = /<img[^>]+(title1="(\[[^>]+\])")[^>]*\/*>/gi;
        html = html.replace(reg1, function (v1, v2, v3) {
            return v3;
        })
        html = html.replace(reg2, function (v1, v2, v3) {
            return v3;
        })
        return html
    },
    htmlEncode(e) {
        return utils.isString(e) ? e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : ""
    },
    htmlDecode(e) {
        return e && 0 != e.length ? e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&") : ""
    },

    faces() {
        // var woniuTitles = [
        // 'ε―η±','ζε','ζ»‘θΆ³','ζεΏ«','εΎ?η¬','εΌεΏ','ε»η¬','ηη¬','ε·η¬','εη¬',
        // 'ε₯Έη¬','θ²'   ,'δ½Ώε','ιιΌ','θ?€η','εζ°','εθ','εε»','εε°Ό','εε',
        // 'εε΄','ε₯½ε','ζθ§','ηΊ η»','ζ'   ,'ζ¨'   ,'θ¦η¬','ζ ε₯','ε°΄ε°¬','ζ΅ζ±',
        // 'δ½θ½','η¦θΊ','ζ θΎ','ζε΄','ε·¦εΌεΌ','ε³εΌεΌ','ζθ?Ά','ζζ','δΌ€εΏ','ζε¨',
        // 'ε½ε½','ε­'   ,'ηζ°','εζ','ε'   ,'η¦'   ,'ζ'   ,'θ΅'
        // ];
        // var qqTitles = ["εΎ?η¬","ζε΄","θ²","εε","εΎζ","ζ΅ζ³ͺ","ε?³ηΎ","ι­ε΄","η‘","ε€§ε­","ε°΄ε°¬","εζ","θ°η?","ιΎη","ζθ?Ά","ιΎθΏ","ι·","ε·ζ±","ζη","ε","ε·η¬","ζεΏ«","η½ηΌ","ε²ζ’","ι₯₯ι₯Ώ","ε°","ζζ","ζ΅ζ±","ζ¨η¬","ζ ι²","ε₯ζ","ειͺ","ηι?","ε","ζ","η―δΊ","θ‘°","ιͺ·ι«","ζ²ζ","εθ§","ζ¦ζ±","ζ ιΌ»","ιΌζ","η³ε€§δΊ","εη¬","ε·¦εΌεΌ","ε³εΌεΌ","εζ¬ ","ιθ§","ε§ε±","εΏ«ε­δΊ","ι΄ι©","δΊ²δΊ²","ε","ε―ζ","θε","θ₯Ώη","ε€ι","η―?η","δΉδΉ","εε‘","ι₯­","ηͺε€΄","η«η°","εθ°’","ε΄ε","η±εΏ","εΏη’","θη³","ιͺη΅","ηΈεΌΉ","ε","θΆ³η","η’θ«","δΎΏδΎΏ","ζδΊ?","ε€ͺι³","η€Όη©","ζ₯ζ±","εΌΊ","εΌ±","ζ‘ζ","θε©","ζ±ζ³","εΎεΌ","ζ³ε€΄","ε·?ε²","η±δ½ ","NO","OK"];
        var qqTitles = ["εΎ?η¬", "ζε΄", "θ²", "εε", "εΎζ", "ζ΅ζ³ͺ", "ε?³ηΎ", "ι­ε΄", "η‘", "ε€§ε­", "ε°΄ε°¬", "εζ", "θ°η?", "ε€§η¬", "ζθ?Ά", "ιΎθΏ", "ε§", "ζη", "ε", "ε·η¬", "ζεΏ«", "εθ", "ε²ζ’", "ε°", "ζζ", "ζ΅ζ±", "ζ ι²", "ε₯ζ", "ειͺ", "ζΆι­", "ιͺζΆ", "ε€ζδΊΊ", "ε΅ε°Έ", "ζΊε¨δΊΊ", "ε€§δΎΏ", "ηι?", "ε", "ζ", "θ‘°", "ιͺ·ι«", "ζε»", "εθ§", "ζ ιΌ»", "ιΌζ", "εη¬", "εΌ", "εζ¬ ", "ιθ§", "ε§ε±", "εΏ«ε­δΊ", "ι΄ι©", "δΊ²δΊ²", "ζͺη©", "εΉ½η΅", "ζε", "θ¦η¬", "ηͺηΌ", "ε°ε«", "ιζΎ", "ζηΌ", "εΏε", "ζθΈ", "ε₯Έη¬", "η¨ηΌ", "ζΊζΊ", "η±η", "θΆ", "θε", "θ₯Ώη", "ε€ι", "εε‘", "ηͺε€΄", "η«η°", "εθ°’", "ε΄ε", "η±εΏ", "εΏη’", "θη³", "ηΈεΌΉ", "ζε?", "ε€ͺι³", "ζ±ζ±", "εΌΊ", "εΌ±", "ζ‘ζ", "θε©", "ζ±ζ³", "εΎεΌ", "ζ³ε€΄", "OK", "δΈε―Ή", "εζεε", "ε ζ²Ή", "εΊη₯", "η€Όη©", "θΆ", "ηΊ’ε", "θ‘η"];
        var titles = {
            qq: qqTitles
            // woniu : woniuTitles
        }
        var titlesArr = [];
        var cates = [];
        var maps = {};
        for (var p in titles) {
            cates.push(p);
            titlesArr.push(titles[p]);
            !maps[p] && (maps[p] = {});
            for (var i = 0; i < titles[p].length; i++) {
                maps[p][titles[p][i]] = i;
            }
        }
        return {
            cates: cates,
            titles: titlesArr,
            maps: maps
        }
    },
    metaReg: '',
    replaceMetaStr(str) {
        var metaArr = ['\\', '?', '*', '^', '$', '+', '(', ')', '{', '}', '[', ']', '.'];
        for (var i = 0; i < metaArr.length; i++) {
            metaArr[i] = '\\' + metaArr[i];
        }
        var metaReg = new RegExp('(' + metaArr.join('|') + ')', 'g');
        this.metaReg = metaReg;
        str = str.replace(metaReg, function (v) {
            return '\\' + v;
        });
        return str;
    },
    hrefEncode(str) {
        var linkReg = "(http(s)?://.)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#!?(&|&amp;)//=]*)";
        linkReg = new RegExp(linkReg, 'gi');
        var ipReg = /(http(s)?:\/\/.)?((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))(?:\:\d{1-5})?[-_.%~!*';:@&=+$,/?#\[\]a-zA-Z0-9]*/g;
        // var ipReg = /(http(s)?:\/\/.)?((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))(?:\:\d{1-5})?[^()\s\u4e00-\u9fa5]*/g;
        // var ipReg = /(http(s)?:\/\/.)?((?:(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(?:25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d))))/g;


        str = str.replace(linkReg, function (url, start, s) {
            if (start) {
                var _url = arguments[0].replace(/^(\s|\n|<br\s*\/*>)/, "");
                // _url = _url.replace(pre,'');
                // var whole = _url.indexOf('http://') == 0 ? '' : 'http://';
                var whole = (_url.indexOf('http://') == 0 || _url.indexOf('https://') == 0) ? '' : (s ? 'https://' : 'http://');
                return '<a draggable="false" target="_blank" href="' + whole + _url + '">' + _url + "</a>";
            } else {
                return url;
            }
        })
        return str.replace(ipReg, function (v) {
            var _v = v.replace(metaReg, function (v) {
                return '\\' + v;
            });
            var a = new RegExp('<a.*' + _v + '.*(<\/a>)', '');
            var matches = str.match(a);
            var start = '';
            if (!/http(s)*:\/\//.test(v)) {
                start = 'http://';
            }
            return matches != null ? v : '<a draggable="false" target="_blank" href="' + start + v + '">' + v + "</a>";
        })
    },
    convertAtFromMob(str) {
        var atReg = /@([^@]+)\s\u200B/gi;
        str = str.replace(atReg, function (v, name) {
            return '<a class="msg_at_emp">@' + name + '</a> ';
        })
        return str;
    },
    faceToImg(content) {
        let that = this;
        var reg = /(title=)?(?:'|")?(\[([^\]]+)\])(?:'|")?/gi;
        // ε­δΈ²ζΏζ’ζΏζ’
        content = content.replace(reg, function (v1, v2, v3, v4) {
            if (v2 === undefined) {
                // console.log(content,v1, v2, v3, v4)
                for (var p in that.faces().maps) {
                    if (that.faces().maps[p][v4] !== undefined) {
                        var idx = that.faces().maps[p][v4];
                        idx = idx < 10 ? '0' + idx : idx;
                        // require εΌε₯εΎηθ·―εΎ ε¦εvue ηΌθ―ζΎδΈε°θ·―εΎ
                        let url = require("../../src/assets/images/qqemoji/e1" + idx + ".png");
                        // console.log(url)
                        return '<img draggable="false" isface="1" src="' + url + '" class="' + p + '_face" title="[' + v4 + ']" />'
                        // return '<img title="['+v4+']" class="'+p+'_face '+p+'_'+faces.maps[p][v4]+'" src="img/spacer.gif">';
                    }
                }
            }
            return v1;
        })
        return content;
    },
    emojiFaceToImg(str) {
        var reg = /(title1=)?(?:'|")?(\[([^\]]+)\])(?:'|")?/gi;
        str = str.replace(reg, function (v1, v2, v3, v4) {
            var reg2 = /^emoji_/;
            if (reg2.test(v4)) {
                v4 = v4.replace(reg2, '');
                if (v2 === undefined && emojiTitleMap[v4] && emojiTitleMap[v4].code) {
                    // require εΌε₯εΎηθ·―εΎ ε¦εvue ηΌθ―ζΎδΈε°θ·―εΎ
                    let url = require("../../src/assets/images/emoji/" + emojiTitleMap[v4].code.toLowerCase() + ".png");
                    return '<img isface="1" src="' + url + '" title1="[emoji_' + v4 + ']" class="emoji_face">';
                    // return '<img isface="1" src="../../src/assets/images/emoji/' + emojiTitleMap[v4].code.toLowerCase() + '.png" title1="[emoji_' + v4 + ']" class="emoji_face">';
                }
            }
            return v1;
        })
        return str;
    },
    getSearch(url){
        var a = url || window.location.href;
        var obj = {};
        var str_after = decodeURIComponent(a.split("?")[1]);
        var ps = str_after.split('&')
        for (var i = 0; i < ps.length; i++) {
            var _a = ps[i].split('=');
            var k = _a[0], v = _a[1];
            if (obj[k]) {
                if (util.isArray(obj[k])) {
                    obj[k].push(v);
                } else {
                    obj[k] = [obj[k]];
                    obj[k].push(v);
                }
            } else {
                obj[k] = v;
            }
        }
        return obj;
    },
    frameService: {
        setGlobalCallbak: function (fns, callback) {
            callCefMethod('global/setCallback', fns, function (res) {
                callback && callback(res);
            });
        },
        connectIm: function (callback) {
            callCefMethod('im/connect', function (res) {
                callback && callback(res);
            });
        },
        disconnectIm: function (callback) {
            callCefMethod('im/disconnect', function (res) {
                callback && callback(res);
            });
        },
        accountLogout: function (callback) {
            callCefMethod('account/logout', function (res) {
                callback && callback(res);
            });
        },
        getCurrentUser: function (callback) {
            callCefMethod('account/currentUser', function (res) {
                webConfig.setUser(res.Data.user);
                envConfig.setEnvData(res.Data.global);
                $timeout(function () {
                    callback && callback(res);
                })
            });
        },
        onLine: function () {
            callCefMethod("frame/online");
        },
        offLine: function () {
            callCefMethod('frame/offline');
        },
        twinkle: function () {
            callCefMethod('frame/twinkle');
        },
        stopTwinkle: function () {
            callCefMethod('frame/stopTwinkle');
        },
        capture: function (callback) {
            callCefMethod('frame/capture', function (res) {
                callback && callback(res);
            });
        },
        flash: function () {
            callCefMethod('frame/flashwindow', function () { });
        },
        open: function (id, path, params, width, height, isModal, name, dragable, resizable,callback) {
            if (!params) {
                params = {};
            }
            dragable = dragable || false;
            resizable = resizable || false;
            params.time = new Date().getTime();
            var str = params ? utils.urlify(params) : '';
            var opt = arguments[arguments.length - 1];
            var frameOption = {
                id: id,
                name: name || '',
                contentPath: str ? path + '?' + str : path,
                width: width,
                height: height,
                isModal: isModal,
                draggable: dragable,
                resizable: resizable
            }
            if (Object.prototype.toString.call(opt) == '[object Object]') {
                for (var p in opt) {
                    frameOption[p] = opt[p];
                }
            }
            callCefMethod('frame/open', frameOption, function (res) {
                callback && callback(res);
            });
        },
        notice: function (params, callback) {
            callCefMethod('global/cascadeCallback', params, function (res) {
                callback && callback(res);
            })
        },
        moveFrame: function () {
            callCefMethod('frame/move');
        },
        closeFrame: function (id, callback) {
            callCefMethod('frame/close', {
                id: id
            })
        },
        hideMainFrame: function () {
            callCefMethod('frame/close', {
                hideToTray: true
            });
        },
        closeMainFrame: function () {
            callCefMethod('frame/close', {
                hideToTray: false
            });
        },
        minFrame: function (callback) {
            callCefMethod('frame/minimum', function (res) {
                callback && callback(res);
            });
        },
        maxFrame: function (callback) {
            callCefMethod('frame/maximum', function (res) {
                callback && callback(res);
            });
        },
        reset: function (name, path, params, width, height) {
            var str = params ? utils.urlify(params) : '';
            callCefMethod('frame/reset', {
                id: 'main',
                name: name,
                width: width,
                height: height,
                contentPath: str ? path + '?' + str : path,
                resizable: true,
                isMain: true
            });
        },
        resizeFrame: function (name, path, params, width, height, isModal, dragable, resizable, callback) {
            var str = params ? utils.urlify(params) : '';
            callCefMethod('frame/reset', {
                id: 'main',
                name: name,
                width: width,
                height: height,
                contentPath: path ? (str ? path + '?' + str : path) : '',
                resizable: true,
                isMain: false,
                position: 2
            }, function (res) {
                callback && callback(res);
            });
        },
        startRecord: function (callback) {
            callCefMethod('frame/startrecord', function (res) {
                if (res.Code == 106) {
                    alert(langPack.getKey('noMicroPhone'));
                    return;
                }
                callback && callback(res);
            })
        },
        stopRecord: function (saveRecord, callback) {
            callCefMethod('frame/stopRecord', {
                type: saveRecord ? 1 : 0
            }, function (res) {
                callback && callback(res);
            })
        },
        play: function (msgId, callback) {
            callCefMethod('chat/openmsg', {
                id: msgId
            }, function (res) {
                if (res.Code == 106) {
                    alert(langPack.getKey('noBroadcaster'));
                    return;
                }
                callback && callback(res);
            })
        },
        stop: function (callback) {
            callCefMethod('frame/stopAudio', function (res) {
                callback && callback(res);
            })
        },
        copy: function (content, callback) {
            // jj.fetch("frame/copy", JSON.stringify({ data: { html: "<label>ε€§ε€§ε€§οΌ@#123</label>" ,text:"ε€§ε€§ε€§"}, callback: "callback" }));
            // var params = {};
            // params.format = type || 'Text';
            // params.content = content;
            callCefMethod('frame/copy', content, function (res) {
                callback && callback(res);
            })
        },
        getDragFiles: function (callback) {
            callCefMethod('frame/getdragfiles', function (res) {
                callback && callback(res);
            })
        },
        fileDialog: function (params, callback) {
            callCefMethod('frame/fileDialog', params, function (res) {
                callback && callback(res);
            })
        },
        openMsg: function (params, callback) {
            callCefMethod('chat/openMsg', params, function (res) {
                callback && callback(res);
            })
        },
        cancelTransfer: function (params, callback) {
            callCefMethod('chat/cancelTransfer', params, function (res) {
                callback && callback(res);
            })
        },
        downLoad: function (params, callback) {
            callCefMethod('chat/download', params, function (res) {
                callback && callback(res);
            })
        },
        saveDialog: function (params, callback) {
            callCefMethod('frame/saveDialog', params, function (res) {
                if (res.Data) {
                    callback && callback(res);
                }
            })
        },
        resetMouse: function (left, top, callback) {
            callCefMethod('frame/resetMouse', {
                left: left,
                top: top
            }, function (res) {
                callback && callback(res);
            })
        },
        showFrame: function (callback) {
            callCefMethod('frame/show', function (res) {
                callback && callback(res);
            })
        },
        newMsgDing: function (callback) {
            if (!settingService.userSetting.PlaySound) {
                callCefMethod('frame/newMsgDing', function (res) {
                    callback && callback(res);
                })
            }
        },
        logout: function (callback) {
            callCefMethod('account/logout', function (res) {
                frameService.disconnectIm();
                callback && callback(res);
            })
        }
    },
};