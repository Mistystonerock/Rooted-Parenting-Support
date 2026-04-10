const fallbackContent = {
  appTitle: "Rooted Parenting",
  intro:
    "Support for parents of children with behavioral challenges, centered on safety, connection, and skill-building.",
  behaviors: [
    {
      slug: "anger-outbursts",
      title: "Anger Outbursts",
      whatItMayMean:
        "A child may be overwhelmed, feeling unsafe, struggling to name feelings, or trying to regain a sense of control.",
      parentCanSay: [
        "I can see this feels really big right now.",
        "You are having a hard time. I am here with you.",
        "Let's work on getting your body calm first.",
        "You are safe. We can figure this out together."
      ],
      avoid: [
        "Calm down right now.",
        "You are being bad.",
        "Stop acting crazy.",
        "If you do not stop, I am leaving."
      ],
      calmingStrategies: [
        "Lower your voice and reduce words.",
        "Move to a quieter, safer space if possible.",
        "Offer water, deep breaths, or a sensory tool.",
        "Sit nearby without demanding eye contact.",
        "Use short choices such as 'sit with me or stand by the wall.'"
      ],
      nextSteps: [
        "Reconnect before correcting.",
        "Talk about what the child was feeling and needing.",
        "Practice one replacement skill for next time.",
        "Repair any harm in a simple, supportive way.",
        "Seek added support if outbursts are frequent, intense, or unsafe."
      ]
    },
    {
      slug: "school-refusal",
      title: "School Refusal",
      whatItMayMean:
        "A child may be feeling anxious, unsafe, overwhelmed, embarrassed, bullied, or stressed by school demands.",
      parentCanSay: [
        "I believe that school feels hard right now.",
        "We do not have to solve everything this minute.",
        "Let's talk about what feels most scary.",
        "We will make a step-by-step plan together."
      ],
      avoid: [
        "You are just being dramatic.",
        "Everyone has to do it, so get over it.",
        "If you do not go, you are in trouble.",
        "There is nothing to worry about."
      ],
      calmingStrategies: [
        "Break the morning into very small steps.",
        "Use a visual routine with one step at a time.",
        "Offer a comfort item or grounding strategy.",
        "Coordinate with school for a soft start or check-in person.",
        "Practice the routine when the child is calm."
      ],
      nextSteps: [
        "Notice the part that was hardest.",
        "Work with the child and school to reduce barriers.",
        "Create a predictable next-step plan.",
        "Praise effort, not just attendance.",
        "Seek added support if missed days or severe anxiety continue."
      ]
    },
    {
      slug: "defiance",
      title: "Defiance",
      whatItMayMean:
        "A child may be protecting themselves from feeling controlled, rushed, shamed, or misunderstood.",
      parentCanSay: [
        "I want to understand what is making this hard.",
        "You do not have to like the limit, but I will help you through it.",
        "Let's find two choices that both work.",
        "We can do this together."
      ],
      avoid: [
        "Because I said so.",
        "You are so disrespectful.",
        "Why do you always do this?",
        "You never listen."
      ],
      calmingStrategies: [
        "Slow the interaction and reduce power struggles.",
        "Offer limited choices.",
        "Use a calm, steady tone.",
        "State the limit once, then support follow-through.",
        "Check whether hunger, fatigue, or overload is adding stress."
      ],
      nextSteps: [
        "Talk about what made cooperation hard.",
        "Practice the routine during a calm time.",
        "Adjust demands when needed without dropping the limit.",
        "Rebuild connection through play or shared time.",
        "Seek added support if conflict is constant or intense."
      ]
    },
    {
      slug: "lying",
      title: "Lying",
      whatItMayMean:
        "A child may be trying to avoid fear, shame, punishment, or disconnection and may not yet feel safe telling the truth.",
      parentCanSay: [
        "I want to understand what made it hard to tell me the truth.",
        "You are not in trouble for being honest with me now.",
        "Let's slow down and start again.",
        "The truth helps us solve the problem together."
      ],
      avoid: [
        "You are a liar.",
        "I can never trust you.",
        "Tell me the truth right now or else.",
        "What is wrong with you?"
      ],
      calmingStrategies: [
        "Stay neutral before asking questions.",
        "Focus on safety and honesty over blame.",
        "Give the child a moment to think.",
        "Use simple, specific questions.",
        "Notice if fear is driving the behavior."
      ],
      nextSteps: [
        "Talk about what felt risky about telling the truth.",
        "Practice honest repair in a manageable way.",
        "Use natural consequences without shaming.",
        "Build trust by responding calmly to honesty.",
        "Seek support if lying is frequent and tied to fear or attachment strain."
      ]
    },
    {
      slug: "aggression",
      title: "Aggression",
      whatItMayMean:
        "A child may be in a fight response, overwhelmed, or lacking the skills to manage intense feelings and impulses safely.",
      parentCanSay: [
        "I will keep everyone safe.",
        "Your body is telling me you are overwhelmed.",
        "I am going to help you get space and calm.",
        "We can talk when your body feels safer."
      ],
      avoid: [
        "What is wrong with you?",
        "You are dangerous.",
        "Hit me again and see what happens.",
        "You should know better."
      ],
      calmingStrategies: [
        "Increase physical safety first.",
        "Move siblings or objects out of the area if needed.",
        "Keep your body language calm and non-threatening.",
        "Use brief phrases and lots of space.",
        "Offer movement, squeezing a pillow, or stomping in a safe spot."
      ],
      nextSteps: [
        "Repair connection once calm returns.",
        "Name the trigger, body signs, and safer choices for next time.",
        "Make a safety plan for future high-risk moments.",
        "Support accountability without shaming.",
        "Seek support any time safety is at risk."
      ]
    },
    {
      slug: "emotional-shutdown",
      title: "Emotional Shutdown",
      whatItMayMean:
        "A child may be in a freeze response and may need safety, space, time, and low-pressure connection.",
      parentCanSay: [
        "You do not have to talk right now.",
        "I am here with you.",
        "We can be quiet together until your body feels ready.",
        "You are safe, and I will stay nearby."
      ],
      avoid: [
        "Use your words.",
        "Stop ignoring me.",
        "If you do not talk, I cannot help you.",
        "You are being rude."
      ],
      calmingStrategies: [
        "Reduce questions and demands.",
        "Sit nearby with calm presence.",
        "Offer nonverbal choices such as nodding, pointing, or drawing.",
        "Use grounding through blankets, warm drinks, or quiet sensory input.",
        "Give extra time before expecting conversation."
      ],
      nextSteps: [
        "Check in gently later.",
        "Talk about early signs of shutdown.",
        "Create a plan for how the child can signal 'I need space.'",
        "Strengthen connection through low-pressure time together.",
        "Seek support if shutdown is frequent or long-lasting."
      ]
    },
    {
      slug: "anxiety",
      title: "Anxiety",
      whatItMayMean:
        "A child may be feeling unsafe inside their body even when there is no immediate danger and may need reassurance plus coping support.",
      parentCanSay: [
        "I can see your worry is feeling strong.",
        "You are not alone with this feeling.",
        "Let's help your body first, then make a small plan.",
        "We can take this one step at a time."
      ],
      avoid: [
        "There is nothing to be afraid of.",
        "Just stop worrying.",
        "You are fine.",
        "Big kids do not get scared."
      ],
      calmingStrategies: [
        "Use slow breathing or grounding with the five senses.",
        "Write or draw the worry.",
        "Break tasks into very small steps.",
        "Use routines and visual plans.",
        "Offer practice, not pressure."
      ],
      nextSteps: [
        "Notice what helped the child cope.",
        "Name the fear without judging it.",
        "Build a step-by-step bravery plan.",
        "Support confidence by noticing effort and recovery.",
        "Seek support if anxiety affects school, sleep, eating, or friendships."
      ]
    }
  ],
  learningPages: [
    {
      slug: "what-is-trauma",
      title: "What is Trauma",
      icon: "TR",
      intro:
        "Trauma is what happens when a child goes through something that feels too scary, too overwhelming, or too much to handle alone. It is not only about what happened. It is also about how the child’s body and brain responded.",
      bullets: [
        "Trauma can come from one big event or from ongoing stress.",
        "Different children can respond differently to the same experience.",
        "A child may not have words for what they are carrying inside.",
        "Behavior is often one of the clearest ways distress shows up."
      ],
      examples: [
        "A child who has lived with yelling may react strongly to raised voices.",
        "A child who has experienced loss may become clingy or fearful during separation.",
        "A child under chronic stress may seem restless, shut down, or quick to anger."
      ]
    },
    {
      slug: "how-trauma-affects-behavior",
      title: "How Trauma Affects Behavior",
      icon: "HB",
      intro:
        "When children have been under stress for a long time, their nervous system may stay on alert. That can make everyday situations feel bigger, harder, or less safe than they look from the outside.",
      bullets: [
        "A child may go into fight, flight, freeze, or shut down quickly.",
        "Behavior may be driven by protection, not disrespect.",
        "Big feelings can show up as anger, avoidance, lying, aggression, or silence.",
        "Skills like flexibility, calming, and problem-solving may be harder under stress."
      ],
      examples: [
        "A simple limit may feel like danger to a child who expects shame or harshness.",
        "A school morning can trigger panic when the child feels overwhelmed before the day even starts.",
        "A child may say 'no' quickly because their body is trying to protect them."
      ]
    },
    {
      slug: "regulation-before-discipline",
      title: "Regulation Before Discipline",
      icon: "RD",
      intro:
        "Children learn best when their body feels calm enough to think. If a child is flooded, correction alone usually does not teach the skill we want them to use next time.",
      bullets: [
        "Calm first, teach second.",
        "A regulated adult helps a child return to regulation.",
        "Limits still matter, but timing matters too.",
        "Discipline works better when a child can actually take it in."
      ],
      examples: [
        "Instead of giving a long lecture during a meltdown, help the child settle and talk later.",
        "If a child throws a shoe in anger, start with safety and calm, then return to repair.",
        "When your child is crying hard, a short phrase often works better than many instructions."
      ]
    },
    {
      slug: "connection-before-correction",
      title: "Connection Before Correction",
      icon: "CC",
      intro:
        "Connection helps children feel safe enough to listen, reflect, and try again. It does not mean there are no limits. It means relationship comes first so learning can happen.",
      bullets: [
        "Children are more open to guidance when they feel understood.",
        "Connection can be brief and simple.",
        "A calm tone, steady presence, and kind words help lower threat.",
        "Correction is easier to hear after reconnection."
      ],
      examples: [
        "You might say, 'That was really hard. I’m here. We’ll figure it out together.'",
        "After reconnecting, you can return to the broken rule with more success.",
        "A child who feels seen is less likely to stay stuck in defense."
      ]
    },
    {
      slug: "understanding-triggers",
      title: "Understanding Triggers",
      icon: "UT",
      intro:
        "A trigger is something that makes the body react as if danger is near, even if the current moment is safe. Triggers can be obvious or easy to miss.",
      bullets: [
        "Triggers can be sounds, smells, tones of voice, transitions, places, or people.",
        "A child may not know they are triggered. They may just feel sudden distress.",
        "Patterns matter more than isolated moments.",
        "Tracking triggers helps parents respond with more understanding and planning."
      ],
      examples: [
        "A child may unravel every Sunday night before school.",
        "A slammed door may lead to instant anger or shutdown.",
        "Being told to hurry may spark panic in a child who already feels overwhelmed."
      ]
    },
    {
      slug: "building-emotional-safety",
      title: "Building Emotional Safety",
      icon: "ES",
      intro:
        "Emotional safety grows when a child feels accepted, supported, and less afraid of shame. Children do better when they know they can make mistakes and still stay connected to the adults who care for them.",
      bullets: [
        "Predictable routines help children feel steadier.",
        "A calm response reduces fear and defensiveness.",
        "Kind limits create safety when they are consistent.",
        "Repair after conflict teaches that relationships can recover."
      ],
      examples: [
        "A bedtime routine can lower stress because the child knows what comes next.",
        "Saying 'You are safe and we will work through this' can reduce panic.",
        "Returning after a hard moment to reconnect builds trust over time."
      ]
    },
    {
      slug: "co-regulation",
      title: "Co-Regulation",
      icon: "CR",
      intro:
        "Co-regulation means a calm adult helps a child borrow steadiness until they can use more of their own skills. Children build self-regulation by experiencing regulation with someone first.",
      bullets: [
        "Your calm presence matters, even when it does not change things right away.",
        "Tone of voice, pacing, and body language all affect a child’s nervous system.",
        "Co-regulation is not rescuing. It is supporting the child through stress.",
        "Over time, repeated co-regulation helps children build their own coping skills."
      ],
      examples: [
        "Sitting nearby and breathing slowly can help a child settle.",
        "Using fewer words can lower pressure when a child is overwhelmed.",
        "Offering water, a blanket, or a quiet corner can support regulation."
      ]
    }
  ],
  learningPath: [
    {
      slug: "understanding-behavior-as-communication",
      title: "Understanding Behavior as Communication",
      icon: "BC",
      explanation:
        "Behavior often tells us what a child cannot yet say with words. Looking underneath the behavior helps parents respond with more understanding and skill.",
      bullets: [
        "Children often show stress through behavior before they can explain it.",
        "Big reactions can point to fear, overwhelm, shame, or unmet needs.",
        "Curiosity helps more than labels."
      ],
      examples: [
        "A child who yells may be feeling flooded and unsure how to ask for help.",
        "A child who refuses may be protecting themselves from something that feels too hard."
      ],
      actionStep: "This week, pause once a day and ask yourself, 'What might my child be feeling or needing right now?'",
      reflectionPrompt: "When my child acts out, what do I assume first: disrespect, or distress?"
    },
    {
      slug: "how-trauma-impacts-the-brain",
      title: "How Trauma Impacts the Brain",
      icon: "TB",
      explanation:
        "Trauma can keep a child’s brain and body on alert. That can make it harder to think clearly, stay flexible, and calm down quickly.",
      bullets: [
        "Survival responses can turn on fast.",
        "Stress can make learning and problem-solving harder.",
        "A calm adult can help the brain feel safer."
      ],
      examples: [
        "A child may panic over a small change because their brain expects danger.",
        "A child may forget directions when they feel stressed."
      ],
      actionStep: "Choose one stressful part of the day and plan a calmer routine around it.",
      reflectionPrompt: "What does my child do that might make more sense when I think about stress instead of choice?"
    },
    {
      slug: "regulation-before-discipline",
      title: "Regulation Before Discipline",
      icon: "RD",
      explanation:
        "Children learn best when their body feels calm enough to think. Helping regulation first makes discipline more effective and more respectful.",
      bullets: [
        "Calm bodies learn better.",
        "Safety comes before teaching.",
        "Timing matters when giving correction."
      ],
      examples: [
        "A child in meltdown needs fewer words, not a long lecture.",
        "After calm returns, the child is more able to reflect and repair."
      ],
      actionStep: "Practice one short calming phrase you can use in hard moments, like 'We will calm first.'",
      reflectionPrompt: "What usually happens when I try to teach while my child is still overwhelmed?"
    },
    {
      slug: "connection-before-correction",
      title: "Connection Before Correction",
      icon: "CC",
      explanation:
        "Connection lowers threat and opens the door to listening. Children are more ready for correction when they feel understood and safe with the adult.",
      bullets: [
        "Connection is not giving in.",
        "A kind tone can lower defensiveness.",
        "Repair builds trust after hard moments."
      ],
      examples: [
        "A quick hug, soft voice, or simple validation can shift the tone of a moment.",
        "Children often hear limits better after they feel seen."
      ],
      actionStep: "Before correcting once this week, start with one connecting statement.",
      reflectionPrompt: "How does my child respond when I lead with connection first?"
    },
    {
      slug: "understanding-triggers",
      title: "Understanding Triggers",
      icon: "UT",
      explanation:
        "Triggers are reminders that make the body react like danger is close. Noticing patterns helps parents prepare and respond with care.",
      bullets: [
        "Triggers can be hidden and surprising.",
        "Patterns matter more than isolated moments.",
        "Preparation can reduce stress for everyone."
      ],
      examples: [
        "A child may struggle every time they are rushed.",
        "A loud sound may lead to anger, tears, or shutdown."
      ],
      actionStep: "Track one repeated hard moment and write down what happened right before it.",
      reflectionPrompt: "What situations seem to bring out the strongest reactions in my child?"
    },
    {
      slug: "responding-to-anger-and-defiance",
      title: "Responding to Anger and Defiance",
      icon: "AD",
      explanation:
        "Anger and pushback often show a child feels overwhelmed, powerless, or misunderstood. Calm limits and support can help more than power struggles.",
      bullets: [
        "Stay steady and reduce extra words.",
        "Offer clear choices when possible.",
        "Reconnect before teaching."
      ],
      examples: [
        "A child saying 'No' may need help feeling some control.",
        "An angry child often needs calm support before talking about rules."
      ],
      actionStep: "Pick one respectful choice phrase to use this week, such as 'You can sit here or stand by me.'",
      reflectionPrompt: "What helps me avoid turning a hard moment into a power struggle?"
    },
    {
      slug: "responding-to-anxiety-and-shutdown",
      title: "Responding to Anxiety and Shutdown",
      icon: "AS",
      explanation:
        "Anxiety and shutdown often mean a child’s body is overwhelmed. Gentle support, extra time, and less pressure can help them feel safer.",
      bullets: [
        "Not all distress looks loud.",
        "Some children need space more than questions.",
        "Calm presence can help a child come back online."
      ],
      examples: [
        "A child who goes silent may need less pressure, not more demands to talk.",
        "A worried child may need the next step made very small."
      ],
      actionStep: "When your child looks overwhelmed, try reducing questions and offering one simple next step.",
      reflectionPrompt: "How do I usually react when my child gets quiet, frozen, or very worried?"
    },
    {
      slug: "supporting-children-at-school",
      title: "Supporting Children at School",
      icon: "SC",
      explanation:
        "School stress can show up through refusal, stomachaches, anger, or exhaustion. Small supports and teamwork with school staff can make a big difference.",
      bullets: [
        "Predictability helps children feel safer.",
        "School support works best when it is specific and realistic.",
        "Documentation can help parents notice patterns and advocate clearly."
      ],
      examples: [
        "A child may need a check-in adult at the start of the day.",
        "A visual schedule or break plan can lower school stress."
      ],
      actionStep: "Write down one school concern and one support to ask about this week.",
      reflectionPrompt: "What part of school seems hardest for my child right now?"
    },
    {
      slug: "parent-self-regulation",
      title: "Parent Self Regulation",
      icon: "PS",
      explanation:
        "Parents need support too. When you notice your own stress signals early, it becomes easier to respond with steadiness and care.",
      bullets: [
        "Your nervous system affects the moment.",
        "Small pauses can change the tone of an interaction.",
        "Self-regulation is a skill, not perfection."
      ],
      examples: [
        "Taking one breath before speaking can reduce conflict.",
        "Using a short script can help when you feel flooded too."
      ],
      actionStep: "Choose one grounding tool to practice before you need it.",
      reflectionPrompt: "What are my early signs that I am getting overwhelmed too?"
    },
    {
      slug: "building-long-term-emotional-safety",
      title: "Building Long-Term Emotional Safety",
      icon: "ES",
      explanation:
        "Healing grows through many small moments of safety, repair, predictability, and care. Emotional safety is built over time, not in one perfect response.",
      bullets: [
        "Consistency matters more than perfection.",
        "Repair after conflict helps restore trust.",
        "Children grow through repeated safe experiences."
      ],
      examples: [
        "Returning to reconnect after a hard moment teaches that relationships can recover.",
        "Predictable routines can lower stress across the whole day."
      ],
      actionStep: "Choose one daily routine where you can add more predictability or connection.",
      reflectionPrompt: "What small change would help my child feel more emotionally safe this week?"
    }
  ],
  calmTools: [
    {
      title: "60-Second Reset",
      text: "Pause, lower your shoulders, and take three slower breaths than usual. Say one calm sentence and focus on safety first."
    },
    {
      title: "Fewer Words Plan",
      text: "Use short, steady phrases like 'I am here' or 'We will get calm first' instead of long explanations."
    },
    {
      title: "Body Check",
      text: "Notice your jaw, chest, and hands. Relax one part of your body before responding."
    },
    {
      title: "Repair Reminder",
      text: "Hard moments do not define your child or your parenting. Reconnection after stress matters."
    }
  ],
  worksheets: [
    {
      title: "Behavior Reflection Log",
      description: "Notice what happened, what your child may have needed, and what helped.",
      href: "worksheets-printable.html"
    },
    {
      title: "Calm Plan Worksheet",
      description: "Create a simple plan for early signs, calming choices, and support people.",
      href: "worksheets-printable.html"
    },
    {
      title: "School Meeting Planner",
      description: "Prepare for school conversations with concerns, supports, and follow-up notes.",
      href: "worksheets-printable.html"
    },
    {
      title: "Trigger Tracker",
      description: "Track patterns across situations, body signs, and what helped.",
      href: "worksheets-printable.html"
    },
    {
      title: "Parent Self-Regulation Plan",
      description: "Make a calm plan for your own nervous system during hard moments.",
      href: "worksheets-printable.html"
    }
  ],
  courses: [
    {
      slug: "foundations-of-safe-and-effective-parenting",
      title: "Rooted Parenting Foundations",
      cpsTitle: "Foundations of Safe and Effective Parenting",
      icon: "FP",
      description:
        "A core parent education course focused on understanding child behavior, responding with calm, building emotional safety, and improving parent-child connection.",
      completionStandard:
        "Complete all required lessons or sessions, participate in reflection and home practice, and demonstrate engagement with core parenting skills.",
      certificateName:
        "Certificate of Completion: Foundations of Safe and Effective Parenting",
      includes: [
        "Understanding behavior as communication",
        "Regulation before discipline",
        "Connection before correction",
        "Parent-child practice activities",
        "Reflection, progress tracking, and certificate completion"
      ]
    },
    {
      slug: "positive-discipline-structure-and-follow-through",
      title: "Positive Discipline and Follow-Through",
      cpsTitle: "Positive Discipline, Structure, and Follow-Through",
      icon: "PD",
      description:
        "A caregiver skill-building course focused on limits, routines, consequences, consistency, and reinforcement to reduce reactive discipline and increase calm follow-through.",
      completionStandard:
        "Complete all required lessons or sessions, participate in parent-child practice activities, and show understanding of reinforcement, routines, and safe consequences.",
      certificateName:
        "Certificate of Completion: Positive Discipline, Structure, and Follow-Through",
      includes: [
        "Healthy reward and reinforcement systems",
        "Developmentally appropriate consequences",
        "Routine building and follow-through",
        "Reducing power struggles",
        "Home practice for consistency"
      ]
    },
    {
      slug: "trauma-informed-parenting-and-behavior-support",
      title: "Trauma-Informed Parenting",
      cpsTitle: "Trauma-Informed Parenting and Behavior Support",
      icon: "TI",
      description:
        "A course that helps caregivers understand how trauma and chronic stress affect behavior, regulation, attachment, and learning, with a focus on safety and predictability.",
      completionStandard:
        "Complete all required lessons or sessions, participate in reflection and skills practice, and demonstrate understanding of trauma-informed parenting principles.",
      certificateName:
        "Certificate of Completion: Trauma-Informed Parenting and Behavior Support",
      includes: [
        "How trauma affects the brain and behavior",
        "Predictability, safety, and co-regulation",
        "Reducing shame-based responses",
        "Supporting anxious, shut down, or aggressive behavior",
        "Caregiver reflection and home practice"
      ]
    },
    {
      slug: "behavior-stabilization-and-parent-response-skills",
      title: "Behavior Support Basics",
      cpsTitle: "Behavior Stabilization and Parent Response Skills",
      icon: "BS",
      description:
        "A practical course for caregivers of children with aggression, defiance, anxiety, shutdown, lying, school refusal, and emotional overload.",
      completionStandard:
        "Complete all required lessons or sessions, practice at least one assigned behavior-support tool between sessions, and demonstrate engagement with calm response strategies.",
      certificateName:
        "Certificate of Completion: Behavior Stabilization and Parent Response Skills",
      includes: [
        "Support for defiance, aggression, and shutdown",
        "Behavior guides for school refusal and anxiety",
        "Calm scripts and response plans",
        "Replacement skill teaching",
        "Documentation and progress review"
      ]
    },
    {
      slug: "reunification-parenting-skills-and-family-stabilization",
      title: "Reunification Parenting Support",
      cpsTitle: "Reunification Parenting Skills and Family Stabilization",
      icon: "RF",
      description:
        "A structured course for caregivers working toward reunification or family stabilization, with emphasis on rebuilding trust, routines, calm structure, and repair.",
      completionStandard:
        "Complete all required lessons or sessions, participate in reflection and assigned family practice tasks, and demonstrate engagement with safety, structure, and relationship-building content.",
      certificateName:
        "Certificate of Completion: Reunification Parenting Skills and Family Stabilization",
      includes: [
        "Rebuilding trust and emotional safety",
        "Predictable routines and caregiver consistency",
        "Repair after conflict or separation stress",
        "Family stabilization planning",
        "Completion documentation for referring systems"
      ]
    }
  ]
};

