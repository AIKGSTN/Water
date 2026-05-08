#version 330

// Input Variables (received from Vertex Shader)
in vec4 color;
in vec4 position;
in vec3 normal;
in vec2 texCoord0;

// uniform vec3 fogColor = vec3(0.2f, 0.22f, 0.02f); 
uniform vec3 fogColor; 
in float fogFactor; 

// Output Variable (sent down through the Pipeline)
out vec4 outColor;

uniform sampler2D textureBed;
uniform sampler2D textureShore;

in float waterDepth;

void main(void) 
{
	float isAboveWater = clamp(-waterDepth, 0, 1);
	outColor *= mix(texture(textureBed, texCoord0), texture(textureShore, texCoord0), isAboveWater);
	
	
	
	outColor = color;
	outColor = mix(vec4(fogColor, 1), outColor, fogFactor);
}
