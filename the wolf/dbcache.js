var payload = [233,170,0,0,0,85,83,72,131,236,24,190,1,0,0,0,72,141,84,36,8,72,141,61,81,27,0,0,72,199,68,36,8,0,0,0,0,232,227,19,0,0,72,131,124,36,8,0,116,106,186,255,1,0,0,190,1,6,0,0,72,141,61,61,25,0,0,72,137,195,232,56,2,0,0,72,139,84,36,8,72,137,222,137,197,137,199,232,27,2,0,0,137,239,232,44,2,0,0,72,137,223,255,21,188,36,0,0,191,3,0,0,0,255,21,241,36,0,0,72,141,61,62,25,0,0,232,76,9,0,0,191,1,0,0,0,255,21,218,36,0,0,72,141,61,73,25,0,0,232,108,9,0,0,235,12,72,141,61,83,25,0,0,232,39,9,0,0,72,131,196,24,91,93,195,83,72,137,251,232,202,20,0,0,232,227,12,0,0,72,141,53,29,1,0,0,72,137,218,191,11,0,0,0,49,192,232,107,24,0,0,232,142,8,0,0,72,141,61,54,25,0,0,232,205,2,0,0,133,192,117,17,190,255,1,0,0,72,141,61,33,25,0,0,232,26,2,0,0,186,255,1,0,0,190,1,6,0,0,72,141,61,51,25,0,0,232,116,1,0,0,131,248,255,117,98,72,141,61,53,25,0,0,186,255,1,0,0,190,1,6,0,0,232,89,1,0,0,72,141,61,50,25,0,0,131,248,255,15,132,135,0,0,0,137,199,232,78,1,0,0,72,141,61,61,25,0,0,232,64,2,0,0,133,192,116,28,72,141,61,75,25,0,0,232,114,8,0,0,72,141,53,28,24,0,0,72,141,61,26,25,0,0,235,65,72,141,61,96,25,0,0,235,75,137,199,232,18,1,0,0,72,141,61,129,25,0,0,232,4,2,0,0,72,141,61,172,25,0,0,133,192,116,45,72,141,61,136,25,0,0,232,47,8,0,0,72,141,53,217,23,0,0,72,141,61,87,25,0,0,232,116,2,0,0,72,141,61,2,25,0,0,232,16,8,0,0,235,12,232,9,8,0,0,49,192,232,56,254,255,255,49,192,91,195,72,137,249,15,50,72,137,215,72,193,231,32,72,9,248,195,72,139,71,8,185,130,0,0,192,72,139,112,64,76,139,64,72,15,50,72,137,209,72,139,150,24,1,0,0,72,193,225,32,72,9,193,72,199,70,4,0,0,0,0,199,70,20,0,0,0,0,199,2,0,0,0,0,72,139,145,88,227,19,1,72,137,86,48,72,131,202,255,72,139,129,96,1,48,2,73,137,64,32,73,137,64,24,72,139,135,48,1,0,0,72,191,19,0,0,0,0,0,1,56,72,137,80,96,72,137,120,88,72,137,80,104,15,32,192,72,137,194,72,129,226,255,255,254,255,15,34,194,15,34,192,49,192,195,72,199,192,3,0,0,0,233,202,22,0,0,72,199,192,4,0,0,0,233,190,22,0,0,72,199,192,5,0,0,0,233,178,22,0,0,72,199,192,6,0,0,0,233,166,22,0,0,72,199,192,10,0,0,0,233,154,22,0,0,72,199,192,9,0,0,0,233,142,22,0,0,72,199,192,58,0,0,0,233,130,22,0,0,72,199,192,57,0,0,0,233,118,22,0,0,72,199,192,21,0,0,0,233,106,22,0,0,72,199,192,122,1,0,0,233,94,22,0,0,72,199,192,22,0,0,0,233,82,22,0,0,72,199,192,123,0,0,0,233,70,22,0,0,72,199,192,124,0,0,0,233,58,22,0,0,72,199,192,128,0,0,0,233,46,22,0,0,72,199,192,136,0,0,0,233,34,22,0,0,72,199,192,137,0,0,0,233,22,22,0,0,72,199,192,188,0,0,0,233,10,22,0,0,72,199,192,189,0,0,0,233,254,21,0,0,72,199,192,190,0,0,0,233,242,21,0,0,72,199,192,16,1,0,0,233,230,21,0,0,72,199,192,222,1,0,0,233,218,21,0,0,72,199,192,237,1,0,0,233,206,21,0,0,72,137,250,72,131,236,8,72,137,241,191,90,2,0,0,49,246,49,192,232,179,21,0,0,90,195,49,210,72,131,236,8,49,246,232,233,254,255,255,49,210,131,248,255,116,12,137,199,232,231,254,255,255,186,1,0,0,0,137,208,90,195,72,131,236,8,255,21,245,32,0,0,49,210,72,133,192,116,14,72,137,199,255,21,77,33,0,0,186,1,0,0,0,137,208,90,195,72,129,236,136,0,0,0,72,137,230,232,96,255,255,255,131,202,255,133,192,120,17,139,68,36,12,49,210,102,37,0,240,102,61,0,160,15,148,194,137,208,72,129,196,136,0,0,0,195,72,131,236,8,186,255,1,0,0,190,1,6,0,0,232,107,254,255,255,131,248,255,116,8,90,137,199,233,106,254,255,255,88,195,65,84,49,210,85,83,72,137,243,49,246,232,76,254,255,255,131,248,255,116,111,186,255,1,0,0,190,1,6,0,0,72,137,223,137,197,232,51,254,255,255,131,248,255,65,137,196,116,72,191,0,0,64,0,255,21,45,31,0,0,72,133,192,72,137,195,116,45,186,0,0,64,0,72,137,222,137,239,232,241,253,255,255,72,133,192,116,16,72,137,194,72,137,222,68,137,231,232,234,253,255,255,235,220,72,137,223,255,21,144,32,0,0,68,137,231,232,239,253,255,255,91,137,239,93,65,92,233,228,253,255,255,91,93,65,92,195,65,87,65,86,65,85,65,84,85,83,72,129,236,136,8,0,0,73,137,252,73,137,245,255,21,227,31,0,0,72,133,192,15,132,226,0,0,0,190,255,1,0,0,76,137,239,72,137,197,232,45,254,255,255,72,137,239,255,21,185,30,0,0,72,133,192,15,132,183,0,0,0,72,141,88,8,72,141,53,108,22,0,0,72,137,223,255,21,172,31,0,0,133,192,116,214,72,141,53,87,22,0,0,72,137,223,255,21,152,31,0,0,133,192,116,194,76,141,188,36,128,0,0,0,76,141,180,36,128,4,0,0,72,137,217,76,137,226,72,141,53,48,22,0,0,76,137,255,49,192,255,21,132,31,0,0,72,137,217,76,137,234,72,141,53,24,22,0,0,76,137,247,49,192,255,21,108,31,0,0,72,137,230,76,137,255,232,188,253,255,255,133,192,15,133,111,255,255,255,139,68,36,12,102,37,0,240,102,61,0,64,117,16,76,137,246,76,137,255,232,32,255,255,255,233,81,255,255,255,102,61,0,128,15,133,71,255,255,255,76,137,246,76,137,255,232,125,254,255,255,233,55,255,255,255,72,137,239,255,21,96,31,0,0,72,129,196,136,8,0,0,91,93,65,92,65,93,65,94,65,95,195,65,87,65,86,65,85,65,84,85,83,72,131,236,8,49,210,72,137,243,49,246,232,159,252,255,255,49,210,49,246,72,137,223,65,137,196,232,144,252,255,255,191,0,0,1,0,137,197,255,21,144,29,0,0,191,0,0,1,0,73,137,198,255,21,130,29,0,0,69,133,228,15,132,11,1,0,0,133,237,15,132,3,1,0,0,49,246,186,2,0,0,0,68,137,231,73,137,197,232,42,253,255,255,49,246,186,2,0,0,0,137,239,232,28,253,255,255,49,246,186,1,0,0,0,68,137,231,232,13,253,255,255,49,246,186,1,0,0,0,137,239,72,137,195,232,252,252,255,255,49,210,49,246,68,137,231,73,137,199,232,237,252,255,255,49,210,49,246,137,239,232,226,252,255,255,76,57,251,116,7,49,219,233,140,0,0,0,72,131,251,99,126,5,187,100,0,0,0,247,219,186,2,0,0,0,72,99,219,68,137,231,72,137,222,232,182,252,255,255,72,137,222,186,2,0,0,0,137,239,232,167,252,255,255,186,1,0,0,0,76,137,246,68,137,231,232,167,251,255,255,186,1,0,0,0,76,137,238,73,137,199,137,239,137,195,232,147,251,255,255,69,133,255,126,32,65,57,199,117,27,49,192,65,138,76,5,0,65,56,12,6,117,143,72,255,192,57,195,127,238,187,1,0,0,0,235,2,49,219,76,137,247,255,21,32,30,0,0,76,137,239,255,21,23,30,0,0,68,137,231,232,118,251,255,255,137,239,232,111,251,255,255,235,2,49,219,90,137,216,91,93,65,92,65,93,65,94,65,95,195,72,131,236,24,186,1,0,0,0,72,141,116,36,15,232,38,251,255,255,131,202,255,72,133,192,116,5,15,190,84,36,15,137,208,72,131,196,24,195,65,87,65,86,65,85,65,84,85,83,72,131,236,24,68,139,38,72,137,20,36,69,133,228,15,136,149,0,0,0,65,131,196,2,73,137,253,73,99,236,72,139,63,72,193,229,4,73,137,246,73,137,207,76,137,195,72,137,238,255,21,142,28,0,0,72,133,192,73,137,69,0,117,9,65,199,6,255,255,255,255,235,96,72,141,84,40,224,72,139,60,36,72,137,84,36,8,255,21,160,28,0,0,72,139,84,36,8,72,139,60,36,72,137,2,255,21,54,29,0,0,73,139,85,0,72,255,192,72,131,251,255,72,137,68,42,232,76,137,124,42,240,117,20,49,219,77,133,255,116,13,76,137,255,255,21,15,29,0,0,72,141,88,1,73,139,69,0,72,99,219,72,137,92,40,248,69,137,38,72,131,196,24,91,93,65,92,65,93,65,94,65,95,195,65,87,65,86,65,85,65,84,85,83,72,131,236,24,73,137,254,72,141,108,36,4,72,141,92,36,8,73,137,247,73,137,204,72,137,238,72,137,209,72,137,223,72,141,21,43,19,0,0,69,137,197,73,131,200,255,72,199,68,36,8,0,0,0,0,199,68,36,4,0,0,0,0,232,240,254,255,255,73,131,200,255,76,137,249,72,141,21,7,19,0,0,72,137,238,72,137,223,232,215,254,255,255,73,131,200,255,76,137,241,72,141,21,245,18,0,0,72,137,238,72,137,223,232,190,254,255,255,73,131,200,255,72,141,13,228,18,0,0,72,141,21,225,18,0,0,72,137,238,72,137,223,232,161,254,255,255,73,131,200,255,72,141,13,209,18,0,0,72,141,21,209,18,0,0,72,137,238,72,137,223,232,132,254,255,255,73,131,200,255,72,141,13,144,18,0,0,72,141,21,189,18,0,0,72,137,238,72,137,223,232,103,254,255,255,73,131,200,255,72,141,13,115,18,0,0,72,141,21,166,18,0,0,72,137,238,72,137,223,232,74,254,255,255,77,133,228,116,50,73,131,200,255,76,137,225,72,141,21,146,18,0,0,72,137,238,72,137,223,232,44,254,255,255,73,131,200,255,76,137,225,72,141,21,124,18,0,0,72,137,238,72,137,223,232,19,254,255,255,139,116,36,4,68,137,234,72,139,124,36,8,232,128,249,255,255,72,131,196,24,91,93,65,92,65,93,65,94,65,95,195,85,83,72,131,236,8,69,49,201,69,49,192,49,201,49,210,49,246,72,141,61,61,18,0,0,255,21,91,28,0,0,69,49,201,69,49,192,137,197,49,201,49,210,49,246,72,141,61,72,18,0,0,255,21,64,28,0,0,137,239,72,141,21,111,25,0,0,137,195,72,141,53,92,18,0,0,232,75,3,0,0,88,137,223,91,72,141,21,102,25,0,0,93,72,141,53,109,18,0,0,233,51,3,0,0,83,72,137,250,72,129,236,0,2,0,0,72,141,53,147,17,0,0,72,137,227,49,192,72,137,223,255,21,225,26,0,0,72,137,222,191,222,0,0,0,255,21,27,25,0,0,72,129,196,0,2,0,0,91,195,49,246,255,37,26,25,0,0,83,69,49,201,72,131,236,16,69,49,192,49,201,49,210,49,246,72,141,61,50,18,0,0,255,21,180,27,0,0,72,141,21,221,24,0,0,72,141,53,72,18,0,0,137,195,137,199,232,191,2,0,0,72,141,21,238,24,0,0,72,141,53,74,18,0,0,137,223,232,170,2,0,0,72,141,21,225,24,0,0,72,141,53,86,18,0,0,137,223,232,149,2,0,0,49,255,255,21,155,24,0,0,133,192,117,19,72,137,231,255,21,182,24,0,0,133,192,117,6,255,21,180,24,0,0,72,139,4,36,72,139,84,36,8,72,131,196,16,91,195,83,69,49,201,72,131,236,16,69,49,192,49,201,49,210,49,246,72,141,61,165,17,0,0,255,21,39,27,0,0,72,141,21,80,24,0,0,72,141,53,187,17,0,0,137,195,137,199,232,50,2,0,0,72,141,21,97,24,0,0,72,141,53,189,17,0,0,137,223,232,29,2,0,0,72,141,21,84,24,0,0,72,141,53,201,17,0,0,137,223,232,8,2,0,0,49,255,255,21,14,24,0,0,133,192,116,5,131,200,255,235,30,72,137,231,255,21,36,24,0,0,133,192,117,238,131,60,36,255,116,232,49,192,255,21,26,24,0,0,139,4,36,72,131,196,16,91,195,65,84,85,83,65,137,252,72,131,236,32,191,16,0,0,0,255,21,75,24,0,0,69,49,201,69,49,192,49,201,49,210,49,246,72,141,61,0,17,0,0,72,137,195,255,21,127,26,0,0,72,141,21,168,23,0,0,72,141,53,19,17,0,0,137,197,137,199,232,138,1,0,0,72,141,21,177,23,0,0,72,141,53,78,17,0,0,137,239,232,117,1,0,0,72,141,21,172,23,0,0,72,141,53,33,17,0,0,137,239,232,96,1,0,0,49,255,255,21,102,23,0,0,133,192,117,48,72,141,108,36,15,186,17,0,0,0,72,137,238,68,137,231,255,21,108,23,0,0,133,192,117,22,72,137,238,72,137,223,255,21,132,23,0,0,49,192,255,21,100,23,0,0,235,2,49,219,72,131,196,32,72,137,216,91,93,65,92,195,83,69,49,201,72,131,236,16,69,49,192,49,201,49,210,49,246,72,141,61,84,16,0,0,255,21,214,25,0,0,72,141,21,15,23,0,0,72,141,53,214,16,0,0,137,195,137,199,232,225,0,0,0,72,141,21,232,22,0,0,72,141,53,83,16,0,0,137,223,232,204,0,0,0,72,141,21,3,23,0,0,72,141,53,120,16,0,0,137,223,232,183,0,0,0,49,255,255,21,189,22,0,0,133,192,117,25,72,141,124,36,12,255,21,190,22,0,0,133,192,117,10,255,21,212,22,0,0,139,68,36,12,72,131,196,16,91,195,83,72,141,53,141,16,0,0,191,28,2,0,0,49,192,232,180,12,0,0,186,0,64,0,0,49,201,72,137,195,137,198,191,34,2,0,0,49,192,232,156,12,0,0,137,222,191,29,2,0,0,49,192,232,142,12,0,0,91,186,30,0,0,0,190,1,0,0,0,191,37,0,0,0,49,192,233,119,12,0,0,72,131,236,8,69,49,201,69,49,192,49,201,49,210,49,246,72,141,61,62,16,0,0,255,21,252,24,0,0,72,141,21,93,22,0,0,72,141,53,76,16,0,0,137,199,232,9,0,0,0,90,49,192,255,37,70,22,0,0,72,199,192,79,2,0,0,233,51,12,0,0,72,199,192,80,2,0,0,233,39,12,0,0,72,131,236,8,72,199,6,96,1,0,0,72,137,242,49,192,137,254,191,81,2,0,0,232,8,12,0,0,90,195,72,131,236,8,72,137,241,49,210,72,137,254,69,49,192,191,82,2,0,0,49,192,232,235,11,0,0,90,195,72,131,236,8,137,254,49,210,49,201,191,83,2,0,0,49,192,232,211,11,0,0,90,195,72,131,236,8,49,210,49,246,72,141,61,210,15,0,0,69,49,201,69,49,192,49,201,255,21,86,24,0,0,72,141,21,191,21,0,0,72,141,53,203,15,0,0,137,199,88,233,98,255,255,255,83,69,49,201,69,49,192,49,201,49,210,49,246,72,141,61,198,15,0,0,255,21,38,24,0,0,72,141,21,207,21,0,0,72,141,53,202,15,0,0,137,195,137,199,232,49,255,255,255,137,223,72,141,21,78,23,0,0,72,141,53,184,15,0,0,232,28,255,255,255,137,223,72,141,21,201,21,0,0,72,141,53,168,15,0,0,232,7,255,255,255,137,223,72,141,21,36,22,0,0,72,141,53,154,15,0,0,232,242,254,255,255,137,223,72,141,21,175,22,0,0,72,141,53,141,15,0,0,232,221,254,255,255,137,223,72,141,21,90,22,0,0,72,141,53,129,15,0,0,232,200,254,255,255,137,223,72,141,21,53,21,0,0,72,141,53,115,15,0,0,232,179,254,255,255,137,223,72,141,21,224,21,0,0,72,141,53,101,15,0,0,232,158,254,255,255,137,223,72,141,21,235,20,0,0,72,141,53,87,15,0,0,232,137,254,255,255,137,223,72,141,21,158,21,0,0,72,141,53,73,15,0,0,232,116,254,255,255,137,223,72,141,21,73,21,0,0,72,141,53,60,15,0,0,232,95,254,255,255,137,223,72,141,21,156,21,0,0,72,141,53,46,15,0,0,232,74,254,255,255,137,223,72,141,21,71,22,0,0,72,141,53,33,15,0,0,232,53,254,255,255,137,223,72,141,21,226,21,0,0,72,141,53,19,15,0,0,232,32,254,255,255,137,223,72,141,21,45,21,0,0,72,141,53,5,15,0,0,232,11,254,255,255,137,223,72,141,21,208,21,0,0,72,141,53,248,14,0,0,232,246,253,255,255,137,223,72,141,21,91,20,0,0,72,141,53,235,14,0,0,232,225,253,255,255,137,223,72,141,21,22,21,0,0,72,141,53,223,14,0,0,232,204,253,255,255,137,223,72,141,21,209,21,0,0,72,141,53,209,14,0,0,232,183,253,255,255,137,223,72,141,21,92,20,0,0,72,141,53,195,14,0,0,232,162,253,255,255,137,223,72,141,21,143,20,0,0,72,141,53,182,14,0,0,232,141,253,255,255,137,223,72,141,21,226,20,0,0,72,141,53,168,14,0,0,232,120,253,255,255,137,223,72,141,21,213,20,0,0,72,141,53,155,14,0,0,232,99,253,255,255,137,223,72,141,21,24,20,0,0,72,141,53,133,14,0,0,232,78,253,255,255,137,223,72,141,21,43,21,0,0,72,141,53,119,14,0,0,232,57,253,255,255,137,223,72,141,21,38,21,0,0,72,141,53,106,14,0,0,232,36,253,255,255,137,223,72,141,21,41,20,0,0,72,141,53,90,14,0,0,232,15,253,255,255,137,223,72,141,21,108,19,0,0,72,141,53,77,14,0,0,232,250,252,255,255,137,223,72,141,21,183,19,0,0,72,141,53,65,14,0,0,232,229,252,255,255,137,223,72,141,21,50,20,0,0,72,141,53,55,14,0,0,232,208,252,255,255,137,223,72,141,21,245,19,0,0,72,141,53,41,14,0,0,232,187,252,255,255,137,223,72,141,21,72,20,0,0,72,141,53,26,14,0,0,232,166,252,255,255,137,223,72,141,21,155,19,0,0,72,141,53,6,14,0,0,232,145,252,255,255,137,223,72,141,21,230,18,0,0,72,141,53,246,13,0,0,232,124,252,255,255,137,223,72,141,21,233,19,0,0,72,141,53,233,13,0,0,232,103,252,255,255,137,223,72,141,21,52,19,0,0,72,141,53,206,13,0,0,232,82,252,255,255,137,223,72,141,21,31,20,0,0,72,141,53,193,13,0,0,232,61,252,255,255,137,223,72,141,21,218,19,0,0,72,141,53,165,13,0,0,232,40,252,255,255,137,223,72,141,21,29,20,0,0,72,141,53,159,13,0,0,232,19,252,255,255,137,223,72,141,21,200,19,0,0,72,141,53,145,13,0,0,232,254,251,255,255,137,223,72,141,21,115,19,0,0,72,141,53,133,13,0,0,232,233,251,255,255,137,223,72,141,21,190,19,0,0,72,141,53,122,13,0,0,232,212,251,255,255,137,223,72,141,21,185,18,0,0,72,141,53,113,13,0,0,232,191,251,255,255,137,223,72,141,21,100,19,0,0,72,141,53,99,13,0,0,232,170,251,255,255,137,223,72,141,21,71,18,0,0,72,141,53,86,13,0,0,232,149,251,255,255,137,223,72,141,21,34,18,0,0,72,141,53,73,13,0,0,232,128,251,255,255,137,223,72,141,21,149,19,0,0,72,141,53,62,13,0,0,232,107,251,255,255,137,223,72,141,21,224,17,0,0,72,141,53,49,13,0,0,232,86,251,255,255,137,223,72,141,21,211,17,0,0,72,141,53,36,13,0,0,232,65,251,255,255,137,223,72,141,21,78,19,0,0,72,141,53,25,13,0,0,232,44,251,255,255,137,223,72,141,21,41,18,0,0,72,141,53,13,13,0,0,232,23,251,255,255,137,223,72,141,21,172,17,0,0,72,141,53,254,12,0,0,232,2,251,255,255,137,223,72,141,21,103,18,0,0,72,141,53,245,12,0,0,232,237,250,255,255,137,223,72,141,21,50,18,0,0,72,141,53,230,12,0,0,232,216,250,255,255,137,223,72,141,21,189,18,0,0,72,141,53,215,12,0,0,232,195,250,255,255,137,223,72,141,21,160,17,0,0,72,141,53,201,12,0,0,232,174,250,255,255,137,223,72,141,21,51,18,0,0,72,141,53,186,12,0,0,232,153,250,255,255,137,223,72,141,21,46,18,0,0,72,141,53,171,12,0,0,232,132,250,255,255,137,223,91,72,141,21,72,17,0,0,72,141,53,156,12,0,0,233,110,250,255,255,65,84,72,141,4,181,0,0,0,0,85,73,137,244,72,137,213,190,3,0,0,0,49,210,83,72,247,246,49,210,190,72,0,0,0,72,137,251,72,137,193,72,131,192,4,72,247,246,72,141,124,1,5,73,57,252,118,7,49,192,233,51,1,0,0,255,21,181,16,0,0,72,133,192,116,238,74,141,52,35,72,137,194,49,255,76,141,5,80,12,0,0,73,137,241,73,41,217,73,131,249,2,15,142,133,0,0,0,138,11,131,199,4,72,131,195,3,192,233,2,131,225,63,65,138,12,8,136,10,15,182,75,253,68,138,75,254,193,225,4,65,192,233,4,131,225,48,69,15,182,201,68,9,201,72,99,201,65,138,12,8,136,74,1,15,182,75,254,68,138,75,255,193,225,2,65,192,233,6,131,225,60,69,15,182,201,68,9,201,72,99,201,65,138,12,8,136,74,2,138,75,255,131,225,63,131,255,71,65,138,12,8,136,74,3,127,9,72,131,194,4,233,122,255,255,255,198,66,4,10,49,255,72,131,194,5,233,107,255,255,255,72,57,222,116,101,138,11,72,141,53,173,11,0,0,192,233,2,131,225,63,73,255,201,138,12,14,136,10,15,182,11,117,18,193,225,4,131,225,48,198,66,2,61,138,12,14,136,74,1,235,45,64,138,123,1,193,225,4,131,225,48,64,192,239,4,64,15,182,255,9,249,72,99,201,138,12,14,136,74,1,15,182,75,1,193,225,2,131,225,60,138,12,14,136,74,2,198,66,3,61,72,131,194,4,235,4,133,255,116,6,198,2,10,72,255,194,72,133,237,198,2,0,116,7,72,41,194,72,137,85,0,91,93,65,92,195,65,85,65,84,85,83,72,129,236,24,1,0,0,72,137,253,73,137,245,72,137,211,72,141,124,36,16,186,0,1,0,0,190,128,0,0,0,255,21,80,16,0,0,49,192,72,141,13,255,10,0,0,15,182,20,1,136,68,20,16,72,255,192,72,131,248,64,117,239,198,68,36,77,0,49,255,69,49,228,77,57,236,116,21,66,15,182,68,37,0,128,124,4,16,128,116,3,72,255,199,73,255,196,235,230,72,133,255,116,58,64,246,199,3,117,52,72,193,239,2,72,141,60,127,255,21,1,15,0,0,72,133,192,116,33,49,201,69,49,192,72,137,194,49,255,235,51,72,255,194,131,255,2,15,132,158,0,0,0,72,137,199,255,21,115,16,0,0,49,192,233,148,0,0,0,66,15,182,116,5,0,73,137,241,64,138,116,52,16,64,128,254,128,117,10,73,255,192,77,57,196,117,228,235,112,65,128,249,61,117,2,255,199,64,136,116,12,12,72,255,193,72,131,249,4,117,224,64,138,116,36,13,15,182,76,36,12,68,141,12,141,0,0,0,0,64,136,241,192,233,4,193,230,4,68,9,201,136,10,138,76,36,14,65,136,201,193,225,6,10,76,36,15,65,192,233,2,68,9,206,133,255,64,136,114,1,72,141,114,3,136,74,2,116,15,131,255,1,15,133,99,255,255,255,72,131,194,2,235,7,49,201,72,137,242,235,134,72,41,194,72,137,19,72,129,196,24,1,0,0,91,93,65,92,65,93,195,72,199,192,37,0,0,0,233,215,3,0,0,72,199,192,54,0,0,0,233,203,3,0,0,72,199,192,11,0,0,0,233,191,3,0,0,72,131,236,8,72,141,53,179,15,0,0,72,141,61,155,7,0,0,72,199,5,33,16,0,0,0,0,0,0,232,148,247,255,255,133,192,116,42,72,141,53,145,15,0,0,72,141,61,203,9,0,0,232,125,247,255,255,133,192,116,19,72,141,53,122,15,0,0,72,141,61,199,9,0,0,232,102,247,255,255,139,61,104,15,0,0,72,141,21,105,15,0,0,72,141,53,193,9,0,0,232,23,247,255,255,139,61,79,15,0,0,72,141,21,144,15,0,0,72,141,53,186,9,0,0,232,254,246,255,255,139,61,54,15,0,0,72,141,21,175,15,0,0,72,141,53,178,9,0,0,232,229,246,255,255,139,61,29,15,0,0,72,141,21,118,15,0,0,72,141,53,161,9,0,0,232,204,246,255,255,139,61,4,15,0,0,72,141,21,157,15,0,0,72,141,53,151,9,0,0,232,179,246,255,255,139,61,235,14,0,0,72,141,21,172,15,0,0,72,141,53,151,9,0,0,232,154,246,255,255,139,61,210,14,0,0,72,141,21,27,15,0,0,72,141,53,156,9,0,0,232,129,246,255,255,139,61,185,14,0,0,72,141,21,194,14,0,0,72,141,53,156,9,0,0,232,104,246,255,255,139,61,160,14,0,0,72,141,21,49,15,0,0,72,141,53,160,9,0,0,232,79,246,255,255,139,61,135,14,0,0,72,141,21,112,15,0,0,72,141,53,149,9,0,0,232,54,246,255,255,139,61,110,14,0,0,72,141,21,215,14,0,0,72,141,53,138,9,0,0,232,29,246,255,255,139,61,85,14,0,0,72,141,21,222,14,0,0,72,141,53,127,9,0,0,232,4,246,255,255,139,61,60,14,0,0,72,141,21,221,14,0,0,72,141,53,117,9,0,0,232,235,245,255,255,139,61,35,14,0,0,72,141,21,68,14,0,0,72,141,53,107,9,0,0,232,210,245,255,255,139,61,10,14,0,0,72,141,21,211,14,0,0,72,141,53,97,9,0,0,232,185,245,255,255,139,61,241,13,0,0,72,141,21,218,13,0,0,72,141,53,88,9,0,0,232,160,245,255,255,139,61,216,13,0,0,72,141,21,137,14,0,0,72,141,53,85,9,0,0,232,135,245,255,255,139,61,191,13,0,0,72,141,21,232,13,0,0,72,141,53,84,9,0,0,232,110,245,255,255,139,61,166,13,0,0,72,141,21,7,14,0,0,72,141,53,82,9,0,0,232,85,245,255,255,139,61,141,13,0,0,72,141,21,142,14,0,0,72,141,53,64,9,0,0,232,60,245,255,255,139,61,116,13,0,0,72,141,21,197,13,0,0,72,141,53,52,9,0,0,232,35,245,255,255,139,61,91,13,0,0,72,141,21,108,13,0,0,72,141,53,35,9,0,0,232,10,245,255,255,139,61,66,13,0,0,72,141,21,27,14,0,0,72,141,53,17,9,0,0,232,241,244,255,255,139,61,41,13,0,0,72,141,21,210,13,0,0,72,141,53,5,9,0,0,232,216,244,255,255,139,61,16,13,0,0,72,141,21,241,13,0,0,72,141,53,3,9,0,0,232,191,244,255,255,139,61,247,12,0,0,72,141,21,40,13,0,0,72,141,53,0,9,0,0,232,166,244,255,255,139,61,222,12,0,0,72,141,21,175,13,0,0,72,141,53,253,8,0,0,232,141,244,255,255,139,61,197,12,0,0,72,141,21,190,13,0,0,72,141,53,250,8,0,0,232,116,244,255,255,139,61,172,12,0,0,72,141,21,229,12,0,0,72,141,53,247,8,0,0,232,91,244,255,255,139,61,147,12,0,0,72,141,21,132,12,0,0,72,141,53,229,8,0,0,232,66,244,255,255,139,61,122,12,0,0,72,141,21,147,12,0,0,72,141,53,211,8,0,0,232,41,244,255,255,139,61,97,12,0,0,72,141,21,82,13,0,0,72,141,53,193,8,0,0,232,16,244,255,255,139,61,72,12,0,0,72,141,21,201,12,0,0,72,141,53,175,8,0,0,232,247,243,255,255,139,61,47,12,0,0,72,141,21,232,12,0,0,72,141,53,157,8,0,0,232,222,243,255,255,139,61,22,12,0,0,72,141,21,135,12,0,0,88,72,141,53,140,8,0,0,233,196,243,255,255,72,49,192,73,137,202,15,5,114,1,195,72,131,61,111,12,0,0,0,116,24,80,255,21,102,12,0,0,89,137,8,72,199,192,255,255,255,255,72,199,194,255,255,255,255,195,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,47,117,115,101,114,47,115,121,115,116,101,109,47,119,101,98,107,105,116,47,119,101,98,98,114,111,119,115,101,114,47,97,112,112,99,97,99,104,101,47,65,112,112,108,105,99,97,116,105,111,110,67,97,99,104,101,46,100,98,0,67,97,99,104,101,32,105,110,115,116,97,108,108,32,67,111,109,112,108,101,116,101,10,10,66,111,111,107,109,97,114,107,58,10,104,116,116,112,58,47,47,99,97,99,104,101,47,105,110,100,101,120,46,104,116,109,108,0,69,82,82,79,82,58,10,78,111,32,105,110,116,101,114,110,97,108,32,99,97,99,104,101,32,102,111,117,110,100,0,47,117,115,101,114,47,115,121,115,116,101,109,47,119,101,98,107,105,116,47,119,101,98,98,114,111,119,115,101,114,47,97,112,112,99,97,99,104,101,0,47,109,110,116,47,117,115,98,48,47,46,100,105,114,116,101,115,116,0,47,109,110,116,47,117,115,98,49,47,46,100,105,114,116,101,115,116,0,78,111,32,117,115,98,32,102,111,117,110,100,10,85,115,105,110,103,32,73,110,116,101,114,110,97,108,32,67,97,99,104,101,0,47,109,110,116,47,117,115,98,49,47,65,112,112,108,105,99,97,116,105,111,110,67,97,99,104,101,46,100,98,0,67,97,99,104,101,32,102,105,108,101,32,102,111,117,110,100,32,111,110,32,85,83,66,49,0,67,97,99,104,101,32,114,101,115,116,111,114,101,32,67,111,109,112,108,101,116,101,46,0,78,111,32,99,97,99,104,101,32,102,105,108,101,32,102,111,117,110,100,32,111,110,32,85,83,66,49,10,85,115,105,110,103,32,73,110,116,101,114,110,97,108,32,67,97,99,104,101,0,47,109,110,116,47,117,115,98,48,47,65,112,112,108,105,99,97,116,105,111,110,67,97,99,104,101,46,100,98,0,67,97,99,104,101,32,102,105,108,101,32,102,111,117,110,100,32,111,110,32,85,83,66,48,0,78,111,32,99,97,99,104,101,32,102,105,108,101,32,102,111,117,110,100,32,111,110,32,85,83,66,48,10,85,115,105,110,103,32,73,110,116,101,114,110,97,108,32,67,97,99,104,101,0,0,46,46,0,37,115,47,37,115,0,102,115,116,121,112,101,0,102,115,112,97,116,104,0,102,114,111,109,0,121,101,115,0,108,97,114,103,101,0,115,116,97,116,105,99,0,116,105,109,101,122,111,110,101,0,97,115,121,110,99,0,105,103,110,111,114,101,97,99,108,0,100,105,114,109,97,115,107,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,83,99,101,83,121,115,85,116,105,108,46,115,112,114,120,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,83,99,101,83,121,115,116,101,109,83,101,114,118,105,99,101,46,115,112,114,120,0,115,99,101,83,121,115,85,116,105,108,83,101,110,100,83,121,115,116,101,109,78,111,116,105,102,105,99,97,116,105,111,110,87,105,116,104,84,101,120,116,0,115,99,101,83,121,115,116,101,109,83,101,114,118,105,99,101,76,97,117,110,99,104,87,101,98,66,114,111,119,115,101,114,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,83,99,101,85,115,101,114,83,101,114,118,105,99,101,46,115,112,114,120,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,73,110,105,116,105,97,108,105,122,101,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,71,101,116,76,111,103,105,110,85,115,101,114,73,100,76,105,115,116,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,84,101,114,109,105,110,97,116,101,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,71,101,116,85,115,101,114,78,97,109,101,0,115,99,101,85,115,101,114,83,101,114,118,105,99,101,71,101,116,73,110,105,116,105,97,108,85,115,101,114,0,83,99,101,83,121,115,67,111,114,101,82,101,98,111,111,116,0,47,115,121,115,116,101,109,47,99,111,109,109,111,110,47,108,105,98,47,108,105,98,107,101,114,110,101,108,46,115,112,114,120,0,115,99,101,75,101,114,110,101,108,82,101,98,111,111,116,0,108,105,98,83,99,101,83,121,115,109,111,100,117,108,101,46,115,112,114,120,0,115,99,101,83,121,115,109,111,100,117,108,101,76,111,97,100,77,111,100,117,108,101,0,108,105,98,83,99,101,76,105,98,99,73,110,116,101,114,110,97,108,46,115,112,114,120,0,109,97,108,108,111,99,0,102,114,101,101,0,99,97,108,108,111,99,0,114,101,97,108,108,111,99,0,109,101,109,97,108,105,103,110,0,109,101,109,115,101,116,0,109,101,109,99,112,121,0,109,101,109,99,109,112,0,115,116,114,99,112,121,0,115,116,114,110,99,112,121,0,115,116,114,99,97,116,0,115,116,114,110,99,97,116,0,115,116,114,108,101,110,0,115,116,114,99,109,112,0,115,116,114,110,99,109,112,0,115,112,114,105,110,116,102,0,115,110,112,114,105,110,116,102,0,115,115,99,97,110,102,0,115,116,114,99,104,114,0,115,116,114,114,99,104,114,0,115,116,114,115,116,114,0,115,116,114,100,117,112,0,114,105,110,100,101,120,0,105,115,100,105,103,105,116,0,97,116,111,105,0,115,116,114,108,99,112,121,0,115,116,114,101,114,114,111,114,0,95,71,101,116,112,99,116,121,112,101,0,95,83,116,111,117,108,0,98,99,111,112,121,0,115,114,97,110,100,0,97,115,99,116,105,109,101,0,97,115,99,116,105,109,101,95,114,0,103,109,116,105,109,101,0,103,109,116,105,109,101,95,115,0,108,111,99,97,108,116,105,109,101,0,108,111,99,97,108,116,105,109,101,95,114,0,109,107,116,105,109,101,0,111,112,101,110,100,105,114,0,114,101,97,100,100,105,114,0,114,101,97,100,100,105,114,95,114,0,116,101,108,108,100,105,114,0,115,101,101,107,100,105,114,0,114,101,119,105,110,100,100,105,114,0,99,108,111,115,101,100,105,114,0,100,105,114,102,100,0,103,101,116,112,114,111,103,110,97,109,101,0,102,111,112,101,110,0,102,114,101,97,100,0,102,119,114,105,116,101,0,102,115,101,101,107,0,102,116,101,108,108,0,102,99,108,111,115,101,0,102,112,114,105,110,116,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,48,49,50,51,52,53,54,55,56,57,43,47,0,108,105,98,107,101,114,110,101,108,95,119,101,98,46,115,112,114,120,0,108,105,98,107,101,114,110,101,108,95,115,121,115,46,115,112,114,120,0,95,95,115,116,97,99,107,95,99,104,107,95,103,117,97,114,100,0,95,95,115,116,97,99,107,95,99,104,107,95,102,97,105,108,0,95,95,101,114,114,111,114,0,115,99,101,75,101,114,110,101,108,69,114,114,111,114,0,115,99,101,75,101,114,110,101,108,76,111,97,100,83,116,97,114,116,77,111,100,117,108,101,0,115,99,101,75,101,114,110,101,108,65,108,108,111,99,97,116,101,68,105,114,101,99,116,77,101,109,111,114,121,0,115,99,101,75,101,114,110,101,108,77,97,112,68,105,114,101,99,116,77,101,109,111,114,121,0,115,99,101,75,101,114,110,101,108,71,101,116,68,105,114,101,99,116,77,101,109,111,114,121,83,105,122,101,0,115,99,101,75,101,114,110,101,108,83,116,97,116,0,115,99,101,75,101,114,110,101,108,79,112,101,110,0,115,99,101,75,101,114,110,101,108,82,101,97,100,0,115,99,101,75,101,114,110,101,108,76,115,101,101,107,0,115,99,101,75,101,114,110,101,108,67,108,111,115,101,0,115,99,101,75,101,114,110,101,108,83,108,101,101,112,0,115,99,101,75,101,114,110,101,108,85,115,108,101,101,112,0,115,99,101,75,101,114,110,101,108,71,101,116,116,105,109,101,111,102,100,97,121,0,115,99,101,75,101,114,110,101,108,71,101,116,80,114,111,99,101,115,115,84,105,109,101,0,115,99,101,75,101,114,110,101,108,71,101,116,67,117,114,114,101,110,116,67,112,117,0,115,121,115,99,116,108,0,115,121,115,99,116,108,98,121,110,97,109,101,0,115,121,115,97,114,99,104,0,101,120,101,99,118,101,0,112,116,104,114,101,97,100,95,115,101,108,102,0,112,116,104,114,101,97,100,95,115,101,116,97,102,102,105,110,105,116,121,95,110,112,0,115,99,101,75,101,114,110,101,108,67,114,101,97,116,101,69,113,117,101,117,101,0,115,99,101,75,101,114,110,101,108,68,101,108,101,116,101,69,113,117,101,117,101,0,115,99,101,75,101,114,110,101,108,65,100,100,85,115,101,114,69,118,101,110,116,0,115,99,101,75,101,114,110,101,108,65,100,100,82,101,97,100,69,118,101,110,116,0,103,101,116,117,105,100,0,103,101,116,103,105,100,0,103,101,116,112,105,100,0,115,101,116,117,105,100,0,115,101,116,103,105,100,0,115,101,116,114,101,117,105,100,0,115,101,116,114,101,103,105,100,0,47,108,105,98,54,52,47,108,100,45,108,105,110,117,120,45,120,56,54,45,54,52,46,115,111,46,50,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,245,254,255,111,0,0,0,0,16,34,32,38,9,0,0,0,5,0,0,0,0,0,0,0,8,34,32,38,9,0,0,0,6,0,0,0,0,0,0,0,240,33,32,38,9,0,0,0,10,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,251,255,255,111,0,0,0,0,1,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

window.mira_blob_2_len = 0x2310;
window.mira_blob_2 = malloc(window.mira_blob_2_len);
write_mem(window.mira_blob_2, payload);