let appContent = fallbackContent;

const supplementalBehaviorGuides = [
  {
    slug: "emotional-meltdown",
    title: "Emotional Meltdown",
    whatItMayMean:
      "A child may be flooded by feelings, sensory stress, disappointment, or overwhelm and may not be able to use coping skills in that moment.",
    parentCanSay: [
      "This feels really big right now.",
      "You are safe. I am staying with you.",
      "We can calm your body first.",
      "We will talk when this feels smaller."
    ],
    avoid: [
      "You are overreacting.",
      "Stop this right now.",
      "You are too old for this.",
      "There is no reason to act like this."
    ],
    calmingStrategies: [
      "Lower noise, light, and extra demands when possible.",
      "Use a calm voice and very short phrases.",
      "Offer water, a comfort item, or quiet space.",
      "Stay nearby without pushing conversation."
    ],
    nextSteps: [
      "Reconnect after the child is calm.",
      "Notice what may have built up before the meltdown.",
      "Practice one small coping plan for next time.",
      "Seek extra support if meltdowns are frequent, intense, or unsafe."
    ]
  },
  {
    slug: "disrespectful-language",
    title: "Disrespectful Language",
    whatItMayMean:
      "A child may be overwhelmed, reactive, ashamed, or lacking safe words for frustration, disappointment, or hurt.",
    parentCanSay: [
      "I can help when words are respectful.",
      "I hear that you are upset.",
      "Let's try that again with calmer words.",
      "You can be mad and still speak safely."
    ],
    avoid: [
      "You are so rude.",
      "Watch your mouth.",
      "You are acting just like a brat.",
      "Say that again and see what happens."
    ],
    calmingStrategies: [
      "Do not match the child's tone.",
      "Use one calm limit and step back from arguing.",
      "Offer a short reset phrase the child can use instead.",
      "Wait to process the words until the child is calmer."
    ],
    nextSteps: [
      "Practice respectful replacement phrases later.",
      "Talk about what feeling was underneath the words.",
      "Repair the interaction without shaming.",
      "Seek support if verbal conflict is constant and escalating."
    ]
  },
  {
    slug: "trouble-focusing",
    title: "Trouble Focusing",
    whatItMayMean:
      "A child may be overwhelmed, anxious, mentally tired, distracted by stress, or struggling with attention and task demands.",
    parentCanSay: [
      "This looks hard to hold in your mind right now.",
      "Let's make this smaller together.",
      "We can do one step at a time.",
      "You do not have to do it all at once."
    ],
    avoid: [
      "You are not trying.",
      "Just pay attention.",
      "Why is this so hard for you?",
      "You would do it if you cared."
    ],
    calmingStrategies: [
      "Break tasks into short clear steps.",
      "Reduce noise or visual clutter when possible.",
      "Use movement or stretch breaks.",
      "Give one direction at a time."
    ],
    nextSteps: [
      "Notice when focus is hardest during the day.",
      "Try visual reminders or shorter work blocks.",
      "Talk with school if attention struggles are affecting learning.",
      "Seek added support if focusing is a frequent barrier across settings."
    ]
  },
  {
    slug: "homework-conflict",
    title: "Homework Conflict",
    whatItMayMean:
      "Homework conflict can signal stress, frustration, exhaustion, learning difficulty, perfectionism, or a need for more support and structure.",
    parentCanSay: [
      "Homework feels hard right now.",
      "Let's start with one small part.",
      "I will help you make a plan.",
      "We can take a short break and come back."
    ],
    avoid: [
      "This should be easy.",
      "You are just being lazy.",
      "We are staying here until it is done no matter what.",
      "Why do you always make this such a battle?"
    ],
    calmingStrategies: [
      "Start with one small task instead of the whole assignment.",
      "Use a timer for work and break cycles.",
      "Sit nearby with calm support if that helps.",
      "Check if hunger, fatigue, or overload are part of the struggle."
    ],
    nextSteps: [
      "Notice which kind of homework causes the most stress.",
      "Talk with the child about what feels hardest.",
      "Reach out to school if work demands are causing repeated conflict.",
      "Build a predictable homework rhythm with breaks."
    ]
  },
  {
    slug: "peer-conflict",
    title: "Peer Conflict",
    whatItMayMean:
      "Peer conflict may reflect hurt feelings, social stress, misunderstanding, impulsive reacting, or difficulty reading cues and solving problems calmly.",
    parentCanSay: [
      "Something about that interaction felt hard.",
      "Let's slow down and look at what happened.",
      "We can think about what you felt and what the other child may have felt.",
      "You can learn from this and try again."
    ],
    avoid: [
      "You always cause drama.",
      "Just ignore it and get over it.",
      "No wonder other kids get upset with you.",
      "You should know better by now."
    ],
    calmingStrategies: [
      "Calm the child's body before reviewing the conflict.",
      "Use simple questions instead of blame.",
      "Help the child name feelings on both sides.",
      "Practice one repair or problem-solving step."
    ],
    nextSteps: [
      "Review what happened when everyone is calm.",
      "Teach one social repair phrase the child can use.",
      "Support accountability without shaming.",
      "Seek support if peer struggles are frequent or deeply affecting the child."
    ]
  },
  {
    slug: "sibling-conflict",
    title: "Sibling Conflict",
    whatItMayMean:
      "Sibling conflict can grow from competition, sensory overload, fairness concerns, frustration, or difficulty sharing space and strong feelings.",
    parentCanSay: [
      "I am going to help both of you get calm.",
      "We will focus on safety first.",
      "Each of you will get a turn when voices are calmer.",
      "We can work on repair after everyone settles."
    ],
    avoid: [
      "You two never stop.",
      "Why can't you just get along?",
      "One of you is always the problem.",
      "I am tired of both of you."
    ],
    calmingStrategies: [
      "Separate children briefly if needed for safety.",
      "Lower the intensity before hearing the whole story.",
      "Use short calm phrases and clear limits.",
      "Support turns and repair after everyone is regulated."
    ],
    nextSteps: [
      "Talk later about triggers, fairness, and problem-solving.",
      "Teach simple scripts for asking, stopping, and repairing.",
      "Notice patterns such as hunger, crowding, or transitions.",
      "Seek support if sibling conflict is frequent, intense, or unsafe."
    ]
  }
];

