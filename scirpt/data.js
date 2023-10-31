const questions = [
    {
      question: 'When faced with a problem, I tend to:',
      a: 'Analyze it logically',
      b: 'Rely on my intuition',
      c: 'Seek advice from others',
      d: 'Avoid dealing with it'
    },
    {
      question: 'In social situations, I am more likely to be:',
      a: 'Outgoing and talkative',
      b: 'Reserved and introverted',
      c: 'Observant and analytical',
      d: 'Friendly and adaptable'
    },
    {
      question: 'When making a decision, I tend to rely on:',
      a: 'Facts and data',
      b: 'My feelings and instincts',
      c: 'Consult with others',
      d: 'Procrastinate and delay'
    },
    {
      question: 'I am more comfortable when:',
      a: 'Things are well-organized',
      b: 'I can go with the flow',
      c: 'There\'s a clear plan',
      d: 'I\'m not tied down by a schedule'
    },
    {
      question: 'I prefer to work:',
      a: 'Independently',
      b: 'Collaboratively with others',
      c: 'In a leadership role',
      d: 'With minimal supervision'
    },
    {
      question: 'I am more motivated by:',
      a: 'Achieving personal success',
      b: 'Building strong relationships',
      c: 'Helping others',
      d: 'Having a good time'
    },
    {
      question: 'My ideal weekend would involve:',
      a: 'A well-structured plan',
      b: 'Spontaneous adventures',
      c: 'Learning something new',
      d: 'Relaxing and doing nothing'
    },
    {
      question: 'I am more inclined to:',
      a: 'Stick to a routine',
      b: 'Be flexible and adaptable',
      c: 'Question the status quo',
      d: 'Seek novelty and excitement'
    },
    {
      question: 'I value:',
      a: 'Rationality and logic',
      b: 'Empathy and understanding',
      c: 'Creativity and innovation',
      d: 'Freedom and independence'
    },
    {
      question: 'When facing a challenge, I tend to:',
      a: 'Persist until I find a solution',
      b: 'Seek help from others',
      c: 'Look for alternative approaches',
      d: 'Avoid the challenge'
    },
    {
      question: 'I find it easier to:',
      a: 'Keep my emotions in check',
      b: 'Express my emotions openly',
      c: 'Analyze and understand my emotions',
      d: 'Mask my emotions'
    },
    {
      question: 'In a conflict, I am more likely to:',
      a: 'Seek compromise and find a middle ground',
      b: 'Stand my ground and defend my position',
      c: 'Try to understand the other person\'s perspective',
      d: 'Avoid conflict altogether'
    },
    {
      question: 'I enjoy activities that:',
      a: 'Require careful planning and organization',
      b: 'Allow for spontaneity and creativity',
      c: 'Involve intellectual challenges',
      d: 'Are physically adventurous'
    },
    {
      question: 'My friends would describe me as:',
      a: 'Reliable and responsible',
      b: 'Fun-loving and adventurous',
      c: 'Thoughtful and considerate',
      d: 'Carefree and unpredictable'
    },
    {
      question: 'I am more drawn to:',
      a: 'Intellectual pursuits and knowledge',
      b: 'Artistic and creative endeavors',
      c: 'Helping others and making a difference',
      d: 'Thrill-seeking and excitement'
    },
    {
      question: 'When meeting new people, I am:',
      a: 'Observant and cautious',
      b: 'Open and friendly',
      c: 'Analytical and inquisitive',
      d: 'Nonchalant and casual'
    },
    {
      question: 'My approach to time management is:',
      a: 'Structured and disciplined',
      b: 'Flexible and relaxed',
      c: 'Strategic and efficient',
      d: 'Haphazard and disorganized'
    },
    {
      question: 'I prefer a job that offers:',
      a: 'Stability and security',
      b: 'Variety and new challenges',
      c: 'Opportunities for leadership',
      d: 'Freedom and flexibility'
    },
    {
      question: 'When faced with change, I am more likely to:',
      a: 'Resist and seek stability',
      b: 'Embrace it and adapt',
      c: 'Evaluate the potential benefits',
      d: 'Not pay much attention to it'
    },
    {
      question: 'I feel most fulfilled when:',
      a: 'I have a clear plan and accomplish my goals',
      b: 'I connect with others on a deep emotional level',
      c: 'I make a positive impact on the world',
      d: 'I experience excitement and spontaneity'
    }
  ];
const response = [
    {
      main: 'Personality Type A',
      sub: 'People with this personality type tend to be analytical and logical. They prefer structure and organization, value rationality and facts, and often work independently and persistently. In social situations, they can be more introverted. They find motivation in personal success and achievement and typically approach conflicts by seeking compromise and finding common ground. They enjoy intellectual pursuits and planned activities.'
    },
    {
      main: 'Personality Type B',
      sub: 'Individuals with this personality type rely on intuition and emotions, embracing spontaneity and flexibility. They value empathy and emotional understanding, often preferring collaboration and seeking help from others. In social situations, they can be outgoing and friendly. Their motivation comes from building strong relationships and connections, and they tend to defend their position when conflicts arise. They enjoy creative and adventurous activities.'
    },
    {
      main: 'Personality Type C',
      sub: "Those with this personality type are analytical and inquisitive, frequently questioning the status quo and enjoying intellectual challenges and problem-solving. They value making a positive impact on the world and tend to approach time management strategically and efficiently. They enjoy activities that involve learning and growth, often being thoughtful and considerate in their interactions. When conflicts arise, their approach is to try to understand the other person's perspective."
    },
    {
      main: 'Personality Type D',
      sub: 'People with this personality type often avoid dealing with problems and challenges, preferring freedom and independence. In social situations, they may come across as nonchalant and casual, often lacking a clear plan or schedule. They value excitement and novelty and typically avoid conflicts altogether. They enjoy thrill-seeking and spontaneous adventures, and they may be perceived as carefree and unpredictable.'
    }
  ];