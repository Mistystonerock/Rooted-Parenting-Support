const fallbackContent = {
  appTitle: "Rooted Parenting Network",
  intro:
    "Trauma-informed support for parents, teachers, and professionals responding to children with trauma history and behavior concerns across systems.",
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
    },
    {
      slug: "trauma-informed-classroom-responses",
      title: "Trauma-Informed Classroom Responses",
      icon: "TC",
      intro:
        "Teachers often see the impact of trauma in real time through behavior, attention, transitions, and peer conflict. A trauma-informed classroom response helps children feel safer, protects dignity, and keeps adults from escalating the moment.",
      bullets: [
        "Behavior can reflect stress, threat, overload, or shame, not just noncompliance.",
        "A calm adult response helps the child return to regulation faster.",
        "Private support is usually more effective than public correction.",
        "Predictability, relationship, and repair support learning."
      ],
      examples: [
        "A teacher lowers their voice, moves closer, and gives one simple direction instead of correcting across the room.",
        "A student who refuses may respond better to two safe choices than to a power struggle.",
        "After the child is calm, the teacher returns to the expectation and helps with repair."
      ]
    },
    {
      slug: "de-escalation-at-school",
      title: "De-Escalation in School",
      icon: "DS",
      intro:
        "De-escalation is about reducing threat, not winning. When a child begins to unravel at school, the adult's job is to bring the temperature down so safety, regulation, and learning can come back online.",
      bullets: [
        "Use fewer words and one direction at a time.",
        "Notice early warning signs before the situation gets bigger.",
        "Avoid public shame, sarcasm, and rapid back-and-forth arguing.",
        "Offer reset space, clear choices, and a calm path back."
      ],
      examples: [
        "When a child starts yelling, the teacher shortens language and pauses demands instead of escalating volume.",
        "A student who is refusing can be offered a reset chair, a brief break, or a small first step.",
        "A calm adult presence can interrupt a chain reaction before the whole class is involved."
      ]
    },
    {
      slug: "trauma-and-adhd-signals",
      title: "Trauma and ADHD Signals",
      icon: "TA",
      intro:
        "Trauma and ADHD can overlap in ways that make behavior hard to read. Children may seem impulsive, distracted, oppositional, or emotionally reactive when the real issue is a mix of regulation stress, attention difficulty, and nervous system overload.",
      bullets: [
        "Both trauma and ADHD can affect focus, memory, flexibility, and impulse control.",
        "A child may miss directions because of overload, distraction, or both.",
        "Support works better when adults scaffold tasks and teach regulation directly.",
        "The goal is not to excuse behavior. The goal is to respond accurately and effectively."
      ],
      examples: [
        "A student may blurt out or leave their seat more often during stress-heavy parts of the day.",
        "A child may look defiant when they actually missed the direction or froze under pressure.",
        "Short steps, visual supports, movement, and calm repetition often help more than lectures."
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
      title: "Rooted Parenting Network Foundations",
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

const learningTopicLookLikeMap = {
  "what-is-trauma": [
    "A parent may think, 'This is just bad behavior,' until they notice the child melts down every time voices get louder in the house.",
    "A child may seem fine one minute and then panic the next when something reminds them of a past scary experience.",
    "What looks like overreacting may actually be a body remembering stress faster than the child can explain it."
  ],
  "how-trauma-affects-behavior": [
    "You ask your child to put shoes on, and instead of a small complaint you get yelling, refusal, or hiding under a blanket.",
    "A child who looked calm at breakfast may suddenly cry, freeze, or get aggressive when it is time to leave the house.",
    "What looks oppositional on the outside may actually be a stress response on the inside."
  ],
  "regulation-before-discipline": [
    "Instead of saying five things at once, a parent might kneel down and say, 'You are safe. We are calming first.'",
    "If a child is screaming, the parent might move the sibling to safety, lower their own voice, and wait to talk about consequences until later.",
    "The teaching still happens, but it happens after the child's body can listen again."
  ],
  "connection-before-correction": [
    "Connection before correction might sound like, 'I know you are upset. I'm staying with you. We will talk about the rule in a minute.'",
    "A parent might offer a calm touch, sit nearby, or soften their face before bringing up what needs to change.",
    "Correction still happens, but the child hears it after feeling safe enough to come out of defense."
  ],
  "understanding-triggers": [
    "A parent may start noticing that every bath night turns into a fight, which points to a pattern instead of random bad behavior.",
    "A child may react strongly to one adult's tone of voice but not another's.",
    "When triggers are noticed early, parents can plan ahead instead of only reacting after the explosion."
  ],
  "building-emotional-safety": [
    "A child starts making fewer excuses at bedtime because the routine feels predictable instead of tense.",
    "After a hard morning, the parent comes back later to say, 'We both had a hard time. We can start over.'",
    "The child learns that mistakes do not automatically mean yelling, shame, or disconnection."
  ],
  "co-regulation": [
    "A parent notices their child borrowing their calm voice and slower breathing after a few minutes of staying close.",
    "Instead of demanding eye contact, the parent sits nearby and keeps the moment simple and steady.",
    "The child may not calm instantly, but repeated calm support teaches their brain what safety feels like."
  ],
  "trauma-informed-classroom-responses": [
    "A teacher notices a student getting louder during transitions and responds with a calm voice, one direction, and space instead of public correction.",
    "Rather than arguing in front of the class, the adult offers two safe choices and helps the child re-enter when regulated.",
    "The goal shifts from winning the moment to restoring safety, dignity, and learning."
  ],
  "de-escalation-at-school": [
    "A child starts refusing work, so the teacher lowers demands, shortens language, and offers a reset before the situation turns into a power struggle.",
    "Instead of calling out the behavior publicly, the adult moves closer, stays calm, and gives one next step.",
    "Small early interventions often prevent bigger classroom escalations later."
  ],
  "trauma-and-adhd-signals": [
    "A student may look oppositional when they actually missed the direction because of overload, distraction, or stress.",
    "A child may fidget, blurt out, or shut down faster when trauma stress and ADHD both affect regulation.",
    "Support works better when adults slow down, repeat clearly, and teach coping and transition skills directly."
  ]
};

const coreLearningPathTemplates = fallbackContent.learningPath.map((lesson) => ({
  ...lesson,
  bullets: [...lesson.bullets],
  examples: [...lesson.examples]
}));

const twentyOneDayPlan = [
  {
    day: 1,
    templateIndex: 0,
    title: "Observe Before Reacting",
    focus: "Start the program by noticing what behavior may be communicating before you correct it.",
    practice: "Pause during one hard moment and ask yourself what need, feeling, or stress might be underneath the behavior.",
    example: "Instead of saying 'Stop it right now,' a parent might first notice that the child is tired, embarrassed, or overloaded.",
    reportPrompt: "What did your child’s behavior seem to communicate today?",
    quiz: {
      question: "What is the main goal of Day 1?",
      options: [
        "Notice what behavior may be communicating",
        "Use a bigger punishment right away",
        "Ignore the child's feelings"
      ],
      answerIndex: 0,
      feedback: "You are building the habit of observing before reacting."
    }
  },
  {
    day: 2,
    templateIndex: 0,
    title: "Notice Body Signs Earlier",
    focus: "Catch hard moments earlier by noticing body signs before the full blow-up happens.",
    practice: "Write down one early sign that your child is getting stressed, such as pacing, whining, louder voice, or shutting down.",
    example: "A parent notices their child starts stomping and grabbing toys harder before yelling starts.",
    reportPrompt: "What early stress signal did you notice today?",
    quiz: {
      question: "Why do early body signs matter?",
      options: [
        "They help you step in sooner with support",
        "They prove the child is being manipulative",
        "They mean nothing unless behavior gets worse"
      ],
      answerIndex: 0,
      feedback: "Early signs help parents respond sooner and more calmly."
    }
  },
  {
    day: 3,
    templateIndex: 1,
    title: "Stress Brain Versus Thinking Brain",
    focus: "Learn how a stressed brain changes listening, memory, flexibility, and impulse control.",
    practice: "Pick one hard part of the day and remind yourself that stress can shrink a child’s ability to think clearly in that moment.",
    example: "A child forgets directions or seems irrational during stress because their brain is in protection mode.",
    reportPrompt: "When did you see stress get in the way of thinking today?",
    quiz: {
      question: "When a child is highly stressed, what often becomes harder?",
      options: [
        "Listening and problem-solving",
        "Needing support",
        "Having a nervous system"
      ],
      answerIndex: 0,
      feedback: "Stress can make it much harder for children to think and respond well."
    }
  },
  {
    day: 4,
    templateIndex: 2,
    title: "Calm First, Teach Second",
    focus: "Build the habit of calming the moment before trying to explain, discipline, or lecture.",
    practice: "Use one short calming sentence today, like 'We will calm first' or 'I will help you get your body settled.'",
    example: "Instead of a lecture during crying or yelling, a parent lowers their voice and waits to teach until later.",
    reportPrompt: "How did the moment change when you calmed first?",
    quiz: {
      question: "What comes first in this program during a meltdown?",
      options: [
        "Regulation and safety",
        "A long explanation",
        "Arguing about the rule"
      ],
      answerIndex: 0,
      feedback: "Safety and regulation come first so the child can learn later."
    }
  },
  {
    day: 5,
    templateIndex: 2,
    title: "When the Brain Cannot Hear Yelling",
    focus: "Understand that when a child is highly upset, their brain may not be able to take in yelling, logic, or correction.",
    practice: "Replace one raised-voice moment with a slower, softer sentence and fewer words.",
    example: "A child who is sobbing or raging is often not able to process a long explanation at that time.",
    reportPrompt: "What happened when you used fewer words today?",
    quiz: {
      question: "Why is yelling usually not effective when a child is highly upset?",
      options: [
        "The child's stressed brain often cannot take it in",
        "Children always obey when adults are quiet",
        "Yelling is only a problem at school"
      ],
      answerIndex: 0,
      feedback: "When the brain is flooded, yelling adds threat instead of understanding."
    }
  },
  {
    day: 6,
    templateIndex: 3,
    title: "Connection Before Correction",
    focus: "Practice connecting first so the child feels safer and more able to hear guidance.",
    practice: "Use one connecting phrase before a correction today, such as 'I know this is hard' or 'I’m here with you.'",
    example: "A parent says, 'I know you are upset. I’m staying with you,' before talking about what needs to happen next.",
    reportPrompt: "What did connection before correction look like today?",
    quiz: {
      question: "Connection before correction means:",
      options: [
        "The child feels understood before you teach",
        "You remove all limits",
        "You ignore the behavior completely"
      ],
      answerIndex: 0,
      feedback: "Connection lowers threat so correction has a better chance of being heard."
    }
  },
  {
    day: 7,
    templateIndex: 3,
    title: "Repair After a Hard Moment",
    focus: "Build the habit of coming back after conflict to reconnect, repair, and reset.",
    practice: "After one hard moment, return later and say one repair sentence such as 'We both had a hard time. Let’s start over.'",
    example: "The parent returns after everyone is calm and reconnects instead of acting like the rupture never happened.",
    reportPrompt: "How did repair change the tone after a hard moment?",
    quiz: {
      question: "What does repair teach children?",
      options: [
        "Relationships can recover after conflict",
        "Hard moments should never be discussed",
        "Only children need to apologize"
      ],
      answerIndex: 0,
      feedback: "Repair teaches safety, accountability, and reconnection."
    }
  },
  {
    day: 8,
    templateIndex: 4,
    title: "Track Triggers and Patterns",
    focus: "Notice when hard moments are linked to routines, sounds, transitions, people, or timing.",
    practice: "Write down one repeated trigger pattern today and what happened right before the behavior.",
    example: "A parent realizes the worst moments happen during rushed transitions, not randomly.",
    reportPrompt: "What trigger or pattern stood out today?",
    quiz: {
      question: "Why track triggers?",
      options: [
        "It helps parents plan ahead and respond sooner",
        "It proves the child is choosing trouble",
        "It replaces the need for routines"
      ],
      answerIndex: 0,
      feedback: "Patterns help parents prepare instead of only reacting."
    }
  },
  {
    day: 9,
    templateIndex: 5,
    title: "Create Emotional Safety Through Routine",
    focus: "Use routines, steady responses, and predictable limits to help the home feel safer.",
    practice: "Choose one part of the day to make more predictable with the same steps and calmer tone.",
    example: "Bedtime or after-school routines often become easier when children know what comes next.",
    reportPrompt: "Which routine felt more stable today?",
    quiz: {
      question: "What helps build emotional safety over time?",
      options: [
        "Predictable routines and calm repair",
        "Changing rules every day",
        "Only correcting after something goes wrong"
      ],
      answerIndex: 0,
      feedback: "Consistency and repair help children feel safer over time."
    }
  },
  {
    day: 10,
    templateIndex: 6,
    title: "Co-Regulation in Real Time",
    focus: "Use your own body, tone, and presence to help your child borrow calm when stressed.",
    practice: "Sit nearby, slow your breathing, and use fewer words during one hard moment today.",
    example: "A parent keeps their voice low and steady so the child has something calm to organize around.",
    reportPrompt: "How did your calm presence affect your child today?",
    quiz: {
      question: "Co-regulation means:",
      options: [
        "A calm adult helps a child borrow steadiness",
        "The child must calm alone before getting support",
        "The parent talks nonstop until the child stops"
      ],
      answerIndex: 0,
      feedback: "Children build self-regulation through repeated experiences of co-regulation."
    }
  },
  {
    day: 11,
    templateIndex: 7,
    title: "Support School Stress",
    focus: "Look at school behavior as a support issue, not only a discipline issue.",
    practice: "Notice one school-related stress point and identify one support that might make it feel smaller.",
    example: "A check-in adult, visual routine, or softer morning start can reduce school stress.",
    reportPrompt: "What school stressor or support did you notice today?",
    quiz: {
      question: "A helpful first step for school stress is to:",
      options: [
        "Identify one specific support need",
        "Assume the child is just lazy",
        "Wait until things get much worse"
      ],
      answerIndex: 0,
      feedback: "Specific school supports are usually more effective than general pressure."
    }
  },
  {
    day: 12,
    templateIndex: 8,
    title: "Regulate Yourself First",
    focus: "Practice noticing your own early signs so you can respond instead of react.",
    practice: "Use one grounding tool before responding to a hard behavior today, even if it is just one breath and a shoulder drop.",
    example: "A parent notices their chest tightening and pauses before speaking.",
    reportPrompt: "What did you notice in your own body today?",
    quiz: {
      question: "Why does parent self-regulation matter?",
      options: [
        "Your nervous system shapes the whole moment",
        "Only children need calming support",
        "It removes the need for limits"
      ],
      answerIndex: 0,
      feedback: "When parents regulate first, they are more likely to use the skills they want to teach."
    }
  },
  {
    day: 13,
    templateIndex: 8,
    title: "Use a Calm Parenting Script",
    focus: "Build a repeatable short script for hard moments so stress does not choose your words.",
    practice: "Try one script today, such as 'You are safe. I will help you. We will talk after calm.'",
    example: "Using the same short phrase helps the adult stay steady and the child know what to expect.",
    reportPrompt: "Which short script helped you stay steadier today?",
    quiz: {
      question: "Why use a short script during hard moments?",
      options: [
        "It keeps the message calm and clear",
        "It makes consequences unnecessary",
        "It guarantees instant compliance"
      ],
      answerIndex: 0,
      feedback: "Short scripts reduce pressure and help the parent stay consistent."
    }
  },
  {
    day: 14,
    templateIndex: 5,
    title: "Reinforce the Small Wins",
    focus: "Build the habit of noticing and reinforcing small steps, not only big successes.",
    practice: "Praise one small effort today, such as calming faster, following one direction, or trying again.",
    example: "Instead of waiting for a perfect day, the parent notices one small healthy choice and reinforces it.",
    reportPrompt: "What small win did you reinforce today?",
    quiz: {
      question: "Positive reinforcement works best when it focuses on:",
      options: [
        "Specific small efforts and successes",
        "Only perfect behavior",
        "Nothing unless the whole day was good"
      ],
      answerIndex: 0,
      feedback: "Small wins are how new habits and safer behavior grow."
    }
  },
  {
    day: 15,
    templateIndex: 5,
    title: "Calm Consequences and Follow-Through",
    focus: "Use consequences as calm teaching tools instead of threat-based reactions.",
    practice: "Choose one calm follow-through step today, such as a redo, brief reset, repair, or temporary loss of a privilege.",
    example: "The parent stays steady, follows through once, and avoids turning the consequence into a second argument.",
    reportPrompt: "What calm consequence or follow-through did you use today?",
    quiz: {
      question: "A healthy consequence should be:",
      options: [
        "Calm, predictable, and connected to the behavior",
        "Big enough to scare the child",
        "Different every time"
      ],
      answerIndex: 0,
      feedback: "Calm, predictable follow-through teaches more than reactive punishment."
    }
  },
  {
    day: 16,
    templateIndex: 6,
    title: "Support Anxiety Without Adding Pressure",
    focus: "Reduce overwhelm by using gentle support, smaller steps, and less verbal pressure.",
    practice: "When your child looks worried or shuts down, offer one simple next step instead of many questions.",
    example: "A parent says, 'Let’s just do the first step together,' instead of pushing for a full explanation right away.",
    reportPrompt: "How did lowering pressure help today?",
    quiz: {
      question: "When a child is anxious or shut down, what often helps most?",
      options: [
        "Smaller steps and less pressure",
        "More demands to explain immediately",
        "A louder tone so they listen"
      ],
      answerIndex: 0,
      feedback: "Less pressure often helps a stressed child come back online."
    }
  },
  {
    day: 17,
    templateIndex: 7,
    title: "Partner With School or Services",
    focus: "Use calm documentation and clear communication to support the child across settings.",
    practice: "Write down one concern, one pattern, and one support request for school, CPS, or another helper.",
    example: "A parent speaks in specific observations and support needs instead of only describing crisis moments.",
    reportPrompt: "What support request or pattern did you document today?",
    quiz: {
      question: "What makes parent advocacy stronger?",
      options: [
        "Specific observations and realistic support requests",
        "Only describing how frustrated everyone feels",
        "Waiting for others to guess what is needed"
      ],
      answerIndex: 0,
      feedback: "Clear patterns and support requests make advocacy stronger."
    }
  },
  {
    day: 18,
    templateIndex: 9,
    title: "Build a Safer Daily Rhythm",
    focus: "Strengthen one daily family routine so the home feels more predictable and less reactive.",
    practice: "Pick one daily ritual, such as bedtime, after-school, or dinner, and make it more predictable today.",
    example: "A short, consistent routine can reduce stress more than repeated warnings or lectures.",
    reportPrompt: "What routine did you strengthen today?",
    quiz: {
      question: "Why do daily routines matter in this program?",
      options: [
        "They help build long-term emotional safety",
        "They replace all other parenting tools",
        "They only matter for young children"
      ],
      answerIndex: 0,
      feedback: "Predictable routines help habits and emotional safety grow over time."
    }
  },
  {
    day: 19,
    templateIndex: 9,
    title: "Practice Accountability and Redos",
    focus: "Teach accountability through repair, redos, and calmer next steps instead of shame.",
    practice: "Use one redo or repair step today, such as trying respectful words again, fixing a mess, or repairing with a sibling.",
    example: "The child is guided to redo the behavior safely instead of only being shamed for it.",
    reportPrompt: "What redo, repair, or accountability step happened today?",
    quiz: {
      question: "A redo is helpful because it:",
      options: [
        "Gives the child a chance to practice the better behavior",
        "Lets the child avoid all responsibility",
        "Only works if the parent is angry"
      ],
      answerIndex: 0,
      feedback: "Redos teach the replacement skill, not just the mistake."
    }
  },
  {
    day: 20,
    templateIndex: 8,
    title: "Keep the New Parenting Habit Going",
    focus: "Review the parenting habits that are starting to work and choose the ones you want to keep repeating.",
    practice: "List the top three tools that helped most during this program and use at least one of them intentionally today.",
    example: "A parent notices that fewer words, earlier praise, and calmer follow-through are changing the tone at home.",
    reportPrompt: "Which new parenting habit do you most want to keep?",
    quiz: {
      question: "Why review what is working before the end of the program?",
      options: [
        "So the new habits are more likely to continue",
        "Because the program is only about paperwork",
        "So you can start over from zero"
      ],
      answerIndex: 0,
      feedback: "Naming what works helps new habits stick."
    }
  },
  {
    day: 21,
    templateIndex: 9,
    title: "Final Reflection and Completion",
    focus: "Reflect on growth across the 21 days and name the parenting habits you are carrying forward.",
    practice: "Complete your final reflection, review your daily logs, and note one commitment for the next 30 days.",
    example: "A parent looks back and sees more than perfection or failure; they notice patterns of growth, repair, and steadier follow-through.",
    reportPrompt: "What has changed most in your parenting over these 21 days?",
    quiz: {
      question: "What unlocks the certificate in this program?",
      options: [
        "Completing all 21 daily sessions",
        "Only filling out the final page",
        "Opening the certificate link early"
      ],
      answerIndex: 0,
      feedback: "Finishing the full 21-day program is what unlocks the certificate."
    }
  }
];

function build21DayLearningPath(templates) {
  return twentyOneDayPlan.map((plan) => {
    const template = templates[plan.templateIndex];
    const lookLikeExamples = learningTopicLookLikeMap[template.slug] || [];
    return {
      ...template,
      slug: `day-${plan.day}-${template.slug}`,
      title: `Day ${plan.day}: ${plan.title}`,
      dayNumber: plan.day,
      explanation: `${template.explanation} ${plan.focus}`,
      actionStep: plan.practice,
      reflectionPrompt: plan.reportPrompt,
      reflectionQuestions: [
        plan.reportPrompt,
        `What parenting habit did I practice on Day ${plan.day}?`,
        "What do I want to repeat tomorrow?"
      ],
      bullets: [...template.bullets, `Daily habit focus: ${plan.focus}`],
      examples: [...template.examples, plan.example],
      sections: [
        {
          heading: "Today's learning focus",
          points: [plan.focus, template.bullets[0], template.bullets[1]]
        },
        {
          heading: "What this looks like today",
          points: [plan.example, ...(lookLikeExamples.slice(0, 2))]
        },
        {
          heading: "Daily parenting habit practice",
          points: [
            plan.practice,
            "Use the daily tracker to record what happened, what you tried, and what you learned.",
            "Small repeated changes are what help new habits grow over time."
          ]
        }
      ],
      quiz: plan.quiz
    };
  });
}

fallbackContent.learningPath = build21DayLearningPath(coreLearningPathTemplates);

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
const parentTrackerStorageKey = "rooted-parenting-parent-tracker";
const clientProfileStorageKey = "rooted-parenting-client-profile";
const attendanceTrackerStorageKey = "rooted-parenting-attendance-tracker";
const assessmentStorageKey = "rooted-parenting-assessment";
const worksheetStorageKey = "rooted-parenting-worksheets";
const dailyHabitTrackerStorageKey = "rooted-parenting-daily-habit-tracker";
const teacherCheckInStorageKey = "rooted-parenting-teacher-checkins";
const supervisorPortalStorageKey = "rooted-parenting-supervisor-portal";
const accessStorageKey = "rooted-parenting-access-state";
const accessMessageStorageKey = "rooted-parenting-access-message";
const appNoticeStorageKey = "rooted-parenting-app-notice";
const accountProfileStorageKey = "rooted-parenting-account-profile";
const teamSettingsStorageKey = "rooted-parenting-team-settings";
const goalsStorageKey = "rooted-parenting-shared-goals";
const carePlanStorageKey = "rooted-parenting-child-support-plan";
const parentReflectionStorageKey = "rooted-parenting-parent-reflection";
const providerNotesStorageKey = "rooted-parenting-provider-notes";
const notificationsStorageKey = "rooted-parenting-notifications";
const settingsStorageKey = "rooted-parenting-settings";
const quizFeedbackState = {};
const accessCodeDefinitions = {
  ROOTEDCARE2026: {
    premiumParent: true,
    professional: false,
    message:
      "Scholarship premium access has been unlocked on this device."
  },
  ROOTEDPRO2026: {
    premiumParent: true,
    professional: true,
    message:
      "Professional access has been unlocked on this device."
  },
  ROOTEDOWNER2026: {
    premiumParent: true,
    professional: true,
    message:
      "Owner test access has been unlocked on this device."
  }
};

const roleOptions = [
  "Parent / Caregiver",
  "Teacher",
  "School Staff",
  "Counselor / Therapist",
  "Psychologist / Psychiatrist",
  "CPS Worker",
  "Juvenile Probation",
  "Court Professional",
  "Admin"
];

const checkInBehaviorOptions = [
  "refusal",
  "arguing",
  "anxiety",
  "withdrawal",
  "aggression",
  "emotional upset",
  "positive day"
];

const checkInTriggerOptions = [
  "transition",
  "school stress",
  "sibling conflict",
  "rules",
  "feeling overwhelmed",
  "unknown"
];

const checkInResponseOptions = [
  "calm tone",
  "gave space",
  "redirection",
  "problem solving",
  "consequence",
  "supportive conversation"
];

const checkInChildResponseOptions = [
  "calmed down",
  "needed more time",
  "escalated",
  "resolved",
  "still struggling"
];

const teacherCheckInBehaviorOptions = [
  "refusal",
  "calling out",
  "shutting down",
  "peer conflict",
  "aggression",
  "anxiety",
  "positive day"
];

const teacherCheckInTriggerOptions = [
  "transition",
  "academic frustration",
  "peer issue",
  "correction",
  "sensory overload",
  "unknown"
];

const teacherCheckInResponseOptions = [
  "calm tone",
  "reduced language",
  "choice offered",
  "reset space",
  "co-regulation",
  "private follow-up"
];

const teacherCheckInStudentResponseOptions = [
  "re-engaged",
  "needed more time",
  "escalated",
  "accepted support",
  "still struggling"
];

const supportToolOptions = [
  {
    slug: "child-refusing-directions",
    label: "Child refusing directions",
    steps: [
      "Pause and regulate yourself before speaking again.",
      "Use one short direction instead of a longer explanation.",
      "Avoid a power struggle by repeating the limit once.",
      "Offer one simple choice that still supports follow-through.",
      "Allow reset time before returning to the task."
    ]
  },
  {
    slug: "child-yelling",
    label: "Child yelling",
    steps: [
      "Slow your voice down and lower your volume.",
      "Use brief phrases and stay near calm, not confrontational.",
      "Do not match intensity or debate in the moment.",
      "Give a simple boundary plus a regulated option.",
      "Come back to problem solving after the body settles."
    ]
  },
  {
    slug: "child-shutting-down",
    label: "Child shutting down",
    steps: [
      "Pause and reduce questions right away.",
      "Use calm presence instead of pressure to talk.",
      "Offer one low-pressure choice such as sitting nearby or taking a break.",
      "Avoid turning the moment into a correction talk.",
      "Allow reset time and revisit later when the child is more available."
    ]
  },
  {
    slug: "child-aggressive",
    label: "Child aggressive",
    steps: [
      "Regulate yourself and focus on safety first.",
      "Use short directions and move others or objects if needed.",
      "Avoid arguing, shaming, or threatening in the moment.",
      "Give one safe choice when possible.",
      "Allow reset time and return to repair after safety is restored."
    ]
  },
  {
    slug: "child-anxious",
    label: "Child anxious",
    steps: [
      "Pause and make your body language calmer and slower.",
      "Use short, reassuring directions one step at a time.",
      "Avoid too much information or pressure.",
      "Offer a simple choice that supports regulation.",
      "Allow reset time and build a tiny next step together."
    ]
  }
];

let supabaseHomeClient = null;
let currentSupabaseFamilyId = null;
let currentFamilyScheduleEvents = [];

const teacherTrainingTopics = [
  {
    title: "Trauma-Informed Care at School",
    points: [
      "Behavior may reflect survival stress, not just defiance or disrespect.",
      "Predictability, safety, and connection help children stay available for learning.",
      "A regulated adult response often changes the whole direction of the moment."
    ]
  },
  {
    title: "How to Respond to Children with Trauma History",
    points: [
      "Use a calm voice, fewer words, and one direction at a time.",
      "Avoid shame, public correction, and power struggles when a child is overwhelmed.",
      "Offer co-regulation, choice, and a path back into the routine."
    ]
  },
  {
    title: "How Trauma Affects Children with ADHD",
    points: [
      "Trauma and ADHD can both affect impulse control, attention, memory, and flexibility.",
      "A child may look oppositional when they are overloaded, dysregulated, or confused.",
      "Support works better when adults reduce pressure, scaffold tasks, and teach regulation skills directly."
    ]
  }
];

const defaultTeamSettings = {
  inviteEmail: "",
  inviteCode: "",
  selectedPermission: "all 3: view progress only, view behavior patterns, view lesson completion",
  members: [
    { role: "Parent", permission: "view progress only" },
    { role: "Teacher", permission: "view behavior patterns" },
    { role: "Therapist", permission: "view behavior patterns" },
    { role: "Probation officer", permission: "view lesson completion" },
    { role: "CPS worker", permission: "view lesson completion" }
  ]
};

const defaultGoals = [
  { id: "goal-1", title: "Improve emotional regulation", progress: 42, parentNote: "", providerNote: "" },
  { id: "goal-2", title: "Reduce school incidents", progress: 36, parentNote: "", providerNote: "" },
  { id: "goal-3", title: "Improve communication", progress: 51, parentNote: "", providerNote: "" },
  { id: "goal-4", title: "Build calmer transitions", progress: 24, parentNote: "", providerNote: "" },
  { id: "goal-5", title: "Increase positive follow-through", progress: 33, parentNote: "", providerNote: "" }
];

const defaultCarePlan = {
  strengths: "Creative, caring, and more successful with calm connection and predictable support.",
  triggers: "Transitions, correction in front of others, feeling rushed, loud conflict, and feeling overwhelmed.",
  warningSigns: "Louder voice, refusal, pacing, shutdown, tearfulness, leaving the area, or arguing quickly.",
  whatHelps: "Calm tone, fewer words, one direction at a time, simple choices, co-regulation, movement or reset space, and private follow-up.",
  avoid: "Public shame, rapid questions, sarcasm, threats, arguing, raised voices, and power struggles.",
  repairPlan: "Reconnect after calm, name what happened without shame, repair harm, practice the replacement skill, and reset the relationship.",
  teamCommitments: "Parents, teachers, and providers will use the same trauma-informed language, focus on safety first, and coordinate around what helps the child regulate.",
  immediateSafety: "If there is immediate risk of harm, move to safety, reduce stimulation, contact emergency supports if needed, and do not try to teach during crisis."
};

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
      "This can affect focus, memory, flexibility, and emotional control.",
      "When a child is highly upset, the brain may not be able to take in long explanations or yelling."
    ]
  },
  {
    heading: "What parents may notice",
    points: [
      "Big reactions to small changes.",
      "Trouble calming after a hard moment.",
      "Forgetting directions or melting down when stressed.",
      "A child may look like they are not listening when their brain is actually overwhelmed."
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
      "Limits still matter, but timing matters too.",
      "Yelling during a child's upset moment usually adds more threat instead of helping the child understand."
    ]
  },
  {
    heading: "What parents can do first",
    points: [
      "Lower your voice and slow your pace.",
      "Focus on safety before consequences or long explanations.",
      "Come back to teaching once calm returns.",
      "Use fewer words when the child is overwhelmed and save the lesson for later."
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

fallbackContent.learningPath[6].sections = [
  {
    heading: "What anxiety and shutdown can look like",
    points: [
      "Some children show distress through worry, stomachaches, avoidance, silence, or freezing.",
      "Shutdown often means the child's body is overwhelmed, not that the child does not care.",
      "Pressure can make anxiety or shutdown worse."
    ]
  },
  {
    heading: "How parents can respond",
    points: [
      "Lower the number of questions when a child looks flooded.",
      "Offer one small next step instead of a long conversation.",
      "Use calm presence and extra time so the child can come back online."
    ]
  }
];
fallbackContent.learningPath[6].reflectionQuestions = [
  "How do I usually react when my child gets quiet, frozen, or very worried?",
  "What changes when I lower pressure and offer one small next step?"
];

fallbackContent.learningPath[7].sections = [
  {
    heading: "Why school stress matters",
    points: [
      "School stress can affect behavior before, during, and after the school day.",
      "Children may show school stress through refusal, headaches, shutdown, anger, or exhaustion.",
      "Small, specific supports often work better than broad promises."
    ]
  },
  {
    heading: "Practical school support ideas",
    points: [
      "Identify the hardest part of the day and start there.",
      "Ask for one realistic support, such as a check-in adult or softer transition.",
      "Document patterns so you can advocate clearly and calmly."
    ]
  }
];
fallbackContent.learningPath[7].reflectionQuestions = [
  "What part of school seems hardest for my child right now?",
  "What one school support could make the day feel more manageable?"
];

fallbackContent.learningPath[8].sections = [
  {
    heading: "Why parent regulation matters",
    points: [
      "Children borrow calm from adults, so your tone and pace matter.",
      "You do not have to be perfect to make a positive difference.",
      "Small pauses can prevent a moment from getting bigger."
    ]
  },
  {
    heading: "What self-regulation can look like",
    points: [
      "Taking one breath before you answer.",
      "Using a short script instead of reacting quickly.",
      "Noticing your own warning signs before the conflict grows."
    ]
  }
];
fallbackContent.learningPath[8].reflectionQuestions = [
  "What are my earliest signs that I am getting overwhelmed too?",
  "What is one grounding tool I can practice before I need it?"
];

fallbackContent.learningPath[9].sections = [
  {
    heading: "How emotional safety grows",
    points: [
      "Emotional safety is built through repeated moments of steadiness, repair, and predictability.",
      "Children learn trust when adults come back after hard moments.",
      "Consistency matters more than one perfect response."
    ]
  },
  {
    heading: "What families can build over time",
    points: [
      "Predictable routines that reduce stress.",
      "Repair conversations after conflict.",
      "Small rituals of connection that help children feel secure."
    ]
  }
];
fallbackContent.learningPath[9].reflectionQuestions = [
  "What small change would help my child feel more emotionally safe this week?",
  "Where can I build more predictability or repair into daily life?"
];

fallbackContent.learningPath.forEach((lesson) => {
  if (!lesson.reflectionQuestions) {
    lesson.reflectionQuestions = lesson.reflectionPrompt ? [lesson.reflectionPrompt] : [];
  }
});

fallbackContent.courses = [
  {
    slug: "cps-positive-parenting-and-reunification",
    title: "CPS Positive Parenting and Reunification",
    cpsTitle: "Positive Parenting and Reunification Skills",
    icon: "CP",
    description:
      "A 21-day parenting habit program for CPS-involved families focused on safe parenting, structure, reunification readiness, trust-building, and family stabilization.",
    completionStandard:
      "Complete all 21 daily sessions, participate in home practice and reflection, and demonstrate engagement with safety, structure, reunification, and parenting skill-building content.",
    certificateName:
      "Certificate of Completion: Positive Parenting and Reunification Skills",
    includes: [
      "Positive parenting and emotional safety",
      "Reunification routines and trust-building",
      "Calm limits and predictable follow-through",
      "Documentation, reflection, and home practice",
      "Certificate and progress summary"
    ],
    bestFor: [
      "CPS service plans",
      "Reunification support",
      "Family stabilization and parenting education referrals"
    ],
    learningOutcomes: [
      "Uses calmer, safer parenting responses more consistently",
      "Can build structure and predictability during reunification or stabilization",
      "Can describe trust-building, repair, and follow-through strategies"
    ],
    sessionPlan: [
      "Week 1: Safety and Regulation",
      "Week 2: Connection and Follow-Through",
      "Week 3: Habit Building and Long-Term Change",
      "Day 21: Progress review, next steps, and completion"
    ]
  },
  {
    slug: "behavior-support-for-parents",
    title: "Behavior Support for Parents",
    cpsTitle: "Parent Behavior Support and Response Skills",
    icon: "BP",
    description:
      "A 21-day parent habit-building course for families dealing with anger, defiance, anxiety, shutdown, school issues, and repeated conflict. The focus is practical response skills that work in real-life moments.",
    completionStandard:
      "Complete all 21 daily sessions, participate in behavior-response practice, and demonstrate use of calm scripts, positive reinforcement, and structured follow-through.",
    certificateName:
      "Certificate of Completion: Parent Behavior Support and Response Skills",
    includes: [
      "Defiance, aggression, and meltdown response support",
      "Anxiety, shutdown, and school stress support",
      "Reward systems and calm follow-through tracking",
      "Replacement skill teaching",
      "Progress tracking and certificate completion"
    ],
    bestFor: [
      "Parents dealing with ongoing behavior issues",
      "Families needing in-the-moment behavior tools",
      "Referrals focused on stabilization and parent response skills"
    ],
    learningOutcomes: [
      "Responds to common behavior problems more calmly",
      "Can identify triggers and likely needs under behavior",
      "Uses rewards, routines, and follow-through with more consistency"
    ],
    sessionPlan: [
      "Week 1: Safety and Regulation",
      "Week 2: Connection and Follow-Through",
      "Week 3: Habit Building and Long-Term Change",
      "Day 21: Review, behavior plan, and completion"
    ]
  },
  {
    slug: "court-ordered-parenting-skills",
    title: "Court-Ordered Parenting Skills",
    cpsTitle: "Court-Ordered Parenting Accountability and Skill Building",
    icon: "CT",
    description:
      "A 21-day parenting habit program designed for court referrals. It focuses on accountability, positive parenting, safe discipline, structure, follow-through, and documented participation.",
    completionStandard:
      "Complete all 21 daily sessions, participate in reflection and home practice, and demonstrate engagement with accountability, parenting structure, and documented skill-building.",
    certificateName:
      "Certificate of Completion: Court-Ordered Parenting Accountability and Skill Building",
    includes: [
      "Court-ready parenting education structure",
      "Positive parenting and child behavior support",
      "Safe consequences, accountability, and repair",
      "Attendance and documentation tracking",
      "Completion certificate and printable summary"
    ],
    bestFor: [
      "Juvenile or family court referrals",
      "Court-ordered parenting education",
      "Programs needing documented participation and completion"
    ],
    learningOutcomes: [
      "Understands positive parenting expectations required by the course",
      "Can describe safe, developmentally appropriate discipline practices",
      "Demonstrates participation through lessons, tracker entries, and documentation"
    ],
    sessionPlan: [
      "Week 1: Safety and Regulation",
      "Week 2: Connection and Follow-Through",
      "Week 3: Habit Building and Long-Term Change",
      "Day 21: Final reflection, completion, and certificate"
    ]
  }
];

const lessonQuizData = [
  {
    question: "What is the main idea of this lesson?",
    options: [
      "Behavior often communicates stress, feelings, or unmet needs.",
      "Most hard behavior should be handled with longer lectures.",
      "Children act out mainly to manipulate adults."
    ],
    answerIndex: 0,
    feedback:
      "Yes. This lesson teaches that behavior often points to distress, overwhelm, or a need under the surface."
  },
  {
    question: "What does trauma often do to a child's brain and body?",
    options: [
      "It always causes the same behavior in every child.",
      "It can keep the brain and body on alert and make calming harder.",
      "It only affects children during emergencies."
    ],
    answerIndex: 1,
    feedback:
      "Correct. Trauma and chronic stress can keep children on alert and make learning, flexibility, and calming harder."
  },
  {
    question: "When is discipline most effective?",
    options: [
      "When a child is calm enough to think and learn.",
      "At the peak of a meltdown.",
      "Only after a parent raises their voice."
    ],
    answerIndex: 0,
    feedback:
      "Correct. This lesson teaches calm first, then teaching and correction once the child can take it in."
  },
  {
    question: "What is the key message of connection before correction?",
    options: [
      "Connection means there should be no limits.",
      "Children hear correction better after they feel safe and understood.",
      "Correction should always come before reassurance."
    ],
    answerIndex: 1,
    feedback:
      "Right. Connection lowers threat and helps children become more open to guidance."
  },
  {
    question: "Why do triggers matter?",
    options: [
      "They help parents notice patterns and prepare with more understanding.",
      "They should be ignored so children toughen up.",
      "They only matter if the child talks about them directly."
    ],
    answerIndex: 0,
    feedback:
      "Correct. Noticing triggers helps parents plan ahead and respond with more support and less surprise."
  },
  {
    question: "What usually helps more with anger and defiance?",
    options: [
      "Power struggles and repeated arguing.",
      "Calm limits, clear choices, and fewer words.",
      "Immediate punishment before listening."
    ],
    answerIndex: 1,
    feedback:
      "Correct. The goal is calm structure, not escalating the conflict."
  },
  {
    question: "What often helps a child in anxiety or shutdown?",
    options: [
      "More pressure to explain themselves quickly.",
      "Less pressure, more calm presence, and one small next step.",
      "Ignoring the distress completely."
    ],
    answerIndex: 1,
    feedback:
      "Yes. Gentle support, space, and one manageable next step often help more than pressure."
  },
  {
    question: "What is most useful when supporting a child at school?",
    options: [
      "Specific, realistic supports and clear communication.",
      "Assuming the school will figure it out without input.",
      "Waiting until the problem gets much worse."
    ],
    answerIndex: 0,
    feedback:
      "Correct. Small, specific school supports and documentation usually work better than vague plans."
  },
  {
    question: "Why does parent self-regulation matter?",
    options: [
      "Because a caregiver's nervous system affects the tone of the moment.",
      "Because parents should never feel stressed.",
      "Because children only calm down if adults stay silent."
    ],
    answerIndex: 0,
    feedback:
      "Correct. Your body, pace, and tone can either calm or intensify a hard moment."
  },
  {
    question: "How is long-term emotional safety built?",
    options: [
      "Through one perfect parenting response.",
      "Through repeated moments of predictability, repair, and care.",
      "By avoiding all conflict forever."
    ],
    answerIndex: 1,
    feedback:
      "Correct. Emotional safety grows through many small, repeated experiences of safety and repair."
  }
];

fallbackContent.learningPath.forEach((lesson, index) => {
  lesson.quiz = lessonQuizData[index];
});

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash || "home";
}

function setRoute(route) {
  window.location.hash = route;
}

function normalizeAccessState(state) {
  const nextState = state || {};
  return {
    premiumParent: !!nextState.premiumParent,
    professional: !!nextState.professional
  };
}

function getAccessState() {
  try {
    const raw = window.localStorage.getItem(accessStorageKey);
    return normalizeAccessState(raw ? JSON.parse(raw) : {});
  } catch (error) {
    return normalizeAccessState({});
  }
}

function saveAccessState(state) {
  window.localStorage.setItem(accessStorageKey, JSON.stringify(normalizeAccessState(state)));
}

function hasProfessionalAccess() {
  return getAccessState().professional;
}

function hasPremiumAccess() {
  const access = getAccessState();
  return access.premiumParent || access.professional;
}

function getAccessLabel() {
  const access = getAccessState();
  if (access.professional) return "Professional Access";
  if (access.premiumParent) return "Premium Parent Access";
  return "Free Access";
}

function applyAccessFromQuery() {
  const url = new URL(window.location.href);
  const accessParam = url.searchParams.get("access");
  if (!accessParam) return;

  const nextState = getAccessState();
  if (accessParam === "premium-parent" || accessParam === "lifetime-parent") {
    nextState.premiumParent = true;
  }
  if (accessParam === "professional") {
    nextState.professional = true;
    nextState.premiumParent = true;
  }
  saveAccessState(nextState);

  url.searchParams.delete("access");
  window.history.replaceState({}, document.title, url.toString());
}

function getAccessMessage() {
  return window.localStorage.getItem(accessMessageStorageKey) || "";
}

function setAccessMessage(message) {
  if (!message) {
    window.localStorage.removeItem(accessMessageStorageKey);
    return;
  }

  window.localStorage.setItem(accessMessageStorageKey, message);
}

function redeemAccessCode(rawCode) {
  const code = String(rawCode || "").trim().toUpperCase();
  const unlock = accessCodeDefinitions[code];

  if (!unlock) {
    setAccessMessage("That access code was not recognized.");
    return false;
  }

  const nextState = getAccessState();
  nextState.premiumParent = unlock.premiumParent || nextState.premiumParent;
  nextState.professional = unlock.professional || nextState.professional;
  saveAccessState(nextState);
  setAccessMessage(unlock.message);
  return true;
}

function isFreeLearningLesson(index) {
  return index < 3;
}

function renderPremiumUpgradeCard(options = {}) {
  const title = options.title || "Premium Feature";
  const text =
    options.text ||
    "This part of Rooted Parenting Network is part of the premium parent program.";
  return `
    <section class="section-card">
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="hero-actions hero-actions--stacked">
        <a class="primary-button" href="https://buy.stripe.com/aFa28r2Ti79A1KO67R4ko00" target="_blank" rel="noopener noreferrer">Start 3-Day Free Trial</a>
        <a class="secondary-button" href="https://buy.stripe.com/cNi28r2TieC2cps3ZJ4ko01" target="_blank" rel="noopener noreferrer">Get Lifetime Access</a>
      </div>
    </section>
  `;
}

function renderProfessionalUpgradeCard(options = {}) {
  const title = options.title || "Professional Feature";
  const text =
    options.text ||
    "This section is reserved for professional and agency access.";
  return `
    <section class="section-card">
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="hero-actions hero-actions--stacked">
        <a class="primary-button" href="https://buy.stripe.com/14A28reC065w1KOcwf4ko02" target="_blank" rel="noopener noreferrer">Get Professional Access</a>
      </div>
    </section>
  `;
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

function getParentTrackerEntries() {
  try {
    const raw = window.localStorage.getItem(parentTrackerStorageKey);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveParentTrackerEntry(entry) {
  const entries = getParentTrackerEntries();
  const next = [entry, ...entries].slice(0, 12);
  window.localStorage.setItem(parentTrackerStorageKey, JSON.stringify(next));
}

function normalizeClientProfile(profile) {
  const nextProfile = profile || {};
  const children = Array.isArray(nextProfile.children)
    ? nextProfile.children.filter(Boolean)
    : nextProfile.clientName
      ? [nextProfile.clientName]
      : [""];

  return {
    clientName: nextProfile.clientName || children[0] || "",
    caregiverName: nextProfile.caregiverName || "",
    caseNote: nextProfile.caseNote || "",
    assignedCourse: nextProfile.assignedCourse || "",
    children: children.length ? children : [""],
    strengths: nextProfile.strengths || "",
    currentConcerns: nextProfile.currentConcerns || "",
    triggers: nextProfile.triggers || "",
    copingTools: nextProfile.copingTools || "",
    behaviorPatterns: nextProfile.behaviorPatterns || "",
    schoolNotes: nextProfile.schoolNotes || "",
    careTeamMembers: nextProfile.careTeamMembers || ""
  };
}

function getAccountRoleType() {
  const role = getAccountProfile().role || roleOptions[0];
  if (role === "Admin") {
    return "admin";
  }
  if (role === "Parent / Caregiver") {
    return "parent";
  }
  if (role === "Teacher" || role === "School Staff") {
    return "school";
  }
  return "professional";
}

function getClientProfile() {
  try {
    const raw = window.localStorage.getItem(clientProfileStorageKey);
    return normalizeClientProfile(raw ? JSON.parse(raw) : null);
  } catch (error) {
    return normalizeClientProfile(null);
  }
}

function saveClientProfile(profile) {
  window.localStorage.setItem(
    clientProfileStorageKey,
    JSON.stringify(normalizeClientProfile(profile))
  );
}

function getAccountProfile() {
  try {
    const raw = window.localStorage.getItem(accountProfileStorageKey);
    const profile = raw ? JSON.parse(raw) : {};
    return {
      role: roleOptions.includes(profile.role) ? profile.role : roleOptions[0],
      inviteCode: profile.inviteCode || ""
    };
  } catch (error) {
    return {
      role: roleOptions[0],
      inviteCode: ""
    };
  }
}

function saveAccountProfile(profile) {
  const current = getAccountProfile();
  window.localStorage.setItem(
    accountProfileStorageKey,
    JSON.stringify({
      role: roleOptions.includes(profile.role) ? profile.role : current.role,
      inviteCode: profile.inviteCode || current.inviteCode || ""
    })
  );
}

function getTeamSettings() {
  try {
    const raw = window.localStorage.getItem(teamSettingsStorageKey);
    const saved = raw ? JSON.parse(raw) : {};
    return {
      inviteEmail: saved.inviteEmail || "",
      inviteCode: saved.inviteCode || "",
      selectedPermission:
        saved.selectedPermission || defaultTeamSettings.selectedPermission,
      members: Array.isArray(saved.members) && saved.members.length ? saved.members : defaultTeamSettings.members
    };
  } catch (error) {
    return defaultTeamSettings;
  }
}

function saveTeamSettings(settings) {
  window.localStorage.setItem(
    teamSettingsStorageKey,
    JSON.stringify({
      inviteEmail: settings.inviteEmail || "",
      inviteCode: settings.inviteCode || "",
      selectedPermission:
        settings.selectedPermission || defaultTeamSettings.selectedPermission,
      members: Array.isArray(settings.members) && settings.members.length ? settings.members : defaultTeamSettings.members
    })
  );
}

function getSharedGoals() {
  const normalizeGoal = (goal, index) => {
    const fallback = defaultGoals[index] || defaultGoals[defaultGoals.length - 1];
    return {
      id: goal?.id || fallback.id,
      title: goal?.title || fallback.title,
      progress: Number.isFinite(Number(goal?.progress)) ? Math.max(0, Math.min(100, Number(goal.progress))) : fallback.progress,
      parentNote: goal?.parentNote || "",
      providerNote: goal?.providerNote || ""
    };
  };

  try {
    const raw = window.localStorage.getItem(goalsStorageKey);
    const saved = raw ? JSON.parse(raw) : defaultGoals;
    if (Array.isArray(saved) && saved.length) {
      return defaultGoals.map((goal, index) => normalizeGoal(saved[index] || goal, index));
    }
    return defaultGoals.map((goal, index) => normalizeGoal(goal, index));
  } catch (error) {
    return defaultGoals.map((goal, index) => normalizeGoal(goal, index));
  }
}

function saveSharedGoals(goals) {
  window.localStorage.setItem(goalsStorageKey, JSON.stringify(goals));
}

function getCarePlan() {
  try {
    const raw = window.localStorage.getItem(carePlanStorageKey);
    const saved = raw ? JSON.parse(raw) : {};
    return {
      strengths: saved.strengths || defaultCarePlan.strengths,
      triggers: saved.triggers || defaultCarePlan.triggers,
      warningSigns: saved.warningSigns || defaultCarePlan.warningSigns,
      whatHelps: saved.whatHelps || defaultCarePlan.whatHelps,
      avoid: saved.avoid || defaultCarePlan.avoid,
      repairPlan: saved.repairPlan || defaultCarePlan.repairPlan,
      teamCommitments: saved.teamCommitments || defaultCarePlan.teamCommitments,
      immediateSafety: saved.immediateSafety || defaultCarePlan.immediateSafety
    };
  } catch (error) {
    return { ...defaultCarePlan };
  }
}

function saveCarePlan(plan) {
  window.localStorage.setItem(carePlanStorageKey, JSON.stringify(plan));
}

function getParentReflection() {
  try {
    const raw = window.localStorage.getItem(parentReflectionStorageKey);
    return raw
      ? JSON.parse(raw)
      : {
          responseToday: "",
          didWell: "",
          doDifferently: "",
          supportNeeded: "",
          lessonFit: ""
        };
  } catch (error) {
    return {
      responseToday: "",
      didWell: "",
      doDifferently: "",
      supportNeeded: "",
      lessonFit: ""
    };
  }
}

function saveParentReflection(data) {
  window.localStorage.setItem(parentReflectionStorageKey, JSON.stringify(data));
}

function getProviderNotes() {
  try {
    const raw = window.localStorage.getItem(providerNotesStorageKey);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveProviderNote(note) {
  const notes = getProviderNotes();
  const next = [note, ...notes].slice(0, 20);
  window.localStorage.setItem(providerNotesStorageKey, JSON.stringify(next));
}

function getNotificationsData() {
  try {
    const raw = window.localStorage.getItem(notificationsStorageKey);
    return raw
      ? JSON.parse(raw)
      : {
          items: [
            "Check-in not completed today",
            "Goal updated",
            "New lesson ready",
            "Follow-up may be needed",
            "Report tools available"
          ]
        };
  } catch (error) {
    return {
      items: [
        "Check-in not completed today",
        "Goal updated",
        "New lesson ready",
        "Follow-up may be needed",
        "Report tools available"
      ]
    };
  }
}

function getUserSettings() {
  try {
    const raw = window.localStorage.getItem(settingsStorageKey);
    return raw
      ? JSON.parse(raw)
      : {
          notificationPreference: "Important updates",
          privacyPreference: "Standard privacy",
          supportContact: "Use the support and policy links in the app footer."
        };
  } catch (error) {
    return {
      notificationPreference: "Important updates",
      privacyPreference: "Standard privacy",
      supportContact: "Use the support and policy links in the app footer."
    };
  }
}

function saveUserSettings(data) {
  window.localStorage.setItem(settingsStorageKey, JSON.stringify(data));
}

function getSupervisorPortalData() {
  try {
    const raw = window.localStorage.getItem(supervisorPortalStorageKey);
    return raw
      ? JSON.parse(raw)
      : { supervisorName: "", agencyName: "", accessNote: "" };
  } catch (error) {
    return { supervisorName: "", agencyName: "", accessNote: "" };
  }
}

function saveSupervisorPortalData(data) {
  window.localStorage.setItem(supervisorPortalStorageKey, JSON.stringify(data));
}

function getAssignedCourse() {
  const profile = getClientProfile();
  return appContent.courses.find((course) => course.slug === profile.assignedCourse) || null;
}

function getAttendanceEntries() {
  try {
    const raw = window.localStorage.getItem(attendanceTrackerStorageKey);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveAttendanceEntry(entry) {
  const entries = getAttendanceEntries();
  const next = [entry, ...entries].slice(0, 20);
  window.localStorage.setItem(attendanceTrackerStorageKey, JSON.stringify(next));
}

function getDailyHabitEntries() {
  try {
    const raw = window.localStorage.getItem(dailyHabitTrackerStorageKey);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveDailyHabitEntry(entry) {
  const entries = getDailyHabitEntries();
  const next = [entry, ...entries].slice(0, 30);
  window.localStorage.setItem(dailyHabitTrackerStorageKey, JSON.stringify(next));
}

function getTeacherCheckInEntries() {
  try {
    const raw = window.localStorage.getItem(teacherCheckInStorageKey);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveTeacherCheckInEntry(entry) {
  const entries = getTeacherCheckInEntries();
  const next = [entry, ...entries].slice(0, 30);
  window.localStorage.setItem(teacherCheckInStorageKey, JSON.stringify(next));
}

function getWeekLabelFromSessionTitle(sessionTitle) {
  const match = typeof sessionTitle === "string" ? sessionTitle.match(/Day (\d+)/) : null;
  const dayNumber = match ? Number(match[1]) : 0;
  if (dayNumber >= 1 && dayNumber <= 7) {
    return "Week 1: Safety and Regulation";
  }
  if (dayNumber >= 8 && dayNumber <= 14) {
    return "Week 2: Connection and Follow-Through";
  }
  if (dayNumber >= 15 && dayNumber <= 21) {
    return "Week 3: Habit Building and Long-Term Change";
  }
  return "Unassigned Week";
}

function buildWeeklySummaryReports(entries) {
  const weekOrder = [
    "Week 1: Safety and Regulation",
    "Week 2: Connection and Follow-Through",
    "Week 3: Habit Building and Long-Term Change"
  ];

  return weekOrder.map((weekLabel) => {
    const weekEntries = entries.filter((entry) => getWeekLabelFromSessionTitle(entry.sessionTitle) === weekLabel);
    return {
      weekLabel,
      entryCount: weekEntries.length,
      sessions: weekEntries.map((entry) => entry.sessionTitle).filter(Boolean),
      learned: weekEntries.map((entry) => entry.learned).filter(Boolean),
      strengths: weekEntries
        .map((entry) => entry.connectionUsed || entry.rewardUsed || entry.followThrough)
        .filter(Boolean),
      nextFocus: weekEntries.map((entry) => entry.tomorrowFocus).filter(Boolean)
    };
  });
}

function getAssessmentData() {
  try {
    const raw = window.localStorage.getItem(assessmentStorageKey);
    return raw
      ? JSON.parse(raw)
      : {
          type: "Pre-assessment",
          ratings: {},
          strengths: "",
          growthArea: "",
          familyChange: ""
        };
  } catch (error) {
    return {
      type: "Pre-assessment",
      ratings: {},
      strengths: "",
      growthArea: "",
      familyChange: ""
    };
  }
}

function saveAssessmentData(data) {
  window.localStorage.setItem(assessmentStorageKey, JSON.stringify(data));
}

function getWorksheetEntries() {
  try {
    const raw = window.localStorage.getItem(worksheetStorageKey);
    return raw
      ? JSON.parse(raw)
      : {
          behavior_reflection_log: { trigger: "", need: "", helped: "" },
          calm_plan: { earlySigns: "", calmingChoices: "", supportPeople: "" },
          school_meeting_planner: { concern: "", supportRequest: "", followUp: "" },
          trigger_tracker: { pattern: "", bodySigns: "", whatHelped: "" },
          parent_self_regulation_plan: { warningSigns: "", groundingTool: "", resetPlan: "" }
        };
  } catch (error) {
    return {
      behavior_reflection_log: { trigger: "", need: "", helped: "" },
      calm_plan: { earlySigns: "", calmingChoices: "", supportPeople: "" },
      school_meeting_planner: { concern: "", supportRequest: "", followUp: "" },
      trigger_tracker: { pattern: "", bodySigns: "", whatHelped: "" },
      parent_self_regulation_plan: { warningSigns: "", groundingTool: "", resetPlan: "" }
    };
  }
}

function saveWorksheetEntries(data) {
  window.localStorage.setItem(worksheetStorageKey, JSON.stringify(data));
}

function getDisciplineEntries() {
  try {
    const raw = window.localStorage.getItem("rooted-parenting-discipline-tracker");
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveDisciplineEntry(entry) {
  const entries = getDisciplineEntries();
  const next = [entry, ...entries].slice(0, 20);
  window.localStorage.setItem("rooted-parenting-discipline-tracker", JSON.stringify(next));
}

function countSelectedValues(entries, fieldName, options) {
  const counts = Object.fromEntries(options.map((option) => [option, 0]));
  entries.forEach((entry) => {
    const values = Array.isArray(entry[fieldName]) ? entry[fieldName] : [];
    values.forEach((value) => {
      if (Object.prototype.hasOwnProperty.call(counts, value)) {
        counts[value] += 1;
      }
    });
  });
  return counts;
}

function getTopItems(counts, limit = 2) {
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .filter(([, value]) => value > 0);
}

function formatPercent(value) {
  return `${Math.max(0, Math.min(100, Math.round(value)))}%`;
}

function buildBehaviorInsights(entries) {
  const totalEntries = entries.length;
  const triggerCounts = countSelectedValues(entries, "triggers", checkInTriggerOptions);
  const responseCounts = countSelectedValues(entries, "responses", checkInResponseOptions);
  const behaviorCounts = countSelectedValues(entries, "behaviors", checkInBehaviorOptions);
  const calmEntries = entries.filter((entry) => entry.overall === "calm" || (entry.childResponse || []).includes("resolved")).length;
  const positiveEntries = entries.filter((entry) => (entry.behaviors || []).includes("positive day")).length;
  const arguingCount = behaviorCounts.arguing || 0;
  const improvementBase = totalEntries || 1;

  return {
    totalEntries,
    topTriggers: getTopItems(triggerCounts),
    topResponses: getTopItems(responseCounts),
    topBehaviors: getTopItems(behaviorCounts, 3),
    improvementAreas: [
      {
        label: "Arguing decreased",
        percent: totalEntries ? Math.max(5, Math.round(((totalEntries - arguingCount) / improvementBase) * 20)) : 20
      },
      {
        label: "Positive behaviors increased",
        percent: totalEntries ? Math.max(10, Math.round((positiveEntries / improvementBase) * 100)) : 35
      }
    ],
    participation: totalEntries ? Math.min(100, totalEntries * 14) : 18,
    stressPattern: totalEntries ? Math.round(((behaviorCounts["emotional upset"] || 0) + (behaviorCounts.anxiety || 0)) / improvementBase * 100) : 32,
    skillImprovement: totalEntries ? Math.round((calmEntries / improvementBase) * 100) : 41
  };
}

function checkboxList(name, options, selectedValues = []) {
  return `
    <div class="checkbox-grid">
      ${options
        .map(
          (option) => `
            <label class="checkbox-option">
              <input type="checkbox" name="${name}" value="${option}" ${selectedValues.includes(option) ? "checked" : ""} />
              <span>${escapeHtml(option)}</span>
            </label>
          `
        )
        .join("")}
    </div>
  `;
}

function getCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((input) => input.value);
}

function checkLessonQuiz(slug) {
  const lesson = appContent.learningPath.find((item) => item.slug === slug);
  if (!lesson || !lesson.quiz) {
    return;
  }

  const selected = document.querySelector(`input[name="quiz-${slug}"]:checked`);
  if (!selected) {
    quizFeedbackState[slug] = {
      isCorrect: false,
      message: "Choose one answer before checking your quiz."
    };
    renderRoute();
    return;
  }

  const selectedIndex = Number(selected.value);
  const isCorrect = selectedIndex === lesson.quiz.answerIndex;

  quizFeedbackState[slug] = {
    isCorrect,
    message: isCorrect
      ? `${lesson.quiz.feedback} This lesson is now marked complete.`
      : "Not quite yet. Review the lesson and try again."
  };

  if (isCorrect && !isLessonComplete(slug)) {
    toggleLessonComplete(slug);
  }

  renderRoute();
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

function setAppNotice(message) {
  window.localStorage.setItem(appNoticeStorageKey, message);
}

function getAppNotice() {
  try {
    return window.localStorage.getItem(appNoticeStorageKey) || "";
  } catch (error) {
    return "";
  }
}

function clearAppNotice() {
  try {
    window.localStorage.removeItem(appNoticeStorageKey);
  } catch (error) {
    return;
  }
}

function formatScheduleDate(dateValue, timeValue = "") {
  if (!dateValue) {
    return "No date";
  }

  try {
    const dateText = new Date(`${dateValue}T12:00:00`).toLocaleDateString();
    return timeValue ? `${dateText} at ${timeValue}` : dateText;
  } catch (error) {
    return timeValue ? `${dateValue} at ${timeValue}` : dateValue;
  }
}

async function initializeHomeSupabase() {
  if (supabaseHomeClient || !window.supabase || !window.ROOTED_SUPABASE_URL || !window.ROOTED_SUPABASE_ANON_KEY) {
    return;
  }

  supabaseHomeClient = window.supabase.createClient(
    window.ROOTED_SUPABASE_URL,
    window.ROOTED_SUPABASE_ANON_KEY
  );
}

async function loadHomeFamilySchedule() {
  await initializeHomeSupabase();
  if (!supabaseHomeClient) {
    return;
  }

  try {
    const { data: sessionData } = await supabaseHomeClient.auth.getSession();
    const userId = sessionData?.session?.user?.id;
    if (!userId) {
      currentSupabaseFamilyId = null;
      currentFamilyScheduleEvents = [];
      return;
    }

    const { data: family, error: familyError } = await supabaseHomeClient
      .from("families")
      .select("id")
      .eq("parent_user_id", userId)
      .maybeSingle();

    if (familyError || !family?.id) {
      currentSupabaseFamilyId = null;
      currentFamilyScheduleEvents = [];
      return;
    }

    currentSupabaseFamilyId = family.id;

    const { data: scheduleRows, error: scheduleError } = await supabaseHomeClient
      .from("family_schedule_events")
      .select("*")
      .eq("family_id", family.id)
      .gte("event_date", new Date().toISOString().slice(0, 10))
      .order("event_date", { ascending: true });

    if (scheduleError) {
      const message = String(scheduleError.message || "").toLowerCase();
      if (message.includes("family_schedule_events") || message.includes("does not exist") || message.includes("schema cache")) {
        currentFamilyScheduleEvents = [];
        return;
      }
      currentFamilyScheduleEvents = [];
      return;
    }

    currentFamilyScheduleEvents = scheduleRows || [];
  } catch (error) {
    currentFamilyScheduleEvents = [];
  }
}

function renderAppNotice() {
  const message = getAppNotice();
  if (!message || !appContentRoot.firstElementChild) {
    return;
  }

  const notice = document.createElement("section");
  notice.className = "app-notice";
  notice.innerHTML = `
    <strong>Saved</strong>
    <p>${escapeHtml(message)}</p>
  `;
  appContentRoot.prepend(notice);
  clearAppNotice();
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
  const unlocked = hasPremiumAccess() || isFreeLearningLesson(index);
  return `
    <button class="path-card" type="button" ${unlocked ? `data-path-lesson="${lesson.slug}"` : 'data-route-link="home"'} >
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
            <span class="status-pill ${unlocked ? "is-complete" : ""}">${unlocked ? "Available" : "Premium"}</span>
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
  const role = getAccountProfile().role || "Parent / Caregiver";
  const roleType = getAccountRoleType();
  const assignedCourse = getAssignedCourse();
  const accessState = getAccessState();
  const accessMessage = getAccessMessage();
  const completedLessons = getCompletedLessons();
  const totalLessons = appContent.learningPath.length;
  const progressPercent = totalLessons ? Math.round((completedLessons.length / totalLessons) * 100) : 0;
  const entries = getDailyHabitEntries();
  const latestEntry = entries[0];
  const positiveMoments = entries
    .map((entry) => entry.positiveMoment)
    .filter(Boolean)
    .slice(0, 2);
  const insights = buildBehaviorInsights(entries);
  const topTrigger = insights.topTriggers[0]?.[0] || "transitions";
  const nextLesson = appContent.learningPath.find((lesson) => !completedLessons.includes(lesson.slug)) || appContent.learningPath[0];
  const upcomingItems = currentFamilyScheduleEvents.length
    ? currentFamilyScheduleEvents.slice(0, 4).map((item) => ({
        title: item.title || item.event_type || "Upcoming event",
        detail: `${item.event_type || "Event"} • ${formatScheduleDate(item.event_date, item.event_time)}`
      }))
    : [
        { title: "Appointments", detail: "Shared schedule will show provider-entered events here." },
        { title: "Meetings", detail: "Court, school, and provider meetings will appear here." },
        { title: "Court dates", detail: "Upcoming court dates and visits will show here." }
      ];
  screenTitle.textContent = "Home";
  appContentRoot.innerHTML = `
    <section class="hero">
      <p class="mini-label">Today's check-in reminder</p>
      <h2>Simple overview of what matters today</h2>
      <p>${latestEntry ? "Your most recent check-in is saved. Keep building consistency with one small next step today." : "Start with a quick daily reflection, then move into one lesson or one calm response skill."}</p>
      <div class="pill-row">
        <span class="role-badge">${escapeHtml(getAccountProfile().role)}</span>
        <span class="pill">${completedLessons.length} of ${totalLessons} lessons complete</span>
        <span class="pill">${entries.length} daily check-ins saved</span>
      </div>
      <div class="hero-actions">
        <button class="primary-button" type="button" data-route-link="checkin">Open Today's Check-In</button>
        <button class="secondary-button" type="button" data-route-link="support">Open Real-Time Help</button>
      </div>
    </section>

    <section class="section-card">
      <h2>${
        roleType === "admin"
          ? "Admin dashboard"
          : roleType === "professional"
            ? "Professional dashboard"
            : roleType === "school"
              ? "School support dashboard"
              : "Parent dashboard"
      }</h2>
      <p>${
        roleType === "admin"
          ? "Manage users, review role approval needs, monitor reports, and keep content and permissions organized."
          : roleType === "professional"
            ? "Review assigned family progress, child profiles, check-ins, goals, recommendations, and shared documentation."
            : roleType === "school"
              ? "Use approved school supports, classroom response tools, shared plans, and documentation for student needs."
              : "Use daily check-ins, child profile, goals, lessons, progress tools, and worksheets to stay steady and organized."
      }</p>
      <div class="hero-actions hero-actions--stacked">
        <button class="secondary-button" type="button" data-route-link="child-profile">Open Child Profile</button>
        ${
          roleType === "admin"
            ? '<button class="secondary-button" type="button" data-route-link="admin">Open Admin Dashboard</button>'
            : roleType === "professional"
              ? '<button class="secondary-button" type="button" data-route-link="professional">Open Professional Dashboard</button>'
              : roleType === "school"
                ? '<button class="secondary-button" type="button" data-route-link="teacher">Open School Support</button>'
                : '<button class="secondary-button" type="button" data-route-link="goals">View Goals</button>'
        }
      </div>
    </section>

    <section class="section-card">
      <h2>Progress snapshot</h2>
      <p>Weekly progress bar</p>
      <div class="progress-meter" aria-hidden="true"><span style="width:${progressPercent}%"></span></div>
      <div class="metric-grid">
        <div class="metric-card">
          <strong>Today's focus</strong>
          <p>${escapeHtml(nextLesson.title)}</p>
          <button class="secondary-button" type="button" data-path-lesson="${nextLesson.slug}">Open suggested skill</button>
        </div>
        <div class="metric-card">
          <strong>Most common trigger</strong>
          <p>${escapeHtml(topTrigger)}</p>
          <button class="secondary-button" type="button" data-route-link="progress">View behavior patterns</button>
        </div>
      </div>
    </section>

    <section class="section-card">
      <h2>Shared child support plan</h2>
      <p>Keep one trauma-informed plan that tells every adult what helps this child feel safe, what to avoid, and how to respond across home, school, and services.</p>
      <div class="hero-actions hero-actions--stacked">
        <button class="primary-button" type="button" data-route-link="care-plan">Open Child Support Plan</button>
      </div>
    </section>

    <section class="section-card">
      <h2>Quick actions</h2>
      <div class="hero-actions hero-actions--stacked">
        <button class="secondary-button" type="button" data-route-link="checkin">Start Check-In</button>
        <button class="secondary-button" type="button" data-route-link="goals">View Goals</button>
        <button class="secondary-button" type="button" data-route-link="learning">Open Lessons</button>
        <button class="secondary-button" type="button" data-route-link="support">Ask for Help</button>
        <button class="secondary-button" type="button" data-route-link="team">View Team</button>
        <a class="secondary-button" href="parent-setup.html">Open Messages and Family Hub</a>
        ${
          hasProfessionalAccess()
            ? '<a class="secondary-button" href="staff-portal.html">Open Provider Schedule Portal</a>'
            : ""
        }
        <button class="secondary-button" type="button" data-route-link="report">Open Attendance and Progress Report</button>
      </div>
    </section>

    <section class="section-card">
      <h2>Family supports</h2>
      <div class="hero-actions hero-actions--stacked">
        <button class="secondary-button" type="button" data-route-link="reflection">Parent Self-Reflection</button>
        <button class="secondary-button" type="button" data-route-link="resources">Resources</button>
        <button class="secondary-button" type="button" data-route-link="notifications">Notifications</button>
        <button class="secondary-button" type="button" data-route-link="settings">Settings</button>
      </div>
    </section>

    <section class="section-card">
      <h2>Messages and shared schedule</h2>
      <p>Use the Family Hub for parent messages and shared documents. Use the Staff Portal to enter provider visits, court dates, appointments, and teacher-parent meetings with dates and times.</p>
      <div class="hero-actions hero-actions--stacked">
        <a class="primary-button" href="parent-setup.html">Open Family Hub</a>
        ${
          hasProfessionalAccess()
            ? '<a class="secondary-button" href="staff-portal.html">Open Staff Portal</a>'
            : ""
        }
      </div>
    </section>

    <section class="section-card">
      <h2>Next best step</h2>
      <p>${
        role === "Teacher"
          ? "Start with Teacher Check-In, then open the Child Support Plan so classroom responses stay aligned with the family and provider team."
          : "Start with today's Check-In, then update the Child Support Plan or Shared Goals so every adult stays consistent."
      }</p>
    </section>

    ${
      assignedCourse
        ? `
          <section class="section-card">
            <h2>Assigned track</h2>
            <p><strong>${assignedCourse.title}</strong></p>
            <p>${assignedCourse.cpsTitle}</p>
            <div class="hero-actions hero-actions--stacked">
              <button class="primary-button" type="button" data-course="${assignedCourse.slug}">Open assigned track</button>
              <button class="secondary-button" type="button" data-route-link="team">Open team access</button>
            </div>
          </section>
        `
        : ""
    }

    <section class="section-card">
      <h2>Recent positives</h2>
      <div class="positive-list">
        ${
          positiveMoments.length
            ? positiveMoments.map((moment) => `<div class="positive-item">${escapeHtml(moment)}</div>`).join("")
            : `
              <div class="positive-item">Used calm voice during conflict</div>
              <div class="positive-item">Completed homework without escalation</div>
            `
        }
      </div>
    </section>

    <section class="section-card">
      <h2>Upcoming</h2>
      <p>Add court dates, appointments, provider visits, and teacher-parent meetings in the Family Hub or Staff Portal. They will show here after they are saved.</p>
      <div class="upcoming-list">
        ${upcomingItems.map((item) => `<div class="upcoming-item"><strong>${escapeHtml(item.title)}</strong><br />${escapeHtml(item.detail)}</div>`).join("")}
      </div>
      <div class="hero-actions hero-actions--stacked">
        <a class="secondary-button" href="parent-setup.html">Open Family Hub</a>
        ${
          hasProfessionalAccess()
            ? '<a class="secondary-button" href="staff-portal.html">Add Dates and Times in Staff Portal</a>'
            : ""
        }
        <button class="secondary-button" type="button" data-route-link="report">Open Attendance and Progress Report</button>
      </div>
    </section>

    <section class="section-card">
      <h2>Your Access</h2>
      <p><strong>${getAccessLabel()}</strong></p>
      <p>${
        accessState.professional
          ? "Professional tools, staff portal access, and premium parent content are available on this device."
          : accessState.premiumParent
            ? "Premium parent content is unlocked on this device, including the 21-day program, workbook, trackers, and assessments."
            : "You are currently using the free version. Premium sections will show upgrade buttons when you reach them."
      }</p>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Access or scholarship code</span>
          <input id="access-code-input" type="text" placeholder="Enter an access code" />
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="secondary-button" type="button" data-redeem-access-code="true">Apply Access Code</button>
        </div>
      </div>
      ${
        accessMessage
          ? `
            <div class="note-box">
              <p>${escapeHtml(accessMessage)}</p>
            </div>
          `
          : ""
      }
    </section>

    <section class="section-card">
      <h2>Resources and plans</h2>
      <p>Everything below stays connected to the same payment plan, policy, terms, and professional materials already in the app.</p>
      <div class="hero-actions hero-actions--stacked">
        <a class="resource-link" href="parent-login.html" target="_blank" rel="noopener noreferrer">Parent Sign In</a>
        <a class="resource-link" href="parent-setup.html">Family Setup, Messages, and Schedule</a>
        ${
          hasPremiumAccess()
            ? `<a class="resource-link" href="rooted-parenting-workbook.html" target="_blank" rel="noopener noreferrer">Open Parent Workbook</a>`
            : `<a class="resource-link" href="https://buy.stripe.com/aFa28r2Ti79A1KO67R4ko00" target="_blank" rel="noopener noreferrer">Upgrade for Full Workbook</a>`
        }
        <a class="resource-link" href="rooted-parenting-facilitator-guide.html" target="_blank" rel="noopener noreferrer">Facilitator Guide</a>
        <a class="resource-link" href="worksheets-printable.html" target="_blank" rel="noopener noreferrer">Printable Worksheets</a>
        <a class="resource-link" href="rooted-parenting-one-page-summary.html" target="_blank" rel="noopener noreferrer">One-Page Program Summary</a>
        ${
          hasPremiumAccess()
            ? `<button class="resource-link" type="button" data-route-link="progress">Open Progress Tracker</button>`
            : `<a class="resource-link" href="https://buy.stripe.com/aFa28r2Ti79A1KO67R4ko00" target="_blank" rel="noopener noreferrer">Upgrade for Progress Tracker</a>`
        }
      </div>
    </section>

    <section class="section-card">
      <h2>Choose Your Access</h2>
      <p>Rooted Parenting Network offers trauma-informed tools for families, teachers, and professionals, with affordable premium options for full course access, workbook tools, trackers, and professional features.</p>
      <div class="hero-actions hero-actions--stacked">
        <div class="detail-card">
          <h3>Free Access</h3>
          <p><strong>$0</strong></p>
          <p>Includes basic parenting support tools, sample lessons, selected worksheets, and general behavior guidance.</p>
        </div>
        <div class="detail-card">
          <h3>Premium Parent Access</h3>
          <p><strong>3-day free trial, then $4.99 / month</strong></p>
          <p>Includes the full 21-day parenting program, workbook, progress tracker, assessments, certificate completion, and saved family tools.</p>
          <a class="primary-button" href="https://buy.stripe.com/aFa28r2Ti79A1KO67R4ko00" target="_blank" rel="noopener noreferrer">Start 3-Day Free Trial</a>
        </div>
        <div class="detail-card">
          <h3>Lifetime Parent Access</h3>
          <p><strong>$59.99 one time</strong></p>
          <p>One-time payment for full parent access, including the 21-day program, workbook, trackers, assessments, and certificate tools.</p>
          <a class="primary-button" href="https://buy.stripe.com/cNi28r2TieC2cps3ZJ4ko01" target="_blank" rel="noopener noreferrer">Get Lifetime Access</a>
        </div>
        <div class="detail-card">
          <h3>Professional / Agency Access</h3>
          <p><strong>$79.99</strong></p>
          <p>Includes staff portal, assigned tracks, weekly reports, attendance and progress review, and documentation tools for providers and agencies.</p>
          <a class="primary-button" href="https://buy.stripe.com/14A28reC065w1KOcwf4ko02" target="_blank" rel="noopener noreferrer">Get Professional Access</a>
        </div>
      </div>
      <div class="note-box">
        <strong>Need help with access?</strong>
        <p>You can offer scholarship or sponsored access codes to parents who cannot afford premium access.</p>
      </div>
    </section>
  `;
}

function renderCoursesList() {
  const assignedCourse = getAssignedCourse();
  screenTitle.textContent = "Courses";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Course catalog</h2>
      <p>These five CPS-friendly course tracks help position Rooted Parenting Network as a structured, trauma-informed parent education program with clear completion standards and certificate options.</p>
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

    ${
      assignedCourse
        ? `
          <section class="section-card">
            <h2>Currently assigned track</h2>
            <p><strong>${assignedCourse.title}</strong></p>
            <p>${assignedCourse.cpsTitle}</p>
            <div class="hero-actions hero-actions--stacked">
              <button class="primary-button" type="button" data-course="${assignedCourse.slug}">Open Assigned Track</button>
              <button class="secondary-button" type="button" data-route-link="progress">Open Progress Tracker</button>
            </div>
          </section>
        `
        : ""
    }

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
      <h3>Best fit for</h3>
      ${bulletList(course.bestFor || [
        "Families needing practical parent education",
        "Caregivers needing structured support",
        "Parent skill-building with reflection and follow-through"
      ])}
    </section>

    <section class="detail-card">
      <h3>What parents should be able to do after this course</h3>
      ${bulletList(course.learningOutcomes || [
        "Understand the course content more clearly",
        "Use practical parenting tools at home",
        "Describe what they are working on with more confidence"
      ])}
    </section>

    <section class="detail-card">
      <h3>Suggested session outline</h3>
      <p>This course can be delivered as a multi-session parent support track.</p>
      ${bulletList(course.sessionPlan || [
        "Session 1: Introduction and parent education",
        "Session 2: Skill-building and practice",
        "Session 3: Reflection, follow-through, and planning"
      ])}
    </section>

    <section class="detail-card">
      <h3>Assigned track use</h3>
      <p>This track can be assigned in the app for a specific family so the parent and supervisor materials stay focused on the referral reason.</p>
      <div class="hero-actions hero-actions--stacked">
        <button class="primary-button" type="button" data-assign-course="${course.slug}">Assign This Track to Current Family</button>
        <button class="secondary-button" type="button" data-route-link="supervisor">Open Supervisor Portal</button>
      </div>
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
  const account = getAccountProfile();
  screenTitle.textContent = "Welcome";
  appContentRoot.innerHTML = `
    <section class="onboarding-card">
      <p class="mini-label">Welcome / account type</p>
      <h2>Rooted Parenting Network</h2>
      <p>A trauma-informed parenting and child-support platform that helps parents, courts, CPS, counselors, schools, and support teams stay informed, organized, and consistent around a child’s needs.</p>
      <div class="pill-row">
        <span class="pill">Safe</span>
        <span class="pill">Calm</span>
        <span class="pill">Trauma-informed</span>
        <span class="pill">Cross-system</span>
      </div>
      <div class="hero-actions hero-actions--stacked">
        <button class="primary-button" type="button" data-finish-onboarding="true">Get Started</button>
        <a class="secondary-button" href="parent-login.html">Parent Access</a>
        <a class="secondary-button" href="staff-login.html">Professional Access</a>
        <a class="secondary-button" href="rooted-parenting-network-feature-map.html">Learn More</a>
      </div>
      <div class="note-box">
        <strong>Choose your path</strong>
        <p>Parent accounts can access daily check-ins, lessons, goals, progress tracking, resources, and worksheets. Professional accounts are intended for counselors, CPS, courts, caseworkers, mentors, behavioral health workers, and approved school staff. Admin accounts are for platform management and oversight.</p>
      </div>
      <div class="note-box">
        <strong>Why it helps families</strong>
        <p>Families can keep check-ins, goals, lessons, support plans, reflections, and resources in one calm, organized place.</p>
      </div>
      <div class="note-box">
        <strong>Why it helps professionals</strong>
        <p>Professionals can review progress, see patterns, support shared goals, document recommendations, and stay aligned across systems.</p>
      </div>
      <div class="note-box">
        <strong>Privacy and trust</strong>
        <p>Rooted Parenting Network is being shaped around role-based access, confidentiality, shared care planning, and family-centered trauma-informed support.</p>
      </div>
      <div class="choice-grid">
        ${roleOptions
          .map(
            (role) => `
              <label class="choice-card">
                <input type="radio" name="account-role" value="${role}" ${account.role === role ? "checked" : ""} />
                <span>${escapeHtml(role)}</span>
              </label>
            `
          )
          .join("")}
      </div>
      <label class="tracker-field">
        <span>Join a family team</span>
        <input id="invite-code-input" type="text" value="${escapeHtml(account.inviteCode)}" placeholder="Enter invite code" />
      </label>
      <div class="note-box">
        <strong>Professional approval</strong>
        <p>Professional and school-based accounts should include agency name, role, and work email in the secure portal setup. Approval and assigned-family access remain the long-term production model.</p>
      </div>
      <div class="note-box">
        <strong>Contact and support</strong>
        <p>For support, professional access requests, or implementation questions, use the support and policy information linked throughout the app materials.</p>
      </div>
      <button class="primary-button" type="button" data-finish-onboarding="true">Create Account</button>
    </section>
  `;
}

function renderLearningList() {
  screenTitle.textContent = "Lessons";
  const completedCount = getCompletedLessons().length;
  const totalCount = appContent.learningPath.length;
  appContentRoot.innerHTML = `
    <section class="section-card">
      <h2>Learn</h2>
      <p>These short lessons help parents, teachers, and professionals understand how stress and trauma can affect a child's behavior, feelings, attention, and ability to cope.</p>
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
        <h2>Lesson Path</h2>
      </div>
      <p>Each lesson gives a simple explanation, one example, and one action step for today.</p>
      ${
        hasPremiumAccess()
          ? ""
          : `
            <div class="note-box">
              <strong>Free preview</strong>
              <p>The first 3 learning path lessons are included in free access. Upgrade to unlock the full 21-day program.</p>
            </div>
          `
      }
      <div class="note-box">
        <strong>Build order</strong>
        ${bulletList([
          "Phase 1: Core app",
          "Phase 2: Collaboration",
          "Phase 3: Advanced support"
        ])}
      </div>
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
  const whatItLooksLike = page ? learningTopicLookLikeMap[page.slug] || [] : [];

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
    ${
      whatItLooksLike.length
        ? `
          <section class="detail-card">
            <h3>What this can look like at home</h3>
            <p>Here are a few examples of what this might sound or look like in real parenting moments:</p>
            ${bulletList(whatItLooksLike)}
          </section>
        `
        : ""
    }
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
  const index = appContent.learningPath.findIndex((item) => item.slug === slug);

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

  if (!hasPremiumAccess() && !isFreeLearningLesson(index)) {
    screenTitle.textContent = lesson.title;
    appContentRoot.innerHTML = `
      ${renderPremiumUpgradeCard({
        title: `${lesson.title} is Premium`,
        text: "Free users can preview the first 3 lessons. Upgrade to unlock the full 21-day learning path, progress tracker, workbook, assessments, and certificate."
      })}
      <section class="section-card">
        <button class="secondary-button" type="button" data-route-link="learning">Back to Learning Path</button>
      </section>
    `;
    return;
  }

  const total = appContent.learningPath.length;
  const percent = Math.round(((index + 1) / total) * 100);
  const previousLesson = index > 0 ? appContent.learningPath[index - 1] : null;
  const nextLesson = index < total - 1 ? appContent.learningPath[index + 1] : null;

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
          ${isLessonComplete(lesson.slug) ? "Marked complete" : "Ready for today's action"}
        </span>
      </div>
    </section>
    <section class="detail-card">
      <h3>Simple explanation</h3>
      <p>${lesson.intro || lesson.explanation}</p>
    </section>
    <section class="detail-card">
      <h3>Example</h3>
      ${bulletList(lesson.examples.slice(0, 2))}
    </section>
    <section class="detail-card">
      <h3>One action step today</h3>
      <div class="action-box">
        <strong>Practice this</strong>
        <p>${lesson.actionStep}</p>
      </div>
    </section>
    <section class="detail-card">
      <h3>What to remember</h3>
      <div class="note-box">
        ${bulletList((lesson.bullets || []).slice(0, 4))}
      </div>
    </section>
    <section class="detail-card">
      <h3>Keep going</h3>
      <div class="hero-actions hero-actions--stacked">
        ${
          previousLesson
            ? `<button class="secondary-button" type="button" data-path-lesson="${previousLesson.slug}">Previous Lesson</button>`
            : `<button class="secondary-button" type="button" data-route-link="learning">Back to Learning Path</button>`
        }
        ${
          nextLesson
            ? `<button class="primary-button" type="button" data-path-lesson="${nextLesson.slug}">Next Lesson</button>`
            : `<button class="primary-button" type="button" data-route-link="progress">Go to Progress</button>`
        }
        <button class="secondary-button" type="button" data-complete-lesson="${lesson.slug}">${isLessonComplete(lesson.slug) ? "Mark Incomplete" : "Mark Complete"}</button>
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
  screenTitle.textContent = "Support";
  appContentRoot.innerHTML = `
    <section class="section-card">
      <h2>Support tool</h2>
      <p>Real-time help for the moments when a parent, teacher, or professional needs a trauma-informed way to respond.</p>
    </section>
    <section class="section-card">
      <h2>Child support plan</h2>
      <p>Open the shared plan for strengths, triggers, warning signs, calming supports, and team response patterns.</p>
      <div class="hero-actions hero-actions--stacked">
        <button class="primary-button" type="button" data-route-link="care-plan">Open Child Support Plan</button>
      </div>
    </section>
    <section class="section-card">
      <h2>What is happening right now?</h2>
      <div class="hero-actions hero-actions--stacked">
        ${supportToolOptions
          .map(
            (tool) => `
              <button class="button-card" type="button" data-support-tool="${tool.slug}">
                <strong>${escapeHtml(tool.label)}</strong>
                <span>Open quick steps for this moment.</span>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
    <section class="section-card">
      <h2>Self-regulation reminders</h2>
      ${bulletList([
        "Pause and regulate yourself first.",
        "Use short directions.",
        "Avoid a power struggle.",
        "Give a simple choice.",
        "Allow reset time."
      ])}
    </section>
    <section class="section-card">
      <h2>Immediate safety</h2>
      <p>If there is immediate danger to the child or others, move to safety first and contact crisis or emergency support as needed. This app is not a substitute for emergency care.</p>
    </section>
  `;
}

function renderSupportToolDetail(slug) {
  const tool = supportToolOptions.find((item) => item.slug === slug);
  if (!tool) {
    renderTools();
    return;
  }

  screenTitle.textContent = "Support";
  appContentRoot.innerHTML = `
    <section class="detail-card">
      <div class="detail-card__header">
        <span class="behavior-tag">Real-Time Help</span>
        <button class="back-link" type="button" data-route-link="support">Back</button>
      </div>
      <h2>${escapeHtml(tool.label)}</h2>
      <p>Use these quick steps to stay steady and avoid escalating the moment.</p>
    </section>
    <section class="section-card">
      <div class="support-steps">
        ${tool.steps.map((step) => `<div class="step-card">${escapeHtml(step)}</div>`).join("")}
      </div>
    </section>
  `;
}

function renderCheckIn() {
  const role = (getAccountProfile().role || "").toLowerCase();
  const isTeacherView = role === "teacher";
  const latestEntry = (isTeacherView ? getTeacherCheckInEntries() : getDailyHabitEntries())[0] || {};
  screenTitle.textContent = "Check-In";
  appContentRoot.innerHTML = isTeacherView
    ? `
      <section class="section-card">
        <h2>Teacher check-in</h2>
        <p>Quick classroom reflection for behavior, response patterns, and trauma-informed support.</p>
      </section>
      <section class="detail-card">
        <div class="tracker-form">
          <label class="tracker-field">
            <span>How was the school day overall?</span>
            <select id="teacher-checkin-overall">
              <option value="calm" ${latestEntry.overall === "calm" ? "selected" : ""}>Calm</option>
              <option value="mixed" ${latestEntry.overall === "mixed" ? "selected" : ""}>Mixed</option>
              <option value="stressful" ${latestEntry.overall === "stressful" ? "selected" : ""}>Stressful</option>
            </select>
          </label>
          <div class="tracker-field">
            <span>What behaviors showed up today?</span>
            ${checkboxList("teacher-checkin-behaviors", teacherCheckInBehaviorOptions, latestEntry.behaviors || [])}
          </div>
          <div class="tracker-field">
            <span>What seemed to trigger it?</span>
            ${checkboxList("teacher-checkin-triggers", teacherCheckInTriggerOptions, latestEntry.triggers || [])}
          </div>
          <div class="tracker-field">
            <span>How did you respond?</span>
            ${checkboxList("teacher-checkin-responses", teacherCheckInResponseOptions, latestEntry.responses || [])}
          </div>
          <div class="tracker-field">
            <span>How did the student respond?</span>
            ${checkboxList("teacher-checkin-student-response", teacherCheckInStudentResponseOptions, latestEntry.studentResponse || [])}
          </div>
          <label class="tracker-field">
            <span>What support helped most today?</span>
            <textarea id="teacher-checkin-support" rows="3" placeholder="Short entry">${escapeHtml(latestEntry.supportThatHelped || "")}</textarea>
          </label>
          <label class="tracker-field">
            <span>Positive moment or small win</span>
            <textarea id="teacher-checkin-positive-moment" rows="3" placeholder="Short entry">${escapeHtml(latestEntry.positiveMoment || "")}</textarea>
          </label>
          <div class="hero-actions hero-actions--stacked">
            <button class="primary-button" type="button" data-save-teacher-checkin="true">Save Teacher Check-In</button>
          </div>
        </div>
      </section>
      <section class="detail-card">
        <h3>Recent teacher check-ins</h3>
        ${
          getTeacherCheckInEntries().length
            ? getTeacherCheckInEntries()
                .slice(0, 5)
                .map(
                  (entry) => `
                    <div class="tracker-entry">
                      <strong>${escapeHtml(entry.date || "No date")} - ${escapeHtml(entry.overall || "mixed")}</strong>
                      <p><strong>Behaviors:</strong> ${escapeHtml((entry.behaviors || []).join(", ") || "None entered")}</p>
                      <p><strong>Triggers:</strong> ${escapeHtml((entry.triggers || []).join(", ") || "None entered")}</p>
                      <p><strong>Response used:</strong> ${escapeHtml((entry.responses || []).join(", ") || "None entered")}</p>
                      <p><strong>Student response:</strong> ${escapeHtml((entry.studentResponse || []).join(", ") || "None entered")}</p>
                      <p><strong>Helpful support:</strong> ${escapeHtml(entry.supportThatHelped || "Not entered")}</p>
                      <p><strong>Positive moment:</strong> ${escapeHtml(entry.positiveMoment || "Not entered")}</p>
                    </div>
                  `
                )
                .join("")
            : "<p>No teacher check-ins saved yet. Save one above to start tracking classroom patterns.</p>"
        }
      </section>
    `
    : `
      <section class="section-card">
        <h2>Daily check-in</h2>
        <p>Quick daily reflection in about one to two minutes.</p>
      </section>
      <section class="detail-card">
        <div class="tracker-form">
          <label class="tracker-field">
            <span>How was today overall?</span>
            <select id="checkin-overall">
              <option value="calm" ${latestEntry.overall === "calm" ? "selected" : ""}>Calm</option>
              <option value="mixed" ${latestEntry.overall === "mixed" ? "selected" : ""}>Mixed</option>
              <option value="stressful" ${latestEntry.overall === "stressful" ? "selected" : ""}>Stressful</option>
            </select>
          </label>
          <div class="tracker-field">
            <span>What behaviors happened today?</span>
            ${checkboxList("checkin-behaviors", checkInBehaviorOptions, latestEntry.behaviors || [])}
          </div>
          <div class="tracker-field">
            <span>What triggered the behavior?</span>
            ${checkboxList("checkin-triggers", checkInTriggerOptions, latestEntry.triggers || [])}
          </div>
          <div class="tracker-field">
            <span>How did you respond?</span>
            ${checkboxList("checkin-responses", checkInResponseOptions, latestEntry.responses || [])}
          </div>
          <div class="tracker-field">
            <span>How did the child respond?</span>
            ${checkboxList("checkin-child-response", checkInChildResponseOptions, latestEntry.childResponse || [])}
          </div>
          <label class="tracker-field">
            <span>Positive moment today</span>
            <textarea id="checkin-positive-moment" rows="3" placeholder="Short entry">${escapeHtml(latestEntry.positiveMoment || "")}</textarea>
          </label>
          <div class="hero-actions hero-actions--stacked">
            <button class="primary-button" type="button" data-save-checkin="true">Submit</button>
          </div>
        </div>
      </section>
    `;
}

function renderTeam() {
  const team = getTeamSettings();
  const insights = buildBehaviorInsights(getDailyHabitEntries());
  const permissionOptions = [
    "all 3: view progress only, view behavior patterns, view lesson completion",
    "view progress only",
    "view behavior patterns",
    "view lesson completion"
  ];
  screenTitle.textContent = "Team";
  appContentRoot.innerHTML = `
    <section class="section-card">
      <h2>Team access</h2>
      <p>Invite professionals and define how much of the family view they can see so response patterns stay trauma-informed across systems.</p>
    </section>
    <section class="detail-card">
      <h3>Family team members</h3>
      <div class="insight-list">
        ${team.members
          .map(
            (member) => `
              <div class="insight-item">
                <strong>${escapeHtml(member.role)}</strong>
                <p>${escapeHtml(member.permission)}</p>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
    <section class="detail-card">
      <h3>Invite member</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Email or contact</span>
          <input id="team-invite-email" type="text" value="${escapeHtml(team.inviteEmail)}" placeholder="name@example.com" />
        </label>
        <label class="tracker-field">
          <span>Invite code</span>
          <input id="team-invite-code" type="text" value="${escapeHtml(team.inviteCode)}" placeholder="TEAM-2026" />
        </label>
        <div class="tracker-field">
          <span>Permission options</span>
          <div class="permission-grid">
            ${permissionOptions
              .map((permission) => {
                const label = permission.startsWith("all 3") ? "All 3" : permission.charAt(0).toUpperCase() + permission.slice(1);
                return `<button class="permission-button ${team.selectedPermission === permission ? "is-active" : ""}" type="button" data-select-team-permission="${escapeHtml(permission)}">${escapeHtml(label)}</button>`;
              })
              .join("")}
          </div>
        </div>
        <div class="note-box" id="team-message">
          <p>Selected permission: ${escapeHtml(team.selectedPermission)}</p>
        </div>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-team-settings="true">Invite member</button>
        </div>
      </div>
    </section>
    <section class="detail-card">
      <h3>Professional dashboard</h3>
      <div class="metric-grid">
        <div class="metric-card">
          <strong>Participation level</strong>
          <p>${formatPercent(insights.participation)}</p>
        </div>
        <div class="metric-card">
          <strong>Stress patterns</strong>
          <p>${formatPercent(insights.stressPattern)}</p>
        </div>
        <div class="metric-card">
          <strong>Skill improvement</strong>
          <p>${formatPercent(insights.skillImprovement)}</p>
        </div>
        <div class="metric-card">
          <strong>Example insight</strong>
          <p>Child responds well to calm redirection and low-pressure support.</p>
        </div>
      </div>
      ${
        hasProfessionalAccess()
          ? '<div class="hero-actions hero-actions--stacked"><button class="secondary-button" type="button" data-route-link="supervisor">Open full professional view</button></div>'
          : '<div class="hero-actions hero-actions--stacked"><a class="primary-button" href="https://buy.stripe.com/14A28reC065w1KOcwf4ko02" target="_blank" rel="noopener noreferrer">Get Professional Access</a></div>'
      }
    </section>
    <section class="detail-card">
      <h3>Team quick access</h3>
      <div class="hero-actions hero-actions--stacked">
        <button class="secondary-button" type="button" data-route-link="care-plan">Open Child Support Plan</button>
        <button class="secondary-button" type="button" data-route-link="goals">Open Shared Goals</button>
        <a class="secondary-button" href="parent-setup.html">Open Parent Messages and Shared Schedule</a>
        ${
          hasProfessionalAccess()
            ? '<a class="secondary-button" href="staff-portal.html">Open Staff Portal for Dates and Times</a>'
            : ""
        }
        <button class="secondary-button" type="button" data-route-link="report">Open Attendance and Progress Report</button>
      </div>
    </section>
    <section class="detail-card">
      <h3>Shared response plan</h3>
      <p>Keep one child-centered plan so parents, teachers, and providers respond with the same trauma-informed pattern instead of mixed messages.</p>
      <div class="hero-actions hero-actions--stacked">
        <button class="secondary-button" type="button" data-route-link="care-plan">Open Child Support Plan</button>
      </div>
    </section>
    <section class="detail-card">
      <h3>Where to enter dates, times, and messages</h3>
      <p>The live message thread and shared schedule entry are in the Family Hub and Staff Portal. Use those pages to add provider visits, court dates, meetings, and back-and-forth messages.</p>
      <div class="hero-actions hero-actions--stacked">
        <a class="secondary-button" href="parent-setup.html">Open Family Hub</a>
        ${
          hasProfessionalAccess()
            ? '<a class="secondary-button" href="staff-portal.html">Open Staff Portal</a>'
            : ""
        }
      </div>
    </section>
  `;
}

function renderChildProfile() {
  const clientProfile = getClientProfile();
  screenTitle.textContent = "Child Profile";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Child profile</h2>
      <p>Keep one child-centered profile with strengths, concerns, triggers, coping tools, behavior patterns, school notes, and care team members so adults can respond consistently.</p>
      <div class="pill-row">
        <span class="pill">Family-centered</span>
        <span class="pill">Cross-system</span>
        <span class="pill">Trauma-informed</span>
      </div>
    </section>

    <section class="detail-card">
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Child first name or initials</span>
          <input id="child-profile-name" type="text" value="${escapeHtml(clientProfile.clientName || "")}" placeholder="Child first name or initials" />
        </label>
        <label class="tracker-field">
          <span>Caregiver name</span>
          <input id="child-profile-caregiver" type="text" value="${escapeHtml(clientProfile.caregiverName || "")}" placeholder="Parent or caregiver" />
        </label>
        <label class="tracker-field">
          <span>Strengths</span>
          <textarea id="child-profile-strengths" rows="3" placeholder="What strengths should the team keep seeing?">${escapeHtml(clientProfile.strengths || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>Current concerns</span>
          <textarea id="child-profile-concerns" rows="3" placeholder="Behavior, emotional, school, or family concerns">${escapeHtml(clientProfile.currentConcerns || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>Triggers</span>
          <textarea id="child-profile-triggers" rows="3" placeholder="Transitions, stressors, correction, conflict, overwhelm">${escapeHtml(clientProfile.triggers || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>Coping tools and what helps</span>
          <textarea id="child-profile-coping" rows="3" placeholder="Breaks, movement, calm voice, choices, sensory supports">${escapeHtml(clientProfile.copingTools || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>Behavior patterns</span>
          <textarea id="child-profile-patterns" rows="3" placeholder="What patterns does the team keep noticing?">${escapeHtml(clientProfile.behaviorPatterns || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>School notes</span>
          <textarea id="child-profile-school" rows="3" placeholder="Teacher notes, school concerns, classroom supports">${escapeHtml(clientProfile.schoolNotes || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>Care team members</span>
          <textarea id="child-profile-team" rows="3" placeholder="Parent, therapist, caseworker, CPS, mentor, school contact, court contact">${escapeHtml(clientProfile.careTeamMembers || "")}</textarea>
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-child-profile="true">Save Child Profile</button>
          <button class="secondary-button" type="button" data-route-link="care-plan">Open Child Support Plan</button>
        </div>
      </div>
    </section>
  `;
}

function renderProfessionalDashboard() {
  if (!hasProfessionalAccess()) {
    screenTitle.textContent = "Professional Dashboard";
    appContentRoot.innerHTML = renderProfessionalUpgradeCard({
      title: "Professional Dashboard is Professional",
      text: "Professional access includes assigned family review, progress oversight, recommendations, shared documentation, and agency-facing tools."
    });
    return;
  }

  const clientProfile = getClientProfile();
  const dailyHabitEntries = getDailyHabitEntries();
  const goals = getSharedGoals();
  const weeklyReports = buildWeeklySummaryReports(dailyHabitEntries);
  const insights = buildBehaviorInsights(dailyHabitEntries);
  screenTitle.textContent = "Professional Dashboard";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Professional dashboard</h2>
      <p>Review assigned family progress, check-ins, goals, child profile details, recent updates, shared plans, and professional next steps.</p>
      <div class="pill-row">
        <span class="pill">${dailyHabitEntries.length} check-ins</span>
        <span class="pill">${goals.length} goals</span>
        <span class="pill">${weeklyReports.filter((week) => week.entryCount > 0).length} active weekly summaries</span>
      </div>
    </section>

    <section class="detail-card">
      <h3>Assigned family snapshot</h3>
      <p><strong>Child:</strong> ${escapeHtml(clientProfile.clientName || "Not entered")}</p>
      <p><strong>Caregiver:</strong> ${escapeHtml(clientProfile.caregiverName || "Not entered")}</p>
      <p><strong>Current concerns:</strong> ${escapeHtml(clientProfile.currentConcerns || clientProfile.caseNote || "Not entered")}</p>
      <div class="hero-actions hero-actions--stacked">
        <button class="secondary-button" type="button" data-route-link="child-profile">Open Child Profile</button>
        <button class="secondary-button" type="button" data-route-link="supervisor">Open Professional Review</button>
      </div>
    </section>

    <section class="detail-card">
      <h3>Recent updates and flags</h3>
      <div class="metric-grid">
        <div class="metric-card">
          <strong>Recent updates</strong>
          <p>${dailyHabitEntries.length ? "Parent check-ins are saving and available for review." : "No check-ins saved yet."}</p>
        </div>
        <div class="metric-card">
          <strong>Flags or concerns</strong>
          <p>${escapeHtml(insights.topBehaviors[0]?.[0] || "No major behavior pattern flagged yet")}</p>
        </div>
        <div class="metric-card">
          <strong>Shared goals</strong>
          <p>${goals.filter((goal) => Number(goal.progress || 0) < 100).length} active goals in progress</p>
        </div>
        <div class="metric-card">
          <strong>Recommended intervention</strong>
          <p>Continue calm redirection, shorter directions, and shared follow-through across systems.</p>
        </div>
      </div>
    </section>

    <section class="detail-card">
      <h3>Meeting and documentation tools</h3>
      <div class="hero-actions hero-actions--stacked">
        <a class="secondary-button" href="staff-portal.html">Open Staff Portal</a>
        <button class="secondary-button" type="button" data-route-link="goals">Open Shared Goals</button>
        <button class="secondary-button" type="button" data-route-link="notes">Add Recommendation</button>
        <button class="secondary-button" type="button" data-route-link="report">Open Reports</button>
      </div>
    </section>
  `;
}

function renderAdminDashboard() {
  screenTitle.textContent = "Admin";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Admin dashboard</h2>
      <p>Admin tools keep Rooted Parenting Network organized, safe, and professional through user management, role approval, content oversight, and report review.</p>
      <div class="pill-row">
        <span class="pill">Users</span>
        <span class="pill">Approvals</span>
        <span class="pill">Content</span>
        <span class="pill">Reports</span>
      </div>
    </section>

    <section class="detail-card">
      <h3>User management</h3>
      ${bulletList([
        "Approve or deny professional and school-based accounts.",
        "Review role type, agency name, and work email requirements.",
        "Manage who has parent, professional, school, or admin access."
      ])}
    </section>

    <section class="detail-card">
      <h3>Content management</h3>
      ${bulletList([
        "Update lessons, worksheets, and printable materials.",
        "Review trauma-informed wording and agency-safe language.",
        "Maintain branding, policy links, and support information."
      ])}
    </section>

    <section class="detail-card">
      <h3>Reports and safety oversight</h3>
      ${bulletList([
        "Review overall engagement and saved progress patterns.",
        "Monitor reporting tools and documentation quality.",
        "Keep confidentiality, permissions, and role-based access organized."
      ])}
      <div class="hero-actions hero-actions--stacked">
        <button class="secondary-button" type="button" data-route-link="professional">Open Professional Dashboard</button>
        <button class="secondary-button" type="button" data-route-link="report">Open Reports</button>
      </div>
    </section>
  `;
}

function renderParentReflection() {
  const reflection = getParentReflection();
  screenTitle.textContent = "Parent Reflection";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Parent self-reflection</h2>
      <p>This screen helps the parent reflect without shame, notice growth, and choose the next right support step.</p>
    </section>

    <section class="detail-card">
      <div class="tracker-form">
        <label class="tracker-field">
          <span>How did I respond today?</span>
          <textarea id="reflection-response-today" rows="3">${escapeHtml(reflection.responseToday || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>What did I do well?</span>
          <textarea id="reflection-did-well" rows="3">${escapeHtml(reflection.didWell || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>What do I want to do differently tomorrow?</span>
          <textarea id="reflection-do-differently" rows="3">${escapeHtml(reflection.doDifferently || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>What support do I need?</span>
          <textarea id="reflection-support-needed" rows="3">${escapeHtml(reflection.supportNeeded || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>What lesson fits what happened today?</span>
          <textarea id="reflection-lesson-fit" rows="3">${escapeHtml(reflection.lessonFit || "")}</textarea>
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-parent-reflection="true">Save Reflection</button>
          <button class="secondary-button" type="button" data-route-link="learning">Open Lessons</button>
        </div>
      </div>
    </section>
  `;
}

function renderResources() {
  screenTitle.textContent = "Resources";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Resources</h2>
      <p>Connect families to real help, practical reminders, and printable tools across home, school, behavior, court, mental health, trauma, and parenting stress.</p>
      <div class="pill-row">
        <span class="pill">Home</span>
        <span class="pill">School</span>
        <span class="pill">Behavior</span>
        <span class="pill">Court</span>
        <span class="pill">Mental health</span>
        <span class="pill">Trauma</span>
      </div>
    </section>

    <section class="section-card">
      <h2>Immediate support</h2>
      ${bulletList([
        "Crisis resources and local emergency support information",
        "Safety planning reminders for high-stress situations",
        "School advocacy tips and meeting prep",
        "Counseling, support group, and family service connections"
      ])}
    </section>

    <section class="section-card">
      <h2>Helpful printables and guides</h2>
      <div class="hero-actions hero-actions--stacked">
        <button class="resource-link" type="button" data-route-link="worksheets">Open Worksheets</button>
        <button class="resource-link" type="button" data-route-link="school">Open School Support</button>
        <button class="resource-link" type="button" data-route-link="support">Open Real-Time Help</button>
      </div>
    </section>
  `;
}

function renderNotesRecommendations() {
  const notes = getProviderNotes();
  screenTitle.textContent = "Notes";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Notes and recommendations</h2>
      <p>Use structured notes for concerns, recommendations, follow-up steps, supportive response ideas, and school or court coordination.</p>
    </section>

    <section class="detail-card">
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Concern noted</span>
          <textarea id="provider-note-concern" rows="3"></textarea>
        </label>
        <label class="tracker-field">
          <span>Recommendation</span>
          <textarea id="provider-note-recommendation" rows="3"></textarea>
        </label>
        <label class="tracker-field">
          <span>Follow-up step</span>
          <textarea id="provider-note-followup" rows="3"></textarea>
        </label>
        <label class="tracker-field">
          <span>Supportive response ideas</span>
          <textarea id="provider-note-support" rows="3"></textarea>
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-provider-note="true">Save Recommendation Note</button>
        </div>
      </div>
    </section>

    <section class="detail-card">
      <h3>Saved professional notes</h3>
      ${
        notes.length
          ? notes
              .map(
                (note) => `
                  <div class="tracker-entry">
                    <p><strong>Concern:</strong> ${escapeHtml(note.concern || "Not entered")}</p>
                    <p><strong>Recommendation:</strong> ${escapeHtml(note.recommendation || "Not entered")}</p>
                    <p><strong>Follow-up:</strong> ${escapeHtml(note.followUp || "Not entered")}</p>
                    <p><strong>Support ideas:</strong> ${escapeHtml(note.supportIdeas || "Not entered")}</p>
                    <p><small>${escapeHtml(note.date || "")}</small></p>
                  </div>
                `
              )
              .join("")
          : "<p>No professional notes saved yet.</p>"
      }
    </section>
  `;
}

function renderNotifications() {
  const notifications = getNotificationsData();
  screenTitle.textContent = "Notifications";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Notifications and alerts</h2>
      <p>Keep users informed about check-ins, goals, lessons, follow-up needs, flagged concerns, and reports.</p>
    </section>

    <section class="detail-card">
      <h3>Current alerts</h3>
      ${
        notifications.items.length
          ? notifications.items.map((item) => `<div class="tracker-entry"><p>${escapeHtml(item)}</p></div>`).join("")
          : "<p>No alerts yet.</p>"
      }
    </section>
  `;
}

function renderSettings() {
  const settings = getUserSettings();
  screenTitle.textContent = "Settings";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Settings</h2>
      <p>Manage profile-related preferences, privacy language, notification choices, support access, and account controls.</p>
    </section>

    <section class="detail-card">
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Notification settings</span>
          <input id="settings-notifications" type="text" value="${escapeHtml(settings.notificationPreference || "")}" />
        </label>
        <label class="tracker-field">
          <span>Privacy settings</span>
          <input id="settings-privacy" type="text" value="${escapeHtml(settings.privacyPreference || "")}" />
        </label>
        <label class="tracker-field">
          <span>Support / help</span>
          <textarea id="settings-support" rows="3">${escapeHtml(settings.supportContact || "")}</textarea>
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-settings="true">Save Settings</button>
        </div>
      </div>
    </section>
  `;
}

function renderGoals() {
  if (!hasPremiumAccess()) {
    screenTitle.textContent = "Goals";
    appContentRoot.innerHTML = renderPremiumUpgradeCard({
      title: "Goals is Premium",
      text: "The shared goals tab, reward tracking, attendance report, and fuller documentation tools are included with premium parent access."
    });
    return;
  }

  const goals = getSharedGoals();
  const rewardEntries = getParentTrackerEntries();
  screenTitle.textContent = "Goals";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Shared goals</h2>
      <p>Use this tab for parents and providers to track five shared goals, update progress, and keep notes in one place inside the app.</p>
      <div class="pill-row">
        <span class="pill">5 shared goals</span>
        <span class="pill">Parent + provider notes</span>
        <span class="pill">Reward tracking</span>
      </div>
    </section>

    <section class="detail-card">
      <h3>Family and provider goals</h3>
      <div class="tracker-form">
        ${goals
          .map(
            (goal, index) => `
              <div class="goal-card">
                <label class="tracker-field">
                  <span>Goal ${index + 1}</span>
                  <input id="goal-title-${index}" type="text" value="${escapeHtml(goal.title || "")}" placeholder="Enter shared goal" />
                </label>
                <label class="tracker-field">
                  <span>Progress percent</span>
                  <input id="goal-progress-${index}" type="number" min="0" max="100" value="${escapeHtml(String(goal.progress ?? 0))}" />
                </label>
                <div class="progress-meter" aria-hidden="true"><span style="width:${goal.progress}%"></span></div>
                <label class="tracker-field">
                  <span>Parent note</span>
                  <textarea id="goal-parent-note-${index}" rows="3" placeholder="What the parent is seeing or working on">${escapeHtml(goal.parentNote || "")}</textarea>
                </label>
                <label class="tracker-field">
                  <span>Provider note</span>
                  <textarea id="goal-provider-note-${index}" rows="3" placeholder="What the provider wants to track or support">${escapeHtml(goal.providerNote || "")}</textarea>
                </label>
              </div>
            `
          )
          .join("")}
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-goals="true">Save Goals</button>
        </div>
      </div>
    </section>

    <section class="detail-card">
      <h3>Reward system</h3>
      <p>Use rewards and positive reinforcement here when a child completes a goal, tries a skill, or makes progress on a hard task.</p>
      <div class="note-box">
        <strong>No-cost reward ideas</strong>
        ${bulletList([
          "Extra one-on-one time with a parent or caregiver",
          "Choice time for a favorite game or activity at home",
          "Pick the family movie, story, or music for the evening",
          "Stay up 10 extra minutes for reading or quiet time when appropriate",
          "Choose dinner, snack, or family activity from approved options",
          "Special helper job or leadership role",
          "Extra playground, outside, dance, or movement time",
          "A handwritten note, praise card, or encouragement coupon",
          "Blanket fort, board game, or art time with a parent",
          "Pick the bedtime story or choose the order of the bedtime routine"
        ])}
      </div>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Date</span>
          <input id="tracker-date" type="date" />
        </label>
        <label class="tracker-field">
          <span>Goal or task completed</span>
          <input id="tracker-task" type="text" placeholder="Example: used calm words, completed homework, asked for a break" />
        </label>
        <label class="tracker-field">
          <span>Reward or praise used</span>
          <input id="tracker-reward" type="text" placeholder="Example: praise, sticker, extra time together, choice time" />
        </label>
        <label class="tracker-field">
          <span>Calm follow-through if needed</span>
          <input id="tracker-consequence" type="text" placeholder="Example: redo, repair step, brief reset, none needed" />
        </label>
        <label class="tracker-field">
          <span>Notes</span>
          <textarea id="tracker-notes" rows="3" placeholder="What worked, what helped, or what you want to repeat"></textarea>
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-parent-tracker="true">Save Reward Entry</button>
        </div>
      </div>
    </section>

    <section class="detail-card">
      <h3>Saved reward entries</h3>
      ${
        rewardEntries.length
          ? rewardEntries
              .map(
                (entry) => `
                  <div class="tracker-entry">
                    <strong>${escapeHtml(entry.date || "No date")}</strong>
                    <p><strong>Goal or task:</strong> ${escapeHtml(entry.task || "Not entered")}</p>
                    <p><strong>Reward:</strong> ${escapeHtml(entry.reward || "Not entered")}</p>
                    <p><strong>Follow-through:</strong> ${escapeHtml(entry.consequence || "Not entered")}</p>
                    <p><strong>Notes:</strong> ${escapeHtml(entry.notes || "Not entered")}</p>
                  </div>
                `
              )
              .join("")
          : "<p>No reward entries saved yet. Add one above when a child reaches a goal or makes progress.</p>"
      }
    </section>
  `;
}

function renderCarePlan() {
  const carePlan = getCarePlan();
  screenTitle.textContent = "Care Plan";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Child support plan</h2>
      <p>This is the shared trauma-informed plan for how adults will understand, support, and respond to this child across home, school, therapy, CPS, court, and community settings.</p>
      <div class="pill-row">
        <span class="pill">Strengths-based</span>
        <span class="pill">Safety first</span>
        <span class="pill">Cross-system</span>
      </div>
    </section>

    <section class="detail-card">
      <h3>Strengths and protective factors</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>What strengths do adults need to keep seeing?</span>
          <textarea id="care-plan-strengths" rows="3">${escapeHtml(carePlan.strengths)}</textarea>
        </label>
      </div>
    </section>

    <section class="detail-card">
      <h3>Triggers and warning signs</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>What tends to trigger behavior or overwhelm?</span>
          <textarea id="care-plan-triggers" rows="3">${escapeHtml(carePlan.triggers)}</textarea>
        </label>
        <label class="tracker-field">
          <span>What are early warning signs before things get bigger?</span>
          <textarea id="care-plan-warning-signs" rows="3">${escapeHtml(carePlan.warningSigns)}</textarea>
        </label>
      </div>
    </section>

    <section class="detail-card">
      <h3>What helps and what to avoid</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>What helps this child regulate and re-engage?</span>
          <textarea id="care-plan-what-helps" rows="4">${escapeHtml(carePlan.whatHelps)}</textarea>
        </label>
        <label class="tracker-field">
          <span>What responses usually make things worse?</span>
          <textarea id="care-plan-avoid" rows="4">${escapeHtml(carePlan.avoid)}</textarea>
        </label>
      </div>
    </section>

    <section class="detail-card">
      <h3>Repair and team response</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>How should adults repair after a hard moment?</span>
          <textarea id="care-plan-repair" rows="3">${escapeHtml(carePlan.repairPlan)}</textarea>
        </label>
        <label class="tracker-field">
          <span>What shared commitments should the team follow?</span>
          <textarea id="care-plan-team" rows="3">${escapeHtml(carePlan.teamCommitments)}</textarea>
        </label>
      </div>
    </section>

    <section class="detail-card">
      <h3>Immediate safety plan</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>What should adults do first if behavior becomes unsafe?</span>
          <textarea id="care-plan-safety" rows="3">${escapeHtml(carePlan.immediateSafety)}</textarea>
        </label>
        <div class="action-box">
          <strong>Important</strong>
          <p>Use this app for planning and support, not as a replacement for emergency care. If there is immediate danger, use crisis or emergency services right away.</p>
        </div>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-care-plan="true">Save Child Support Plan</button>
          <button class="secondary-button" type="button" data-route-link="support">Back to Support</button>
        </div>
      </div>
    </section>
  `;
}

function renderAttendanceProgressReport() {
  if (!hasPremiumAccess()) {
    screenTitle.textContent = "Attendance Report";
    appContentRoot.innerHTML = renderPremiumUpgradeCard({
      title: "Attendance and Progress Report is Premium",
      text: "The in-app attendance report, progress summary, and documentation tools are included with premium parent access."
    });
    return;
  }

  const clientProfile = getClientProfile();
  const attendanceEntries = getAttendanceEntries();
  const completedLessons = getCompletedLessons();
  const totalLessons = appContent.learningPath.length;
  const dailyHabitEntries = getDailyHabitEntries();
  const trackerEntries = getParentTrackerEntries();
  const disciplineEntries = getDisciplineEntries();
  const percent = totalLessons ? Math.round((completedLessons.length / totalLessons) * 100) : 0;

  screenTitle.textContent = "Attendance Report";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Attendance and progress report</h2>
      <p>This report now stays inside the app so parent, provider, CPS, school, and court notes can stay in one place.</p>
      <div class="pill-row">
        <span class="pill">${completedLessons.length} of ${totalLessons} lessons complete</span>
        <span class="pill">${attendanceEntries.length} attendance entries</span>
        <span class="pill">${percent}% course progress</span>
      </div>
    </section>

    <section class="detail-card">
      <h3>Summary</h3>
      <p><strong>Primary client name:</strong> ${escapeHtml(clientProfile.clientName || "Not entered")}</p>
      <p><strong>Caregiver name:</strong> ${escapeHtml(clientProfile.caregiverName || "Not entered")}</p>
      <p><strong>Children on case:</strong> ${escapeHtml(clientProfile.children.filter(Boolean).join(", ") || "Not entered")}</p>
      <p><strong>Case note:</strong> ${escapeHtml(clientProfile.caseNote || "Not entered")}</p>
      <p><strong>Course progress:</strong> ${completedLessons.length} of ${totalLessons} lessons completed (${percent}%)</p>
    </section>

    <section class="detail-card">
      <h3>Attendance and progress entry</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Session or course title</span>
          <input id="attendance-session" type="text" placeholder="Example: Session 2 - Positive Discipline and Follow-Through" />
        </label>
        <label class="tracker-field">
          <span>Date</span>
          <input id="attendance-date" type="date" />
        </label>
        <label class="tracker-field">
          <span>Status</span>
          <select id="attendance-status">
            <option value="Attended">Attended</option>
            <option value="Missed">Missed</option>
            <option value="Rescheduled">Rescheduled</option>
          </select>
        </label>
        <label class="tracker-field">
          <span>What was learned or practiced</span>
          <textarea id="attendance-learned" rows="3" placeholder="Add progress, skills practiced, barriers, or strengths"></textarea>
        </label>
        <label class="tracker-field">
          <span>Notes</span>
          <textarea id="attendance-notes" rows="3" placeholder="Add service note, school note, or follow-up"></textarea>
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-attendance="true">Save Attendance Report Entry</button>
          <button class="secondary-button" type="button" data-route-link="progress">Back to Progress</button>
        </div>
      </div>
    </section>

    <section class="detail-card">
      <h3>Saved attendance and progress entries</h3>
      ${
        attendanceEntries.length
          ? attendanceEntries
              .map(
                (entry) => `
                  <div class="tracker-entry">
                    <strong>${escapeHtml(entry.sessionTitle || "Session not entered")}</strong>
                    <p><strong>Date:</strong> ${escapeHtml(entry.date || "No date")}</p>
                    <p><strong>Status:</strong> ${escapeHtml(entry.status || "Not entered")}</p>
                    <p><strong>Learned:</strong> ${escapeHtml(entry.learned || "Not entered")}</p>
                    <p><strong>Notes:</strong> ${escapeHtml(entry.notes || "Not entered")}</p>
                  </div>
                `
              )
              .join("")
          : "<p>No attendance or progress entries saved yet.</p>"
      }
    </section>

    <section class="detail-card">
      <h3>Recent rewards and discipline notes</h3>
      <div class="note-box">
        <strong>Rewards</strong>
        ${
          trackerEntries.length
            ? trackerEntries
                .slice(0, 3)
                .map((entry) => `<p>${escapeHtml(entry.date || "No date")}: ${escapeHtml(entry.task || "No task")} - ${escapeHtml(entry.reward || "No reward")}</p>`)
                .join("")
            : "<p>No reward entries yet.</p>"
        }
      </div>
      <div class="note-box">
        <strong>Discipline follow-up</strong>
        ${
          disciplineEntries.length
            ? disciplineEntries
                .slice(0, 3)
                .map((entry) => `<p>${escapeHtml(entry.date || "No date")}: ${escapeHtml(entry.type || "No entry")} - ${escapeHtml(entry.followup || "No follow-up")}</p>`)
                .join("")
            : "<p>No discipline entries yet.</p>"
        }
      </div>
      <div class="note-box">
        <strong>Recent daily check-ins</strong>
        ${
          dailyHabitEntries.length
            ? dailyHabitEntries
                .slice(0, 3)
                .map((entry) => `<p>${escapeHtml(entry.date || "No date")}: ${escapeHtml(entry.whatHappened || entry.positiveMoment || "No note entered")}</p>`)
                .join("")
            : "<p>No daily check-ins yet.</p>"
        }
      </div>
    </section>
  `;
}

function renderProgressTracker() {
  if (!hasPremiumAccess()) {
    screenTitle.textContent = "Progress Tracker";
    appContentRoot.innerHTML = renderPremiumUpgradeCard({
      title: "Progress Tracker is Premium",
      text: "The full progress tracker, workbook tools, daily logs, discipline tracker, and certificate path are included with premium parent access."
    });
    return;
  }

  const completedLessons = getCompletedLessons();
  const trackerEntries = getParentTrackerEntries();
  const clientProfile = getClientProfile();
  const attendanceEntries = getAttendanceEntries();
  const dailyHabitEntries = getDailyHabitEntries();
  const disciplineEntries = getDisciplineEntries();
  const assignedCourse = getAssignedCourse();
  const goals = getSharedGoals();
  const insights = buildBehaviorInsights(dailyHabitEntries);
  const totalLessons = appContent.learningPath.length;
  const completedCount = completedLessons.length;
  const remainingCount = Math.max(totalLessons - completedCount, 0);
  const percent = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;
  const nextLessons = appContent.learningPath
    .filter((lesson) => !completedLessons.includes(lesson.slug))
    .slice(0, 3);

  screenTitle.textContent = "Progress";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Behavior patterns</h2>
      <p>This week overview shows trends visually while keeping the fuller tracker and documentation tools underneath for trauma-informed coordination across systems.</p>
      <div class="pill-row">
        <span class="pill">${completedCount} completed</span>
        <span class="pill">${remainingCount} remaining</span>
        <span class="pill">${percent}% finished</span>
      </div>
    </section>

    <section class="detail-card">
      <h3>This week overview</h3>
      <div class="metric-grid">
        <div class="metric-card">
          <strong>Most common triggers</strong>
          <p>${escapeHtml((insights.topTriggers[0]?.[0] || "transitions"))}</p>
          <p>${escapeHtml((insights.topTriggers[1]?.[0] || "homework frustration"))}</p>
        </div>
        <div class="metric-card">
          <strong>Most successful responses</strong>
          <p>${escapeHtml((insights.topResponses[0]?.[0] || "calm tone"))}</p>
          <p>${escapeHtml((insights.topResponses[1]?.[0] || "break option"))}</p>
        </div>
      </div>
      <div class="detail-stack">
        ${insights.improvementAreas
          .map(
            (item) => `
              <div class="trend-bar">
                <div class="trend-meta">
                  <strong>${escapeHtml(item.label)}</strong>
                  <span>${formatPercent(item.percent)}</span>
                </div>
                <div class="trend-bar__rail" aria-hidden="true"><span style="width:${item.percent}%"></span></div>
              </div>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="detail-card">
      <h3>Goals</h3>
      <div class="goals-grid">
        ${goals
          .map(
            (goal) => `
              <div class="goal-card">
                <strong>${escapeHtml(goal.title)}</strong>
                <div class="progress-meter" aria-hidden="true"><span style="width:${goal.progress}%"></span></div>
                <p>${formatPercent(goal.progress)}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="hero-actions hero-actions--stacked">
        <button class="secondary-button" type="button" data-route-link="goals">Open Shared Goals Tab</button>
      </div>
    </section>

    ${
      assignedCourse
        ? `
          <section class="detail-card">
            <h3>Assigned course track</h3>
            <p><strong>${assignedCourse.title}</strong></p>
            <p>${assignedCourse.cpsTitle}</p>
            <p>${assignedCourse.description}</p>
            <div class="hero-actions hero-actions--stacked">
              <button class="primary-button" type="button" data-course="${assignedCourse.slug}">Open Assigned Track</button>
              <button class="secondary-button" type="button" data-route-link="supervisor">Open Supervisor Portal</button>
            </div>
          </section>
        `
        : ""
    }

    <section class="detail-card">
      <h3>Client and caregiver profile</h3>
      <p>Save the client, caregiver, and child names here so the printable summary and certificate stay tied to the right family. This saves in the app on this device.</p>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Primary client name</span>
          <input id="client-name" type="text" value="${escapeHtml(clientProfile.clientName || "")}" placeholder="Primary child or client name" />
        </label>
        <label class="tracker-field">
          <span>Caregiver name</span>
          <input id="caregiver-name" type="text" value="${escapeHtml(clientProfile.caregiverName || "")}" placeholder="Parent or caregiver name" />
        </label>
        <div class="tracker-field">
          <span>Children on this case</span>
          <div class="tracker-children-list">
            ${clientProfile.children
              .map(
                (childName, index) => `
                  <input class="child-name-input" type="text" data-child-index="${index}" value="${escapeHtml(childName || "")}" placeholder="Child name ${index + 1}" />
                `
              )
              .join("")}
          </div>
          <button class="secondary-button" type="button" data-add-child-profile="true">Add Another Child</button>
        </div>
        <label class="tracker-field">
          <span>Assigned course track</span>
          <select id="assigned-course">
            <option value="">Choose assigned track</option>
            ${appContent.courses
              .map(
                (course) => `
                  <option value="${escapeHtml(course.slug)}" ${clientProfile.assignedCourse === course.slug ? "selected" : ""}>${escapeHtml(course.title)}</option>
                `
              )
              .join("")}
          </select>
        </label>
        <label class="tracker-field">
          <span>Case note or service note</span>
          <textarea id="case-note" rows="3" placeholder="Example: CPS referral, family support, diversion, reunification support">${escapeHtml(clientProfile.caseNote || "")}</textarea>
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-client-profile="true">Save Client Profile</button>
        </div>
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
        <button class="resource-link" type="button" data-route-link="assessment">Open Pre/Post Assessment</button>
        ${
          completedCount === totalLessons && totalLessons > 0
            ? `<a class="resource-link" href="rooted-parenting-completion-certificate.html" target="_blank" rel="noopener noreferrer">Open Auto-Filled Certificate</a>`
            : ""
        }
      </div>
    </section>

    <section class="detail-card">
      <h3>21-day parenting habit check-in</h3>
      <p>Use this once a day while working the program so the app tracks what you practiced, what happened, and what you want to keep building tomorrow.</p>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Date</span>
          <input id="daily-date" type="date" />
        </label>
        <label class="tracker-field">
          <span>21-day session worked on today</span>
          <select id="daily-session">
            ${appContent.learningPath
              .map(
                (lesson) => `
                  <option value="${escapeHtml(lesson.title)}">${escapeHtml(lesson.title)}</option>
                `
              )
              .join("")}
          </select>
        </label>
        <label class="tracker-field">
          <span>What happened today</span>
          <textarea id="daily-what-happened" rows="3" placeholder="What happened at home today that gave you a chance to practice this skill?"></textarea>
        </label>
        <label class="tracker-field">
          <span>Connection or calm response you used</span>
          <input id="daily-connection" type="text" placeholder="Example: fewer words, connection before correction, calm tone" />
        </label>
        <label class="tracker-field">
          <span>Reward, praise, or positive reinforcement used</span>
          <input id="daily-reward" type="text" placeholder="Example: praise, choice time, sticker, extra reading time" />
        </label>
        <label class="tracker-field">
          <span>Consequence, redo, or follow-through used</span>
          <input id="daily-followthrough" type="text" placeholder="Example: redo, repair, reset, loss of a small privilege" />
        </label>
        <label class="tracker-field">
          <span>What I learned today</span>
          <textarea id="daily-learned" rows="3" placeholder="What did you notice about your child, yourself, or the parenting habit you practiced?"></textarea>
        </label>
        <label class="tracker-field">
          <span>Tomorrow's focus</span>
          <input id="daily-tomorrow" type="text" placeholder="What do you want to keep doing tomorrow?" />
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-daily-habit="true">Save Daily Check-In</button>
        </div>
      </div>
    </section>

    <section class="detail-card">
      <h3>Saved 21-day check-ins</h3>
      ${
        dailyHabitEntries.length
          ? dailyHabitEntries
              .map(
                (entry) => `
                  <div class="tracker-entry">
                    <strong>${escapeHtml(entry.date || "No date")} - ${escapeHtml(entry.sessionTitle || "Session not entered")}</strong>
                    <p><strong>What happened:</strong> ${escapeHtml(entry.whatHappened || "Not entered")}</p>
                    <p><strong>Connection used:</strong> ${escapeHtml(entry.connectionUsed || "Not entered")}</p>
                    <p><strong>Reward or praise:</strong> ${escapeHtml(entry.rewardUsed || "Not entered")}</p>
                    <p><strong>Follow-through:</strong> ${escapeHtml(entry.followThrough || "Not entered")}</p>
                    <p><strong>What I learned:</strong> ${escapeHtml(entry.learned || "Not entered")}</p>
                    <p><strong>Tomorrow's focus:</strong> ${escapeHtml(entry.tomorrowFocus || "Not entered")}</p>
                  </div>
                `
              )
              .join("")
          : `<p>No daily check-ins saved yet. Add one above so the 21-day program tracks your daily parenting habit work.</p>`
      }
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
      ${
        completedCount === totalLessons && totalLessons > 0
          ? `<p>You have completed all current lessons. Your certificate is ready to download.</p>`
          : `<p>Finish all lessons to unlock the completion certificate inside the tracker.</p>`
      }
      <div class="hero-actions hero-actions--stacked">
        <button class="resource-link" type="button" data-route-link="report">Attendance and Progress Report</button>
        ${
          completedCount === totalLessons && totalLessons > 0
            ? `<a class="resource-link" href="rooted-parenting-completion-certificate.html" target="_blank" rel="noopener noreferrer">Open Auto-Filled Certificate</a>`
            : ""
        }
      </div>
    </section>

    <section class="detail-card">
      <h3>Positive follow-through and rewards tracker</h3>
      <p>Use this tracker to record small things the child completed, what positive reinforcement you used, and what calm follow-through or consequence happened if needed. This saves in the app on this device.</p>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Date</span>
          <input id="tracker-date" type="date" />
        </label>
        <label class="tracker-field">
          <span>Small thing the child completed</span>
          <input id="tracker-task" type="text" placeholder="Example: finished homework, used calm words, cleaned up toys" />
        </label>
        <label class="tracker-field">
          <span>Positive reward or praise used</span>
          <input id="tracker-reward" type="text" placeholder="Example: praise, extra time together, sticker, choice time" />
        </label>
        <label class="tracker-field">
          <span>Calm consequence or follow-through</span>
          <input id="tracker-consequence" type="text" placeholder="Example: redo task, brief reset, loss of one privilege, repair step" />
        </label>
        <label class="tracker-field">
          <span>What worked or what you noticed</span>
          <textarea id="tracker-notes" rows="3" placeholder="Write what helped, what did not help, or what you want to repeat."></textarea>
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-parent-tracker="true">Save Tracker Entry</button>
        </div>
      </div>
    </section>

    <section class="detail-card">
      <h3>Saved tracker entries</h3>
      ${
        trackerEntries.length
          ? trackerEntries
              .map(
                (entry) => `
                  <div class="tracker-entry">
                    <strong>${escapeHtml(entry.date || "No date")}</strong>
                    <p><strong>Completed:</strong> ${escapeHtml(entry.task || "Not entered")}</p>
                    <p><strong>Reward:</strong> ${escapeHtml(entry.reward || "Not entered")}</p>
                    <p><strong>Calm follow-through:</strong> ${escapeHtml(entry.consequence || "Not entered")}</p>
                    <p><strong>Notes:</strong> ${escapeHtml(entry.notes || "None entered")}</p>
                  </div>
                `
              )
              .join("")
          : `<p>No tracker entries saved yet. Add one above to start tracking positive reinforcement and calm follow-through.</p>`
      }
    </section>

    <section class="detail-card">
      <h3>Discipline and follow-up tracker</h3>
      <p>Use this section to document calm discipline choices such as grounding, time out, taking a game, or other follow-through steps, plus how the child reacted and what follow-up happened after.</p>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Date</span>
          <input id="discipline-date" type="date" />
        </label>
        <label class="tracker-field">
          <span>Discipline or consequence used</span>
          <input id="discipline-type" type="text" placeholder="Example: grounded, time out, loss of game, redo task" />
        </label>
        <label class="tracker-field">
          <span>Reason for the consequence</span>
          <input id="discipline-reason" type="text" placeholder="Example: hit sibling, refused repeated directions, unsafe language" />
        </label>
        <label class="tracker-field">
          <span>How the child reacted</span>
          <textarea id="discipline-reaction" rows="3" placeholder="Example: cried, shut down, got angrier at first, then calmed down"></textarea>
        </label>
        <label class="tracker-field">
          <span>Follow-up after the consequence</span>
          <textarea id="discipline-followup" rows="3" placeholder="Example: talked after calm, repaired with sibling, practiced better choice, restated rule"></textarea>
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-discipline="true">Save Discipline Entry</button>
        </div>
      </div>
    </section>

    <section class="detail-card">
      <h3>Saved discipline entries</h3>
      ${
        disciplineEntries.length
          ? disciplineEntries
              .map(
                (entry) => `
                  <div class="tracker-entry">
                    <strong>${escapeHtml(entry.date || "No date")}</strong>
                    <p><strong>Discipline used:</strong> ${escapeHtml(entry.type || "Not entered")}</p>
                    <p><strong>Reason:</strong> ${escapeHtml(entry.reason || "Not entered")}</p>
                    <p><strong>Child reaction:</strong> ${escapeHtml(entry.reaction || "Not entered")}</p>
                    <p><strong>Follow-up:</strong> ${escapeHtml(entry.followup || "Not entered")}</p>
                  </div>
                `
              )
              .join("")
          : `<p>No discipline entries saved yet. Add one above to document calm discipline and follow-up.</p>`
      }
    </section>

    <section class="detail-card">
      <h3>Attendance and progress documentation</h3>
      <p>Use this section to document each parent session in the app, including the session title, date, attendance, and what the parent reports learning.</p>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Session or course title</span>
          <input id="attendance-session" type="text" placeholder="Example: Session 2 - Positive Discipline and Follow-Through" />
        </label>
        <label class="tracker-field">
          <span>Date</span>
          <input id="attendance-date" type="date" />
        </label>
        <label class="tracker-field">
          <span>Attendance</span>
          <select id="attendance-status">
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Completed make-up work">Completed make-up work</option>
          </select>
        </label>
        <label class="tracker-field">
          <span>What the parent learned</span>
          <textarea id="attendance-learned" rows="3" placeholder="Example: Dad identified triggers, practiced calmer follow-through, and described one reward system he wants to try."></textarea>
        </label>
        <label class="tracker-field">
          <span>Notes</span>
          <textarea id="attendance-notes" rows="3" placeholder="Add progress notes, barriers, home practice, or follow-up needs."></textarea>
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-attendance="true">Save Attendance Entry</button>
        </div>
      </div>
    </section>

    <section class="detail-card">
      <h3>Saved attendance entries</h3>
      ${
        attendanceEntries.length
          ? attendanceEntries
              .map(
                (entry) => `
                  <div class="tracker-entry">
                    <strong>${escapeHtml(entry.sessionTitle || "Session not entered")}</strong>
                    <p><strong>Date:</strong> ${escapeHtml(entry.date || "No date")}</p>
                    <p><strong>Status:</strong> ${escapeHtml(entry.status || "Not entered")}</p>
                    <p><strong>What was learned:</strong> ${escapeHtml(entry.learned || "Not entered")}</p>
                    <p><strong>Notes:</strong> ${escapeHtml(entry.notes || "None entered")}</p>
                  </div>
                `
              )
              .join("")
          : `<p>No attendance entries saved yet. Add one above to document each session in the app.</p>`
      }
    </section>

    <section class="detail-card print-summary" id="progress-summary">
      <div class="detail-card__header">
        <h3>Printable progress summary</h3>
        <button class="secondary-button no-print" type="button" data-print-progress="true">Print Summary</button>
      </div>
      <p><strong>Primary client name:</strong> ${escapeHtml(clientProfile.clientName || "Not entered")}</p>
      <p><strong>Caregiver name:</strong> ${escapeHtml(clientProfile.caregiverName || "Not entered")}</p>
      <p><strong>Children on case:</strong> ${escapeHtml(
        clientProfile.children.filter(Boolean).length
          ? clientProfile.children.filter(Boolean).join(", ")
          : "Not entered"
      )}</p>
      <p><strong>Assigned course track:</strong> ${escapeHtml(
        appContent.courses.find((course) => course.slug === clientProfile.assignedCourse)?.title || "Not assigned"
      )}</p>
      <p><strong>Case note:</strong> ${escapeHtml(clientProfile.caseNote || "Not entered")}</p>
      <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
      <p><strong>Course progress:</strong> ${completedCount} of ${totalLessons} lessons completed (${percent}%)</p>
      <p><strong>Certificate status:</strong> ${completedCount === totalLessons && totalLessons > 0 ? "Eligible for certificate" : "Certificate not yet unlocked"}</p>
      <div class="note-box">
        <strong>Completed lessons</strong>
        ${
          completedCount
            ? bulletList(
                completedLessons
                  .map((slug) => appContent.learningPath.find((item) => item.slug === slug))
                  .filter(Boolean)
                  .map((lesson) => lesson.title)
              )
            : "<p>No lessons completed yet.</p>"
        }
      </div>
      <div class="note-box">
        <strong>Recent 21-day daily check-ins</strong>
        ${
          dailyHabitEntries.length
            ? dailyHabitEntries
                .slice(0, 5)
                .map(
                  (entry) => `
                    <div class="summary-entry">
                      <p><strong>${escapeHtml(entry.date || "No date")} - ${escapeHtml(entry.sessionTitle || "Session not entered")}</strong></p>
                      <p><strong>What happened:</strong> ${escapeHtml(entry.whatHappened || "Not entered")}</p>
                      <p><strong>Connection:</strong> ${escapeHtml(entry.connectionUsed || "Not entered")}</p>
                      <p><strong>Learned:</strong> ${escapeHtml(entry.learned || "Not entered")}</p>
                      <p><strong>Tomorrow:</strong> ${escapeHtml(entry.tomorrowFocus || "Not entered")}</p>
                    </div>
                  `
                )
                .join("")
            : "<p>No daily check-ins saved yet.</p>"
        }
      </div>
      <div class="note-box">
        <strong>Recent parenting tracker entries</strong>
        ${
          trackerEntries.length
            ? trackerEntries
                .slice(0, 5)
                .map(
                  (entry) => `
                    <div class="summary-entry">
                      <p><strong>${escapeHtml(entry.date || "No date")}</strong></p>
                      <p><strong>Completed:</strong> ${escapeHtml(entry.task || "Not entered")}</p>
                      <p><strong>Reward:</strong> ${escapeHtml(entry.reward || "Not entered")}</p>
                      <p><strong>Follow-through:</strong> ${escapeHtml(entry.consequence || "Not entered")}</p>
                      <p><strong>Notes:</strong> ${escapeHtml(entry.notes || "None entered")}</p>
                    </div>
                  `
                )
                .join("")
            : "<p>No parenting tracker entries saved yet.</p>"
        }
      </div>
      <div class="note-box">
        <strong>Recent attendance and progress documentation</strong>
        ${
          attendanceEntries.length
            ? attendanceEntries
                .slice(0, 5)
                .map(
                  (entry) => `
                    <div class="summary-entry">
                      <p><strong>${escapeHtml(entry.sessionTitle || "Session not entered")}</strong></p>
                      <p><strong>Date:</strong> ${escapeHtml(entry.date || "No date")}</p>
                      <p><strong>Status:</strong> ${escapeHtml(entry.status || "Not entered")}</p>
                      <p><strong>Learned:</strong> ${escapeHtml(entry.learned || "Not entered")}</p>
                      <p><strong>Notes:</strong> ${escapeHtml(entry.notes || "None entered")}</p>
                    </div>
                  `
                )
                .join("")
            : "<p>No attendance entries saved yet.</p>"
        }
      </div>
      <div class="note-box">
        <strong>Recent discipline and follow-up entries</strong>
        ${
          disciplineEntries.length
            ? disciplineEntries
                .slice(0, 5)
                .map(
                  (entry) => `
                    <div class="summary-entry">
                      <p><strong>${escapeHtml(entry.date || "No date")}</strong></p>
                      <p><strong>Discipline:</strong> ${escapeHtml(entry.type || "Not entered")}</p>
                      <p><strong>Reason:</strong> ${escapeHtml(entry.reason || "Not entered")}</p>
                      <p><strong>Reaction:</strong> ${escapeHtml(entry.reaction || "Not entered")}</p>
                      <p><strong>Follow-up:</strong> ${escapeHtml(entry.followup || "Not entered")}</p>
                    </div>
                  `
                )
                .join("")
            : "<p>No discipline entries saved yet.</p>"
        }
      </div>
    </section>
  `;
}

function renderAssessment() {
  if (!hasPremiumAccess()) {
    screenTitle.textContent = "Assessment";
    appContentRoot.innerHTML = renderPremiumUpgradeCard({
      title: "Pre/Post Assessment is Premium",
      text: "The fillable pre/post assessment is included with premium parent access along with the full 21-day program, workbook, trackers, and certificate."
    });
    return;
  }

  const assessment = getAssessmentData();
  const ratingLabels = [
    "I understand that behavior may communicate stress, fear, or unmet needs.",
    "I can usually notice when my child is becoming overwhelmed.",
    "I know ways to calm myself before responding to hard behavior.",
    "I use consequences in a calm, predictable, and non-harmful way.",
    "I use praise, encouragement, or reinforcement to build desired behavior.",
    "I feel more confident setting limits without escalating conflict.",
    "I understand how routines and structure can reduce behavior problems.",
    "I feel better able to repair with my child after difficult moments.",
    "I feel more prepared to work with schools or helpers around my child's needs.",
    "I believe I have practical parenting tools I can continue using."
  ];

  screenTitle.textContent = "Assessment";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Pre/Post Assessment</h2>
      <p>Complete this form in the app and save it on this device. It can be used at the beginning of services and again later to show growth.</p>
    </section>

    <section class="detail-card">
      <h3>Assessment type</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Choose one</span>
          <select id="assessment-type">
            <option value="Pre-assessment" ${assessment.type === "Pre-assessment" ? "selected" : ""}>Pre-assessment</option>
            <option value="Post-assessment" ${assessment.type === "Post-assessment" ? "selected" : ""}>Post-assessment</option>
          </select>
        </label>
      </div>
    </section>

    <section class="detail-card">
      <h3>Rating scale</h3>
      <p>1 = strongly disagree, 2 = disagree, 3 = not sure / sometimes, 4 = agree, 5 = strongly agree</p>
      <div class="tracker-form">
        ${ratingLabels
          .map(
            (label, index) => `
              <label class="tracker-field">
                <span>${label}</span>
                <select id="assessment-rating-${index}">
                  <option value="">Choose rating</option>
                  <option value="1" ${assessment.ratings[index] === "1" ? "selected" : ""}>1</option>
                  <option value="2" ${assessment.ratings[index] === "2" ? "selected" : ""}>2</option>
                  <option value="3" ${assessment.ratings[index] === "3" ? "selected" : ""}>3</option>
                  <option value="4" ${assessment.ratings[index] === "4" ? "selected" : ""}>4</option>
                  <option value="5" ${assessment.ratings[index] === "5" ? "selected" : ""}>5</option>
                </select>
              </label>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="detail-card">
      <h3>Short reflection</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>What is one parenting strength you see in yourself right now?</span>
          <textarea id="assessment-strengths" rows="3">${escapeHtml(assessment.strengths || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>What is one parenting area you want to strengthen?</span>
          <textarea id="assessment-growth" rows="3">${escapeHtml(assessment.growthArea || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>What is one change you have noticed in your child or family?</span>
          <textarea id="assessment-change" rows="3">${escapeHtml(assessment.familyChange || "")}</textarea>
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-assessment="true">Save Assessment</button>
          <button class="secondary-button" type="button" data-route-link="progress">Back to Progress Tracker</button>
        </div>
      </div>
    </section>
  `;
}

function renderSupervisorPortal() {
  if (!hasProfessionalAccess()) {
    screenTitle.textContent = "Supervisor Portal";
    appContentRoot.innerHTML = renderProfessionalUpgradeCard({
      title: "Supervisor Portal is Professional",
      text: "Staff portal access, assigned-track oversight, weekly summaries, and agency-facing review tools are reserved for professional access."
    });
    return;
  }

  const clientProfile = getClientProfile();
  const supervisorData = getSupervisorPortalData();
  const dailyHabitEntries = getDailyHabitEntries();
  const attendanceEntries = getAttendanceEntries();
  const completedLessons = getCompletedLessons();
  const totalLessons = appContent.learningPath.length;
  const weeklyReports = buildWeeklySummaryReports(dailyHabitEntries);
  const assignedCourse = appContent.courses.find((course) => course.slug === clientProfile.assignedCourse);

  screenTitle.textContent = "Supervisor Portal";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Supervisor Portal</h2>
      <p>This is a local prototype view for CPS, courts, and facilitators to review assigned tracks, daily check-ins, and weekly summaries. A real read-only staff login would be the next secure backend step.</p>
      <div class="pill-row">
        <span class="pill">Local prototype</span>
        <span class="pill">${completedLessons.length} of ${totalLessons} sessions complete</span>
        <span class="pill">${weeklyReports.filter((week) => week.entryCount > 0).length} weekly summaries active</span>
      </div>
    </section>

    <section class="detail-card">
      <h3>Supervisor access profile</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Supervisor or worker name</span>
          <input id="supervisor-name" type="text" value="${escapeHtml(supervisorData.supervisorName || "")}" placeholder="Supervisor or worker name" />
        </label>
        <label class="tracker-field">
          <span>Agency or court</span>
          <input id="agency-name" type="text" value="${escapeHtml(supervisorData.agencyName || "")}" placeholder="Agency, court, or program name" />
        </label>
        <label class="tracker-field">
          <span>Access note</span>
          <textarea id="supervisor-access-note" rows="3" placeholder="Example: Read-only CPS supervisor review for progress and completion.">${escapeHtml(supervisorData.accessNote || "")}</textarea>
        </label>
        <div class="hero-actions hero-actions--stacked">
          <button class="primary-button" type="button" data-save-supervisor-profile="true">Save Supervisor Portal Profile</button>
          <button class="secondary-button" type="button" data-print-progress="true">Print Supervisor Summary</button>
        </div>
      </div>
    </section>

    <section class="detail-card">
      <h3>Assigned family and track</h3>
      <p><strong>Primary client:</strong> ${escapeHtml(clientProfile.clientName || "Not entered")}</p>
      <p><strong>Caregiver:</strong> ${escapeHtml(clientProfile.caregiverName || "Not entered")}</p>
      <p><strong>Children on case:</strong> ${escapeHtml(clientProfile.children.filter(Boolean).join(", ") || "Not entered")}</p>
      <p><strong>Assigned track:</strong> ${escapeHtml(assignedCourse ? assignedCourse.title : "Not assigned")}</p>
      <p><strong>CPS-friendly title:</strong> ${escapeHtml(assignedCourse ? assignedCourse.cpsTitle : "Not assigned")}</p>
      <p><strong>Completion standard:</strong> ${escapeHtml(assignedCourse ? assignedCourse.completionStandard : "Assign a track to show the completion standard here.")}</p>
      <div class="hero-actions hero-actions--stacked">
        <button class="primary-button" type="button" data-route-link="progress">Open Progress Tracker</button>
        <button class="secondary-button" type="button" data-route-link="courses">Open Course Catalog</button>
      </div>
    </section>

    <section class="detail-card">
      <h3>Weekly summary reports</h3>
      <p>These summaries are built from the parent’s saved daily check-ins so supervisors can see progress week by week.</p>
      ${weeklyReports
        .map(
          (week) => `
            <div class="tracker-entry">
              <strong>${week.weekLabel}</strong>
              <p><strong>Daily check-ins saved:</strong> ${week.entryCount}</p>
              <p><strong>Sessions touched:</strong> ${escapeHtml(week.sessions.slice(0, 4).join(", ") || "None yet")}</p>
              <p><strong>What was learned:</strong> ${escapeHtml(week.learned.slice(0, 2).join(" | ") || "No weekly learning notes yet")}</p>
              <p><strong>Observed strengths:</strong> ${escapeHtml(week.strengths.slice(0, 2).join(" | ") || "No strengths recorded yet")}</p>
              <p><strong>Next focus:</strong> ${escapeHtml(week.nextFocus.slice(0, 2).join(" | ") || "No next-focus notes yet")}</p>
            </div>
          `
        )
        .join("")}
    </section>

    <section class="detail-card">
      <h3>What CPS will care about most</h3>
      ${bulletList([
        "Whether the parent is actually engaging with the assigned track on a daily basis.",
        "Whether progress is being documented in a way that can be reviewed later.",
        "Whether the parent is using calmer structure, positive reinforcement, and safer follow-through.",
        "Whether the assigned track matches the referral reason, service plan, or court expectation.",
        "Whether the parent completed the full program and earned the certificate."
      ])}
    </section>

    <section class="detail-card">
      <h3>Attendance and review snapshot</h3>
      <p><strong>Attendance entries saved:</strong> ${attendanceEntries.length}</p>
      <p><strong>Program completion:</strong> ${completedLessons.length} of ${totalLessons} sessions</p>
      <p><strong>Certificate status:</strong> ${completedLessons.length === totalLessons && totalLessons > 0 ? "Unlocked" : "Locked until all 21 days are complete"}</p>
    </section>
  `;
}

// Worksheets screen content, including printable tools and the professional packet.
function renderWorksheets() {
  if (!hasPremiumAccess()) {
    screenTitle.textContent = "Worksheets";
    appContentRoot.innerHTML = `
      ${renderPremiumUpgradeCard({
        title: "Fillable Worksheets are Premium",
        text: "Free users can explore the app and preview learning content. Upgrade to unlock fillable worksheets, workbook tools, and saved parenting forms."
      })}
      <section class="section-card">
        <a class="resource-link" href="worksheets-printable.html" target="_blank" rel="noopener noreferrer">Open Printable Worksheet Preview</a>
      </section>
    `;
    return;
  }

  const worksheets = getWorksheetEntries();
  screenTitle.textContent = "Worksheets";
  appContentRoot.innerHTML = `
    <section class="section-card">
      <h2>Fillable Worksheets</h2>
      <p>Use these worksheets right inside the app. They save on this device so parents can come back to them later.</p>
      <button class="resource-link" type="button" data-route-link="progress">Open Progress Tracker</button>
      <button class="resource-link" type="button" data-route-link="assessment">Open Pre/Post Assessment</button>
    </section>
    <section class="section-card">
      <h2>Professional Packet</h2>
      <p>These printable materials help present Rooted Parenting Network as a referral-ready, trauma-informed parent education program for juvenile courts, CPS, schools, therapy settings, and family service agencies.</p>
      <div class="hero-actions hero-actions--stacked">
        <a class="resource-link" href="rooted-parenting-court-cps-referral-packet.html" target="_blank" rel="noopener noreferrer">Court / CPS Referral Packet</a>
        <a class="resource-link" href="rooted-parenting-release-of-information.html" target="_blank" rel="noopener noreferrer">Release of Information</a>
        <a class="resource-link" href="rooted-parenting-court-order-language.html" target="_blank" rel="noopener noreferrer">Sample Court Order Language</a>
        <a class="resource-link" href="rooted-parenting-program-manual.html" target="_blank" rel="noopener noreferrer">Program Manual</a>
        <a class="resource-link" href="rooted-parenting-pre-post-assessment.html">Pre/Post Parenting Assessment</a>
        <button class="resource-link" type="button" data-route-link="report">Attendance and Progress Report</button>
        <a class="resource-link" href="rooted-parenting-completion-certificate.html" target="_blank" rel="noopener noreferrer">Completion Certificate Template</a>
      </div>
    </section>
    <section class="detail-card">
      <h3>Behavior Reflection Log</h3>
      <p>Notice what happened, what your child may have needed, and what helped.</p>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>What happened right before the behavior?</span>
          <textarea id="ws-behavior-trigger" rows="3">${escapeHtml(worksheets.behavior_reflection_log.trigger || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>What might your child have needed?</span>
          <textarea id="ws-behavior-need" rows="3">${escapeHtml(worksheets.behavior_reflection_log.need || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>What helped or what would you try next time?</span>
          <textarea id="ws-behavior-helped" rows="3">${escapeHtml(worksheets.behavior_reflection_log.helped || "")}</textarea>
        </label>
      </div>
    </section>
    <section class="detail-card">
      <h3>Calm Plan Worksheet</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Early signs your child is becoming overwhelmed</span>
          <textarea id="ws-calm-signs" rows="3">${escapeHtml(worksheets.calm_plan.earlySigns || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>Calming choices that help</span>
          <textarea id="ws-calm-choices" rows="3">${escapeHtml(worksheets.calm_plan.calmingChoices || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>People who can help</span>
          <textarea id="ws-calm-people" rows="3">${escapeHtml(worksheets.calm_plan.supportPeople || "")}</textarea>
        </label>
      </div>
    </section>
    <section class="detail-card">
      <h3>School Meeting Planner</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Main concern to bring to the meeting</span>
          <textarea id="ws-school-concern" rows="3">${escapeHtml(worksheets.school_meeting_planner.concern || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>Support you want to request</span>
          <textarea id="ws-school-support" rows="3">${escapeHtml(worksheets.school_meeting_planner.supportRequest || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>Follow-up plan</span>
          <textarea id="ws-school-followup" rows="3">${escapeHtml(worksheets.school_meeting_planner.followUp || "")}</textarea>
        </label>
      </div>
    </section>
    <section class="detail-card">
      <h3>Trigger Tracker</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Pattern or trigger you are noticing</span>
          <textarea id="ws-trigger-pattern" rows="3">${escapeHtml(worksheets.trigger_tracker.pattern || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>Body signs or warning signs</span>
          <textarea id="ws-trigger-body" rows="3">${escapeHtml(worksheets.trigger_tracker.bodySigns || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>What helped</span>
          <textarea id="ws-trigger-helped" rows="3">${escapeHtml(worksheets.trigger_tracker.whatHelped || "")}</textarea>
        </label>
      </div>
    </section>
    <section class="detail-card">
      <h3>Parent Self-Regulation Plan</h3>
      <div class="tracker-form">
        <label class="tracker-field">
          <span>Your warning signs</span>
          <textarea id="ws-parent-warning" rows="3">${escapeHtml(worksheets.parent_self_regulation_plan.warningSigns || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>Grounding tool you want to use</span>
          <textarea id="ws-parent-grounding" rows="3">${escapeHtml(worksheets.parent_self_regulation_plan.groundingTool || "")}</textarea>
        </label>
        <label class="tracker-field">
          <span>Your reset plan</span>
          <textarea id="ws-parent-reset" rows="3">${escapeHtml(worksheets.parent_self_regulation_plan.resetPlan || "")}</textarea>
        </label>
      </div>
      <div class="hero-actions hero-actions--stacked">
        <button class="primary-button" type="button" data-save-worksheets="true">Save Worksheets</button>
      </div>
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
    case "checkin":
      renderCheckIn();
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
    case "support":
      if (slug) {
        renderSupportToolDetail(slug);
      } else {
        renderTools();
      }
      break;
    case "assessment":
      renderAssessment();
      break;
    case "progress":
      renderProgressTracker();
      break;
    case "goals":
      renderGoals();
      break;
    case "child-profile":
      renderChildProfile();
      break;
    case "professional":
      renderProfessionalDashboard();
      break;
    case "admin":
      renderAdminDashboard();
      break;
    case "reflection":
      renderParentReflection();
      break;
    case "resources":
      renderResources();
      break;
    case "notes":
      renderNotesRecommendations();
      break;
    case "notifications":
      renderNotifications();
      break;
    case "settings":
      renderSettings();
      break;
    case "care-plan":
      renderCarePlan();
      break;
    case "report":
      renderAttendanceProgressReport();
      break;
    case "teacher":
      renderTeacher();
      break;
    case "team":
      renderTeam();
      break;
    case "supervisor":
      renderSupervisorPortal();
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

  renderAppNotice();
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

function renderTeacher() {
  screenTitle.textContent = "Teacher";
  appContentRoot.innerHTML = `
    <section class="hero">
      <h2>Teacher support and training</h2>
      <p>This tab gives teachers the same practical help tools as parents, along with trauma-informed classroom training for responding to children with trauma history, behavior concerns, and cross-system needs.</p>
      <div class="pill-row">
        <span class="pill">Trauma-informed</span>
        <span class="pill">Classroom ready</span>
        <span class="pill">Behavior support</span>
        <span class="pill">Cross-system care</span>
      </div>
    </section>

    <section class="section-card">
      <h2>Same practical help</h2>
      <p>Teachers can use the same response tools parents use so children experience calmer, more predictable support across home, school, and services.</p>
      <div class="hero-actions hero-actions--stacked">
        <button class="button-card" type="button" data-route-link="support">
          <strong>Real-Time Help</strong>
          <span>Use calm steps during refusal, yelling, shutdown, aggression, or anxiety.</span>
        </button>
        <button class="button-card" type="button" data-route-link="checkin">
          <strong>Teacher Check-In</strong>
          <span>Log classroom patterns, triggers, responses, and small wins.</span>
        </button>
        <button class="button-card" type="button" data-route-link="learning">
          <strong>Lessons</strong>
          <span>Open the same trauma-informed lessons used across the app.</span>
        </button>
        <button class="button-card" type="button" data-route-link="school">
          <strong>School Support</strong>
          <span>See school planning, meeting prep, and practical classroom supports.</span>
        </button>
      </div>
    </section>

    <section class="section-card">
      <h2>Teacher training lessons</h2>
      <div class="hero-actions hero-actions--stacked">
        <button class="button-card" type="button" data-learning="trauma-informed-classroom-responses">
          <strong>Trauma-Informed Classroom Responses</strong>
          <span>Learn how to respond without shame, public escalation, or power struggles.</span>
        </button>
        <button class="button-card" type="button" data-learning="de-escalation-at-school">
          <strong>De-Escalation in School</strong>
          <span>Use calmer steps when behavior starts rising in the classroom.</span>
        </button>
        <button class="button-card" type="button" data-learning="trauma-and-adhd-signals">
          <strong>Trauma and ADHD Signals</strong>
          <span>Understand overlap in attention, stress responses, impulsivity, and regulation.</span>
        </button>
      </div>
    </section>

    <section class="section-card">
      <h2>Shared child support plan</h2>
      <p>Teachers can open the same child support plan used by parents and providers so classroom responses stay aligned with the child's needs and regulation supports.</p>
      <div class="hero-actions hero-actions--stacked">
        <button class="button-card" type="button" data-route-link="care-plan">
          <strong>Open Child Support Plan</strong>
          <span>See triggers, warning signs, calming supports, and shared team commitments.</span>
        </button>
      </div>
    </section>

    <section class="detail-stack">
      ${teacherTrainingTopics
        .map(
          (topic) => `
            <section class="detail-card">
              <h3>${topic.title}</h3>
              ${bulletList(topic.points)}
            </section>
          `
        )
        .join("")}
    </section>

    <section class="section-card">
      <h2>Teacher response patterns</h2>
      ${bulletList([
        "Connect before correcting whenever possible.",
        "Give one direction at a time and reduce extra language.",
        "Offer regulated choices instead of escalating a power struggle.",
        "Use private support and repair more than public correction.",
        "Coordinate across home, school, therapy, CPS, and court systems with the same trauma-informed language."
      ])}
    </section>

    <section class="section-card">
      <h2>When trauma and ADHD overlap</h2>
      ${bulletList([
        "Break work into smaller steps with visual support.",
        "Use movement breaks and calm reset options before behavior becomes bigger.",
        "Check whether the child missed the direction because of overload, distraction, or stress.",
        "Teach replacement skills directly and repeat them often.",
        "Notice effort, recovery, and re-entry, not only mistakes."
      ])}
    </section>

    <section class="section-card">
      <h2>Training focus</h2>
      ${bulletList([
        "How trauma changes behavior, attention, memory, and flexibility in the classroom.",
        "How to respond to children with trauma history without shame, power struggles, or public escalation.",
        "How trauma-informed adult regulation helps children return to safety and learning faster.",
        "How to use shared response patterns so parents, teachers, and providers are not working against each other."
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
    progress: "progress",
    report: "progress",
    goals: "goals",
    "child-profile": "home",
    professional: "team",
    admin: "team",
    reflection: "checkin",
    resources: "support",
    notes: "team",
    notifications: "home",
    settings: "home",
    "care-plan": "support",
    supervisor: "team",
    support: "support",
    checkin: "checkin",
    teacher: "teacher",
    team: "team",
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

  const quizButton = event.target.closest("[data-check-quiz]");
  if (quizButton) {
    checkLessonQuiz(quizButton.dataset.checkQuiz);
    return;
  }

  const supportToolButton = event.target.closest("[data-support-tool]");
  if (supportToolButton) {
    setRoute(`support/${supportToolButton.dataset.supportTool}`);
    return;
  }

  const permissionButton = event.target.closest("[data-select-team-permission]");
  if (permissionButton) {
    const team = getTeamSettings();
    saveTeamSettings({
      ...team,
      selectedPermission: permissionButton.dataset.selectTeamPermission
    });
    renderRoute();
    return;
  }

  const checkInButton = event.target.closest("[data-save-checkin]");
  if (checkInButton) {
    const positiveMoment = document.getElementById("checkin-positive-moment")?.value.trim() || "";
    saveDailyHabitEntry({
      date: new Date().toISOString().slice(0, 10),
      overall: document.getElementById("checkin-overall")?.value || "mixed",
      behaviors: getCheckedValues("checkin-behaviors"),
      triggers: getCheckedValues("checkin-triggers"),
      responses: getCheckedValues("checkin-responses"),
      childResponse: getCheckedValues("checkin-child-response"),
      positiveMoment
    });
    setAppNotice("Parent check-in saved.");
    renderRoute();
    return;
  }

  const teacherCheckInButton = event.target.closest("[data-save-teacher-checkin]");
  if (teacherCheckInButton) {
    const positiveMoment = document.getElementById("teacher-checkin-positive-moment")?.value.trim() || "";
    const supportThatHelped = document.getElementById("teacher-checkin-support")?.value.trim() || "";
    saveTeacherCheckInEntry({
      date: new Date().toISOString().slice(0, 10),
      overall: document.getElementById("teacher-checkin-overall")?.value || "mixed",
      behaviors: getCheckedValues("teacher-checkin-behaviors"),
      triggers: getCheckedValues("teacher-checkin-triggers"),
      responses: getCheckedValues("teacher-checkin-responses"),
      studentResponse: getCheckedValues("teacher-checkin-student-response"),
      supportThatHelped,
      positiveMoment
    });
    setAppNotice("Teacher check-in saved.");
    renderRoute();
    return;
  }

  const saveGoalsButton = event.target.closest("[data-save-goals]");
  if (saveGoalsButton) {
    const nextGoals = defaultGoals.map((goal, index) => ({
      id: goal.id,
      title: document.getElementById(`goal-title-${index}`)?.value.trim() || goal.title,
      progress: Math.max(0, Math.min(100, Number(document.getElementById(`goal-progress-${index}`)?.value || goal.progress))),
      parentNote: document.getElementById(`goal-parent-note-${index}`)?.value.trim() || "",
      providerNote: document.getElementById(`goal-provider-note-${index}`)?.value.trim() || ""
    }));
    saveSharedGoals(nextGoals);
    setAppNotice("Shared goals updated.");
    renderRoute();
    return;
  }

  const saveChildProfileButton = event.target.closest("[data-save-child-profile]");
  if (saveChildProfileButton) {
    const currentProfile = getClientProfile();
    saveClientProfile({
      ...currentProfile,
      clientName: document.getElementById("child-profile-name")?.value.trim() || "",
      caregiverName: document.getElementById("child-profile-caregiver")?.value.trim() || "",
      strengths: document.getElementById("child-profile-strengths")?.value.trim() || "",
      currentConcerns: document.getElementById("child-profile-concerns")?.value.trim() || "",
      triggers: document.getElementById("child-profile-triggers")?.value.trim() || "",
      copingTools: document.getElementById("child-profile-coping")?.value.trim() || "",
      behaviorPatterns: document.getElementById("child-profile-patterns")?.value.trim() || "",
      schoolNotes: document.getElementById("child-profile-school")?.value.trim() || "",
      careTeamMembers: document.getElementById("child-profile-team")?.value.trim() || ""
    });
    setAppNotice("Child profile saved.");
    renderRoute();
    return;
  }

  const saveParentReflectionButton = event.target.closest("[data-save-parent-reflection]");
  if (saveParentReflectionButton) {
    saveParentReflection({
      responseToday: document.getElementById("reflection-response-today")?.value.trim() || "",
      didWell: document.getElementById("reflection-did-well")?.value.trim() || "",
      doDifferently: document.getElementById("reflection-do-differently")?.value.trim() || "",
      supportNeeded: document.getElementById("reflection-support-needed")?.value.trim() || "",
      lessonFit: document.getElementById("reflection-lesson-fit")?.value.trim() || ""
    });
    setAppNotice("Parent reflection saved.");
    renderRoute();
    return;
  }

  const saveProviderNoteButton = event.target.closest("[data-save-provider-note]");
  if (saveProviderNoteButton) {
    saveProviderNote({
      concern: document.getElementById("provider-note-concern")?.value.trim() || "",
      recommendation: document.getElementById("provider-note-recommendation")?.value.trim() || "",
      followUp: document.getElementById("provider-note-followup")?.value.trim() || "",
      supportIdeas: document.getElementById("provider-note-support")?.value.trim() || "",
      date: new Date().toLocaleString()
    });
    setAppNotice("Recommendation note saved.");
    renderRoute();
    return;
  }

  const saveSettingsButton = event.target.closest("[data-save-settings]");
  if (saveSettingsButton) {
    saveUserSettings({
      notificationPreference: document.getElementById("settings-notifications")?.value.trim() || "",
      privacyPreference: document.getElementById("settings-privacy")?.value.trim() || "",
      supportContact: document.getElementById("settings-support")?.value.trim() || ""
    });
    setAppNotice("Settings updated.");
    renderRoute();
    return;
  }

  const saveCarePlanButton = event.target.closest("[data-save-care-plan]");
  if (saveCarePlanButton) {
    saveCarePlan({
      strengths: document.getElementById("care-plan-strengths")?.value.trim() || defaultCarePlan.strengths,
      triggers: document.getElementById("care-plan-triggers")?.value.trim() || defaultCarePlan.triggers,
      warningSigns: document.getElementById("care-plan-warning-signs")?.value.trim() || defaultCarePlan.warningSigns,
      whatHelps: document.getElementById("care-plan-what-helps")?.value.trim() || defaultCarePlan.whatHelps,
      avoid: document.getElementById("care-plan-avoid")?.value.trim() || defaultCarePlan.avoid,
      repairPlan: document.getElementById("care-plan-repair")?.value.trim() || defaultCarePlan.repairPlan,
      teamCommitments: document.getElementById("care-plan-team")?.value.trim() || defaultCarePlan.teamCommitments,
      immediateSafety: document.getElementById("care-plan-safety")?.value.trim() || defaultCarePlan.immediateSafety
    });
    setAppNotice("Child support plan saved.");
    renderRoute();
    return;
  }

  const trackerSaveButton = event.target.closest("[data-save-parent-tracker]");
  if (trackerSaveButton) {
    const dateValue = document.getElementById("tracker-date")?.value || "";
    const taskValue = document.getElementById("tracker-task")?.value.trim() || "";
    const rewardValue = document.getElementById("tracker-reward")?.value.trim() || "";
    const consequenceValue = document.getElementById("tracker-consequence")?.value.trim() || "";
    const notesValue = document.getElementById("tracker-notes")?.value.trim() || "";

    if (!taskValue) {
      window.alert("Please enter what the child completed before saving the tracker entry.");
      return;
    }

    saveParentTrackerEntry({
      date: dateValue || new Date().toISOString().slice(0, 10),
      task: taskValue,
      reward: rewardValue,
      consequence: consequenceValue,
      notes: notesValue
    });
    setAppNotice("Reward entry saved.");
    renderRoute();
    return;
  }

  const dailyHabitButton = event.target.closest("[data-save-daily-habit]");
  if (dailyHabitButton) {
    const sessionTitle = document.getElementById("daily-session")?.value || "";
    const date = document.getElementById("daily-date")?.value || "";
    const whatHappened = document.getElementById("daily-what-happened")?.value.trim() || "";
    const connectionUsed = document.getElementById("daily-connection")?.value.trim() || "";
    const rewardUsed = document.getElementById("daily-reward")?.value.trim() || "";
    const followThrough = document.getElementById("daily-followthrough")?.value.trim() || "";
    const learned = document.getElementById("daily-learned")?.value.trim() || "";
    const tomorrowFocus = document.getElementById("daily-tomorrow")?.value.trim() || "";

    if (!whatHappened) {
      window.alert("Please enter what happened today before saving the daily check-in.");
      return;
    }

    saveDailyHabitEntry({
      sessionTitle,
      date: date || new Date().toISOString().slice(0, 10),
      whatHappened,
      connectionUsed,
      rewardUsed,
      followThrough,
      learned,
      tomorrowFocus
    });
    setAppNotice("21-day daily check-in saved.");
    renderRoute();
    return;
  }

  const assessmentButton = event.target.closest("[data-save-assessment]");
  if (assessmentButton) {
    const ratings = {};
    for (let i = 0; i < 10; i += 1) {
      ratings[i] = document.getElementById(`assessment-rating-${i}`)?.value || "";
    }

    saveAssessmentData({
      type: document.getElementById("assessment-type")?.value || "Pre-assessment",
      ratings,
      strengths: document.getElementById("assessment-strengths")?.value.trim() || "",
      growthArea: document.getElementById("assessment-growth")?.value.trim() || "",
      familyChange: document.getElementById("assessment-change")?.value.trim() || ""
    });
    setAppNotice("Assessment saved.");
    renderRoute();
    return;
  }

  const worksheetsButton = event.target.closest("[data-save-worksheets]");
  if (worksheetsButton) {
    saveWorksheetEntries({
      behavior_reflection_log: {
        trigger: document.getElementById("ws-behavior-trigger")?.value.trim() || "",
        need: document.getElementById("ws-behavior-need")?.value.trim() || "",
        helped: document.getElementById("ws-behavior-helped")?.value.trim() || ""
      },
      calm_plan: {
        earlySigns: document.getElementById("ws-calm-signs")?.value.trim() || "",
        calmingChoices: document.getElementById("ws-calm-choices")?.value.trim() || "",
        supportPeople: document.getElementById("ws-calm-people")?.value.trim() || ""
      },
      school_meeting_planner: {
        concern: document.getElementById("ws-school-concern")?.value.trim() || "",
        supportRequest: document.getElementById("ws-school-support")?.value.trim() || "",
        followUp: document.getElementById("ws-school-followup")?.value.trim() || ""
      },
      trigger_tracker: {
        pattern: document.getElementById("ws-trigger-pattern")?.value.trim() || "",
        bodySigns: document.getElementById("ws-trigger-body")?.value.trim() || "",
        whatHelped: document.getElementById("ws-trigger-helped")?.value.trim() || ""
      },
      parent_self_regulation_plan: {
        warningSigns: document.getElementById("ws-parent-warning")?.value.trim() || "",
        groundingTool: document.getElementById("ws-parent-grounding")?.value.trim() || "",
        resetPlan: document.getElementById("ws-parent-reset")?.value.trim() || ""
      }
    });
    setAppNotice("Worksheet answers saved.");
    renderRoute();
    return;
  }

  const clientProfileButton = event.target.closest("[data-save-client-profile]");
  if (clientProfileButton) {
    const currentProfile = getClientProfile();
    const clientName = document.getElementById("client-name")?.value.trim() || "";
    const caregiverName = document.getElementById("caregiver-name")?.value.trim() || "";
    const caseNote = document.getElementById("case-note")?.value.trim() || "";
    const assignedCourse = document.getElementById("assigned-course")?.value || "";
    const children = Array.from(document.querySelectorAll(".child-name-input"))
      .map((input) => input.value.trim())
      .filter(Boolean);

    saveClientProfile({
      ...currentProfile,
      clientName,
      caregiverName,
      caseNote,
      assignedCourse,
      children: children.length ? children : [clientName].filter(Boolean)
    });
    setAppNotice("Client profile saved.");
    renderRoute();
    return;
  }

  const addChildButton = event.target.closest("[data-add-child-profile]");
  if (addChildButton) {
    const currentProfile = getClientProfile();
    const clientName = document.getElementById("client-name")?.value.trim() || "";
    const caregiverName = document.getElementById("caregiver-name")?.value.trim() || "";
    const caseNote = document.getElementById("case-note")?.value.trim() || "";
    const children = Array.from(document.querySelectorAll(".child-name-input"))
      .map((input) => input.value.trim());

    saveClientProfile({
      ...currentProfile,
      clientName,
      caregiverName,
      caseNote,
      assignedCourse: document.getElementById("assigned-course")?.value || "",
      children: [...children, ""]
    });
    renderRoute();
    return;
  }

  const assignCourseButton = event.target.closest("[data-assign-course]");
  if (assignCourseButton) {
    const currentProfile = getClientProfile();
    saveClientProfile({
      ...currentProfile,
      assignedCourse: assignCourseButton.dataset.assignCourse
    });
    setRoute("supervisor");
    return;
  }

  const redeemAccessCodeButton = event.target.closest("[data-redeem-access-code]");
  if (redeemAccessCodeButton) {
    const codeValue = document.getElementById("access-code-input")?.value || "";
    redeemAccessCode(codeValue);
    renderRoute();
    return;
  }

  const supervisorProfileButton = event.target.closest("[data-save-supervisor-profile]");
  if (supervisorProfileButton) {
    saveSupervisorPortalData({
      supervisorName: document.getElementById("supervisor-name")?.value.trim() || "",
      agencyName: document.getElementById("agency-name")?.value.trim() || "",
      accessNote: document.getElementById("supervisor-access-note")?.value.trim() || ""
    });
    renderRoute();
    return;
  }

  const teamSettingsButton = event.target.closest("[data-save-team-settings]");
  if (teamSettingsButton) {
    const team = getTeamSettings();
    const permission = team.selectedPermission || "view progress only";
    const inviteEmail = document.getElementById("team-invite-email")?.value.trim() || "";
    const inviteCode = document.getElementById("team-invite-code")?.value.trim() || "";
    const teamMessage = document.getElementById("team-message");
    if (!inviteEmail) {
      if (teamMessage) {
        teamMessage.innerHTML = "<p>Enter an email or contact before inviting a member.</p>";
      }
      return;
    }
    const nextMembers = inviteEmail
      ? [...team.members, { role: inviteEmail, permission }]
      : team.members;
    saveTeamSettings({
      inviteEmail,
      inviteCode,
      selectedPermission: permission,
      members: nextMembers
    });
    if (teamMessage) {
      teamMessage.innerHTML = `<p>Added ${escapeHtml(inviteEmail)} with ${escapeHtml(permission)}.</p>`;
    }
    setAppNotice("Team settings updated.");
    renderRoute();
    return;
  }

  const attendanceButton = event.target.closest("[data-save-attendance]");
  if (attendanceButton) {
    const sessionTitle = document.getElementById("attendance-session")?.value.trim() || "";
    const date = document.getElementById("attendance-date")?.value || "";
    const status = document.getElementById("attendance-status")?.value || "Present";
    const learned = document.getElementById("attendance-learned")?.value.trim() || "";
    const notes = document.getElementById("attendance-notes")?.value.trim() || "";

    if (!sessionTitle) {
      window.alert("Please enter the session or course title before saving attendance.");
      return;
    }

    saveAttendanceEntry({
      sessionTitle,
      date: date || new Date().toISOString().slice(0, 10),
      status,
      learned,
      notes
    });
    setAppNotice("Attendance and progress entry saved.");
    renderRoute();
    return;
  }

  const disciplineButton = event.target.closest("[data-save-discipline]");
  if (disciplineButton) {
    const type = document.getElementById("discipline-type")?.value.trim() || "";
    const date = document.getElementById("discipline-date")?.value || "";
    const reason = document.getElementById("discipline-reason")?.value.trim() || "";
    const reaction = document.getElementById("discipline-reaction")?.value.trim() || "";
    const followup = document.getElementById("discipline-followup")?.value.trim() || "";

    if (!type) {
      window.alert("Please enter the discipline or consequence used before saving.");
      return;
    }

    saveDisciplineEntry({
      date: date || new Date().toISOString().slice(0, 10),
      type,
      reason,
      reaction,
      followup
    });
    setAppNotice("Discipline entry saved.");
    renderRoute();
    return;
  }

  const printProgressButton = event.target.closest("[data-print-progress]");
  if (printProgressButton) {
    window.print();
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
    const selectedRole = document.querySelector('input[name="account-role"]:checked')?.value || roleOptions[0];
    const inviteCode = document.getElementById("invite-code-input")?.value.trim() || "";
    saveAccountProfile({
      role: selectedRole,
      inviteCode
    });
    completeOnboarding();
    setAppNotice("Account setup saved.");
    setRoute("home");
  }
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setRoute(button.dataset.route);
  });
});

topAction.addEventListener("click", () => {
  setRoute("support");
});

window.addEventListener("hashchange", renderRoute);
window.addEventListener("focus", async () => {
  await loadHomeFamilySchedule();
  renderRoute();
});

async function loadAppContent() {
  applyAccessFromQuery();

  try {
    await loadHomeFamilySchedule();
    const response = await fetch("parenting-support-app-content.json");
    if (!response.ok) {
      throw new Error(`Unable to load content: ${response.status}`);
    }

    const json = await response.json();
    appContent = {
      appTitle: "Rooted Parenting Network",
      intro:
        "This app helps parents respond to children with behavioral challenges using trauma-informed, non-judgmental, supportive guidance.",
      learningPages: fallbackContent.learningPages,
      learningPath: build21DayLearningPath(coreLearningPathTemplates),
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
    await loadHomeFamilySchedule();
    appContent = fallbackContent;
  }

  renderRoute();
}

loadAppContent();