fallbackContent.behaviors = [...fallbackContent.behaviors, ...supplementalBehaviorGuides];

const behaviorSelectionCategories = [
  {
    title: "Emotional Reactions",
    items: [
      { label: "Anger / Explosive Reactions", slug: "anger-outbursts" },
      { label: "Anxiety / Panic", slug: "anxiety" },
      { label: "Emotional Meltdown", slug: "emotional-meltdown" },
      { label: "Shutdown / Withdrawal", slug: "emotional-shutdown" }
    ]
  },
  {
    title: "Behavior Challenges",
    items: [
      { label: "Defiance / Saying No", slug: "defiance" },
      { label: "Lying / Hiding Things", slug: "lying" },
      { label: "Aggression", slug: "aggression" },
      { label: "Disrespectful Language", slug: "disrespectful-language" }
    ]
  },
  {
    title: "School Related",
    items: [
      { label: "Refusing School", slug: "school-refusal" },
      { label: "Trouble Focusing", slug: "trouble-focusing" },
      { label: "Homework Conflict", slug: "homework-conflict" }
    ]
  },
  {
    title: "Social Challenges",
    items: [
      { label: "Peer Conflict", slug: "peer-conflict" },
      { label: "Sibling Conflict", slug: "sibling-conflict" }
    ]
  }
];

