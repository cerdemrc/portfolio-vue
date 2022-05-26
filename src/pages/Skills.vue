<template>
	<div class="skills">
		<div class="skills-frontend">
			<h2 class="skills-subtitle">Development</h2>
			<label>HTML</label>
			<b-progress>
				<b-progress-bar
					:style="{ 'background-color': '#54b689' }"
					:value="95"
					show-progress
					animated
				></b-progress-bar>
			</b-progress>
			<label>CSS</label>
			<b-progress>
				<b-progress-bar
					:style="{ 'background-color': '#54b689' }"
					:value="90"
					show-progress
					animated
				></b-progress-bar>
			</b-progress>
			<label>Javascript</label>
			<b-progress>
				<b-progress-bar
					:style="{ 'background-color': '#54b689' }"
					:value="70"
					show-progress
					animated
				></b-progress-bar>
			</b-progress>
			<label>React JS</label>
			<b-progress>
				<b-progress-bar
					:style="{ 'background-color': '#54b689' }"
					:value="70"
					show-progress
					animated
				></b-progress-bar>
			</b-progress>
			<label>Vue JS</label>
			<b-progress>
				<b-progress-bar
					:style="{ 'background-color': '#54b689' }"
					:value="60"
					show-progress
					animated
				></b-progress-bar>
			</b-progress>
			<label>Next JS (Keep Learning)</label>
			<b-progress>
				<b-progress-bar
					:style="{ 'background-color': '#54b689' }"
					:value="40"
					show-progress
					animated
				></b-progress-bar>
			</b-progress>
			<label>Node JS (Keep Learning)</label>
			<b-progress>
				<b-progress-bar
					:style="{ 'background-color': '#54b689' }"
					:value="20"
					show-progress
					animated
				></b-progress-bar>
			</b-progress>
			<label>Express JS (Keep Learning)</label>
			<b-progress>
				<b-progress-bar
					:style="{ 'background-color': '#54b689' }"
					:value="20"
					show-progress
					animated
				></b-progress-bar>
			</b-progress>
		</div>
		<div class="skills-design">
			<h2 class="skills-subtitle">UI & UX Design</h2>
			<label>Figma</label>
			<b-progress>
				<b-progress-bar
					:style="{ 'background-color': '#54b689' }"
					:value="80"
					show-progress
					animated
				></b-progress-bar>
			</b-progress>
			<label>Adobe XD</label>
			<b-progress>
				<b-progress-bar
					:style="{ 'background-color': '#54b689' }"
					:value="75"
					show-progress
					animated
				></b-progress-bar>
			</b-progress>
			<label>Zeplin</label>
			<b-progress>
				<b-progress-bar
					:style="{ 'background-color': '#54b689' }"
					:value="70"
					show-progress
					animated
				></b-progress-bar>
			</b-progress>
		</div>
		<div class="skills-tools">
			<h2 class="skills-subtitle">TOOLS</h2>
			<div class="skills-tools-content">
				<h6>NPM&Yarn</h6>
				<h6>Webpack</h6>
				<h6>Tailwind</h6>
				<h6>Git</h6>
				<h6>VS Code</h6>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Skills',
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/skills.scss';
</style>