const screenTitle = document.getElementById("screen-title");
const appContentRoot = document.getElementById("app-content");
const topAction = document.getElementById("home-quick-action");
const tabButtons = Array.from(document.querySelectorAll(".tabbar__item"));
const completionStorageKey = "rooted-parenting-completed-lessons";
const onboardingStorageKey = "rooted-parenting-onboarding-complete";

fallbackContent.learningPath[0].sections = [
  {
    heading: "Why this lesson matters",
    points: [
      "Behavior often shows a child's stress before words do.",
      "Looking under the behavior helps parents respond with more calm and skill.",
      "This shift helps children feel safer while they learn."
    ]
  },
  {
    heading: "What this can look like",
    points: [
      "A child may yell instead of asking for help.",
      "A child may refuse when something feels too hard or overwhelming.",
      "A child may push back when they feel powerless or misunderstood."
    ]
  }
];
fallbackContent.learningPath[0].reflectionQuestions = [
  "When my child acts out, what do I assume first: disrespect, or distress?",
  "What changes when I get curious about what my child may be feeling underneath the behavior?"
];

fallbackContent.learningPath[1].sections = [
  {
    heading: "How stress changes the brain",
    points: [
      "A child's brain may stay alert for danger even in everyday situations.",
      "Survival responses can get louder than thinking skills.",
      "This can affect focus, memory, flexibility, and emotional control."
    ]
  },
  {
    heading: "What parents may notice",
    points: [
      "Big reactions to small changes.",
      "Trouble calming after a hard moment.",
      "Forgetting directions or melting down when stressed."
    ]
  }
];
fallbackContent.learningPath[1].reflectionQuestions = [
  "What does my child do that makes more sense when I think about stress instead of choice?",
  "Which part of the day seems to put my child most on alert?"
];

fallbackContent.learningPath[2].sections = [
  {
    heading: "What regulation means",
    points: [
      "Regulation means the body is calm enough to think, listen, and learn.",
      "A dysregulated child often needs safety and support before correction.",
      "Limits still matter, but timing matters too."
    ]
  },
  {
    heading: "What parents can do first",
    points: [
      "Lower your voice and slow your pace.",
      "Focus on safety before consequences or long explanations.",
      "Come back to teaching once calm returns."
    ]
  }
];
fallbackContent.learningPath[2].reflectionQuestions = [
  "What usually happens when I try to teach while my child is still overwhelmed?",
  "What helps me remember to slow down before correcting?"
];

fallbackContent.learningPath[3].sections = [
  {
    heading: "Why connection comes first",
    points: [
      "Children are more open to guidance when they feel understood.",
      "Connection lowers fear and defensiveness.",
      "A calm relationship makes correction easier to hear."
    ]
  },
  {
    heading: "Simple ways to connect",
    points: [
      "Use a soft voice and fewer words.",
      "Start with one validating sentence.",
      "Reconnect before returning to the limit."
    ]
  }
];
fallbackContent.learningPath[3].reflectionQuestions = [
  "How does my child respond when I lead with connection first?",
  "What kind of connection helps my child feel safest during hard moments?"
];

fallbackContent.learningPath[4].sections = [
  {
    heading: "What triggers are",
    points: [
      "Triggers are reminders that make the body react like danger is close.",
      "A child may not know they are triggered. They may just feel sudden distress.",
      "Patterns matter more than one isolated moment."
    ]
  },
  {
    heading: "How parents can help",
    points: [
      "Notice what happens right before a big reaction.",
      "Track repeated stress points like transitions, loud sounds, or rushing.",
      "Use what you learn to prepare and reduce pressure."
    ]
  }
];
fallbackContent.learningPath[4].reflectionQuestions = [
  "What situations seem to bring out the strongest reactions in my child?",
  "What pattern am I starting to notice that I may have missed before?"
];

fallbackContent.learningPath[5].sections = [
  {
    heading: "What anger and defiance may mean",
    points: [
      "A child may be feeling overwhelmed, powerless, or misunderstood.",
      "Pushback can be a protection response, not just a behavior choice.",
      "Calm limits help more than power struggles."
    ]
  },
  {
    heading: "What parents can do",
    points: [
      "Stay steady and use fewer words.",
      "Offer one or two clear choices when possible.",
      "Reconnect and teach after the child is calmer."
    ]
  }
];
fallbackContent.learningPath[5].reflectionQuestions = [
  "What helps me avoid turning a hard moment into a power struggle?",
  "When my child is angry, what helps me stay calm and clear?"
];

fallbackContent.learningPath.forEach((lesson) => {
  if (!lesson.reflectionQuestions) {
    lesson.reflectionQuestions = lesson.reflectionPrompt ? [lesson.reflectionPrompt] : [];
  }
});

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash || "home";
}

function setRoute(route) {
  window.location.hash = route;
}

function getCompletedLessons() {
  try {
    const raw = window.localStorage.getItem(completionStorageKey);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function isLessonComplete(slug) {
  return getCompletedLessons().includes(slug);
}

function toggleLessonComplete(slug) {
  const completed = getCompletedLessons();
  const next = completed.includes(slug)
    ? completed.filter((item) => item !== slug)
    : [...completed, slug];
  window.localStorage.setItem(completionStorageKey, JSON.stringify(next));
}

function hasCompletedOnboarding() {
  try {
    return window.localStorage.getItem(onboardingStorageKey) === "true";
  } catch (error) {
    return false;
  }
}

function completeOnboarding() {
  window.localStorage.setItem(onboardingStorageKey, "true");
}

function findBehavior(slug) {
  return appContent.behaviors.find((behavior) => behavior.slug === slug);
}

function bulletList(items) {
  return `<ul class="bullet-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildBehaviorScripts(behavior) {
  const opening = behavior.parentCanSay[0] || "I am here with you.";
  const calming = behavior.parentCanSay[1] || "Let's slow this down together.";
  const boundaryBase = behavior.parentCanSay[2] || "We can calm first.";
  const repair = behavior.nextSteps[0] || "We can talk when things feel calmer.";

  return {
    opening,
    calming,
    boundary: `${boundaryBase} I will help keep this moment safe.`,
    repair: typeof repair === "string" ? repair : "We can reconnect and talk about what happened later."
  };
}

function behaviorListCard(behavior) {
  return `
    <button class="list-card" type="button" data-behavior="${behavior.slug}">
      <strong>${behavior.title}</strong>
      <span>${behavior.whatItMayMean}</span>
    </button>
  `;
}

function topicCard(page) {
  return `
    <button class="list-card" type="button" data-learning="${page.slug}">
      <div class="card-head">
        <span class="icon-badge">${page.icon}</span>
        <div>
          <strong>${page.title}</strong>
          <span>${page.intro}</span>
        </div>
      </div>
    </button>
  `;
}

function pathCard(lesson, index, total) {
  const percent = Math.round(((index + 1) / total) * 100);
  const completed = isLessonComplete(lesson.slug);
  return `
    <button class="path-card" type="button" data-path-lesson="${lesson.slug}">
      <div class="path-meta">
        <span class="path-step">Lesson ${index + 1} of ${total}</span>
        <div class="path-progress" aria-hidden="true"><span style="width:${percent}%"></span></div>
      </div>
      <div class="card-head">
        <span class="icon-badge">${lesson.icon}</span>
        <div>
          <strong>${lesson.title}</strong>
          <p>${lesson.explanation}</p>
          <div class="pill-row">
            <span class="status-pill ${completed ? "is-complete" : ""}">${completed ? "Completed" : "Not completed"}</span>
          </div>
        </div>
      </div>
    </button>
  `;
}

function courseCard(course) {
  return `
    <button class="list-card" type="button" data-course="${course.slug}">
      <div class="card-head">
        <span class="icon-badge">${course.icon}</span>
        <div>
          <strong>${course.title}</strong>
          <span>${course.cpsTitle}</span>
          <p>${course.description}</p>
        </div>
      </div>
    </button>
  `;
}

// Home screen content, including public resources and court/CPS packet links.
function renderHome() {
  screenTitle.textContent = "Home";
  appContentRoot.innerHTML = `
    <section class="hero">
      <p class="mini-label">Welcome</p>
      <h2>Support built around safety and connection</h2>
      <p>${appContent.intro}</p>
      <div class="pill-row">
        <span class="pill">Trauma-informed</span>
        <span class="pill">Simple language</span>
        <span class="pill">Mobile friendly</span>
      </div>
      <div class="hero-actions">
        <button class="primary-button" type="button" data-route-link="tools">Help Me Right Now</button>
        <button class="secondary-button" type="button" data-route-link="behaviors">Open Behavior Guides</button>
      </div>
    </section>

    <section class="hero-actions hero-actions--stacked">
      <button class="button-card" type="button" data-route-link="behaviors">
        <strong>Behavior Guides</strong>
        <span>Get calm, supportive guidance for hard moments and next steps.</span>
      </button>
      <button class="button-card" type="button" data-route-link="learning">
        <strong>Learn</strong>
        <span>Learn how trauma can shape behavior, stress responses, and healing.</span>
      </button>
      <button class="button-card" type="button" data-route-link="tools">
        <strong>Tools</strong>
        <span>Short tools to help you slow down, stay grounded, and reconnect.</span>
      </button>
      <button class="button-card" type="button" data-route-link="courses">
        <strong>Courses</strong>
        <span>Open CPS-friendly course tracks, completion standards, and certificate options.</span>
      </button>
      <button class="button-card" type="button" data-route-link="progress">
        <strong>Progress Tracker</strong>
        <span>Check completed lessons, next steps, and parenting program documents.</span>
      </button>
      <button class="button-card" type="button" data-route-link="worksheets">
        <strong>Worksheets</strong>
        <span>Printable pages for reflection, planning, and support.</span>
      </button>
      <button class="button-card" type="button" data-route-link="school">
        <strong>School Support</strong>
        <span>Get teacher email help, meeting prep, and school support ideas.</span>
      </button>
    </section>

    <section class="section-card">
      <div class="section-card__header">
        <h2>Start here if today feels hard</h2>
      </div>
      <ul class="support-list">
        <li>Start with safety and a calm body before problem-solving.</li>
        <li>Choose one behavior guide to understand what your child may be communicating.</li>
        <li>Use the Tools tab when you need grounding prompts or fewer-word scripts.</li>
        <li>Use Learn and Worksheets to support the next step, not just the hard moment.</li>
      </ul>
    </section>

    <section class="section-card">
      <h2>About Rooted Parenting</h2>
      <p>Rooted Parenting is a trauma-informed parenting support program designed to help caregivers understand behavior, respond with calm, and build emotional safety at home.</p>
      <p>The program includes lessons, behavior response guidance, reflection tools, and printable worksheets that support parents in navigating emotional and behavioral challenges.</p>
      <h3>Program Goals</h3>
      ${bulletList([
        "increase parent confidence",
        "reduce power struggles",
        "support emotional regulation",
        "improve parent-child connection",
        "provide real-time guidance during difficult moments"
      ])}
    </section>

    <section class="section-card">
      <h2>Resources</h2>
      <p>Open printable and facilitator resources from the Home screen.</p>
      <div class="hero-actions hero-actions--stacked">
        <a class="resource-link" href="rooted-parenting-workbook.html" target="_blank" rel="noopener noreferrer">Download Parent Workbook</a>
        <a class="resource-link" href="rooted-parenting-facilitator-guide.html" target="_blank" rel="noopener noreferrer">Facilitator Guide</a>
        <a class="resource-link" href="worksheets-printable.html" target="_blank" rel="noopener noreferrer">Printable Worksheets</a>
        <a class="resource-link" href="rooted-parenting-one-page-summary.html" target="_blank" rel="noopener noreferrer">One-Page Program Summary</a>
        <button class="resource-link" type="button" data-route-link="progress">Open Progress Tracker</button>
      </div>
    </section>

    <section class="section-card">
      <h2>For Courts and Agencies</h2>
      <p>Use these printable tools to present Rooted Parenting as a structured caregiver intervention for juvenile court, CPS, school family support, diversion, and community-based parent education.</p>
      <div class="hero-actions hero-actions--stacked">
        <button class="resource-link" type="button" data-route-link="courses">Open Course Catalog</button>
        <a class="resource-link" href="rooted-parenting-court-cps-referral-packet.html" target="_blank" rel="noopener noreferrer">Court / CPS Referral Packet</a>
        <a class="resource-link" href="rooted-parenting-court-order-language.html" target="_blank" rel="noopener noreferrer">Sample Court Order Language</a>
        <a class="resource-link" href="rooted-parenting-program-manual.html" target="_blank" rel="noopener noreferrer">Program Manual</a>
        <a class="resource-link" href="rooted-parenting-pre-post-assessment.html" target="_blank" rel="noopener noreferrer">Pre/Post Parenting Assessment</a>
        <a class="resource-link" href="rooted-parenting-attendance-progress-report.html" target="_blank" rel="noopener noreferrer">Attendance and Progress Report</a>
        <a class="resource-link" href="rooted-parenting-completion-certificate.html" target="_blank" rel="noopener noreferrer">Completion Certificate Template</a>
      </div>
    </section>
  `;
}

function renderCoursesList() {
  screenTitle.textContent = "Courses";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Course catalog</h2>
      <p>These five CPS-friendly course tracks help position Rooted Parenting as a structured parent education program with clear completion standards and certificate options.</p>
      <div class="pill-row">
        <span class="pill">${appContent.courses.length} course tracks</span>
        <span class="pill">CPS-friendly titles</span>
        <span class="pill">Certificate ready</span>
      </div>
    </section>

    <section class="section-card">
      <h2>How to use the courses</h2>
      ${bulletList([
        "Assign a course track based on the family's referral reason or service plan.",
        "Use the learning path, behavior guides, and worksheets as supporting materials.",
        "Document progress with the in-app Progress Tracker and printable reports.",
        "Issue a certificate when the completion standard is met."
      ])}
    </section>

    <section class="detail-stack">
      ${appContent.courses.map(courseCard).join("")}
    </section>
  `;
}

function renderCourseDetail(slug) {
  const course = appContent.courses.find((item) => item.slug === slug);

  if (!course) {
    screenTitle.textContent = "Not Found";
    appContentRoot.innerHTML = `
      <section class="section-card">
        <h2>Course not found</h2>
        <p>Please go back to the course catalog and choose another course.</p>
        <button class="button-card" type="button" data-route-link="courses">
          <strong>Back to Courses</strong>
          <span>Return to the full course catalog.</span>
        </button>
      </section>
    `;
    return;
  }

  screenTitle.textContent = course.title;
  appContentRoot.innerHTML = `
    <section class="detail-card">
      <div class="detail-card__header">
        <span class="behavior-tag">Courses</span>
        <button class="back-link" type="button" data-route-link="courses">Back</button>
      </div>
      <div class="card-head">
        <span class="icon-badge">${course.icon}</span>
        <div>
          <h2>${course.title}</h2>
          <p><strong>${course.cpsTitle}</strong></p>
          <p>${course.description}</p>
        </div>
      </div>
    </section>

    <section class="detail-card">
      <h3>What this course includes</h3>
      ${bulletList(course.includes)}
    </section>

    <section class="detail-card">
      <h3>Completion standard</h3>
      <div class="action-box">
        <strong>Recommended standard</strong>
        <p>${course.completionStandard}</p>
      </div>
    </section>

    <section class="detail-card">
      <h3>Certificate name</h3>
      <div class="note-box">
        <p>${course.certificateName}</p>
      </div>
    </section>

    <section class="detail-card">
      <h3>Recommended app supports</h3>
      ${bulletList([
        "Use the Learn section for lesson content and parent reflection.",
        "Use Behaviors for situation-specific response guidance.",
        "Use Tools for in-the-moment parent regulation support.",
        "Use Worksheets and Progress Tracker for documentation and follow-through."
      ])}
      <div class="hero-actions hero-actions--stacked">
        <button class="primary-button" type="button" data-route-link="learning">Open Learning Path</button>
        <button class="secondary-button" type="button" data-route-link="progress">Open Progress Tracker</button>
      </div>
    </section>
  `;
}

function renderOnboarding() {
  screenTitle.textContent = "Welcome";
  appContentRoot.innerHTML = `
    <section class="onboarding-card">
      <p class="mini-label">Welcome to Rooted Parenting</p>
      <h2>Support for hard moments and steady growth</h2>
      <p>Rooted Parenting helps parents respond to children with behavioral challenges using trauma-informed, non-judgmental, supportive guidance.</p>
      <p>This app is designed to help you slow down, understand behavior with more compassion, and build skills that support safety, connection, and emotional growth.</p>
      ${bulletList([
        "Find behavior guides for common parenting concerns.",
        "Learn step by step through the Rooted Parenting Program.",
        "Use calming tools and printable worksheets when you need support."
      ])}
      <button class="primary-button" type="button" data-finish-onboarding="true">Open Rooted Parenting</button>
    </section>
  `;
}

function renderLearningList() {
  screenTitle.textContent = "Learn";
  const completedCount = getCompletedLessons().length;
  const totalCount = appContent.learningPath.length;
  appContentRoot.innerHTML = `
    <section class="section-card">
      <h2>Learn</h2>
      <p>These short lessons help explain how stress and trauma can affect a child’s behavior, feelings, and ability to cope.</p>
    </section>
    <section class="section-card">
      <div class="section-card__header">
        <h2>Learning Topics</h2>
      </div>
      <p>Browse by topic when you want a quick explanation and everyday examples.</p>
    </section>
    <section class="list-stack">
      ${appContent.learningPages.map(topicCard).join("")}
    </section>
    <section class="section-card">
      <div class="section-card__header">
        <h2>Learning Path</h2>
      </div>
      <p>Follow these 10 lessons in order for a step-by-step parent learning sequence.</p>
      <div class="pill-row">
        <span class="status-pill is-complete">${completedCount} of ${totalCount} lessons completed</span>
      </div>
    </section>
    <section class="list-stack">
      ${appContent.learningPath.map((lesson, index) => pathCard(lesson, index, appContent.learningPath.length)).join("")}
    </section>
  `;
}

function renderLearningDetail(slug) {
  const page = appContent.learningPages.find((item) => item.slug === slug);

  if (!page) {
    screenTitle.textContent = "Not Found";
    appContentRoot.innerHTML = `
      <section class="section-card">
        <h2>Lesson not found</h2>
        <p>Please go back to Learn and choose another page.</p>
        <button class="button-card" type="button" data-route-link="learning">
          <strong>Back to Learn</strong>
          <span>Return to all learning pages.</span>
        </button>
      </section>
    `;
    return;
  }

  screenTitle.textContent = page.title;
  appContentRoot.innerHTML = `
    <section class="detail-card">
      <div class="detail-card__header">
        <span class="behavior-tag">Learn</span>
        <button class="back-link" type="button" data-route-link="learning">Back</button>
      </div>
      <h2>${page.title}</h2>
      <p>${page.intro}</p>
    </section>
    <section class="detail-card">
      <h3>Key ideas</h3>
      ${bulletList(page.bullets)}
    </section>
    <section class="detail-card">
      <h3>Everyday examples</h3>
      <p>These are common examples parents may relate to:</p>
      ${bulletList(page.examples)}
    </section>
    <section class="detail-card">
      <h3>What to remember</h3>
      ${bulletList([
        "Behavior is communication.",
        "Safety and connection help learning happen.",
        "Skill-building takes repetition and support.",
        "You do not have to do this perfectly to help your child."
      ])}
    </section>
  `;
}

function renderPathLesson(slug) {
  const lesson = appContent.learningPath.find((item) => item.slug === slug);

  if (!lesson) {
    screenTitle.textContent = "Not Found";
    appContentRoot.innerHTML = `
      <section class="section-card">
        <h2>Lesson not found</h2>
        <p>Please go back to the Learning Path and choose another lesson.</p>
        <button class="button-card" type="button" data-route-link="learning">
          <strong>Back to Learning Path</strong>
          <span>Return to all lessons.</span>
        </button>
      </section>
    `;
    return;
  }

  const index = appContent.learningPath.findIndex((item) => item.slug === slug);
  const total = appContent.learningPath.length;
  const percent = Math.round(((index + 1) / total) * 100);

  screenTitle.textContent = lesson.title;
  appContentRoot.innerHTML = `
    <section class="detail-card">
      <div class="detail-card__header">
        <span class="behavior-tag">Learning Path</span>
        <button class="back-link" type="button" data-route-link="learning">Back</button>
      </div>
      <div class="detail-progress">
        <div class="path-meta">
          <span class="path-step">Lesson ${index + 1} of ${total}</span>
          <span class="icon-badge">${lesson.icon}</span>
        </div>
        <div class="path-progress" aria-hidden="true"><span style="width:${percent}%"></span></div>
      </div>
      <h2>${lesson.title}</h2>
      <p>${lesson.explanation}</p>
      <div class="completion-row">
        <span class="status-pill ${isLessonComplete(lesson.slug) ? "is-complete" : ""}">
          ${isLessonComplete(lesson.slug) ? "Lesson completed" : "Lesson in progress"}
        </span>
        <button class="secondary-button" type="button" data-complete-lesson="${lesson.slug}">
          ${isLessonComplete(lesson.slug) ? "Mark Incomplete" : "Mark Complete"}
        </button>
      </div>
    </section>
    ${
      lesson.sections
        ? lesson.sections
            .map(
              (section) => `
                <section class="detail-card lesson-section">
                  <h3>${section.heading}</h3>
                  ${bulletList(section.points)}
                </section>
              `
            )
            .join("")
        : ""
    }
    <section class="detail-card">
      <h3>Key points</h3>
      ${bulletList(lesson.bullets)}
    </section>
    <section class="detail-card">
      <h3>Practical examples</h3>
      <p>These are everyday parenting moments many families can relate to:</p>
      ${bulletList(lesson.examples)}
    </section>
    <section class="detail-card">
      <h3>Action step</h3>
      <div class="action-box">
        <strong>Try this next</strong>
        <p>${lesson.actionStep}</p>
      </div>
    </section>
    <section class="detail-card">
      <h3>Reflection questions</h3>
      <div class="note-box">
        ${bulletList(lesson.reflectionQuestions)}
      </div>
    </section>
  `;
}

function renderBehaviors() {
  screenTitle.textContent = "Behavior Support";
  appContentRoot.innerHTML = `
    <section class="section-card">
      <div class="section-card__header">
        <h2>Behavior Support</h2>
      </div>
      <p>Select what is happening right now.</p>
    </section>
    <section class="category-stack">
      ${behaviorSelectionCategories
        .map(
          (category) => `
            <article class="section-card">
              <h3 class="category-title">${category.title}</h3>
              <div class="category-grid">
                ${category.items
                  .map(
                    (item) => `
                      <button class="list-card" type="button" data-behavior="${item.slug}">
                        <strong>${item.label}</strong>
                        <span>Open supportive guidance for this moment.</span>
                      </button>
                    `
                  )
                  .join("")}
              </div>
            </article>
          `
        )
        .join("")}
    </section>
    <section class="section-card">
      <button class="button-card" type="button" data-route-link="tools">
        <strong>Not sure what to choose</strong>
        <span>Start with calming support and grounded next steps.</span>
      </button>
    </section>
  `;
}

function renderBehaviorDetail(slug) {
  const behavior = findBehavior(slug);

  if (!behavior) {
    screenTitle.textContent = "Not Found";
    appContentRoot.innerHTML = `
      <section class="section-card">
        <h2>Behavior not found</h2>
        <p>Please go back to the behavior list and choose another guide.</p>
        <button class="button-card" type="button" data-route-link="behaviors">
          <strong>Back to Behavior List</strong>
          <span>Return to all behavior guides.</span>
        </button>
      </section>
    `;
    return;
  }

  screenTitle.textContent = behavior.title;
  const scripts = buildBehaviorScripts(behavior);
  appContentRoot.innerHTML = `
    <section class="detail-card">
      <div class="detail-card__header">
        <span class="behavior-tag">Behavior Guide</span>
        <button class="back-link" type="button" data-route-link="behaviors">Back</button>
      </div>
      <h2>${behavior.title}</h2>
      <div class="note-box">
        <h3>What the behavior may mean</h3>
        <p>${behavior.whatItMayMean}</p>
      </div>
    </section>

    <section class="detail-stack">
      <article class="detail-card">
        <h3>Quick scripts</h3>
        <div class="script-grid">
          <div class="script-box">
            <strong>Start with connection</strong>
            <p>"${escapeHtml(scripts.opening)}"</p>
          </div>
          <div class="script-box">
            <strong>Help with calming</strong>
            <p>"${escapeHtml(scripts.calming)}"</p>
          </div>
          <div class="script-box">
            <strong>Set a safe limit</strong>
            <p>"${escapeHtml(scripts.boundary)}"</p>
          </div>
          <div class="script-box">
            <strong>Come back after the moment</strong>
            <p>${escapeHtml(scripts.repair)}</p>
          </div>
        </div>
      </article>
      <article class="detail-card">
        <h3>What the parent can say</h3>
        ${bulletList(behavior.parentCanSay)}
      </article>
      <article class="detail-card">
        <h3>What to avoid</h3>
        ${bulletList(behavior.avoid)}
      </article>
      <article class="detail-card">
        <h3>Calming strategies</h3>
        ${bulletList(behavior.calmingStrategies)}
      </article>
      <article class="detail-card">
        <h3>Next steps</h3>
        ${bulletList(behavior.nextSteps)}
      </article>
    </section>
  `;
}

function renderTools() {
  screenTitle.textContent = "Tools";
  appContentRoot.innerHTML = `
    <section class="section-card">
      <h2>Parent Calm Tools</h2>
      <p>These short tools are here to support your nervous system first, so you can respond with steadiness and care.</p>
    </section>
    <section class="detail-stack">
      ${appContent.calmTools
        .map(
          (tool) => `
            <article class="detail-card">
              <h3>${tool.title}</h3>
              <p>${tool.text}</p>
            </article>
          `
        )
        .join("")}
    </section>
    <section class="section-card">
      <h2>Grounding prompts</h2>
      ${bulletList([
        "What does my child need most right now: safety, space, connection, or help calming?",
        "Can I make my voice slower and softer?",
        "What is one short sentence I can use instead of a long explanation?",
        "What can wait until later, when both of us are calmer?"
      ])}
    </section>
    <section class="section-card">
      <h2>Breathing tools</h2>
      ${bulletList([
        "Breathe in for 4 and out for 6, three times.",
        "Put one hand on your chest and one on your belly while breathing slowly.",
        "Exhale longer than you inhale to help your body settle.",
        "If breathing feels hard, focus on relaxing your jaw and shoulders first."
      ])}
    </section>
    <section class="section-card">
      <h2>School support</h2>
      <p>If school stress is part of the picture, you can also open school planning and communication support.</p>
      <button class="button-card" type="button" data-route-link="school">
        <strong>Open School Support</strong>
        <span>Teacher email help, meeting prep, and documentation support.</span>
      </button>
    </section>
    <section class="section-card">
      <h2>Track your progress</h2>
      <p>See completed lessons, next steps, and program documentation in one place.</p>
      <button class="button-card" type="button" data-route-link="progress">
        <strong>Open Progress Tracker</strong>
        <span>Lesson completion, assessment access, and documentation tools.</span>
      </button>
    </section>
    <section class="section-card">
      <h2>Self-regulation reminders</h2>
      ${bulletList([
        "My child is having a hard time, not trying to be hard.",
        "I can hold a limit and still stay kind.",
        "Connection helps change happen.",
        "I do not need to solve everything in this moment."
      ])}
    </section>
  `;
}

function renderProgressTracker() {
  const completedLessons = getCompletedLessons();
  const totalLessons = appContent.learningPath.length;
  const completedCount = completedLessons.length;
  const remainingCount = Math.max(totalLessons - completedCount, 0);
  const percent = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;
  const nextLessons = appContent.learningPath
    .filter((lesson) => !completedLessons.includes(lesson.slug))
    .slice(0, 3);

  screenTitle.textContent = "Progress Tracker";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Your progress</h2>
      <p>Track completed lessons, see what is left, and keep moving through the Rooted Parenting learning path one step at a time.</p>
      <div class="pill-row">
        <span class="pill">${completedCount} completed</span>
        <span class="pill">${remainingCount} remaining</span>
        <span class="pill">${percent}% finished</span>
      </div>
    </section>

    <section class="detail-card">
      <div class="detail-progress">
        <div class="path-meta">
          <span class="path-step">Course progress</span>
          <span class="icon-badge">${percent}%</span>
        </div>
        <div class="path-progress" aria-hidden="true"><span style="width:${percent}%"></span></div>
      </div>
      <p>${completedCount} of ${totalLessons} learning path lessons have been marked complete.</p>
      <div class="hero-actions hero-actions--stacked">
        <button class="primary-button" type="button" data-route-link="learning">Open Learning Path</button>
        <button class="secondary-button" type="button" data-route-link="courses">Open Course Catalog</button>
        <a class="resource-link" href="rooted-parenting-pre-post-assessment.html" target="_blank" rel="noopener noreferrer">Open Pre/Post Assessment</a>
      </div>
    </section>

    <section class="detail-card">
      <h3>Completed lessons</h3>
      ${
        completedCount
          ? `<div class="pill-row">${completedLessons
              .map((slug) => {
                const lesson = appContent.learningPath.find((item) => item.slug === slug);
                return lesson
                  ? `<button class="pill" type="button" data-path-lesson="${lesson.slug}">${escapeHtml(lesson.title)}</button>`
                  : "";
              })
              .join("")}</div>`
          : `<p>No lessons have been marked complete yet. Start with the Learning Path and use the "Mark Complete" button after each lesson.</p>`
      }
    </section>

    <section class="detail-card">
      <h3>Next recommended lessons</h3>
      ${
        nextLessons.length
          ? nextLessons
              .map(
                (lesson) => `
                  <button class="list-card" type="button" data-path-lesson="${lesson.slug}">
                    <strong>${lesson.title}</strong>
                    <span>${lesson.explanation}</span>
                  </button>
                `
              )
              .join("")
          : `<p>You have completed all current lessons. You can revisit any lesson, use the worksheets, or print the documentation materials below.</p>`
      }
    </section>

    <section class="detail-card">
      <h3>Program documentation</h3>
      ${bulletList([
        "Use the pre/post parenting assessment to document parent-reported growth.",
        "Use the attendance and progress report for court, CPS, school, or agency documentation.",
        "Use the completion certificate template after the required lessons or sessions are finished."
      ])}
      <div class="hero-actions hero-actions--stacked">
        <a class="resource-link" href="rooted-parenting-attendance-progress-report.html" target="_blank" rel="noopener noreferrer">Attendance and Progress Report</a>
        <a class="resource-link" href="rooted-parenting-completion-certificate.html" target="_blank" rel="noopener noreferrer">Completion Certificate Template</a>
      </div>
    </section>
  `;
}

// Worksheets screen content, including printable tools and the professional packet.
function renderWorksheets() {
  screenTitle.textContent = "Worksheets";
  appContentRoot.innerHTML = `
    <section class="section-card">
      <h2>Printable Worksheets</h2>
      <p>Use these pages to notice patterns, prepare for hard moments, and support calm repair after stress.</p>
      <a class="resource-link" href="worksheets-printable.html" target="_blank" rel="noopener noreferrer">Download Worksheets</a>
      <a class="resource-link" href="worksheets-printable.html" target="_blank" rel="noopener noreferrer">Open Printable Worksheet Pages</a>
      <a class="resource-link" href="rooted-parenting-workbook.html" target="_blank" rel="noopener noreferrer">Download Parent Workbook</a>
      <a class="resource-link" href="rooted-parenting-facilitator-guide.html" target="_blank" rel="noopener noreferrer">Facilitator Guide</a>
      <button class="resource-link" type="button" data-route-link="progress">Open Progress Tracker</button>
    </section>
    <section class="section-card">
      <h2>Professional Packet</h2>
      <p>These printable materials help present Rooted Parenting as a referral-ready parent education program for juvenile courts, CPS, schools, and family service agencies.</p>
      <div class="hero-actions hero-actions--stacked">
        <a class="resource-link" href="rooted-parenting-court-cps-referral-packet.html" target="_blank" rel="noopener noreferrer">Court / CPS Referral Packet</a>
        <a class="resource-link" href="rooted-parenting-court-order-language.html" target="_blank" rel="noopener noreferrer">Sample Court Order Language</a>
        <a class="resource-link" href="rooted-parenting-program-manual.html" target="_blank" rel="noopener noreferrer">Program Manual</a>
        <a class="resource-link" href="rooted-parenting-pre-post-assessment.html" target="_blank" rel="noopener noreferrer">Pre/Post Parenting Assessment</a>
        <a class="resource-link" href="rooted-parenting-attendance-progress-report.html" target="_blank" rel="noopener noreferrer">Attendance and Progress Report</a>
        <a class="resource-link" href="rooted-parenting-completion-certificate.html" target="_blank" rel="noopener noreferrer">Completion Certificate Template</a>
      </div>
    </section>
    <section class="detail-stack">
      ${appContent.worksheets
        .map(
          (worksheet) => `
            <article class="detail-card">
              <h3>${worksheet.title}</h3>
              <p>${worksheet.description}</p>
              <div class="template-box worksheet-preview">
                <strong>Printable preview</strong>
                <div class="worksheet-preview__line"></div>
                <div class="worksheet-preview__line"></div>
                <div class="worksheet-preview__line"></div>
                <div class="worksheet-preview__line"></div>
              </div>
              <a class="resource-link" href="worksheets-printable.html" target="_blank" rel="noopener noreferrer">Open Printable Page</a>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function renderRoute() {
  const route = getRoute();
  const [section, slug] = route.split("/");

  if (!hasCompletedOnboarding() && section !== "onboarding") {
    renderOnboarding();
    updateTabState("home");
    return;
  }

  switch (section) {
    case "onboarding":
      renderOnboarding();
      break;
    case "home":
      renderHome();
      break;
    case "behaviors":
      renderBehaviors();
      break;
    case "learning":
      renderLearningList();
      break;
    case "lesson":
      renderLearningDetail(slug);
      break;
    case "courses":
      renderCoursesList();
      break;
    case "course":
      renderCourseDetail(slug);
      break;
    case "path":
      renderPathLesson(slug);
      break;
    case "behavior":
      renderBehaviorDetail(slug);
      break;
    case "tools":
      renderTools();
      break;
    case "progress":
      renderProgressTracker();
      break;
    case "worksheets":
      renderWorksheets();
      break;
    case "school":
      renderSchool();
      break;
    default:
      renderHome();
      break;
  }

  updateTabState(section);
}

function renderSchool() {
  screenTitle.textContent = "School Support";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>School support with calm structure</h2>
      <p>When school feels hard, children often need safety, predictability, and adults working together in small steps.</p>
    </section>
    <section class="section-card">
      <h2>Teacher email help</h2>
      <div class="email-box">Hello,

I wanted to reach out because my child has been having a hard time with school-related stress. We are working on support at home and would value working together in a calm, step-by-step way.

Some things we are noticing:
- Hard times of day:
- Main triggers or worries:
- What seems to help:

Could we talk about a few supports that may help my child feel safer and more successful at school?

Thank you,
[Parent name]</div>
    </section>
    <section class="section-card">
      <h2>Meeting prep</h2>
      <div class="school-checklist">
        <div>Write down the hardest times of day and what your child may be feeling.</div>
        <div>Bring examples of triggers, body signs, and what helps at home.</div>
        <div>Ask for one safe adult your child can check in with at school.</div>
        <div>Start with small supports and a clear follow-up date.</div>
      </div>
    </section>
    <section class="section-card">
      <h2>Helpful school supports</h2>
      ${bulletList([
        "Visual schedules and clear transitions.",
        "A calm check-in person.",
        "Breaks or a quiet reset space.",
        "Reduced workload during high-stress periods.",
        "Home-school communication focused on patterns and support."
      ])}
    </section>
    <section class="section-card">
      <h2>Documentation support</h2>
      ${bulletList([
        "Keep a simple log of dates, concerns, missed school days, and what helped.",
        "Save copies of emails, meeting notes, and agreed supports.",
        "Track patterns such as transitions, social stress, or sensory overload.",
        "Use the School Meeting Planner worksheet to organize what to bring."
      ])}
    </section>
    <section class="section-card">
      <h2>If school refusal is present</h2>
      ${bulletList([
        "Validate that school feels hard.",
        "Make the morning routine smaller and more predictable.",
        "Coordinate with school around entry support.",
        "Praise brave steps, not perfection.",
        "Seek extra support if missed days continue."
      ])}
    </section>
  `;
}

function updateTabState(section) {
  const activeMap = {
    behavior: "behaviors",
    lesson: "learning",
    courses: "learning",
    course: "learning",
    path: "learning",
    progress: "learning",
    onboarding: "home"
  };
  const active = activeMap[section] || section || "home";
  tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.route === active);
  });
}

document.addEventListener("click", (event) => {
  const routeButton = event.target.closest("[data-route-link]");
  if (routeButton) {
    setRoute(routeButton.dataset.routeLink);
    return;
  }

  const behaviorButton = event.target.closest("[data-behavior]");
  if (behaviorButton) {
    setRoute(`behavior/${behaviorButton.dataset.behavior}`);
    return;
  }

  const learningButton = event.target.closest("[data-learning]");
  if (learningButton) {
    setRoute(`lesson/${learningButton.dataset.learning}`);
    return;
  }

  const courseButton = event.target.closest("[data-course]");
  if (courseButton) {
    setRoute(`course/${courseButton.dataset.course}`);
    return;
  }

  const pathButton = event.target.closest("[data-path-lesson]");
  if (pathButton) {
    setRoute(`path/${pathButton.dataset.pathLesson}`);
    return;
  }

  const completeButton = event.target.closest("[data-complete-lesson]");
  if (completeButton) {
    toggleLessonComplete(completeButton.dataset.completeLesson);
    renderRoute();
    return;
  }

  const onboardingButton = event.target.closest("[data-finish-onboarding]");
  if (onboardingButton) {
    completeOnboarding();
    setRoute("home");
  }
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setRoute(button.dataset.route);
  });
});

topAction.addEventListener("click", () => {
  setRoute("tools");
});

window.addEventListener("hashchange", renderRoute);

async function loadAppContent() {
  try {
    const response = await fetch("parenting-support-app-content.json");
    if (!response.ok) {
      throw new Error(`Unable to load content: ${response.status}`);
    }

    const json = await response.json();
    appContent = {
      appTitle: "Rooted Parenting",
      intro:
        "This app helps parents respond to children with behavioral challenges using trauma-informed, non-judgmental, supportive guidance.",
      behaviors: [
        ...json.behavior_guides.map((guide) => ({
          slug: guide.slug,
          title: guide.title,
          whatItMayMean: `${guide.trauma_informed_explanation} Possible needs may include ${guide.possible_underlying_emotional_need
            .slice(0, 3)
            .join(", ")
            .toLowerCase()}.`,
          parentCanSay: guide.what_the_parent_can_say,
          avoid: guide.what_to_avoid_saying,
          calmingStrategies: guide.calming_strategies,
          nextSteps: [
            ...guide.what_to_do_after_the_moment,
            ...guide.when_to_seek_additional_support
              .slice(0, 1)
              .map((item) => `Seek added support if ${item.charAt(0).toLowerCase()}${item.slice(1)}`)
          ]
        })),
        ...supplementalBehaviorGuides
      ],
      calmTools: fallbackContent.calmTools,
      worksheets: fallbackContent.worksheets,
      courses: fallbackContent.courses
    };
    appContent.behaviors = appContent.behaviors.map((behavior) => ({
      ...behavior
    }));
  } catch (error) {
    appContent = fallbackContent;
  }

  renderRoute();
}

loadAppContent();
